from rest_framework_json_api.relations import ResourceRelatedField
from rest_framework_json_api.serializers import HyperlinkedModelSerializer
from rest_framework.serializers import ModelSerializer


from api.models import Company, Advocate, Links
from backend.utils.profile_image_gen import generate_profile_image

class LinksSerializer(ModelSerializer):
    class Meta:
        model = Links
        fields = Links._fields.copy() + ['advocate']
        extra_kwargs = {'advocate': {'write_only': True}}


class CompanySerializer(HyperlinkedModelSerializer):
    
    advocates = ResourceRelatedField(
        model=Advocate,
        queryset=Advocate.objects,
        self_link_view_name='company-relationships',
        related_link_view_name='company-related',
        many=True,
        required=False,
    )
    
    related_serializers = {
        'advocates': 'api.serializers.AdvocateSerializer'
    }
    
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        
        if not data.get('logo'):
            data['logo'] = generate_profile_image(data['name'])
        
        return data

    class Meta:
        model = Company
        fields = ('name', 'logo', 'summary', 'advocates', 'url')



class AdvocateSerializer(HyperlinkedModelSerializer):
    company = ResourceRelatedField(
        model=Company,
        queryset=Company.objects,
        self_link_view_name='advocate-relationships',
        related_link_view_name='advocate-related',
        required=False,
    )
    
    links = LinksSerializer(required=False)

    related_serializers = {
        'company': 'api.serializers.CompanySerializer'
    }

    def update(self, instance, validated_data):
        
        data = validated_data.pop('links')
        data['advocate'] = instance.id
        
        if instance.links:
            for atr in Links._fields:
                if data.get(atr):
                    setattr(instance.links, atr, data[atr])
                elif data.get(atr) == "":
                    setattr(instance.links, atr, None)
                
                instance.links.save()
        else:
            links = LinksSerializer(data=data)
            links.is_valid(raise_exception=True)
            links.save()

            instance.links = links.instance
        
        return super().update(instance, validated_data)

    class Meta:
        model = Advocate
        fields = ('name', 'profile_image', 'short_bio', 'long_bio', 'advocate_years_exp', 'company', 'links', 'url')

<article>

    <Card class="advocate-card">
        <Content class="flex-content">
            <img class="profile-pic" src={advocate.profile_pic.toString()} alt={advocate.name} />
            <div style="display: block;">
                <p class="mdc-typography--subtitle1 name" style="margin-bottom: 0;">{advocate.name}</p>
                {#if advocate.twitter}
                    <Link
                        href={advocate.twitter.toString()}
                        targetBlank
                    >
                        @{advocate.username}
                    </Link>
                {/if}
            </div>
        </Content>

        <PrimaryAction>
            <Button href={`advocates/${advocate.username}`}>
                <Label class="mdc-typography--button" >See more...</Label>
            </Button>
        </PrimaryAction>
    </Card>

</article>


<script lang="ts">
    import type IAdvocate from '$lib/shared/interfaces/Advocate';
    
    import Card, { PrimaryAction, Content } from '@smui/card';
    import Button, { Label } from '@smui/button';
    import Link from './Link.svelte';

    export let advocate: IAdvocate;

</script>


<style lang="scss">

    :global(.advocate-card) {
        overflow: hidden;
        
        :global(.flex-content) {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 50px;
        }

        .name {
            white-space: nowrap;
        }

        .profile-pic {
            width: 50px;
            height: fit-content;
            border-radius: 50%;
            padding: 5px;
        }
    }

</style>

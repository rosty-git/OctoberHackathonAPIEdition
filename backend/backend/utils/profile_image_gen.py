from urllib.parse import quote


BASE_URL = 'https://ui-avatars.com/api/'
QUERY_PARAMETERS = '?name={name}&length={length}&background=0D8ABC&color=fff&rounded=true'


def generate_profile_image(full_name: str):
    """Generates profile image using api service.

    Args:
        full_name (str): Full name. Initials will be displayed of image.

    Returns:
        str: Return url to generated profile image.
    """
    return BASE_URL + quote(QUERY_PARAMETERS.format(name=full_name, length=len(full_name.split())), safe="")

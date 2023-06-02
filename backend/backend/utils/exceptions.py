class UnconfiguredEnvironment(Exception):
    """Unconfigured environment variable exception."""
    
    def __init__(self, env_key: str, *args: object) -> None:
        message = f'Unconfigured environment variable \'{env_key}\''
        
        super().__init__(message, *args)
    
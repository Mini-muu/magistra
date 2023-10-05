from hashing.hash import hash_string
import datetime

def generate_temp_id(starting_string: str):
    visible = f'{starting_string}{datetime.datetime.now()}'
    hashed = hash_string(visible)
    return hashed
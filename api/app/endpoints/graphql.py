from fastapi import APIRouter, Depends, HTTPException, Body
from sqlalchemy.orm import Session
from database.db import *
from database.models import User
from cache.redis_client import RedisClient, get_redis_client
from hashing.hash import hash_string
from utils.generate_temp_id import generate_temp_id
from pydantic import BaseModel

router = APIRouter()

class RequestPayload(BaseModel):
    graphql_query: str
    auth_code: str

class Graphql_Response(BaseModel):
    response: str
    session_id: str
    

@router.get("/graphql")
async def graphql_endpoint(payload: RequestPayload = Body(...), db: Session = Depends(get_db), redis_client: RedisClient = Depends(get_redis_client)) -> Graphql_Response:
    # check session code
    user_id = redis_client.get_value(payload.auth_code)
    if not user_id:
        raise HTTPException(status_code=401, detail='Unauthorized')
    # check user
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=401, detail="Invalid user")
    # check session code expiration and renew if necessary (3600 seconds = 1 hour)
    expiration = redis_client.get_expiration(payload.auth_code)
    new_session_id = None
    if expiration < 3600:
        # create new code
        new_session_id = generate_temp_id(username)
        redis_client.set_value(new_session_id, user_id)
        
    
    response = {
        'response': {},
        'session_id': new_session_id
    }
    return response

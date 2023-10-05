from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.db import *
from database.models import User
from cache.redis_client import RedisClient
from hashing.hash import hash_string
from utils.generate_temp_id import generate_temp_id

router = APIRouter()

@router.get("/register")
async def create_user(username:str, email:str, password:str, db: Session = Depends(get_db)):
    redis_client = RedisClient()
    password_hashed = hash_string(password)
    user = User(username=username, email=email, password=password_hashed)
    db.add(user)
    db.commit()
    db.refresh(user)
    user_id = user.id
    session_id = generate_temp_id(username)
    redis_client.set_value(user_id, session_id)
    return session_id

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database.db import *
from database.models import User
from cache.redis_client import RedisClient, get_redis_client
from hashing.hash import hash_string
from utils.generate_temp_id import generate_temp_id

router = APIRouter()

@router.get("/register")
async def create_user(username:str, email:str, password:str, db: Session = Depends(get_db), redis_client: RedisClient = Depends(get_redis_client)):
    # check if user already exist
    if db.query(User).filter(User.username == username).first() or db.query(User).filter(User.email == email).first():
        raise HTTPException(status_code=400, detail="User already exists")
    try:
        # hash the password and create the user
        password_hashed = hash_string(password)
        user = User(username=username, email=email, password=password_hashed)
        db.add(user)
        db.commit()
        db.refresh(user)
        user_id = user.id
        # generate temp session id, save to cache and save it
        session_id = generate_temp_id(username)
        redis_client.set_value(session_id, user_id)
        return session_id
    except Exception as e:
        # Log the exception for debugging purposes
        print(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database.db import *
from database.models import User
from cache.redis_client import RedisClient
from hashing.hash import hash_string
from utils.generate_temp_id import generate_temp_id

router = APIRouter()

@router.post("/login")
async def login_user(username: str, password: str, db: Session = Depends(get_db)):
    # Retrieve the user from the database
    user = db.query(User).filter(User.username == username).first()

    if not user:
        raise HTTPException(status_code=401, detail="Invalid username or password")

    # Check if the provided password matches the hashed password in the database
    if not hash_string(password) == user.password:
        raise HTTPException(status_code=401, detail="Invalid username or password")

    try:
        # Generate temp session id, save to cache and return it
        redis_client = RedisClient()
        session_id = generate_temp_id(username)
        redis_client.set_value(session_id, user.id)
        return session_id
    except Exception as e:
        # Log the exception for debugging purposes
        print(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

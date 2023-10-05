from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.db import *
from database.models import User
from cache.redis_client import RedisClient
from hashing.hash import hash_string
from utils.generate_temp_id import generate_temp_id

router = APIRouter()

@router.get("/login")
async def login(username:str, email:str, password:str, db: Session = Depends(get_db)):
    return {'test': 'ok'}
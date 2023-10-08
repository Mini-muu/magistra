from fastapi import APIRouter, HTTPException, Response
from cache.redis_client import RedisClient

router = APIRouter()


@router.post("/logout")
async def login_user(session_id: str):
    try:
        redis_client = RedisClient()
        redis_client.delete_key(session_id)
        return Response(content="Logged out", status_code=200)
    except Exception as e:
        # Log the exception for debugging purposes
        print(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
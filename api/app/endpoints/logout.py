from fastapi import APIRouter, HTTPException, Response, Depends
from cache.redis_client import RedisClient, get_redis_client

router = APIRouter()


@router.post("/logout")
async def logout_user(session_id: str, redis_client: RedisClient = Depends(get_redis_client)):
    try:
        redis_client.delete_key(session_id)
        return Response(status_code=200, detail="Logged out")
    except Exception as e:
        # Log the exception for debugging purposes
        print(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
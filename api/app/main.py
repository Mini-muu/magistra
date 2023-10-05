from fastapi import FastAPI, HTTPException
from endpoints import test, register, login
from database.db import engine, SessionLocal, get_db

app = FastAPI()

app.include_router(test.router)
app.include_router(register.router)
app.include_router(login.router)

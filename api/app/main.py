from fastapi import FastAPI
from endpoints import test, register, login

app = FastAPI()

app.include_router(test.router)
app.include_router(register.router)
app.include_router(login.router)

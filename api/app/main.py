from fastapi import FastAPI
from endpoints import test, register, login, logout

app = FastAPI()

app.include_router(test.router)
app.include_router(register.router)
app.include_router(login.router)
app.include_router(logout.router)

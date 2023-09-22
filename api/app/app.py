from fastapi import FastAPI, HTTPException

app = FastAPI()

@app.get('/test')
def test():
    return {'result': 'ok'}
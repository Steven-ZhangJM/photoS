from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from model import analyze_image
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for simplicity; restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/upload/")
async def upload_image(file: UploadFile = File(...)):
    contents = await file.read()
    print("File received:", file.filename)
    score = analyze_image(contents)
    return JSONResponse(content={"score": score})


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

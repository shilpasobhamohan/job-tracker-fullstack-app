from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

applications = []

class JobApplication(BaseModel):
    company: str
    position: str
    status: str


@app.get("/")
def home():
    return {"message": "Job Tracker API Running"}


@app.get("/applications")
def get_applications():
    return applications


@app.post("/applications")
def create_application(application: JobApplication):
    applications.append(application)

    return {
        "message": "Application created",
        "data": application
    }


@app.delete("/applications/{index}")
def delete_application(index: int):
    if index < len(applications):
        applications.pop(index)

        return {
            "message": "Application deleted"
        }

    return {
        "error": "Invalid index"
    }
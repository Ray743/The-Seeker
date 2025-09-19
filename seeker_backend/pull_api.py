from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()

db_host = os.getenv("DB_HOST")
db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
db_name = os.getenv("DB_NAME")

app = FastAPI()

# CORS middleware for local development and GitHub Pages
origins = [
    "http://localhost:5173/The-Seeker/",  # Vite dev server
    "http://127.0.0.1:5173",        # For browsers that resolves localhost differently
    "https://ray743.github.io/The-Seeker/",  # GitHub Pages domain
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],     
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db_connection():
    return mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        database=db_name
    )

@app.get("/api/jobs")
def get_jobs():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM jobs ORDER BY id DESC")
    jobs = cursor.fetchall()
    cursor.close()
    conn.close()
    return jobs

@app.get("/api/jobs/{job_id}")
def get_job(job_id: int):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM jobs WHERE id = %s", (job_id,))
    job = cursor.fetchone()
    cursor.close()
    conn.close()
    return job

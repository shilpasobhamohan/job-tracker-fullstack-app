# Job Tracker Fullstack Application

A simple fullstack job tracking application built using React, TypeScript, and Python FastAPI.

This project was created as part of my transition from .NET/frontend development into modern Python fullstack development.

---

## Features

- Add job applications
- Fetch all applications
- Delete applications
- REST API integration
- React frontend with TypeScript
- Python FastAPI backend
- Frontend and backend communication using Axios
- Swagger API documentation

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Axios

### Backend
- Python
- FastAPI
- Pydantic

---

## Project Structure

```text
job-tracker-app/
│
├── backend/
│   ├── main.py
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx
│
└── README.md
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Create virtual environment:

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

Install dependencies:

```bash
pip install fastapi uvicorn
```

Run backend server:

```bash
python -m uvicorn main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

Swagger documentation:

```text
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
npm install axios
```

Run frontend:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /applications | Get all applications |
| POST | /applications | Create application |
| DELETE | /applications/{index} | Delete application |

---

## Screenshots

_Add screenshots here later_

---

## Learning Outcomes

Through this project I practiced:

- FastAPI basics
- REST API development
- React state management
- TypeScript integration
- CRUD operations
- Frontend/backend integration
- CORS configuration
- API debugging workflows

---

## Future Improvements

- Update/Edit application
- Database integration (SQLite/PostgreSQL)
- Authentication
- Docker support
- Deployment
- Better UI styling

---

## Author

Shilpa

Software developer transitioning into modern fullstack development using React and Python FastAPI.
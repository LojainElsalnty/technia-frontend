from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, ValidationError
from typing import List, Optional
from datetime import datetime

app = FastAPI()

# Allow your frontend origin to access the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define Pydantic models
class Lead(BaseModel):
    lead_id: int
    lead_phone: str = Field(..., min_length=7, max_length=64)
    name: str
    assigned_to: Optional[str]
    email: Optional[str]
    gender: Optional[str]
    job_title: Optional[str]
    lead_status: Optional[str]
    lead_type: Optional[str]
    lead_stage: Optional[str]
    date_added: datetime

# Sample in-memory database
leads_db = []

@app.get("/leads/", response_model=List[Lead])
async def get_leads():
    return leads_db  # Return the in-memory leads

@app.post("/leads/", response_model=Lead)
async def create_lead(lead: Lead):
    try:
        lead_id = len(leads_db) + 1
        new_lead_data = lead.model_dump()
        new_lead_data.update({"lead_id": lead_id, "date_added": datetime.now()})
        new_lead = Lead(**new_lead_data)  # Create a Lead object
        leads_db.append(new_lead)
        return new_lead
    except ValidationError as e:
        print(f"Validation error: {e.errors()}")
        raise HTTPException(status_code=422, detail=e.errors())

@app.get("/leads/{lead_id}", response_model=Lead)
async def read_lead(lead_id: int):
    for lead in leads_db:
        if lead.lead_id == lead_id:
            return lead
    raise HTTPException(status_code=404, detail="Lead not found")

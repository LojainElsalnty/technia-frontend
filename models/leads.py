from sqlalchemy import Column, Integer, String, DateTime
from app.database import Base  # Assuming you have a database.py that sets up the Base

class Lead(Base):
    __tablename__ = 'leads'

    lead_id = Column(Integer, primary_key=True, index=True)
    lead_phone = Column(String(64))
    date_added = Column(DateTime)
    name = Column(String)
    gender = Column(String, nullable=True)
    assigned_to = Column(String, nullable=True)
    email = Column(String, nullable=True)
    job_title = Column(String, nullable=True)
    lead_status = Column(String, nullable=True)
    lead_type = Column(String, nullable=True)
    lead_stage = Column(String, nullable=True)

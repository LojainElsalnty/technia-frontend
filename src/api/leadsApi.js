import axios from 'axios';

const API_URL = 'http://127.0.0.1:8005/leads'; 

export const createLead = async (leadData) => {
    const response = await axios.post(`${API_URL}/`, leadData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data; 
};

export const getLeads = async () => {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
};

export const updateLead = async (leadId, leadData) => {
    const response = await axios.put(`${API_URL}/${leadId}/`, leadData);
    return response.data;
};

export const deleteLead = async (leadId) => {
    await axios.delete(`${API_URL}/${leadId}/`);
};

export const getLeadById = async (leadId) => {
    const response = await axios.get(`${API_URL}/${leadId}/`);
    return response.data;
};


export const createCallForLead = async (leadId, callData) => {
    const response = await axios.post(`${API_URL}/${leadId}/calls/`, callData);
    return response.data;
};

export const createMeetingForLead = async (leadId, meetingData) => {
    const response = await axios.post(`${API_URL}/${leadId}/meetings/`, meetingData);
    return response.data;
};


export const getLeadActions = async (leadId) => {
    const response = await axios.get(`${API_URL}/${leadId}/actions/`);
    return response.data;
};


export const getLeadMeetings = async (leadId) => {
    const response = await axios.get(`${API_URL}/${leadId}/meetings/`);
    return response.data;
};

const leadsApi = {
    createLead,
    getLeads,
    getLeadById,
    updateLead,
    deleteLead,
    createCallForLead,
    createMeetingForLead,
    getLeadActions,
    getLeadMeetings,
};

export default leadsApi;

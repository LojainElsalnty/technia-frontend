import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8005/actions';

export const getCalls = async () => {
    const response = await axios.get(`${BASE_URL}/calls/`);
    return response.data;
};

export const getMeetings = async () => {
    const response = await axios.get(`${BASE_URL}/meetings/`);
    return response.data;
};

export const getCallById = async (call_id) => {
    const response = await axios.get(`${BASE_URL}/calls/${call_id}`, {
        headers: { accept: 'application/json' },
    });
    return response.data;
};

export const getMeetingById = async (meeting_id) => {
    const response = await axios.get(`${BASE_URL}/meetings/${meeting_id}`, {
        headers: { accept: 'application/json' },
    });
    return response.data;
};

export const createCall = async (callData) => {
    const response = await axios.post(`${BASE_URL}/create_call`, callData);
    return response.data;
};

export const createMeeting = async (meetingData) => {
    const response = await axios.post(`${BASE_URL}/create_meeting`, meetingData);
    return response.data;
};

export const updateCall = async (call_id, callData) => {
    const response = await axios.put(`${BASE_URL}/calls/update/${call_id}`, callData);
    return response.data;
};

export const updateMeeting = async (meeting_id, meetingData) => {
    const response = await axios.put(`${BASE_URL}/meetings/update/${meeting_id}`, meetingData);
    return response.data;
};

export const deleteCall = async (call_id) => {
    await axios.delete(`${BASE_URL}/calls/delete/${call_id}`);
};

export const deleteMeeting = async (meeting_id) => {
    await axios.delete(`${BASE_URL}/meetings/delete/${meeting_id}`);
};

// src/components/CallForm.js
import React, { useState } from 'react';
import { createCall } from '../api/actionsApi';

const CallForm = ({ onCallCreated }) => {
    const [callData, setCallData] = useState({});

    const handleChange = (e) => {
        setCallData({ ...callData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newCall = await createCall(callData);
            onCallCreated(newCall);
            setCallData({});
        } catch (error) {
            console.error('Error creating call:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="call_date" onChange={handleChange} placeholder="Call Date" required />
            <input name="call_status" onChange={handleChange} placeholder="Call Status" required />
            <button type="submit">Create Call</button>
        </form>
    );
};

export default CallForm;

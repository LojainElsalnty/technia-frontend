

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';

const UpdateCall = () => {
    const { callId } = useParams();
    const navigate = useNavigate();
    const [callData, setCallData] = useState({
        title: '',
        date: '',
        time: '',
        description: '',
    });

    useEffect(() => {
        // Fetch existing call data using the callId
        // Replace with your API fetching logic
        const fetchCallData = async () => {
            const response = await fetch(`/api/calls/${callId}`);
            const data = await response.json();
            setCallData(data);
        };
        fetchCallData();
    }, [callId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCallData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Update call logic
        // Replace with your API updating logic
        await fetch(`/api/calls/update/${callId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(callData),
        });
        navigate('/actions/calls'); // Redirect after updating
    };

    return (
        <div>
            <h2>Update Call</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={callData.title}
                    onChange={handleChange}
                    placeholder="Call Title"
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={callData.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="time"
                    name="time"
                    value={callData.time}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    value={callData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />
                <button type="submit">Update Call</button>
            </form>
        </div>
    );
};

export default UpdateCall;

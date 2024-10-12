
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';

const UpdateMeeting = () => {
    const { meetingId } = useParams();
    const navigate = useNavigate();
    const [meetingData, setMeetingData] = useState({
        title: '',
        date: '',
        time: '',
        description: '',
    });

    useEffect(() => {
        // Fetch existing meeting data using the meetingId
        // Replace with your API fetching logic
        const fetchMeetingData = async () => {
            const response = await fetch(`/api/meetings/${meetingId}`);
            const data = await response.json();
            setMeetingData(data);
        };
        fetchMeetingData();
    }, [meetingId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeetingData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Update meeting logic
        // Replace with your API updating logic
        await fetch(`/api/meetings/update/${meetingId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(meetingData),
        });
        navigate('/actions/meetings'); // Redirect after updating
    };

    return (
        <div>
            <h2>Update Meeting</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={meetingData.title}
                    onChange={handleChange}
                    placeholder="Meeting Title"
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={meetingData.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="time"
                    name="time"
                    value={meetingData.time}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    value={meetingData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />
                <button type="submit">Update Meeting</button>
            </form>
        </div>
    );
};

export default UpdateMeeting;

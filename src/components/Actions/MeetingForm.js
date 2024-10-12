// src/components/MeetingForm.js
import React, { useState } from 'react';
import { createMeeting } from '../../api/actionsApi';

const MeetingForm = ({ onMeetingCreated }) => {
    const [meetingData, setMeetingData] = useState({
        meeting_date: '',
        meeting_status: '',
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeetingData({ ...meetingData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset any previous errors
        setLoading(true); // Set loading state

        try {
            console.log('Submitting meeting data:', meetingData); // Debugging output
            const newMeeting = await createMeeting(meetingData);
            console.log('Meeting created:', newMeeting); // Debugging output
            onMeetingCreated(newMeeting); // Notify parent component to refresh
            setMeetingData({ meeting_date: '', meeting_status: '' }); // Clear the form
        } catch (error) {
            setError('Failed to create meeting. Please try again.'); // Set error message
            console.error('Error creating meeting:', error); // Log error to the console
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="meeting_date"
                value={meetingData.meeting_date}
                onChange={handleChange}
                placeholder="Meeting Date"
                required
            />
            <input
                name="meeting_status"
                value={meetingData.meeting_status}
                onChange={handleChange}
                placeholder="Meeting Status"
                required
            />
            <button type="submit" disabled={loading}>Create Meeting</button>
            {error && <div className="error">{error}</div>} {/* Display error if any */}
            {loading && <div className="loading">Creating Meeting...</div>} {/* Show loading state */}
        </form>
    );
};

export default MeetingForm;

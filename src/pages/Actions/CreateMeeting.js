import React, { useState } from 'react';

const CreateMeeting = () => {
    const [meetingDate, setMeetingDate] = useState('');
    const [meetingStatus, setMeetingStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Logic to create a meeting using your API
        console.log('Creating Meeting:', { meetingDate, meetingStatus });
        // Clear the form or redirect as necessary
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
            <h3 className="text-xl font-bold mb-4">Create Meeting</h3>
            <div className="mb-4">
                <label className="block text-gray-700">Meeting Date:</label>
                <input
                    type="date"
                    value={meetingDate}
                    onChange={(e) => setMeetingDate(e.target.value)}
                    className="border rounded p-2 w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Meeting Status:</label>
                <input
                    type="text"
                    value={meetingStatus}
                    onChange={(e) => setMeetingStatus(e.target.value)}
                    placeholder="Enter meeting status"
                    className="border rounded p-2 w-full"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white rounded p-2"
            >
                Create Meeting
            </button>
        </form>
    );
};

export default CreateMeeting

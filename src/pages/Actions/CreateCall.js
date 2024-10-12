
import React, { useState } from 'react';

const CreateCall = () => {
    const [callDate, setCallDate] = useState('');
    const [callStatus, setCallStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Logic to create a call using your API
        console.log('Creating Call:', { callDate, callStatus });
        // Clear the form or redirect as necessary
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
            <h3 className="text-xl font-bold mb-4">Create Call</h3>
            <div className="mb-4">
                <label className="block text-gray-700">Call Date:</label>
                <input
                    type="date"
                    value={callDate}
                    onChange={(e) => setCallDate(e.target.value)}
                    className="border rounded p-2 w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Call Status:</label>
                <input
                    type="text"
                    value={callStatus}
                    onChange={(e) => setCallStatus(e.target.value)}
                    placeholder="Enter call status"
                    className="border rounded p-2 w-full"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white rounded p-2"
            >
                Create Call
            </button>
        </form>
    );
};

export default CreateCall;

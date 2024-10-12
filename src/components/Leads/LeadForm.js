import React, { useState } from 'react';

const LeadForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        lead_phone: '',
        name: '',
        email: '',
        assigned_to: '',
        job_title: '',
        lead_status: '',
        lead_type: '',
        lead_stage: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="flex min-h-screen bg-white">
            {/* Left Navbar with Technia Photo */}
            

            {/* Main Content Area */}
            <div className="flex-grow flex items-center justify-center">
                {/* Lead Form Container */}
                <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
                    <h1 className="text-3xl font-bold mb-4">Create a new Lead</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="text"
                                name="lead_phone"
                                value={formData.lead_phone}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Assigned To</label>
                            <input
                                type="text"
                                name="assigned_to"
                                value={formData.assigned_to}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Job Title</label>
                            <input
                                type="text"
                                name="job_title"
                                value={formData.job_title}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Lead Status</label>
                            <input
                                type="text"
                                name="lead_status"
                                value={formData.lead_status}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Lead Type</label>
                            <input
                                type="text"
                                name="lead_type"
                                value={formData.lead_type}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Lead Stage</label>
                            <input
                                type="text"
                                name="lead_stage"
                                value={formData.lead_stage}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-right">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                            >
                                Create Lead
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LeadForm;

import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { getLeads, deleteLead } from '../../api/leadsApi';

function LeadsPage() {
    const [leads, setLeads] = useState([]);
    const [selectedLead, setSelectedLead] = useState(null); // State to hold the selected lead
    const [error, setError] = useState(null);

    useEffect(() => {
        getLeads()
            .then(setLeads)
            .catch(setError);
    }, []);

    const handleDelete = (leadId) => {
        deleteLead(leadId)
            .then(() => setLeads(leads.filter((lead) => lead.lead_id !== leadId)))
            .catch(setError);
    };

    // Function to rotate to a random lead
    const rotateLead = () => {
        if (leads.length > 0) {
            const randomIndex = Math.floor(Math.random() * leads.length);
            setSelectedLead(leads[randomIndex]);
        }
    };

    return (
        <div className="min-h-screen bg-white text-black">
            <h1 className="text-3xl font-bold mb-4">Leads</h1>

            {/* Navigation Bar with Rotate Lead Button */}
            <div className="mb-4 flex justify-between items-center">
                <Link to="/leads/create">
                    <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                        Create Lead
                    </button>
                </Link>
                <button
                    onClick={rotateLead}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Rotate Lead
                </button>
            </div>

            {/* Selected Lead Details */}
            {selectedLead && (
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <h2 className="text-xl font-semibold">Selected Lead:</h2>
                    <p>Name: {selectedLead.name}</p>
                    <p>Phone: {selectedLead.lead_phone}</p>
                    <p>Email: {selectedLead.email}</p>
                </div>
            )}

            {/* List Leads */}
            {error ? (
                <p className="text-red-500">Error fetching leads: {error.message}</p>
            ) : (
                <table className="min-w-full bg-white shadow-md rounded-lg mt-4">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-left">Name</th>
                            <th className="p-4 text-left">Phone</th>
                            <th className="p-4 text-left">Email</th>
                            <th className="p-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead) => (
                            <tr key={lead.lead_id} className="border-b hover:bg-gray-100">
                                <td className="p-4">{lead.name}</td>
                                <td className="p-4">{lead.lead_phone}</td>
                                <td className="p-4">{lead.email}</td>
                                <td className="p-4 space-x-2">
                                    {/* Update Lead (navigate to details page) */}
                                    <Link to={`/leads/${lead.lead_id}`} className="text-blue-500 hover:underline">
                                        Update
                                    </Link>

                                    {/* Delete Lead */}
                                    <button
                                        onClick={() => handleDelete(lead.lead_id)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default LeadsPage;
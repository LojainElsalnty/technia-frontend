import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { getCalls, deleteCall } from '../../api/actionsApi'; // Adjust the import according to your actual API

function CallsPage() {
    const [calls, setCalls] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch calls on component mount
        const fetchCalls = async () => {
            try {
                const fetchedCalls = await getCalls();
                setCalls(fetchedCalls);
            } catch (err) {
                setError(err);
            }
        };

        fetchCalls();
    }, []);

    const handleDelete = async (callId) => {
        try {
            await deleteCall(callId);
            setCalls((prevCalls) => prevCalls.filter((call) => call.call_id !== callId));
        } catch (err) {
            setError(err);
        }
    };

    return (
        <div className="min-h-screen bg-white text-black p-4">
            <h1 className="text-3xl font-bold mb-4">Calls</h1>

            {/* Create Call Button */}
            <Link to="/actions/create_call">
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                    Create Call
                </button>
            </Link>

            {/* List Calls */}
            {error ? (
                <p className="text-red-500">Error fetching calls: {error.message}</p>
            ) : (
                <table className="min-w-full bg-white shadow-md rounded-lg mt-4">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-left">Call Date</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calls.map((call) => (
                            <tr key={call.call_id} className="border-b hover:bg-gray-100">
                                <td className="p-4">{call.call_date}</td>
                                <td className="p-4">{call.call_status}</td>
                                <td className="p-4 space-x-2">
                                    {/* Update Call (navigate to details page) */}
                                    <Link to={`/actions/calls/update/${call.call_id}`} className="text-blue-500 hover:underline">
                                        Update
                                    </Link>

                                    {/* Delete Call */}
                                    <button
                                        onClick={() => handleDelete(call.call_id)}
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

export default CallsPage;

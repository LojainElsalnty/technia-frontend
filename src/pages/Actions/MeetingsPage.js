import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { getMeetings, deleteMeeting } from '../../api/actionsApi'; // Adjust the import according to your actual API

function MeetingsPage() {
    const [meetings, setMeetings] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch meetings on component mount
        const fetchMeetings = async () => {
            try {
                const fetchedMeetings = await getMeetings();
                setMeetings(fetchedMeetings);
            } catch (err) {
                setError(err);
            }
        };

        fetchMeetings();
    }, []);

    const handleDelete = async (meetingId) => {
        try {
            await deleteMeeting(meetingId);
            setMeetings((prevMeetings) => prevMeetings.filter((meeting) => meeting.meeting_id !== meetingId));
        } catch (err) {
            setError(err);
        }
    };

    return (
        <div className="min-h-screen bg-white text-black p-4">
            <h1 className="text-3xl font-bold mb-4">Meetings</h1>

            {/* Create Meeting Button */}
            <Link to="/actions/create_meeting">
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                    Create Meeting
                </button>
            </Link>

            {/* List Meetings */}
            {error ? (
                <p className="text-red-500">Error fetching meetings: {error.message}</p>
            ) : (
                <table className="min-w-full bg-white shadow-md rounded-lg mt-4">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-left">Meeting Date</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meetings.map((meeting) => (
                            <tr key={meeting.meeting_id} className="border-b hover:bg-gray-100">
                                <td className="p-4">{meeting.meeting_date}</td>
                                <td className="p-4">{meeting.meeting_status}</td>
                                <td className="p-4 space-x-2">
                                    {/* Update Meeting (navigate to details page) */}
                                    <Link to={`/actions/meetings/update/${meeting.meeting_id}`} className="text-blue-500 hover:underline">
                                        Update
                                    </Link>

                                    {/* Delete Meeting */}
                                    <button
                                        onClick={() => handleDelete(meeting.meeting_id)}
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

export default MeetingsPage;

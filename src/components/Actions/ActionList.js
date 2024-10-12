// src/components/ActionList.js
import React, { useEffect, useState } from 'react';
import { getCalls, getMeetings } from '../api/actionsApi';

const ActionList = () => {
    const [calls, setCalls] = useState([]);
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const callsData = await getCalls();
                const meetingsData = await getMeetings();
                setCalls(callsData);
                setMeetings(meetingsData);
            } catch (error) {
                console.error('Error fetching actions:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="action-list">
            <h2>Calls</h2>
            <ul>
                {calls.map(call => (
                    <li key={call.call_id}>
                        <div>{call.call_date}</div>
                        <div>{call.call_status}</div>
                    </li>
                ))}
            </ul>
            <h2>Meetings</h2>
            <ul>
                {meetings.map(meeting => (
                    <li key={meeting.meeting_id}>
                        <div>{meeting.meeting_date}</div>
                        <div>{meeting.meeting_status}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActionList;

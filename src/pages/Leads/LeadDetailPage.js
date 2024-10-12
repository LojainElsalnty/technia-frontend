
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import leadsApi from '../../api/leadsApi';

const LeadDetailPage = () => {
    const { leadId } = useParams(); // Get lead_id from URL parameters
    const [lead, setLead] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLead = async () => {
            try {
                const fetchedLead = await leadsApi.getLeadById(leadId);
                setLead(fetchedLead);
            } catch (err) {
                setError('Error fetching lead details');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchLead();
    }, [leadId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">Lead Details</h1>
            {lead ? (
                <div className="mt-4">
                    <p><strong>Name:</strong> {lead.name}</p>
                    <p><strong>Email:</strong> {lead.email}</p>
                    <p><strong>Phone:</strong> {lead.phone}</p>
                    <p><strong>Status:</strong> {lead.status}</p>
                </div>
            ) : (
                <div>No lead found</div>
            )}
        </div>
    );
};

export default LeadDetailPage;

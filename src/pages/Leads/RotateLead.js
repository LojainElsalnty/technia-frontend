
import React, { useState } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';

const RotateLead = () => {
    const { leadId, toId } = useParams();
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRotate = async () => {
        try {
            const response = await fetch(`/api/leads/rotate/${leadId}/${toId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                setSuccessMessage('Lead rotated successfully!');
                // Optionally navigate to leads page or perform other actions
                setTimeout(() => navigate('/leads'), 2000); // Navigate after 2 seconds
            } else {
                throw new Error('Failed to rotate lead.');
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div>
            <h2>Rotate Lead</h2>
            <p>Are you sure you want to rotate lead {leadId} to lead {toId}?</p>
            <button onClick={handleRotate}>Confirm Rotate</button>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default RotateLead;

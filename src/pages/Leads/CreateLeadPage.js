
import { useNavigate } from '@tanstack/react-router';
import LeadForm from '../../components/Leads/LeadForm';
import { createLead } from '../../api/leadsApi';

function CreateLeadPage() {
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        try {
            await createLead(formData);
            navigate('/leads');  // Redirect to leads list after successful creation
        } catch (error) {
            console.error('Error creating lead:', error);
        }
    };

    return (
        <div className="min-h-screen bg-white text-black">
            

            {/* Lead Form */}
            <LeadForm onSubmit={handleSubmit} />
        </div>
    );
}

export default CreateLeadPage;

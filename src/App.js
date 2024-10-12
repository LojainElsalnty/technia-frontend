import React ,{useState}from 'react';
import { Outlet, RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import HomePage from './pages/HomePage';
import LeadsPage from './pages/Leads/LeadsPage';
import CreateLeadPage from './pages/Leads/CreateLeadPage';
import CreateActionPage from './pages/Actions/CreateCall';
import LeadDetailPage from './pages/Leads/LeadDetailPage';
import RotateLead from './pages/Leads/RotateLead';
import CallsPage from './pages/Actions/CallsPage';
import MeetingsPage from './pages/Actions/MeetingsPage'; 
import CreateCall from './pages/Actions/CreateCall'; 
import CreateMeeting from './pages/Actions/CreateMeeting'; 
import UpdateCall from './pages/Actions/UpdateCall'; 
import UpdateMeeting from './pages/Actions/UpdateMeeting'; 
import './App.css';  
import technia from './assests/Technia.png';
import { useLocation } from '@tanstack/react-router';


const Header = () => {
    const location = useLocation(); // Get the current location
    const [showLeadsDropdown, setShowLeadsDropdown] = useState(false);
    const [showCallsDropdown, setShowCallsDropdown] = useState(false);
    const [showMeetingsDropdown, setShowMeetingsDropdown] = useState(false);
    return (
        <header className="header flex items-center bg-gray-800 p-4">
            <div className="flex items-center w-1/4">
                <img src={technia} alt="Technia" className="rounded-full w-32 h-32 mr-2" />
                <h1 className="text-3xl font-bold text-white">TECHNIA</h1>
            </div>
            <nav className="navbar flex items-center justify-center w-1/2 relative">
                <a href="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</a>

                {/* Leads Dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => setShowLeadsDropdown(true)}
                    onMouseLeave={() => setShowLeadsDropdown(false)}
                >
                    <button className="nav-link">
                        Leads
                    </button>
                    {showLeadsDropdown && (
                        <div className="dropdown-menu absolute z-10">
                            <a href="/leads" className={`dropdown-link ${location.pathname === '/leads' ? 'active' : ''}`}>
                                View Leads
                            </a>
                            <a href="/leads/create" className={`dropdown-link ${location.pathname === '/leads/create' ? 'active' : ''}`}>
                                Create Lead
                            </a>
                        </div>
                    )}
                </div>

                {/* Calls Dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => setShowCallsDropdown(true)}
                    onMouseLeave={() => setShowCallsDropdown(false)}
                >
                    <button className="nav-link">
                        Calls
                    </button>
                    {showCallsDropdown && (
                        <div className="dropdown-menu absolute z-10">
                            <a href="/actions/calls" className={`dropdown-link ${location.pathname === '/actions/calls' ? 'active' : ''}`}>
                                Upcoming Calls
                            </a>
                            <a href="/actions/create_call" className={`dropdown-link ${location.pathname === '/actions/create_call' ? 'active' : ''}`}>
                                Create Call
                            </a>
                        </div>
                    )}
                </div>

                {/* Meetings Dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => setShowMeetingsDropdown(true)}
                    onMouseLeave={() => setShowMeetingsDropdown(false)}
                >
                    <button className="nav-link">
                        Meetings
                    </button>
                    {showMeetingsDropdown && (
                        <div className="dropdown-menu absolute z-10">
                            <a href="/actions/meetings" className={`dropdown-link ${location.pathname === '/actions/meetings' ? 'active' : ''}`}>
                                Upcoming Meetings
                            </a>
                            <a href="/actions/create_meeting" className={`dropdown-link ${location.pathname === '/actions/create_meeting' ? 'active' : ''}`}>
                                Create Meeting
                            </a>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );

};

const rootRoute = createRootRoute({
    component: () => (
        <>
            <Header />
            <main className="main-content p-4 flex-grow">
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </React.Suspense>
            </main>
        </>
    ),
});

// Define routes
const leadsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/leads', component: LeadsPage });
const CreateLeadRoute = createRoute({ getParentRoute: () => rootRoute, path: '/leads/create', component: CreateLeadPage });
const createActionRoute = createRoute({ getParentRoute: () => rootRoute, path: '/createactions', component: CreateActionPage });
const leadDetailRoute = createRoute({ getParentRoute: () => rootRoute, path: '/leads/:leadId', component: LeadDetailPage });
const rotateLeadRoute = createRoute({ getParentRoute: () => rootRoute, path: '/leads/rotate/:leadId/:toId', component: RotateLead});
const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage });

// Actions routes
const callsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/actions/calls', component: CallsPage });
const meetingsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/actions/meetings', component: MeetingsPage });
const createCallRoute = createRoute({ getParentRoute: () => rootRoute, path: '/actions/create_call', component: CreateCall });
const createMeetingRoute = createRoute({ getParentRoute: () => rootRoute, path: '/actions/create_meeting', component: CreateMeeting });
const updateCallRoute = createRoute({ getParentRoute: () => rootRoute, path: '/actions/calls/update/:callId', component: UpdateCall });
const updateMeetingRoute = createRoute({ getParentRoute: () => rootRoute, path: '/actions/meetings/update/:meetingId', component: UpdateMeeting });

// Create the router
const routeTree = rootRoute.addChildren([
    homeRoute,
    leadsRoute,
    createActionRoute,
    leadDetailRoute,
    CreateLeadRoute,
    rotateLeadRoute, 
    callsRoute,
    meetingsRoute,
    createCallRoute,
    createMeetingRoute,
    updateCallRoute,
    updateMeetingRoute
]);

const router = createRouter({ routeTree });

function App() {
    return <RouterProvider router={router} />;
}

export default App;

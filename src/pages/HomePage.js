import React from 'react';
import './HomePage.css';
import leadsImage from '../assests/lead.png'; // Adjust path
import actionsImage from '../assests/unnamed.png'; // Adjust path

const HomePage = () => {
    return (
        <div className="homepage-container">
            <section className="intro-section">
                <h1 className="title">Technia Frontend Task</h1>
                <p className="subtitle">Leading the Future of ERP Systems</p>
            </section>

            <section className="stats-section">
                <div className="stat-box">
                    {/* <img src={leadsImage} alt="Leads Overview" className="stat-image" /> */}
                    <h2 className="stat-title">Leads Overview</h2>
                    <p className="stat-detail">Total Leads: <span className="highlight">150</span></p>
                    <p className="stat-detail">Active Leads: <span className="highlight">30</span></p>
                    <p className="stat-detail">Closed Leads: <span className="highlight">20</span></p>
                </div>

                <div className="stat-box">
                    {/* <img src={actionsImage}  alt="Actions Overview" className="stat-image" /> */}
                    <h2 className="stat-title">Overview</h2>
                    <p className="stat-detail">Upcoming Calls: <span className="highlight">5</span></p>
                    <p className="stat-detail">Upcoming Meetings: <span className="highlight">2</span></p>
                </div>
            </section>

            <section className="actions-section">
                <h2 className="actions-title">Quick Actions</h2>
                <div className="action-buttons">
                    <a href="/leads" className="action-button">View All Leads</a>
                    <a href="/leads/create" className="action-button">Create New Lead</a>
                    <a href="/actions/calls" className="action-button">Upcoming Calls</a>
                    <a href="/actions/meetings" className="action-button">Upcoming Meetings</a>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

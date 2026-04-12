import React, { useState } from 'react';
import RecentTimetables from '../components/dashboard/RecentTimetables';
import EmptyState from '../components/dashboard/EmptyState';

const Dashboard = ({ onGenerateClick }) => {
    const [selectedTab, setSelectedTab] = useState('Dashboard');

    return (
        <main className="main-content">
            <div className="content-wrapper">
                <div className="header">
                    <div>
                        <h1 className="header-title">{selectedTab}</h1>
                        <p className="text-gray text-sm">Welcome back — manage your exam timetables</p>
                    </div>
                </div>

                <div className="dashboard-content">
                    <EmptyState onGenerateClick={onGenerateClick} />
                    <RecentTimetables />
                </div>
            </div>
        </main>
    );
};

export default Dashboard;

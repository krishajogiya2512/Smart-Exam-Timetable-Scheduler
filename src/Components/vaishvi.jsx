import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  History, 
  PlusCircle, 
  Settings, 
  Plus 
} from 'lucide-react';
import './vaishvi.css';

const Vaishvi = () => {
    const [selectedTab, setSelectedTab] = useState('Dashboard');

    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, section: 'MAIN' },
        { name: 'History', icon: History, section: 'MAIN' },
        { name: 'Compare', icon: PlusCircle, section: 'MAIN' },
        { name: 'Constraints', icon: Settings, section: 'SETTINGS' }
    ];

    const recentTimetables = [
        { title: 'Semester 1 — 2024', date: 'Generated Apr 2, 2025', conflicts: '0 conflicts', courses: '4 courses', type: 'success' },
        { title: 'Mid-term — 2024', date: 'Generated Mar 10, 2025', conflicts: '2 conflicts', courses: '6 courses', type: 'error' },
        { title: 'Semester 2 — 2023', date: 'Generated Nov 5, 2024', conflicts: '0 conflicts', courses: '5 courses', type: 'success' }
    ];

    return (
        <div className="v-container">
            {/* Sidebar */}
            <div className="v-sidebar">
                <div className="v-sidebarHeader">
                    <div className="v-logo">ExamScheduler</div>
                    <div className="v-subtitle">Admin panel</div>
                </div>

                <div className="v-navSectionTitle">Main</div>
                {navItems.filter(i => i.section === 'MAIN').map(item => (
                    <div 
                        key={item.name}
                        className={`v-navItem ${selectedTab === item.name ? 'active' : ''}`}
                        onClick={() => setSelectedTab(item.name)}
                    >
                        <item.icon className="v-navIcon" />
                        <span className="v-navText">{item.name}</span>
                    </div>
                ))}

                <div className="v-navSectionTitle">Settings</div>
                {navItems.filter(i => i.section === 'SETTINGS').map(item => (
                    <div 
                        key={item.name}
                        className={`v-navItem ${selectedTab === item.name ? 'active' : ''}`}
                        onClick={() => setSelectedTab(item.name)}
                    >
                        <item.icon className="v-navIcon" />
                        <span className="v-navText">{item.name}</span>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="v-main">
                <div className="v-header">
                    <div className="v-headerTitle">{selectedTab}</div>
                    <div className="v-headerSub">Welcome back — manage your exam timetables</div>
                </div>

                <div className="v-content">
                    <div className="v-emptyState">
                        <div className="v-plusCircle">
                            <Plus size={32} color="#4f46e5" />
                        </div>
                        <div className="v-createTitle">Create a new timetable</div>
                        <div className="v-createDesc">
                            Click the + button or use the sidebar to start scheduling a new exam timetable
                        </div>
                        
                        <div className="v-separator">
                            <div className="v-sepLine"></div>
                            <span className="v-sepText">or</span>
                            <div className="v-sepLine"></div>
                        </div>

                        <button className="v-btn">
                            Generate timetable
                        </button>
                    </div>

                    {/* Recent Timetables */}
                    <div className="v-recentSection">
                        <div className="v-recentTitle">Recent Timetables</div>
                        <div className="v-grid">
                            {recentTimetables.map((t, idx) => (
                                <div key={idx} className="v-card">
                                    <div className="v-cardTitle">{t.title}</div>
                                    <div className="v-cardDate">{t.date}</div>
                                    <div className="v-pillContainer">
                                        <div className={`v-pill v-pill-${t.type}`}>{t.conflicts}</div>
                                        <div className="v-pill v-pill-neutral">{t.courses}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vaishvi;

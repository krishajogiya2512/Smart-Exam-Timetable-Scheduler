import React from 'react';
import { LayoutDashboard, History, PlusCircle, Settings } from 'lucide-react';

export default function Sidebar({ activePage, onNavigate }) {
    const selectedTab = activePage === 'dashboard' ? 'Dashboard' : (activePage === 'generate' ? 'Generate timetable' : 'Dashboard');
    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, section: 'MAIN' },
        { name: 'History', icon: History, section: 'MAIN' },
        { name: 'Compare', icon: PlusCircle, section: 'MAIN' },
        { name: 'Constraints', icon: Settings, section: 'SETTINGS' }
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h1 className="sidebar-title">ExamScheduler</h1>
                <p className="text-xs text-gray">Admin panel</p>
            </div>

            <div className="menu-section">MAIN</div>
            <ul className="sidebar-menu">
                {navItems.filter(i => i.section === 'MAIN').map(item => (
                    <li 
                        key={item.name}
                        className={`menu-item ${selectedTab === item.name ? 'active' : ''}`}
                        onClick={() => {
                            if (item.name === 'Dashboard') onNavigate('dashboard');
                            // other links could have different states 
                        }}
                    >
                        <item.icon style={{ width: '18px', height: '18px', marginRight: '12px' }} />
                        {item.name}
                    </li>
                ))}
            </ul>

            <div className="menu-section">SETTINGS</div>
            <ul className="sidebar-menu">
                {navItems.filter(i => i.section === 'SETTINGS').map(item => (
                    <li 
                        key={item.name}
                        className={`menu-item ${selectedTab === item.name ? 'active' : ''}`}
                        onClick={() => {}}
                    >
                        <item.icon style={{ width: '18px', height: '18px', marginRight: '12px' }} />
                        {item.name}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

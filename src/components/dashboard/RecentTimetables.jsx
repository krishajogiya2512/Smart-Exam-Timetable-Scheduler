import React from 'react';
import '../../styles/RecentTimetables.css';

export default function RecentTimetables() {
    const recentTimetables = [
        { title: 'Semester 1 — 2024', date: 'Generated Apr 2, 2025', conflicts: '0 conflicts', courses: '4 courses', type: 'success' },
        { title: 'Mid-term — 2024', date: 'Generated Mar 10, 2025', conflicts: '2 conflicts', courses: '6 courses', type: 'error' },
        { title: 'Semester 2 — 2023', date: 'Generated Nov 5, 2024', conflicts: '0 conflicts', courses: '5 courses', type: 'success' }
    ];

    return (
        <div className="recent-section">
            <div className="recent-title">Recent Timetables</div>
            <div className="card-grid">
                {recentTimetables.map((t, idx) => (
                    <div key={idx} className="card">
                        <div className="card-title">{t.title}</div>
                        <div className="card-date">{t.date}</div>
                        <div className="pill-container">
                            <div className={`pill pill-${t.type}`}>{t.conflicts}</div>
                            <div className="pill pill-neutral">{t.courses}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

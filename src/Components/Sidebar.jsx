import React from 'react';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">ExamScheduler</h1>
        <p className="text-xs text-gray">Admin panel</p>
      </div>
      
      <ul className="sidebar-menu">
        <li className="menu-item">Dashboard</li>
        <li className="menu-item active">Generate timetable</li>
        <li className="menu-item">History</li>
        <li className="menu-item">Compare</li>
      </ul>

      <div className="menu-section">Settings</div>
      <ul className="sidebar-menu">
        <li className="menu-item">Constraints</li>
      </ul>
    </aside>
  );
}

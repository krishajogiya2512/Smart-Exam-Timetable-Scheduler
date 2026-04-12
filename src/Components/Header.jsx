import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="header-title">Generate timetable</h1>
        <p className="text-sm text-gray">Step 1 of 4 — enter course & student data</p>
      </div>
      <div className="badge">Draft</div>
    </header>
  );
}

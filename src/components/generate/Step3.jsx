import React from 'react';

export default function Step3({ courses, rooms, slots, onBack, onComplete }) {
  return (
    <>
      <div className="card">
        <h3 className="text-sm" style={{ marginBottom: '16px' }}>Review & Generate</h3>
        <p className="text-gray text-sm" style={{ marginBottom: '24px' }}>
          Please review the following configuration before generating the final timetable.
        </p>
        
        <div className="form-grid" style={{ marginBottom: '24px' }}>
             <div style={{ padding: '16px', background: '#f3f4f6', borderRadius: '8px' }}>
                 <p className="label">Total Courses</p>
                 <strong style={{ fontSize: '1.5rem', color: '#4f46e5' }}>{courses.length}</strong>
             </div>
             <div style={{ padding: '16px', background: '#f3f4f6', borderRadius: '8px' }}>
                 <p className="label">Total Rooms</p>
                 <strong style={{ fontSize: '1.5rem', color: '#4f46e5' }}>{rooms.length}</strong>
             </div>
             <div style={{ padding: '16px', background: '#f3f4f6', borderRadius: '8px' }}>
                 <p className="label">Total Time Slots</p>
                 <strong style={{ fontSize: '1.5rem', color: '#4f46e5' }}>{slots.length}</strong>
             </div>
        </div>
      </div>

      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onComplete}>Generate Timetable</button>
      </div>
    </>
  );
}

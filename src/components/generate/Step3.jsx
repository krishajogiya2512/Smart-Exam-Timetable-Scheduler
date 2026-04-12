import React from 'react';
import './Step3.css';

export default function Step3({ courses, rooms, slots, onBack, onComplete }) {
  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <h2 className="text-sm" style={{ marginBottom: '8px' }}>Review & Generate</h2>
        <p className="text-gray text-sm">
          Please review the following configuration before generating the final timetable.
        </p>
      </div>

      <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Card 1: Courses & Students */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 className="text-sm">Courses & Students</h3>
            <button className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: '0.75rem', borderRadius: '6px' }}>Edit</button>
          </div>
          
          <div className="step3-list">
            {courses.length > 0 ? courses.map((course, idx) => (
              <div key={idx} className="step3-list-item">
                <span style={{ fontWeight: 500 }}>{course.name}</span>
                <span className="text-gray" style={{ fontSize: '0.875rem', marginLeft: '4px' }}>— {course.students}</span>
              </div>
            )) : <p className="text-gray text-sm">No courses added</p>}
          </div>
        </div>

        {/* Card 2: Rooms & Time Slots */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 className="text-sm">Rooms & Time Slots</h3>
            <button className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: '0.75rem', borderRadius: '6px' }}>Edit Slots</button>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <h4 className="text-xs text-gray" style={{ textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>Rooms</h4>
            <div className="step3-list">
              {rooms.length > 0 ? rooms.map((room, idx) => (
                <div key={idx} className="step3-list-item">
                  <span style={{ fontWeight: 500 }}>{room.name}</span>
                  <span className="text-gray" style={{ fontSize: '0.875rem', marginLeft: '4px' }}>— Capacity {room.capacity}</span>
                </div>
              )) : <p className="text-gray text-sm">No rooms added</p>}
            </div>
          </div>

          <div>
            <h4 className="text-xs text-gray" style={{ textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>Time Slots</h4>
            <div className="step3-summary-box">
              <span style={{ fontWeight: 500 }}>{slots.length} Slots Added</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '0px' }}>
        <h3 className="text-sm" style={{ marginBottom: '12px' }}>Ready to Generate</h3>
        <ul style={{ paddingLeft: '24px', fontSize: '0.875rem', color: 'var(--text-gray)' }}>
          <li style={{ marginBottom: '6px' }}>Ensure no student has overlapping exams</li>
          <li style={{ marginBottom: '6px' }}>Assign rooms based on capacity constraints</li>
          <li>Utilize all available time slots efficiently</li>
        </ul>
      </div>

      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onComplete}>Generate Timetable</button>
      </div>
    </>
  );
}

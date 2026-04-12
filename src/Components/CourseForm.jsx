import React from 'react';

export default function CourseForm() {
  return (
    <div className="card">
      <h2 className="text-sm" style={{ marginBottom: '16px' }}>Add a course</h2>
      
      <div className="form-grid">
        <div>
          <label className="label">Course name</label>
          <input type="text" className="input-field" placeholder="e.g. Mathematics" />
        </div>
        <div>
          <label className="label">No. of students</label>
          <input type="number" className="input-field" placeholder="e.g. 60" />
        </div>
      </div>

      <div style={{ marginTop: '24px' }}>
        <span className="chip">Mathematics — 60</span>
        <span className="chip">Physics — 45</span>
        <span className="chip">Data Structures — 80</span>
        <button className="btn btn-secondary" style={{ borderRadius: '9999px', padding: '5px 12px', fontSize: '0.875rem' }}>+ Add course</button>
      </div>
    </div>
  );
}

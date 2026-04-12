import React from 'react';

export default function EnrollmentForm() {
  return (
    <div className="card">
      <h2 className="text-sm" style={{ marginBottom: '16px' }}>Student enrollments</h2>
      
      <div className="form-grid">
        <div>
          <label className="label">Student name</label>
          <input type="text" className="input-field" placeholder="e.g. Rahul" />
        </div>
        <div>
          <label className="label">Enrolled courses</label>
          <input type="text" className="input-field" placeholder="e.g. Mathematics, Physics" />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function Step1({ courses, setCourses, onNext, onBack }) {
  const [courseName, setCourseName] = useState("");
  const [studentsNum, setStudentsNum] = useState("");
  const [studentName, setStudentName] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState("");

  const addCourse = () => {
    if (!courseName || !studentsNum) return;
    setCourses([...courses, { name: courseName, students: studentsNum }]);
    setCourseName("");
    setStudentsNum("");
  };

  return (
    <>
      <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div className="card">
          <h2 className="text-sm" style={{ marginBottom: '16px' }}>Add a course</h2>
          
          <div className="form-grid">
            <div>
              <label className="label">Course name</label>
              <input type="text" className="input-field" placeholder="e.g. Mathematics" value={courseName} onChange={e => setCourseName(e.target.value)} />
            </div>
            <div>
              <label className="label">Total students</label>
              <input type="number" className="input-field" placeholder="e.g. 60" value={studentsNum} onChange={e => setStudentsNum(e.target.value)} />
            </div>
          </div>
          
          <button className="btn btn-secondary" style={{ borderRadius: '9999px', padding: '5px 12px', fontSize: '0.875rem', marginTop: '16px', marginBottom: '16px' }} onClick={addCourse}>+ Add course</button>

          <div>
            {courses.map((c, idx) => (
              <span key={idx} className="chip">{c.name} — {c.students}</span>
            ))}
          </div>

          <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
             <button className="btn btn-secondary" style={{ flex: 1 }}>Add manually</button>
             <button className="btn btn-secondary" style={{ flex: 1 }}>Upload CSV</button>
          </div>
        </div>

        <div className="card">
          <h2 className="text-sm" style={{ marginBottom: '16px' }}>Student enrollments</h2>
          
          <div className="form-grid">
            <div>
              <label className="label">Student name</label>
              <input type="text" className="input-field" placeholder="e.g. Rahul" value={studentName} onChange={e => setStudentName(e.target.value)} />
            </div>
            <div>
              <label className="label">Enrolled courses</label>
              <input type="text" className="input-field" placeholder="e.g. Mathematics, Physics" value={enrolledCourses} onChange={e => setEnrolledCourses(e.target.value)} />
            </div>
          </div>
          
          <div className="table-container" style={{ marginTop: '24px' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Courses enrolled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 500 }}>Rahul</td>
                  <td>Mathematics, Physics</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Priya</td>
                  <td>Mathematics, Data Structures</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext}>Next — Rooms</button>
      </div>
    </>
  );
}

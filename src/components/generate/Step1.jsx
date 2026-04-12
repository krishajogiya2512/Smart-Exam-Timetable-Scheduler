import React, { useState } from 'react';

export default function Step1({ courses, setCourses, students, setStudents, onNext, onBack }) {
  const [courseName, setCourseName] = useState("");
  const [courseStudents, setCourseStudents] = useState("");
  
  const [studentName, setStudentName] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState("");

  const addCourse = () => {
    if (!courseName || !courseStudents) return;
    setCourses([...courses, { name: courseName, students: courseStudents }]);
    setCourseName("");
    setCourseStudents("");
  };

  const addStudent = () => {
    if (!studentName || !enrolledCourses) return;
    setStudents([...students, { name: studentName, courses: enrolledCourses }]);
    setStudentName("");
    setEnrolledCourses("");
  };

  return (
    <>
      <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        
        {/* Left column: Courses */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="text-sm" style={{ marginBottom: '16px' }}>Add a course</h2>
          
          <div className="form-grid" style={{ marginBottom: '16px' }}>
            <div>
              <label className="label">Course name</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. Mathematics" 
                value={courseName} 
                onChange={e => setCourseName(e.target.value)} 
              />
            </div>
            <div>
              <label className="label">Total students</label>
              <input 
                type="number" 
                className="input-field" 
                placeholder="e.g. 60" 
                value={courseStudents} 
                onChange={e => setCourseStudents(e.target.value)} 
              />
            </div>
          </div>
          
          <button 
            className="btn btn-secondary" 
            style={{ borderRadius: '9999px', padding: '5px 12px', fontSize: '0.875rem', alignSelf: 'flex-start' }} 
            onClick={addCourse}
          >
            + Add course
          </button>

          {courses.length > 0 && (
            <div style={{ marginTop: '24px' }}>
              {courses.map((c, idx) => (
                <span key={idx} className="chip">{c.name} — {c.students}</span>
              ))}
            </div>
          )}
        </div>

        {/* Right column: Students */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="text-sm" style={{ marginBottom: '16px' }}>Student enrollments</h2>
          
          <div className="form-grid" style={{ marginBottom: '16px' }}>
            <div>
              <label className="label">Student name</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. Rahul" 
                value={studentName} 
                onChange={e => setStudentName(e.target.value)} 
              />
            </div>
            <div>
              <label className="label">Enrolled courses</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. Mathematics, Physics" 
                value={enrolledCourses} 
                onChange={e => setEnrolledCourses(e.target.value)} 
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
             <button 
               className="btn btn-secondary" 
               style={{ borderRadius: '9999px', padding: '5px 12px', fontSize: '0.875rem' }} 
               onClick={addStudent}
             >
               + Add student
             </button>
             <button 
               className="btn btn-secondary" 
               style={{ borderRadius: '9999px', padding: '5px 12px', fontSize: '0.875rem' }}
             >
               Upload CSV
             </button>
          </div>
          
          {students.length > 0 && (
            <div className="table-container" style={{ marginTop: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Courses enrolled</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 500 }}>{student.name}</td>
                      <td>{student.courses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext}>Next — Rooms</button>
      </div>
    </>
  );
}

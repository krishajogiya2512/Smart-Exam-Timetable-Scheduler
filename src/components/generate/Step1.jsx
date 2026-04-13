import React, { useState } from 'react';
import "../../styles/Modal.css";

export default function Step1({ courses, setCourses, students, setStudents, onNext, onBack }) {
  const [courseName, setCourseName] = useState("");
  const [courseStudents, setCourseStudents] = useState("");
  
  const [studentName, setStudentName] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState("");

  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);

  const addCourse = () => {
    if (!courseName || !courseStudents) return;
    setCourses([...courses, { name: courseName, students: courseStudents }]);
    setCourseName("");
    setCourseStudents("");
  };

  const editCourse = (index) => {
    const item = courses[index];
    setCourseName(item.name);
    setCourseStudents(item.students);
    setCourses(courses.filter((_, i) => i !== index));
    setIsCourseModalOpen(false);
  };

  const addStudent = () => {
    if (!studentName || !enrolledCourses) return;
    setStudents([...students, { name: studentName, courses: enrolledCourses }]);
    setStudentName("");
    setEnrolledCourses("");
  };

  const editStudent = (index) => {
    const item = students[index];
    setStudentName(item.name);
    setEnrolledCourses(item.courses);
    setStudents(students.filter((_, i) => i !== index));
    setIsStudentModalOpen(false);
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
                placeholder="" 
                value={courseName} 
                onChange={e => setCourseName(e.target.value)} 
              />
            </div>
            <div>
              <label className="label">Total students</label>
              <input 
                type="number" 
                className="input-field" 
                placeholder="" 
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
            <div style={{ marginTop: '24px', padding: '16px', background: '#f9fafb', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="text-sm" style={{ color: 'var(--text-gray)' }}>Total Courses: <strong style={{ color: 'var(--text-dark)' }}>{courses.length}</strong></span>
              <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.75rem', background: 'white' }} onClick={() => setIsCourseModalOpen(true)}>View Courses</button>
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
                placeholder="" 
                value={studentName} 
                onChange={e => setStudentName(e.target.value)} 
              />
            </div>
            <div>
              <label className="label">Enrolled courses</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="" 
                list="course-suggestions"
                value={enrolledCourses} 
                onChange={e => setEnrolledCourses(e.target.value)} 
              />
              <datalist id="course-suggestions">
                {courses.map((c, idx) => (
                   <option key={idx} value={c.name} />
                ))}
              </datalist>
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
            <div style={{ marginTop: '24px', padding: '16px', background: '#f9fafb', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="text-sm" style={{ color: 'var(--text-gray)' }}>Total Students: <strong style={{ color: 'var(--text-dark)' }}>{students.length}</strong></span>
              <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.75rem', background: 'white' }} onClick={() => setIsStudentModalOpen(true)}>View Students</button>
            </div>
          )}
        </div>
      </div>

      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext}>Next — Rooms</button>
      </div>

      {isCourseModalOpen && (
        <div className="modal-overlay" onClick={() => setIsCourseModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Courses</h3>
              <button className="modal-close" onClick={() => setIsCourseModalOpen(false)}>×</button>
            </div>
            <div className="modal-body">
              {courses.length === 0 ? <p className="text-gray text-sm">No courses added yet.</p> : courses.map((course, index) => (
                <div key={index} className="modal-item">
                  <div>
                    <span className="modal-item-title">{course.name}</span>
                    <span className="modal-item-subtitle">{course.students} students</span>
                  </div>
                  <div className="modal-actions">
                    <button className="modal-icon-btn" onClick={() => editCourse(index)}>Edit</button>
                    <button className="modal-icon-btn delete" onClick={() => setCourses(courses.filter((_, i) => i !== index))}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isStudentModalOpen && (
        <div className="modal-overlay" onClick={() => setIsStudentModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Students</h3>
              <button className="modal-close" onClick={() => setIsStudentModalOpen(false)}>×</button>
            </div>
            <div className="modal-body">
              {students.length === 0 ? <p className="text-gray text-sm">No students added yet.</p> : students.map((student, index) => (
                <div key={index} className="modal-item">
                  <div>
                    <span className="modal-item-title">{student.name}</span>
                    <span className="modal-item-subtitle">Enrolled: {student.courses}</span>
                  </div>
                  <div className="modal-actions">
                    <button className="modal-icon-btn" onClick={() => editStudent(index)}>Edit</button>
                    <button className="modal-icon-btn delete" onClick={() => setStudents(students.filter((_, i) => i !== index))}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

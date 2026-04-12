import React from 'react';
import Header from './Header';
import StepProgress from './StepProgress';
import CourseForm from './CourseForm';
import EnrollmentForm from './EnrollmentForm';
import StudentTable from './StudentTable';
import ActionButtons from './ActionButtons';

export default function GenerateTimetable() {
  return (
    <div className="content-wrapper">
      <Header />
      <StepProgress />
      <CourseForm />
      <EnrollmentForm />
      <StudentTable />
      <ActionButtons />
    </div>
  );
}

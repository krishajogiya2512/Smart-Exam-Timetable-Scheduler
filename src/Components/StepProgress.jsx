import React from 'react';

export default function StepProgress() {
  const steps = [
    { id: 1, label: 'Courses & students', active: true },
    { id: 2, label: 'Rooms & slots', active: false },
    { id: 3, label: 'Review & generate', active: false },
    { id: 4, label: 'Timetable output', active: false },
  ];

  return (
    <div className="step-progress">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className={`step ${step.active ? 'active' : ''}`}>
            <div className="step-circle">{step.id}</div>
            <span>{step.label}</span>
          </div>
          {index < steps.length - 1 && <div className="step-line"></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

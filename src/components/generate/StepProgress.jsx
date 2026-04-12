import React from 'react';

export default function StepProgress({ currentStep }) {
  const steps = [
    { id: 1, label: 'Courses & students' },
    { id: 2, label: 'Rooms & slots' },
    { id: 3, label: 'Review & generate' }
  ];

  return (
    <div className="step-progress">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className={`step ${currentStep >= step.id ? 'active' : ''}`}>
            <div className="step-circle">{step.id}</div>
            <span style={{ marginLeft: '8px' }}>{step.label}</span>
          </div>
          {index < steps.length - 1 && <div className={`step-line ${currentStep > step.id ? 'active' : ''}`} style={currentStep > step.id ? { backgroundColor: 'var(--primary)' } : {}}></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

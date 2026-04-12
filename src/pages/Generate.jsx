import React, { useState } from 'react';
import StepProgress from '../components/generate/StepProgress';
import Step1 from '../components/generate/Step1';
import Step2 from '../components/generate/Step2';
import Step3 from '../components/generate/Step3';

export default function Generate({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [slots, setSlots] = useState([]);

  const handleNext = () => setCurrentStep(prev => prev + 1);
  const handleBack = () => setCurrentStep(prev => prev - 1);

  return (
    <div className="content-wrapper">
      <header className="header">
        <div>
          <h1 className="header-title">Generate timetable</h1>
          <p className="text-gray text-sm">Step {currentStep} of 3 — {
            currentStep === 1 ? 'enter course & student data' : 
            currentStep === 2 ? 'enter rooms & slots data' : 
            'review and generate'
          }</p>
        </div>
        <span className="badge">Draft</span>
      </header>

      {/* StepProgress was originally static, passing step purely for visual matches or letting it be statically active for 1 as per Krisha's design, but we'll try to use it dynamically if it accepts props, else we ignore for now or pass props */}
      <StepProgress currentStep={currentStep} />

      {currentStep === 1 && (
        <Step1 
          courses={courses} 
          setCourses={setCourses} 
          students={students}
          setStudents={setStudents}
          onNext={handleNext} 
          onBack={onComplete}
        />
      )}

      {currentStep === 2 && (
        <Step2 
          rooms={rooms} 
          setRooms={setRooms} 
          slots={slots} 
          setSlots={setSlots} 
          onNext={handleNext} 
          onBack={handleBack} 
        />
      )}

      {currentStep === 3 && (
        <Step3 
          courses={courses} 
          rooms={rooms} 
          slots={slots} 
          onBack={handleBack} 
          onComplete={onComplete} 
        />
      )}
    </div>
  );
}

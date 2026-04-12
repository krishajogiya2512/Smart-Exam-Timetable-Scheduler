import React from 'react';
import Sidebar from './Components/Sidebar';
import GenerateTimetable from './Components/GenerateTimetable';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <GenerateTimetable />
      </main>
    </div>
  );
}

export default App;

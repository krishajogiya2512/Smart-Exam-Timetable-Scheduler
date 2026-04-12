import React, { useState } from 'react';
import Sidebar from './components/dashboard/Sidebar';
import Dashboard from './pages/Dashboard';
import Generate from './pages/Generate';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="app-container">
      {/* Global Sidebar */}
      <Sidebar activePage={currentPage} onNavigate={setCurrentPage} />
      
      {/* Dynamic Content */}
      {currentPage === 'dashboard' && <Dashboard onGenerateClick={() => setCurrentPage('generate')} />}
      {currentPage === 'generate' && <Generate onComplete={() => setCurrentPage('dashboard')} />}
    </div>
  );
}

export default App;

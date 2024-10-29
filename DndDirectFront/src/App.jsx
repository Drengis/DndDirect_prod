import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'; // Компонент для стартовой страницы
import ArmorsPage from './Pages/ArmorsPage/ArmorsPage'; // Компонент для стартовой страницы

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/armors" element={<ArmorsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
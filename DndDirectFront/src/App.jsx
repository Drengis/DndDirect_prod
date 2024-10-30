import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ArmorsPage from './Pages/ArmorsPage/ArmorsPage';
import WeaponsPage from './Pages/WeaponsPage/WeaponsPage';
import SpellsPage from './Pages/SpellsPage/SpellsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/armors" element={<ArmorsPage />} />
        <Route path="/weapons" element={<WeaponsPage />} />
        <Route path="/spells" element={<SpellsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
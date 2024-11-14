import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './app/pages/HomePage';
import WorkoutBuilderPage from './app/pages/WorkoutBuilderPage';
import ClassesPage from './app/pages/ClassesPage';
import TrainersPage from './app/pages/TrainersPage';
import AboutPage from './app/pages/AboutPage';
import Register from './components/SignUp';

import './App.css';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className='App'>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/workout-builder" element={<WorkoutBuilderPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/trainers" element={<TrainersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
  </div>
  );
}

export default App;

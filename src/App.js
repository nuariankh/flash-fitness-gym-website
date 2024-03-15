import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './app/pages/HomePage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <HomePage />
      <Footer />
      {/* <Routes>
        <Route path="/Home" element={} />
        <Route path="/WorkoutBuilder" element={} />
        <Route path="/Classes" element={} />
        <Route path="/Trainers" element={} />
        <Route path="/About" element={} />
      </Routes> */}
      <main>

      </main>
    </div>
    
    // <div className='App'>
    //   <Header />
    //   <Routes>
    //     <Route path='/' element={<HomePage />} />
    //     <Route path='/' element={<WorkoutBuilderPage />} />
    //     <Route path='/' element={<ClassesPage />} />
    //     <Route path='/' element={<TrainersPage />} />
    //     <Route path='/' element={<AboutPage />} />
    //   </Routes>
    // </div>
  );
}

export default App;

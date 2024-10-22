import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/home';
import Project from './components/project/project';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Project/>} />
        
      </Routes>
    </div>
  );
}

export default App;

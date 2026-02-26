import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login/Login'; 
import Dashboard from './Dashboard/Dashboard';
import MainStats from './Dashboard/Pages/Main/MainStats'; 
import Users from './Dashboard/Pages/Users';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="main" />} /> 
          <Route path="main" element={<MainStats />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
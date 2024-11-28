import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
// Import your pages (components)
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Stock from './pages/Stock';
import Billing from './pages/Billing';
import Dues from './pages/Dues';
import Income from './pages/Income';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar - you can add it globally here */}
        {/* <Navbar /> */}

        {/* Define Routes for each page using Routes */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/dues" element={<Dues />} />
          <Route path="/income" element={<Income />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

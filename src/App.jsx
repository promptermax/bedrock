import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import GetAQuoteForm from './components/GetAQuoteForm';
import PortfolioPage from './components/PortfolioPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/faq" element={<MainLayout><FAQPage /></MainLayout>} />
        <Route path="/get-a-quote" element={<MainLayout><GetAQuoteForm /></MainLayout>} />
        <Route path="/portfolio" element={<MainLayout><PortfolioPage /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;

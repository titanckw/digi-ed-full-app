import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import your pages
import About from './pages/about/page';
import Tutors from './pages/tutors/page';
import Dashboard from './pages/dashboard/tutor/page';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/tutors" element={<Tutors />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

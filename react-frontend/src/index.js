import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Admin } from './components/Admin';
import { AdminDashboard } from './components/AdminDashboard';
import GererClients from './components/GererClients';
import { GererSeances } from './components/GererSeances';
import { GererReservations } from './components/GererReservations';
import { GererOffres } from './components/GererOffres';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="admin" element={<Admin />}>
        <Route path="tableau-de-bord" element={<AdminDashboard />} />
        <Route path="gerer-les-clients" element={<GererClients />} />
        <Route path="gerer-les-seances" element={<GererSeances />} />
        <Route path="gerer-les-reservations" element={<GererReservations />} />
        <Route path="gerer-les-offres" element={<GererOffres />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you wsant to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

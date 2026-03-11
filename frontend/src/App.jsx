import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import HospitalSearch from './pages/HospitalSearch';
import PharmacyStore from './pages/PharmacyStore';
import Appointments from './pages/Appointments';
import Login from './pages/Login';
import Register from './pages/Register';
import LabTests from './pages/LabTests';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospitals" element={<HospitalSearch />} />
          <Route path="/pharmacy" element={<PharmacyStore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard Routes protected by Auth check */}
          <Route
            path="/dashboard/appointments"
            element={
              <ProtectedRoute>
                <Appointments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/lab-tests"
            element={
              <ProtectedRoute>
                <LabTests />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Navigate to="/dashboard/appointments" replace />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

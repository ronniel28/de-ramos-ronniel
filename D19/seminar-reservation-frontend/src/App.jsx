
import {  Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserDashboard from './pages/user/UserDashboard';
import Unauthorized from './pages/Unauthorized';

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-10">
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Unauthorized page */}
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* User Dashboard */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

           {/* User Dashboard */}
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>

      </main>
      <Footer />
    </>
  );
}

export default App

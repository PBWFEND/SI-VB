import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// Import semua halaman dari folder views
import Home from '../views/home/index.jsx';
import Register from '../views/auth/register.jsx';
import Login from '../views/auth/login.jsx';
import Dashboard from '../views/admin/dashboard.jsx';
import UserIndex from '../views/admin/users/index.jsx';
import UserCreate from '../views/admin/users/create';
import UserEdit from '../views/admin/users/edit.jsx';

function AppRoutes() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <Routes>
            {/* Rute untuk halaman utama */}
            <Route path="/" element={<Home />} />

            {/* Rute untuk Register & Login */}
            <Route path="/register" element={
                isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Register />
            } />
            <Route path="/login" element={
                isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <Login />
            } />

            {/* Rute untuk Dashboard (Hanya bisa dibuka jika sudah login) */}
            <Route path="/admin/dashboard" element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
            } />
            <Route path="/admin/users" element={<UserIndex />
            } />
            <Route path="/admin/users/create" element={<UserCreate />
            } />
            <Route path="/admin/users/edit/:id" element={<UserEdit />
            } />
        </Routes>
    );
}

export default AppRoutes;
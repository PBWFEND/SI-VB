import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import PrivateRoute from "./routes/PrivateRoute"; 
import { Toaster } from 'react-hot-toast';

import Register from "./views/auth/Register";
import Login from "./views/auth/Login";
import Dashboard from "./views/admin/Dashboard";
import UserIndex from "./views/admin/users/index";
import UserCreate from "./views/admin/users/create";
import UserEdit from "./views/admin/users/edit";

export default function App() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />

        {/* Rute Terproteksi */}
        <Route path="/admin/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/admin/users" element={<PrivateRoute><UserIndex /></PrivateRoute>} />
        <Route path="/admin/users/create" element={<PrivateRoute><UserCreate /></PrivateRoute>} />
        <Route path="/admin/users/edit/:id" element={<PrivateRoute><UserEdit /></PrivateRoute>} />
      </Routes>
    </div>
  );
}
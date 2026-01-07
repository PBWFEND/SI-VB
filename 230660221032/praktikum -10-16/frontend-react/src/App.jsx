import AppRoutes from './routes';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  // Mengambil status login dari Context
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // Fungsi untuk menghapus jejak login (Logout)
  const logout = () => {
    localStorage.removeItem('token'); // Menghapus token dari browser
    setIsAuthenticated(false);       // Mengubah status menjadi tidak login
    navigate('/login');              // Mengarahkan kembali ke halaman login
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">PRAKTIKUM FULLSTACK</Link>
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-link">Home</Link>
            
            {/* LOGIKA DINAMIS: Jika BELUM login, tampilkan Register & Login */}
            {!isAuthenticated ? (
              <>
                <Link to="/register" className="nav-link">Register</Link>
                <Link to="/login" className="nav-link">Login</Link>
              </>
            ) : (
              /* Jika SUDAH login, tampilkan Dashboard & Logout */
              <>
                <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/admin/users" className="nav-link">Manage Users</Link>
                <button onClick={logout} className="btn btn-danger btn-sm ms-2">Logout</button>
              </>
            )}
          </div>
        </div>
      </nav>

      <div className="container">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
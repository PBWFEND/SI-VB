import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
    const navigate = useNavigate();
    
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const logout = () => {
        Cookies.remove('token');
        
        setIsAuthenticated(false);
        
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-4 shadow-sm">
            <div className="container">
                <Link to="/" className="navbar-brand fw-bold">FULLSTACK APP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* Jika SUDAH login, tampilkan menu ini */}
                        {isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link to="/admin/dashboard" className="nav-link">DASHBOARD</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/users" className="nav-link">USERS</Link>
                                </li>
                                <li className="nav-item">
                                    <button onClick={logout} className="btn btn-danger btn-sm ms-lg-3 mt-1">LOGOUT</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">LOGIN</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">REGISTER</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
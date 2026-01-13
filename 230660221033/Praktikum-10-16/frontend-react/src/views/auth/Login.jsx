import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Api from '../../api';
import Cookies from 'js-cookie';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await Api.post('/api/login', { email, password });
            Cookies.set('token', response.data.data.token);
            setIsAuthenticated(true);
            navigate('/admin/dashboard');
        } catch (error) {
            setErrorMsg(error.response.data.message);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card shadow border-0 rounded-3">
                        <div className="card-body">
                            <h4 className="fw-bold">LOGIN</h4>
                            <hr />
                            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
                            <form onSubmit={login}>
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 shadow-sm">LOGIN</button>
                            </form>
                            <div className="mt-3 text-center">
                                Belum punya akun? <Link to="/register">Daftar sekarang</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../../api';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setValidation] = useState([]);
    const [loginFailed, setLoginFailed] = useState(false);

    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext);

    const login = async (e) => {
        e.preventDefault();

        await Api.post('/api/login', {
            email: email,
            password: password
        })
        .then((response) => {
            // 1. Ambil token dari response
            const token = response.data.data.token;

            // 2. Simpan token ke LocalStorage
            localStorage.setItem('token', token);

            // 3. SET DEFAULT HEADER AXIOS SECARA LANGSUNG (Tambahkan ini!)
            Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // 4. Ubah status Auth menjadi true
            setIsAuthenticated(true);

            // 5. Lempar ke Dashboard
            navigate('/admin/dashboard');
        })
        .catch((error) => {
            setValidation(error.response.data);
            setLoginFailed(true);
        })
    }

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-4">
                <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                        <h4 className="fw-bold">LOGIN USER</h4>
                        <hr />
                        {loginFailed && <div className="alert alert-danger">Email atau Password Salah!</div>}
                        <form onSubmit={login}>
                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                            </div>
                            {validation.email && <div className="alert alert-danger">{validation.email[0]}</div>}

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </div>
                            {validation.password && <div className="alert alert-danger">{validation.password[0]}</div>}

                            <button type="submit" className="btn btn-primary w-100">LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
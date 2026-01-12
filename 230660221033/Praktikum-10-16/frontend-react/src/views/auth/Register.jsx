import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Api from '../../api';

export default function Register() {
    const navigate = useNavigate();

    // State untuk form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState([]);

    const register = async (e) => {
        e.preventDefault();
        try {
            await Api.post('/api/register', { name, email, password });
            navigate('/login'); // Jika sukses, lempar ke login
        } catch (error) {
            setValidation(error.response.data.errors);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow border-0 rounded-3">
                        <div className="card-body">
                            <h4 className="fw-bold">REGISTER</h4>
                            <hr />
                            {validation.length > 0 && (
                                <div className="alert alert-danger">
                                    {validation.map((error, index) => (
                                        <p key={index} className="m-0">{error.path}: {error.msg}</p>
                                    ))}
                                </div>
                            )}
                            <form onSubmit={register}>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 shadow-sm">REGISTER</button>
                            </form>
                            <div className="mt-3 text-center">
                                Sudah punya akun? <Link to="/login">Login di sini</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
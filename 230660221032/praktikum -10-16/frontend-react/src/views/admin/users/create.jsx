import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Api from '../../../api';

export default function UserCreate() {
    // 1. State untuk form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // State untuk validasi error dari backend
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    // 2. Fungsi simpan data
    const storeUser = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        // Mengirim data ke backend
        await Api.post('/api/admin/users', {
            name: name,
            email: email,
            password: password
        }, {
            headers: {
                Authorization: token // Kirim token murni tanpa Bearer
            }
        })
        .then(() => {
            // Redirect ke halaman index user
            navigate('/admin/users');
        })
        .catch((error) => {
            // Set error validasi ke state
            setErrors(error.response.data.errors);
        });
    };

    return (
        <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
                <h5 className="fw-bold">ADD USER</h5>
                <hr />
                <form onSubmit={storeUser}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Full Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                        {errors.name && (
                            <div className="alert alert-danger mt-2">{errors.name[0]}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Email Address</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                        {errors.email && (
                            <div className="alert alert-danger mt-2">{errors.email[0]}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        {errors.password && (
                            <div className="alert alert-danger mt-2">{errors.password[0]}</div>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary btn-sm me-2">SAVE</button>
                    <Link to="/admin/users" className="btn btn-warning btn-sm">CANCEL</Link>
                </form>
            </div>
        </div>
    );
}
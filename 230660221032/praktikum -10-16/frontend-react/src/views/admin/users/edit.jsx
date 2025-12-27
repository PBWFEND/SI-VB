import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Api from '../../../api';

export default function UserEdit() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Password opsional saat edit
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams(); // Ambil ID dari URL

    // Fungsi untuk mengambil data user berdasarkan ID
    useEffect(() => {
        const fetchDetailUser = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await Api.get(`/api/admin/users/${id}`, {
                    headers: { Authorization: token }
                });
                // Isi state dengan data dari backend
                setName(response.data.data.name);
                setEmail(response.data.data.email);
            } catch (error) {
                console.error("Gagal mengambil detail user:", error.response);
            }
        };
        fetchDetailUser();
    }, [id]);

    const updateUser = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        await Api.put(`/api/admin/users/${id}`, {
            name: name,
            email: email,
            password: password // Jika kosong, backend biasanya tidak akan mengubah password
        }, {
            headers: { Authorization: token }
        })
        .then(() => {
            navigate('/admin/users');
        })
        .catch((error) => {
            setErrors(error.response.data.errors);
        });
    };

    return (
        <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
                <h5 className="fw-bold">EDIT USER</h5>
                <hr />
                <form onSubmit={updateUser}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Full Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        {errors.name && <div className="alert alert-danger mt-2">{errors.name[0]}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Email Address</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <div className="alert alert-danger mt-2">{errors.email[0]}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Password <small className="text-muted">(Kosongkan jika tidak ingin mengubah)</small></label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-sm me-2">UPDATE</button>
                    <Link to="/admin/users" className="btn btn-warning btn-sm">CANCEL</Link>
                </form>
            </div>
        </div>
    );
}
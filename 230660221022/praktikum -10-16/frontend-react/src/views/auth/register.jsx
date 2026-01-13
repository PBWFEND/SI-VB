import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../../api'; // Menggunakan config API yang kita buat di awal

export default function Register() {
    // 1. Definisikan State untuk menampung input form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setValidation] = useState([]);
    
    const navigate = useNavigate();

    // 2. Fungsi untuk menangani pengiriman data (submit)
    const register = async (e) => {
        e.preventDefault();

        // Kirim data ke backend (endpoint /api/register)
        await Api.post('/api/register', {
            name: name,
            email: email,
            password: password
        })
        .then(() => {
            // Jika berhasil, lempar ke halaman login
            navigate('/login');
        })
        .catch((error) => {
            // Jika gagal (validasi), tampilkan errornya
            setValidation(error.response.data);
        })
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                        <h4 className="fw-bold">REGISTER USER</h4>
                        <hr />
                        <form onSubmit={register}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                            </div>
                            {validation.name && <div className="alert alert-danger">{validation.name[0]}</div>}

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

                            <button type="submit" className="btn btn-primary w-100">REGISTER</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
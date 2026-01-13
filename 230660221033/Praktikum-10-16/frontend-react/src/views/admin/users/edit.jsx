import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Api from '../../../api';

export default function UserEdit() {
    const navigate = useNavigate();
    const { id } = useParams(); 

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [validation, setValidation] = useState([]);

    const fetchDetailUser = async () => {
        try {
            const response = await Api.get(`/api/admin/users/${id}`);
            setName(response.data.data.name);
            setEmail(response.data.data.email);
        } catch (error) {
            console.error("Gagal mengambil data detail:", error);
        }
    }

    useEffect(() => {
        fetchDetailUser();
    }, []);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await Api.put(`/api/admin/users/${id}`, {
                name: name,
                email: email,
                password: password
            });
            navigate('/admin/users');
        } catch (error) {
            setValidation(error.response.data.errors);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-header bg-primary text-white">
                            <h5 className="m-0">EDIT USER</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updateUser}>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Full Name</label>
                                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Email Address</label>
                                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Password</label>
                                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Isi jika ingin mengubah password" />
                                    <small className="text-muted">Kosongkan jika tidak ingin mengubah password.</small>
                                </div>

                                <button type="submit" className="btn btn-md btn-primary rounded-sm shadow border-0">UPDATE</button>
                                <Link to="/admin/users" className="btn btn-md btn-warning rounded-sm shadow border-0 ms-2">CANCEL</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
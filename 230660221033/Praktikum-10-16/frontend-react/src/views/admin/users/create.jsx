import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Api from '../../../api';

export default function UserCreate() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState([]);

    const storeUser = async (e) => {
        e.preventDefault();
        try {
            await Api.post('/api/admin/users', {
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
                            <h5 className="m-0">ADD USER</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={storeUser}>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Full Name</label>
                                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                                    {validation.find(error => error.path === 'name') && (
                                        <div className="alert alert-danger mt-2">
                                            {validation.find(error => error.path === 'name').msg}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Email Address</label>
                                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                    {validation.find(error => error.path === 'email') && (
                                        <div className="alert alert-danger mt-2">
                                            {validation.find(error => error.path === 'email').msg}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Password</label>
                                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                    {validation.find(error => error.path === 'password') && (
                                        <div className="alert alert-danger mt-2">
                                            {validation.find(error => error.path === 'password').msg}
                                        </div>
                                    )}
                                </div>

                                <button type="submit" className="btn btn-md btn-primary rounded-sm shadow border-0">SAVE</button>
                                <Link to="/admin/users" className="btn btn-md btn-warning rounded-sm shadow border-0 ms-2">CANCEL</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
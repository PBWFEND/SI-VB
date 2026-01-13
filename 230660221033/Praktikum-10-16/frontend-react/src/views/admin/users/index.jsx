import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../../api';
import toast from 'react-hot-toast'; 

export default function UserIndex() {
    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true); 

const fetchUsers = async () => {
    setLoading(true);
    try {
        const response = await Api.get('/api/admin/users');
        setUsers(response.data.data);
    } finally {
        setLoading(false); 
    }
}

    useEffect(() => {
        fetchUsers();
    }, []);

   const deleteUser = async (id) => {
    try {
        await Api.delete(`/api/admin/users/${id}`);
        toast.success("User berhasil dihapus!", { position: "top-right" }); 
        fetchUsers();
    } catch (error) {
        toast.error("Gagal menghapus user.");
    }
}

    
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <Link to="/admin/users/create" className="btn btn-md btn-success rounded shadow-sm border-0 mb-3">ADD USER</Link>
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Email Address</th>
                                        <th scope="col" style={{ width: "20%" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* CEK APAKAH SEDANG LOADING */}
                                    {loading ? (
                                        <tr>
                                            <td colSpan="3" className="text-center">
                                                <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                                                Memuat data...
                                            </td>
                                        </tr>
                                    ) : (
                                        users.length > 0 ? (
                                            users.map((user, index) => (
                                                <tr key={index}>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td className="text-center">
                                                        <Link to={`/admin/users/edit/${user.id}`} className="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</Link>
                                                        <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center">
                                                    <div className="alert alert-danger mb-0">Data Belum Tersedia!</div>
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

<Link to="/admin/users/create" className="btn btn-md btn-success ...">ADD USER</Link>
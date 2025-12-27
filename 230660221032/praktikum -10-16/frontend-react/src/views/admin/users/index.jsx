import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../../api';

export default function UserIndex() {
    const [users, setUsers] = useState([]);
    // State baru untuk memicu refresh data
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchDataUsers = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await Api.get('/api/admin/users', {
                        headers: { Authorization: token }
                    });
                    const data = response.data.data ? response.data.data : response.data;
                    setUsers(data);
                } catch (err) {
                    // Pakai variabel 'err' agar tidak kena error "unused-vars"
                    console.error("Gagal ambil data:", err);
                }
            }
        };

        fetchDataUsers();
    }, [refresh]); // Setiap kali 'refresh' berubah, data akan diambil ulang

    const deleteUser = async (id) => {
        const token = localStorage.getItem('token');
        if (window.confirm("Apakah Anda yakin ingin menghapus user ini?")) {
            try {
                await Api.delete(`/api/admin/users/${id}`, {
                    headers: { Authorization: token }
                });
                
                // Cukup ubah state refresh untuk memicu useEffect di atas
                setRefresh(!refresh);
                alert("User berhasil dihapus!");
            } catch (err) {
                console.error("Gagal hapus:", err);
                alert("Gagal menghapus data.");
            }
        }
    };

    return (
        <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold">LIST USERS</h5>
                    <Link to="/admin/users/create" className="btn btn-success btn-sm">ADD USER</Link>
                </div>
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Full Name</th>
                            <th>Email Address</th>
                            <th width="15%">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="text-center">
                                        <Link to={`/admin/users/edit/${user.id}`} className="btn btn-primary btn-sm me-2">EDIT</Link>
                                        <button 
                                            onClick={() => deleteUser(user.id)} 
                                            className="btn btn-danger btn-sm"
                                        >
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center">Data Belum Tersedia!</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
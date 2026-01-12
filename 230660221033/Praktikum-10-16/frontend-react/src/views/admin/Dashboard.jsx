import { useState, useEffect } from 'react';

export default function Dashboard() {
    const [user, setUser] = useState({});

    useEffect(() => {
        // Ambil data user dari localStorage yang disimpan saat login
        const data = localStorage.getItem('user');
        if (data) {
            setUser(JSON.parse(data));
        }
    }, []);

    return (
        <div className="container mt-5">
            <div className="card border-0 shadow-sm rounded-3">
                <div className="card-body p-4 text-center">
                    <h3>Halo, <strong>{user.name}</strong>! 👋</h3>
                    <p className="text-muted">Selamat datang di Panel Administrasi.</p>
                    <hr />
                    <div className="row mt-4">
                        <div className="col-md-6 offset-md-3">
                            <div className="alert alert-info border-0 shadow-sm">
                                Anda login menggunakan email: <strong>{user.email}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
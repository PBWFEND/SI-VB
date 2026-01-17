import { useState } from 'react'
import api from './api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Email dan password wajib diisi')
      return
    }

    try {
      const res = await api.post('/auth/login', { email, password })
      localStorage.setItem('token', res.data.token)
      window.location.href = '/diary'

    } catch {
      alert('Login gagal')
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>🔐 Login</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="email@gmail.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="******"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}

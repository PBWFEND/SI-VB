/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './api'

export default function Diary() {
  const [diaries, setDiaries] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const navigate = useNavigate()

  const loadData = async () => {
    try {
      const res = await api.get('/diaries')
      setDiaries(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      navigate('/login')
      return
    }

    loadData()
  }, [])

  async function addDiary() {
    if (!title || !content) {
      alert('Mata Kuliah & Isi Catatan wajib diisi')
      return
    }

    await api.post('/diaries', { title, content })
    setTitle('')
    setContent('')
    loadData()
  }

  const deleteDiary = async (id) => {
    await api.delete(`/diaries/${id}`)
    loadData()
  }

  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }


  return (
    <div className="app">
      <div className="container">

        <div className="header-bar">
          <button className="logout-btn" onClick={logout}>
          🔒 Logout
          </button>
        </div>


        <h2>📓 Diary Kuliah</h2>

        <label>Mata Kuliah</label>
        <input
          placeholder="Contoh: Pemrograman Web"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label>Isi Catatan</label>
        <textarea
          placeholder="Tulis catatan kuliah di sini..."
          value={content}
          onChange={e => setContent(e.target.value)}
        />

        <button className="primary" onClick={addDiary}>
          ➕ Tambah Diary
        </button>

        <ul>
          {diaries.map(d => (
            <li className="diary-item" key={d.id}>
              <div className="diary-text">
                <b>{d.title}</b>
                <p>{d.content}</p>
              </div>
              <button
                className="delete"
                onClick={() => deleteDiary(d.id)}
              >
                ✖ Hapus
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

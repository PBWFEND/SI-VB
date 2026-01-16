import { useState } from 'react'
import Login from './Login'
import Diary from './diary'

export default function App() {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem('token'))

  return isLogin ? <Diary /> : <Login onLogin={() => setIsLogin(true)} />


  
}

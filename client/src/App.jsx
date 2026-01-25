import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/api/hello')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container">
      <h1>Full Stack App</h1>
      <p>{loading ? 'Loading...' : message}</p>
    </div>
  )
}

export default App

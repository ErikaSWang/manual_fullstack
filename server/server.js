import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// API routes must come before static file serving
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' })
})

// Only listen when running locally, not on Vercel
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
}

// Export for Vercel serverless
export default app

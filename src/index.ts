import express from 'express'
const app = express()
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import apiRouter from './routes/api.routes'

dotenv.config()

const PORT = process.env.PORT

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get('/', (_req, res) => res.redirect('/api'))
app.use('/api', apiRouter)

app.listen(PORT, () => console.log(`--\n--\n\nServer running at http://localhost:${PORT}\n\n--\n--`))

import express, { Request, Response, Express } from 'express'
const app = express()
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('connected!')
})

app.listen(PORT, () => console.log(`--\n--\n\nServer running at http://localhost:${PORT}\n\n--\n--`))

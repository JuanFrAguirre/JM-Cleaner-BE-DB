import { createPool } from 'mysql2/promise'

const pool = createPool({
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Juanfies2?',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_P) || 3306,
  database: process.env.DB_DATABASE || 'users',
})

export default pool

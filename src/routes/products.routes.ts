import express from 'express'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send('products works!')
})

export default router

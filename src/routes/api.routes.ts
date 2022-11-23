import express from 'express'
import storesRouter from './stores.routes'
import productsRouter from './products.routes'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send('<h1>JM-Cleaner DataBase</h1>')
})

router.use('/stores', storesRouter)
router.use('/products', productsRouter)

export default router

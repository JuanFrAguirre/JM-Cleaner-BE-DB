import express from 'express'
import { storesController } from '../controllers/stores.controller'
const router = express.Router()

router
  .get('/', storesController.getAllStores)
  .get('/:id', storesController.getStoreById)
  .get('/type/:type', storesController.getStoreByType)
  .put('/:id', storesController.putStoreDataById)
  .post('/', storesController.postStore)
  .delete('/:id', storesController.deleteStore)

export default router

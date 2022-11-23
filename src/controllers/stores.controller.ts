import { Request, Response } from 'express'
import { storesHandler } from '../handlers/stores.handlers'

export const storesController = {
  getAllStores: async (_req: Request, res: Response) => {
    const data = await storesHandler.getAllStores()
    res.json(data)
  },
  getStoreById: async (req: Request, res: Response) => {
    const data: any = await storesHandler.getStoreById(Number(req.params.id)) // eslint-disable-line
    data.error ? res.status(404).json(data) : res.status(200).json(data)
  },
  getStoreByType: async (req: Request, res: Response) => {
    const data: any = await storesHandler.getStoreByType(req.params.type) // eslint-disable-line
    data.error ? res.status(404).json(data) : res.status(200).json(data)
  },
  putStoreDataById: async (req: Request, res: Response) => {
    const data: any = await storesHandler.editStore(Number(req.params.id), req.body) // eslint-disable-line
    data.error ? res.status(500).json(data) : res.status(200).json(data)
  },
}

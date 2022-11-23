import { OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2'
import pool from '../db/db.config'
import { Store } from '../interfaces/Store'

const processQueryResult = (data: RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader) => {
  return Object.values(JSON.parse(JSON.stringify(data)))
}

export const storesHandler = {
  getAllStores: async () => {
    const [result] = await pool.query('SELECT * FROM stores')
    return processQueryResult(result)
  },
  getStoreById: async (id: number) => {
    const [result] = await pool.query(`SELECT * FROM stores WHERE id = ${id}`)
    const data = processQueryResult(result)
    return data.length === 0 ? { error: 'ID does not exist' } : data
  },
  getStoreByType: async (type: string) => {
    if (type !== 'farmacias' && type !== 'opticas') return { error: 'Incorrect type' }
    const [result] = await pool.query(`SELECT * FROM stores WHERE type = "${type}"`)
    console.log('result', result)
    return processQueryResult(result)
  },
  editStore: async (id: number, data: Store) => {
    if (!data.name || !data.address || !data.loc || !data.type || !data.state || !data.createdAt)
      return { error: 'Incorrect data' }
    const storeExists: any = await storesHandler.getStoreById(id) // eslint-disable-line
    if (storeExists.error) return { error: 'Wrong ID' }
    const [result] = await pool.query(`UPDATE stores SET
    name = "${data.name}" ,
    address = "${data.address}",
    phone = ${data.phone ? `"${data.phone}"` : null},
    coordenates = "${data.coordenates ? `"${data.coordenates}"` : null}",
    loc = "${data.loc}",
    type = "${data.type}",
    state = "${data.state}",
    brand = "${data.brand ? `"${data.brand}"` : null}",
    createdAt = "${data.createdAt}",
    editedAt = "${data.editedAt ? `"${data.editedAt}"` : null}"
    WHERE id = ${id}`)
    return processQueryResult(result)
  },
}

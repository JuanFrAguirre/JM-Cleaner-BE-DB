export interface Store {
  id: number
  name: string
  address: string
  phone?: string
  coordenates?: string
  loc: string
  type: string
  state: string
  brand?: string
  createdAt: string
  editedAt?: string
}

export interface Product {
  id: number
  name: string
  photoUrl: string
  description: string
  createdAt: string
  editedAt?: string
}

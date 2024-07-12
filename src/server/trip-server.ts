import { api } from './api'

export type TripDetails = {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

async function getById(id: string) {
  try {
    const { data } = await api.get<{ trip: TripDetails }>(`/trips/${id}`)
    return data.trip
  } catch (error) {
    throw error
  }
}

async function create() {

}

export const tripServer = { getById, create }
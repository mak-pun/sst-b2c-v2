import axios from 'axios'
import config from '../../config'
import { Hotel } from '../types'
import getDefaultHeaders from '../../util/helpers/getDefaultHeaders'
import tokenManager from '../../util/helpers/tokenManager'

export interface FetchResponsePayload {
  hotel: Hotel,
  status: string;
}

export async function fetch(hotelId: string) {
  try {
    const token = tokenManager.getToken()
    const url = config.apiUrl + `hotels/${hotelId}?token=${token}`
    const { data } = await axios.get<FetchResponsePayload>(url, getDefaultHeaders())
    return data
  } catch (err) {
    throw err
  }
}

import axios from 'axios'
import getDefaultHeaders from '../../util/helpers/getDefaultHeaders'
import config from '../../config'
import { HotelResult } from '../types'
import tokenManager from '../../util/helpers/tokenManager'


export interface FetchResponsePayload {
    hotel: HotelResult,
    status: string;
    search_id: string;
}

export async function fetch(searchId: string, hotelId: string) {
    try {
        const token = tokenManager.getToken()
        const url = config.apiUrl + `hotel/search/search-id/${searchId}/hotel/${hotelId}?token=${token}`
        const { data } = await axios.get<FetchResponsePayload>(url, getDefaultHeaders())
        return data
    } catch (err) {
        throw err
    }
}
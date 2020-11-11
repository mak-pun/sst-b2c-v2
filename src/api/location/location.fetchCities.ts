import axios from 'axios'
import getDefaultHeaders from '../../util/helpers/getDefaultHeaders'
import config from '../../config'
import { City } from '../types'
import tokenManager from '../../util/helpers/tokenManager'

export interface FetchCitiesResponsePayload {
    cities: Array<City>;
}

export async function fetchCities() {
    try {
        const token = tokenManager.getToken()
        const url = config.apiUrl + `cities?token=${token}`
        const { data } = await axios.get<FetchCitiesResponsePayload>(url, getDefaultHeaders())
        return data
    } catch (err) {
        throw err
    }
}
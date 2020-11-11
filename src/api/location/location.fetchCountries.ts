import axios from 'axios'
import getDefaultHeaders from '../../util/helpers/getDefaultHeaders'
import config from '../../config'
import { Country } from '../types'
import tokenManager from '../../util/helpers/tokenManager'

export interface FetchCountriesResponsePayload {
    countries: Array<Country>;
}

export async function fetchCountries() {
    try {
        const token = tokenManager.getToken()
        const url = config.apiUrl + `countries?token=${token}`
        const { data } = await axios.get<FetchCountriesResponsePayload>(url, getDefaultHeaders())
        console.log('data', data)
        return data
    } catch (err) {
        throw err
    }
}
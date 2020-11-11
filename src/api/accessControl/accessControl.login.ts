import axios from 'axios'
import getDefaultHeaders from '../../util/helpers/getDefaultHeaders'
import config from '../../config'
import { RequestPayload } from '../types'

export interface LoginRequestPayload extends RequestPayload {
    event_data: {
        email: string;
        password: string;
    }
}

export interface LoginResponsePayload {
    authenticated: boolean;
    agent_id: string;
    expiry_date: string;
    hotel_id: string;
    token_key: string;
    enable_two_factor: boolean;
    telephone: string;
    user_roles: {
        booking: string;
        account: string;
        finance: string;
        agent: string;
    },
    default_language: string;
    data_source: string;
    token: string;
    user_type: string;
    user_id: string;
    access_hotels: Array<any>,
    default_currency: string;
    status: string;
}

export async function login(
    email: string,
    password: string
) {
    try {
        const defaultHeaders = getDefaultHeaders()
        const url = config.apiUrl + `authenticate`

        const payload: LoginRequestPayload = {
            id: defaultHeaders.headers['X-TTID'],
            ttid: defaultHeaders.headers['X-TTID'],
            origin: 'b2c-app',
            event_data: {
                email,
                password
            }
        }
        const { data } = await axios.post<LoginResponsePayload>(url, payload, defaultHeaders)

        return data
    } catch (err) {
        throw err
    }
}

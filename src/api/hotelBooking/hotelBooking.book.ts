import axios from 'axios'
import getDefaultHeaders from '../../util/helpers/getDefaultHeaders'
import config from '../../config'
import { RequestPayload, Booking } from '../types'
import tokenManager from '../../util/helpers/tokenManager'

export interface BookRequestPayload extends RequestPayload {
    event_data: {
        confirm: {
            agent_recipient_list: Array<string>
        }
    }
}

export interface BookResponsePayload {
    booking: Booking;
    status: string;
}


export async function book(
    bookingId: string,
    agentRecipientList: Array<string>
) {
    try {
        const token = tokenManager.getToken()
        const defaultHeaders = getDefaultHeaders()
        const url = config.apiUrl + `hotel-bookings/${bookingId}/confirmed?token=${token}`

        const payload: BookRequestPayload = {
            id: defaultHeaders.headers['X-TTID'],
            ttid: defaultHeaders.headers['X-TTID'],
            origin: 'b2c-app',
            event_data: {
                confirm: {
                    agent_recipient_list: agentRecipientList
                }
            }
        }

        const { data } = await axios.post<BookResponsePayload>(url, payload, defaultHeaders)

        return data

    } catch (err) {
        throw err
    }
}
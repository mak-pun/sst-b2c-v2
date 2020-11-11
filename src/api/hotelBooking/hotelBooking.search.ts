import axios from 'axios'
import getDefaultHeaders from '../../util/helpers/getDefaultHeaders'
import config from '../../config'
import { RequestPayload } from '../types'
import tokenManager from '../../util/helpers/tokenManager'

export interface SearchRequestPayload extends RequestPayload {
    event_data: {
        search_criteria: {
            booking_id: string
        }
    }
}

export interface SearchResponsePayload {
    metadata: {
        total_room_night: number;
    },
    pagination: {
        page: number;
        per_page: number;
        page_count: number;
        total_count: number;
    },
    admin_booking_search_list: [
        {
            invoice_no: string;
            hotel_id: string;
            hotel_name: string;
            booking_date: string;
            agent_id: string;
            guest: {
                title: string;
                first_name: string;
                last_name: string;
                age: number;
            },
            booking_id: string;
            agent_reference: string;
            booking_state: string;
            user_id: string;
            total_price: {
                currency_code: string;
                display_price: string;
            },
            cancellation_deadline: string;
            from_date: string;
            to_date: string;
            count_room_night: number;
        }
    ],
    status: string;
}

export async function search(
    bookingId: string
) {
    try {
        const token = tokenManager.getToken()
        const defaultHeaders = getDefaultHeaders()
        const url = config.apiUrl + `hotel-bookings/search?token=${token}`

        const payload: SearchRequestPayload = {
            id: defaultHeaders.headers['X-TTID'],
            ttid: defaultHeaders.headers['X-TTID'],
            origin: 'b2c-app',
            event_data: {
                search_criteria: {
                    booking_id: bookingId
                }
            }
        }

        const { data } = await axios.post<SearchResponsePayload>(url, payload, defaultHeaders)

        return data

    } catch (err) {
        throw err
    }
}
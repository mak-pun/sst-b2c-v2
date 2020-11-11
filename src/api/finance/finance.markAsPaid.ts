import axios from 'axios'
import moment from 'moment'
import getDefaultHeaders from '../../util/helpers/getDefaultHeaders'
import config from '../../config'
import { RequestPayload, Booking } from '../types'
import tokenManager from '../../util/helpers/tokenManager'

export interface MarkAsPaidRequestPayload extends RequestPayload {
    event_data: {
      payment: {
        paid: boolean;
        payment_destination_id: string;
        bank_charge: number;
        date_received: string;
        useCreditNotes: boolean;
        useNormalPayment: boolean;
        usePrePayment: boolean;
      }
    }
  }

export interface MarkAsPaidResponsePayload {
    booking: Booking;
    status: string;
}

export async function markAsPaid(
    invoiceNo: string
  ) {
    try {
      const token = tokenManager.getToken()
      const defaultHeaders = getDefaultHeaders()
      const url = config.apiUrl + `account-receivable/invoices/${invoiceNo}/received-payments?token=${token}`
  
      const payload: MarkAsPaidRequestPayload = {
        id: defaultHeaders.headers['X-TTID'],
        ttid: defaultHeaders.headers['X-TTID'],
        origin: 'b2c-app',
        event_data: {
          payment: {
            paid: true,
            payment_destination_id: config.omisePaymentDestinationId,
            bank_charge: 0,
            date_received: moment().format('YYYY-MM-DD'),
            useCreditNotes: false,
            useNormalPayment: false,
            usePrePayment: false
          }
        }
      }
      const { data } = await axios.post<MarkAsPaidResponsePayload>(url, payload, defaultHeaders)
  
      return data
    } catch (err) {
      throw err
    }
  }
  
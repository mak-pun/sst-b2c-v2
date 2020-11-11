import axios from 'axios'
import getDefaultHeaders from '../../util/helpers/getDefaultHeaders'
import config from '../../config'
import { RequestPayload, Criteria, HotelResultSummary } from '../types'
import tokenManager from '../../util/helpers/tokenManager'

export interface SearchRequestPayload extends RequestPayload{
    event_data: {
        search_criteria: {
            criteria: Criteria
            is_summary_search: boolean;
        };
    }
}

export interface SearchResponsePayload {
    hotel_search_result: {
      search_id: string;
      criteria: Criteria,
      hotel_list: Array<HotelResultSummary>,
      already_booking: boolean;
    },
    search_criteria: {
      token: string;
      agent_id: string;
      criteria: Criteria,
      hotel_id_mapped: boolean;
      is_summary_search: boolean;
      is_included_night_rate: boolean;
    },
    search_id: string;
  }

  
export async function search(searchCriteria: Criteria) {
    try {
      const token = tokenManager.getToken()
      const defaultHeaders = getDefaultHeaders()
      const payload: SearchRequestPayload = {
        id: defaultHeaders.headers['X-TTID'],
        ttid: defaultHeaders.headers['X-TTID'],
        origin: 'b2c-app',
        event_data: {
          search_criteria: {
            criteria: searchCriteria,
            is_summary_search: true
          }
        }
      }
      const { data } = await axios.post<SearchResponsePayload>(config.apiUrl + `hotels/search?token=${token}`, payload, defaultHeaders)
      return data
    } catch (err) {
      throw err
    }
  
  }
import axios from 'axios'
import getDefaultHeaders from '../../util/helpers/getDefaultHeaders'
import config from '../../config'
import { RequestPayload, Booking, Criteria } from '../types'
import { GuestInformation } from '../../features/HotelBookingConfirmation/hotelBookingConfirmationSlice'
import { Selection } from '../../features/hotelResult/hotelResultSlice'
import tokenManager from '../../util/helpers/tokenManager'

interface QuoteRoom {
    no: string;
    selected_occupancy_solution_id: string;
    options: Array<{
      selected_option_id: string;
      amount: number;
      min: number;
      max: number;
    }>,
    sample_id: string;
    room_type: string;
    guests: Array<{
      title: string;
      first_name: string;
      last_name: string;
      age: number;
    }>
  }

export interface QuoteRequestPayload extends RequestPayload {
    event_data: {
      booking: {
        rooms: Array<QuoteRoom>;
        special_requests: Array<string>;
        remarks: Array<{text: string}>;
        flight_information: {};
        search_id: string;
        hotel_id: string;
        agent_reference: string;
      }
    }
  }

export interface QuoteResponsePayload {
    booking: Booking;
    status: string;
}

export async function quote(
    searchId: string,
    hotelId: string,
    criteria: Criteria,
    guestInformation: GuestInformation,
    finalSelections: Array<Selection>
  ) {
    try {
      const token = tokenManager.getToken()
      const defaultHeaders = getDefaultHeaders()
      const url = config.apiUrl + `hotel-bookings/quote?token=${token}`
  
  
      const guestsPerRooms: Array<Array<{
        title: string;
        first_name: string;
        last_name: string;
        age: number
      }>> = []
  
      criteria.rooms.forEach(room => {
        const guestsPerRoom = []
  
        for (let i = 0; i < room.adults; i++) {
          guestsPerRoom.push({
            title: '',
            first_name: '',
            last_name: '',
            age: 0
          })
        }
  
        for (let j = 0; j < room.children.length; j++) {
          guestsPerRoom.push({
            title: '',
            first_name: '',
            last_name: '',
            age: room.children[j]
          })
        }
  
        guestsPerRooms.push(guestsPerRoom)
      })
  
      guestsPerRooms[0][0].first_name = guestInformation.firstName
      guestsPerRooms[0][0].last_name = guestInformation.lastName
  
  
  
      const rooms: Array<QuoteRoom> = []
  
      finalSelections.forEach(finalSelection => {
        rooms.push({
          no: finalSelection.roomNo,
          selected_occupancy_solution_id: finalSelection.occupancySolutionId,
          room_type: finalSelection.selectedBedCombinations.map((bedCombination, key) => {
            return `Bed Room #${key + 1} (${bedCombination}) `
          }).join(' | '),
          sample_id: finalSelection.sampleId,
          options: finalSelection.selectedOptions.map(option => {
            return {
              selected_option_id: option.selectedOptionId,
              amount: option.amount,
              min: option.min,
              max: option.max
            }
          }),
          guests: guestsPerRooms[parseInt(finalSelection.roomNo) - 1]
        })
      })
  
  
      const payload: QuoteRequestPayload = {
        id: defaultHeaders.headers['X-TTID'],
        ttid: defaultHeaders.headers['X-TTID'],
        origin: 'b2c-app',
        event_data: {
          booking: {
            agent_reference: '',
            flight_information: {},
            hotel_id: hotelId,
            remarks: [
              {text: 'Guest email: ' + guestInformation.email},
              {text: 'Guest phone number: ' + guestInformation.phone}],
            rooms,
            search_id: searchId,
            special_requests: guestInformation.specialRequirements? [guestInformation.specialRequirements]: [],
          }
        }
      }
      const { data } = await axios.post<QuoteResponsePayload>(url, payload, defaultHeaders)
  
      return data
    } catch (err) {
      throw err
    }
  }
  
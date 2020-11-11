import axios from 'axios'
import getDefaultHeaders from '../../util/helpers/getDefaultHeaders'
import config from '../../config'
import { RequestPayload, Sample, Translations, OccupancySolution, BedRoom } from '../types'
import tokenManager from '../../util/helpers/tokenManager'

export interface RecalculateRequestPayload extends RequestPayload {
    event_data: {
        hotel_id: string;
        room_no: string;
        room_class_id: string;
        sample_id: string;
        selected_occupancy_solution_id: string;
        selected_options: Array<{
            selected_option_id: string;
            min: number;
            max: number;
            amount: number;
        }>
    }
}

export interface RecalculateResponsePayload {
    data: {
        room_class_id: string;
        room_class_name: string;
        samples: Array<Sample>
        bed_types: Array<string> // recheck
        cancellation_deadline: string;
        max_occupancy: number;
        max_total_occupancy: number;
        max_adult: number;
        max_child: number;
        child_can_consume_spare: boolean;
        availability: string;
        min_room_left: string;
        rooms: Array<BedRoom>,
        translations: {
            room_class_name: Translations
        },
        occupancy_solutions: Array<OccupancySolution>
    }

}

export async function recalculate(
    searchId: string,
    hotelId: string,
    roomNo: string,
    roomClassId: string,
    sampleId: string,
    occupancySolutionId: string,
    selectedOptions: Array<{ selectedOptionId: string; amount: number; min: number; max: number; }>
) {
    console.log('selectedOptions', selectedOptions)
    try {
        const token = tokenManager.getToken()
        const defaultHeaders = getDefaultHeaders()
        const url = config.apiUrl + `hotel-bookings/${searchId}/recalculated?token=${token}`
        const payload: RecalculateRequestPayload = {
            id: defaultHeaders.headers['X-TTID'],
            ttid: defaultHeaders.headers['X-TTID'],
            origin: 'b2c-app',
            event_data: {
                hotel_id: hotelId,
                room_no: roomNo,
                room_class_id: roomClassId,
                sample_id: sampleId,
                selected_occupancy_solution_id: occupancySolutionId,
                selected_options: selectedOptions.map(selectedOption => ({
                    selected_option_id: selectedOption.selectedOptionId,
                    min: selectedOption.min,
                    max: selectedOption.max,
                    amount: selectedOption.amount
                }))
            }
        }
        const { data } = await axios.put<RecalculateResponsePayload>(url, payload, defaultHeaders)
        return data
    } catch (err) {
        throw err
    }
}


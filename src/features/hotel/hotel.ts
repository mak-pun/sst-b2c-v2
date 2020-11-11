import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppThunk } from '../../app/store'
import type { Hotel as HotelType } from '../../api/types'
import type { FetchResponsePayload } from '../../api/hotel'

import { Hotel } from '../../api'

import { formatBedCombinationLabel } from '../../helper/format'

type BedTypesInRoomClass = { [roomClassId: string]: Array<string> }

interface HotelsState {
  hotels: { [hotelId: string]: HotelType };
  bedTypes: { [hotelId: string]: BedTypesInRoomClass }
  error: string | null;
  isLoading: boolean;
}

const initialState: HotelsState = {
  hotels: {},
  bedTypes: {},
  error: null,
  isLoading: false
}


const getBedTypesInRoomClasses = (hotel: HotelType) => {
  const bedTypes: BedTypesInRoomClass = {}
  hotel.room_classes.map(roomClass => {
    roomClass.rooms.map(room => {
      bedTypes[roomClass.room_class_id] = room.bed_combinations.map(formatBedCombinationLabel)
    })
  })
  return bedTypes
}

const repoDetails = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    getHotelStart(state: HotelsState) {
      state.isLoading = true
    },
    getHotelSuccess(state: HotelsState, action: PayloadAction<FetchResponsePayload>) {
      const { hotel } = action.payload
      state.hotels[hotel.hotel_id] = hotel
      state.bedTypes[hotel.hotel_id] = getBedTypesInRoomClasses(hotel)
      console.log('state.bedTypes[hotel.hotel_id]', state.bedTypes[hotel.hotel_id])
      state.isLoading = false
      state.error = null
    },
    getHotelFailed(state: HotelsState, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    reset(state: HotelsState, action: PayloadAction<{ hotelId: string }>) {
      const { hotelId } = action.payload
      delete state.hotels[hotelId]
      delete state.bedTypes[hotelId]
      state.error = null
      state.isLoading = false
    }
  }
})

export const {
  getHotelStart,
  getHotelSuccess,
  getHotelFailed,
  reset
} = repoDetails.actions

export default repoDetails.reducer

export const getHotel = (
  hotelId: string,
): AppThunk => async dispatch => {
  try {
    dispatch(getHotelStart())
    const res = await Hotel.fetch(hotelId)
    dispatch(getHotelSuccess(res))
  } catch (err) {
    dispatch(getHotelFailed(err.toString()))
  }
}
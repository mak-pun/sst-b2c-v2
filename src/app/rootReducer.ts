import { combineReducers } from '@reduxjs/toolkit'
import accessControlReducer from '../features/accessControl/accessControl'
import hotelReducer from '../features/hotel/hotel'
import hotelSearchReducer from '../features/hotelSearch/hotelSearchSlice'
import hotelResultReducer from '../features/hotelResult/hotelResultSlice'
import hotelBookingConfirmationReducer from '../features/HotelBookingConfirmation/hotelBookingConfirmationSlice'
import locationReducer from '../features/location/locationSlices'


const rootReducer = combineReducers({
    accessControl: accessControlReducer,
    hotel: hotelReducer,
    hotelSearch: hotelSearchReducer,
    hotelResult: hotelResultReducer,
    hotelBookingConfirmation: hotelBookingConfirmationReducer,
    location: locationReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
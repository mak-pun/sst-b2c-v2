import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Omise } from '../../helper'

import type { AppThunk } from '../../app/store'
import type { Criteria, Booking } from '../../api/types'
import type { Selection } from '../hotelResult/hotelResultSlice'

import { HotelBooking, Finance } from '../../api'

import wait from '../../util/helpers/wait'

Omise.setPublicKey('pkey_test_5ll88rt9w2hag3w7fk6');

export type GuestInformation = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    specialRequirements: string;
}

export type PaymentInformation = {
    cardHolderName: string;
    cardNumber: string;
    expiryMonth: string;
    expiryYear: string;
    ccv: string;
    token?: string;
    paid?: boolean;
}

type StepState = {
    label: string;
    active: boolean;
}

type StepStates = { [key: string]: StepState }

interface HotelBookingConfimationtState {
    stepCompleted: number;
    stepStates: StepStates;
    guestInformation: GuestInformation;
    paymentInformation: PaymentInformation,
    booking: any;
    error: string | null;
    isLoading: boolean;
}

const initialState: HotelBookingConfimationtState = {
    stepCompleted: 0,
    stepStates: {
        '1': { label: 'Customer information', active: true },
        '2': { label: 'Payment information', active: false },
        '3': { label: 'Booking is confirmed!', active: false }
    },
    guestInformation: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequirements: ''
    },
    paymentInformation: {
        cardHolderName: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        ccv: '',
        paid: false
    },
    booking: null,
    error: null,
    isLoading: false
}



const HotelBookingConfimrationSlice = createSlice({
    name: 'hotelBookingConfirmationSlice',
    initialState,
    reducers: {
        switchToStep(state: HotelBookingConfimationtState, action: PayloadAction<string>) {
            const stepNumber = action.payload

            if (state.stepCompleted + 1 >= parseInt(stepNumber)) {
                state.stepStates = {
                    '1': { ...state.stepStates['1'], active: false },
                    '2': { ...state.stepStates['2'], active: false },
                    '3': { ...state.stepStates['3'], active: false },
                    [stepNumber]: { ...state.stepStates[stepNumber], active: true }
                }
            }
        },
        quoteStart(state: HotelBookingConfimationtState) {
            state.isLoading = true
        },
        quoteSuccess(state: HotelBookingConfimationtState, action: PayloadAction<{ guestInformation: GuestInformation, booking: Booking }>) {
            const { guestInformation, booking } = action.payload
            state.guestInformation = guestInformation
            state.booking = booking
            state.isLoading = true
            if (state.stepCompleted < 1) {
                state.stepCompleted = 1
            }
        },
        quoteFailed(state: HotelBookingConfimationtState, action: PayloadAction<string>) {
            state.error = action.payload
            state.isLoading = false
        },
        bookStart(state: HotelBookingConfimationtState, action: PayloadAction<PaymentInformation>) {
            state.paymentInformation = { ...state.paymentInformation, ...action.payload }
            state.isLoading = true
        },
        bookSuccess(state: HotelBookingConfimationtState, action: PayloadAction<Booking>) {
            state.booking = action.payload
            state.paymentInformation.paid = true
            state.stepCompleted = 2
            console.log('state payment success', state.paymentInformation.token)
        },
        bookFailed(state: HotelBookingConfimationtState, action: PayloadAction<string>) {
            state.error = action.payload
            state.isLoading = false
        },
        reset(state: HotelBookingConfimationtState) {
            state.guestInformation = initialState.guestInformation
            state.paymentInformation = initialState.paymentInformation
            state.booking = initialState.booking
            state.error = initialState.error
            state.isLoading = initialState.isLoading
        }
    }
})

export const {
    switchToStep,
    quoteStart,
    quoteSuccess,
    quoteFailed,
    bookStart,
    bookSuccess,
    bookFailed,
    reset
} = HotelBookingConfimrationSlice.actions

export default HotelBookingConfimrationSlice.reducer

export const quote = (
    searchId: string,
    hotelId: string,
    criteria: Criteria,
    guestInformation: GuestInformation,
    finalSelections: Array<Selection>
): AppThunk => async dispatch => {

    try {

        dispatch(quoteStart())

        const res = await HotelBooking.quote(
            searchId,
            hotelId,
            criteria,
            guestInformation,
            finalSelections,
        )

        dispatch(quoteSuccess({ guestInformation, booking: res.booking }))
    } catch (err) {
        dispatch(quoteFailed(err.toString()))
    }



}

export const book = (
    paymentInformation: PaymentInformation,
    quotedBooking: Booking,
    guestInformation: GuestInformation
): AppThunk => async dispatch => {
    dispatch(bookStart(paymentInformation))

    const cardInformation = {
        name: paymentInformation.cardHolderName,
        number: paymentInformation.cardNumber,
        expiration_month: paymentInformation.expiryMonth,
        expiration_year: paymentInformation.expiryYear,
        security_code: paymentInformation.ccv
    }


    Omise.createToken('card', cardInformation, async function (statusCode: any, response: any) {
        if (statusCode === 200) {
            // token from omise
            // const token = response.id

            const { booking } = await HotelBooking.book(quotedBooking.booking_id, [guestInformation.email])

            while (!booking.invoice_no) {

                const { admin_booking_search_list } = await HotelBooking.search(booking.booking_id)
                const foundBooking = admin_booking_search_list[0]
                if (foundBooking.invoice_no) {
                    booking.invoice_no = foundBooking.invoice_no
                    booking.booking_state = foundBooking.booking_state
                }
                await wait(1000)
            }

            await Finance.markAsPaid(booking.invoice_no)

            dispatch(bookSuccess(booking))
        } else {
            dispatch(bookFailed(response.message))
        }
    });

}
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/rootReducer'
import getLocationName from '../../../util/helpers/getLocationName';
import { format } from '../../../helper/'
const BookingCornfirmed = () => {

    const { booking, paymentInformation } = useSelector((state: RootState) => state.hotelBookingConfirmation)

    const { cities, countries } = useSelector((state: RootState) => state.location)

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')

    useEffect(() => {

        setFirstName(booking.rooms[0].guests[0].first_name)
        setLastName(booking.rooms[0].guests[0].last_name)
        setEmail(booking.remarks[0].text.split(':')[1].trim())
        setPhoneNumber(booking.remarks[1].text.split(':')[1].trim())

    }, [booking])
    return (
        <>
            <div className="pt-4 pb-5 px-5 border-bottom">
                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Thanks {firstName}!</h5>
                <p className='text-dark'>
                    <i className="flaticon-tick mr-3 text-success"></i>
                    Your booking in {getLocationName(cities, countries, booking.city)} is confirmed.
                </p>
                <p className='text-dark'>
                    <i className="flaticon-tick mr-3 text-success"></i>
                    {booking.hotel_name} is expecting you on {format.formatDatetime(booking.fromDate, 'shortDate')}.
                </p>

                <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-2">
                    Traveler Information
                                </h5>
                {/*Fact List */}
                <ul className="list-unstyled font-size-1 mb-0 font-size-16">
                    <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Booking number</span>
                        <span className="text-secondary text-right">{booking.booking_id}</span>
                    </li>

                    <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">First name</span>
                        <span className="text-secondary text-right">{firstName}</span>
                    </li>

                    <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Last name</span>
                        <span className="text-secondary text-right">{lastName}</span>
                    </li>

                    <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">E-mail address</span>
                        <span className="text-secondary text-right">{email}</span>
                    </li>

                    <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Phone number</span>
                        <span className="text-secondary text-right">{phoneNumber}</span>
                    </li>


                </ul>
                {/*End Fact List */}
            </div>
            <div className="pt-4 pb-5 px-5 border-bottom">
                <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-3">
                    Payment
                                </h5>
                <p className="">
                    Your payment {format.formatPrice(booking.total_price.display_price, booking.total_price.currency_code)} from credit card ending in <span className='badge badge-secondary'>{((paymentInformation.cardNumber+'').substr(12))}</span> to Sun Series Travel has been successfully recieved.
                </p>

                <a href="https://www.omise.co/" target="_blank" className="text-underline text-primary">Payment is made by Credit Card Via Omise.</a>
            </div>
            <div className="pt-4 pb-5 px-5">
                <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-3">
                    Booking Details
                </h5>
                <p className="">
                    You will receive an email with details of your booking.
                </p>
                <p>
                    If you haven't received your email within 1 day, please contact our support for more details.
                </p>

                {/* <a href="#" className="text-underline text-primary">https://www.mytravel.com/booking-details/?=f4acb19f-9542-4a5c-b8ee</a> */}
            </div>
        </>
    )
}

export default BookingCornfirmed
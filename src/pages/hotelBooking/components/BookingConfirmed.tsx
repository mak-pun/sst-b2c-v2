import React from 'react'

const BookingCornfirmed = () => {
    return (
        <>
            <div className="pt-4 pb-5 px-5 border-bottom">
                <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-2">
                    Traveler Information
                                </h5>
                {/*Fact List */}
                <ul className="list-unstyled font-size-1 mb-0 font-size-16">
                    <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Booking number</span>
                        <span className="text-secondary text-right">5784-BD245</span>
                    </li>

                    <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">First name</span>
                        <span className="text-secondary text-right">Jessica</span>
                    </li>

                    <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Last name</span>
                        <span className="text-secondary text-right">Brown</span>
                    </li>

                    <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">E-mail address</span>
                        <span className="text-secondary text-right">Info@Jessica.com</span>
                    </li>

                    <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Street Address and number</span>
                        <span className="text-secondary text-right">353 Third floor Avenue</span>
                    </li>

                    <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Town / City</span>
                        <span className="text-secondary text-right">Paris,France</span>
                    </li>

                    <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">ZIP code</span>
                        <span className="text-secondary text-right">75800-875</span>
                    </li>

                    <li className="d-flex justify-content-between py-2">
                        <span className="font-weight-medium">Country</span>
                        <span className="text-secondary text-right">United States of america</span>
                    </li>
                </ul>
                {/*End Fact List */}
            </div>
            <div className="pt-4 pb-5 px-5 border-bottom">
                <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-3">
                    Payment
                                </h5>
                <p className="">
                    Praesent dolor lectus, rutrum sit amet risus vitae, imperdiet cursus neque. Nulla tempor nec lorem eu suscipit. Donec dignissim lectus a nunc molestie consectetur. Nulla eu urna in nisi adipiscing placerat. Nam vel scelerisque magna. Donec justo urna,  posuere ut dictum quis.
                                </p>

                <a href="#" className="text-underline text-primary">Payment is made by Credit Card Via Paypal.</a>
            </div>
            <div className="pt-4 pb-5 px-5">
                <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-3">
                    View Booking Details
                                </h5>
                <p className="">
                    Praesent dolor lectus, rutrum sit amet risus vitae, imperdiet cursus neque. Nulla tempor nec lorem eu suscipit. Donec dignissim lectus a nunc molestie consectetur. Nulla eu urna in nisi adipiscing placerat. Nam vel scelerisque magna. Donec justo urna,  posuere ut dictum quis.
                                </p>

                <a href="#" className="text-underline text-primary">https://www.mytravel.com/booking-details/?=f4acb19f-9542-4a5c-b8ee</a>
            </div>
        </>
    )
}

export default BookingCornfirmed
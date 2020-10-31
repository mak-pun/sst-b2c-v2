import React, { useState, useReducer, useEffect } from 'react'
import GuestDetails from './GuestDetails'
import PaymentDetails from './PaymentDetails'
import BookingCornfirmed from './BookingConfirmed'
import Sidebar from './Sidebar'


type State = {
    label: string;
    active: boolean;
}

type StepStates = { [key: string]: State }

const Main = () => {


    const [stepCompleted, setStepCompleted] = useState<number>(3)
    const [stepStates, setStepStates] = useState<StepStates>({
        '1': { label: 'Customer information', active: false },
        '2': { label: 'Payment information', active: false },
        '3': { label: 'Booking is confirmed!', active: true }
    })

    useEffect(() => {

        if (stepCompleted < 3) {
            switchToStep((stepCompleted + 1) + '')
        }

    }, [stepCompleted])

    const switchToStep = (stepNumber: string) => {

        console.log(stepCompleted, stepNumber)
        if (stepCompleted + 1 >= parseInt(stepNumber)) {

            setStepStates({
                '1': { ...stepStates['1'], active: false },
                '2': { ...stepStates['2'], active: false },
                '3': { ...stepStates['3'], active: false },
                [stepNumber]: { ...stepStates[stepNumber], active: true }
            })
        }

    }

    return (
        <>


            {/*========== MAIN CONTENT ========== */}
            <main id="content" className="bg-gray space-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xl-9">
                            <div className="mb-5 shadow-soft bg-white rounded-sm">
                                {stepCompleted < 3
                                    ? (
                                        <div className="py-3 px-4 px-xl-12 border-bottom">
                                            <ul className="list-group flex-nowrap overflow-auto overflow-md-visble list-group-horizontal list-group-borderless flex-center-between pt-1">
                                                {
                                                    Object.keys(stepStates)
                                                        .map(stepNumber => {
                                                            return (
                                                                <li
                                                                    onClick={() => switchToStep(stepNumber)}
                                                                    className="list-group-item text-center flex-shrink-0 flex-xl-shrink-1"
                                                                    style={{ cursor: 'pointer' }}
                                                                >
                                                                    <div className={'flex-content-center mb-3 width-40 height-40 border border-width-2 mx-auto rounded-circle ' + (stepStates[stepNumber].active ? 'border-primary bg-primary text-white' : ' border-gray')}>
                                                                        {stepNumber}
                                                                    </div>
                                                                    <div className={stepStates[stepNumber].active ? 'text-primary' : 'text-gray-1'}>{stepStates[stepNumber].label}</div>
                                                                </li>
                                                            )
                                                        })
                                                }

                                            </ul>
                                        </div>
                                    )
                                    : (
                                        <div className="py-6 px-5 border-bottom">
                                            <div className="flex-horizontal-center">
                                                <div className="height-50 width-50 flex-shrink-0 flex-content-center bg-primary rounded-circle">
                                                    <i className="flaticon-tick text-white font-size-24"></i>
                                                </div>
                                                <div className="ml-3">
                                                    <h3 className="font-size-18 font-weight-bold text-dark mb-0 text-lh-sm">
                                                        Thank You. Your Booking Order is Confirmed Now.
                                                    </h3>
                                                    <p className="mb-0">A confirmation email has been sent to your provided email address.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                {stepStates['1'].active && <GuestDetails></GuestDetails>}
                                {stepStates['2'].active && <PaymentDetails></PaymentDetails>}
                                {stepStates['3'].active && <BookingCornfirmed></BookingCornfirmed>}
                            </div>
                            {/* <div className="mb-5 shadow-soft bg-white rounded-sm">
                                <div className="py-3 px-4 px-xl-12 border-bottom">
                                    <ul className="list-group flex-nowrap overflow-auto overflow-md-visble list-group-horizontal list-group-borderless flex-center-between pt-1">
                                        <li className="list-group-item text-center flex-shrink-0 flex-xl-shrink-1">
                                            <div className="flex-content-center mb-3 width-40 height-40 border  border-width-2 border-gray mx-auto rounded-circle">
                                                1
                                        </div>
                                            <div className="text-gray-1">Customer information</div>
                                        </li>
                                        <li className="list-group-item text-center flex-shrink-0 flex-xl-shrink-1">
                                            <div className="flex-content-center mb-3 width-40 height-40 bg-primary border-width-2 border border-primary text-white mx-auto rounded-circle">
                                                2
                                        </div>
                                            <div className="text-primary">Payment information</div>
                                        </li>
                                        <li className="list-group-item text-center flex-shrink-0 flex-md-shrink-1">
                                            <div className="flex-content-center mb-3 width-40 height-40 border  border-width-2 border-gray mx-auto rounded-circle">
                                                3
                                        </div>
                                            <div className="text-gray-1">Booking is confirmed!</div>
                                        </li>
                                    </ul>
                                </div>
                                <PaymentDetails></PaymentDetails>
                            </div> */}
                            {/* <div className="mb-5 shadow-soft bg-white rounded-sm">
                                <div className="py-6 px-5 border-bottom">
                                    <div className="flex-horizontal-center">
                                        <div className="height-50 width-50 flex-shrink-0 flex-content-center bg-primary rounded-circle">
                                            <i className="flaticon-tick text-white font-size-24"></i>
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="font-size-18 font-weight-bold text-dark mb-0 text-lh-sm">
                                                Thank You. Your Booking Order is Confirmed Now.
                                        </h3>
                                            <p className="mb-0">A confirmation email has been sent to your provided email address.</p>
                                        </div>
                                    </div>
                                </div>
                                <BookingCornfirmed></BookingCornfirmed>
                            </div> */}
                        </div>
                        <div className="col-lg-4 col-xl-3">
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                </div>
            </main>
            {/*========== END MAIN CONTENT ========== */}


        </>
    )
}

export default Main
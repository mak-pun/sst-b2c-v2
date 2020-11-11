import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/rootReducer'
import { formatDatetime, formatPrice } from '../../../helper/format'

import moment from 'moment'
import { Sample, HotelResult } from '../../../api/types'
import { helpers } from '../../../util'

type Item = {
    count: number;
    roomClassName: string;
    sampleName: string
}

type Payment = {
    subtotal: number;
    tax: number;
    total: number;
    currency: string;
}

const Sidebar = () => {

    const { criteria } = useSelector((state: RootState) => state.hotelSearch)
    const { hotels } = useSelector((state: RootState) => state.hotel)
    const { result, selections } = useSelector((state: RootState) => state.hotelResult)
    const [selectedSamples, setSelectedSamples] = useState<Array<Sample>>([])

    const [occupants, setOccupants] = useState<{ adults: Number; children: number }>()
    const [nights, setNights] = useState<number>()
    const [items, setItems] = useState<Array<Item>>([])
    const [payment, setPayment] = useState<Payment>()

    const [isReady, setIsReady] = useState<boolean>(false)


    useEffect(() => {

        // Setup Occupants

        const occupantsTemp = criteria?.rooms.reduce((accumulatedResult, currentResult) => {
            return {
                adults: accumulatedResult.adults + currentResult.adults,
                children: accumulatedResult.children + currentResult.children.length
            }
        }, { adults: 0, children: 0 })

        setOccupants(occupantsTemp)

        // Setup Selected Samples

        const filteredSelections = selections.filter(selection => selection.isRoomClassSelected && selection.isSampleSelected)

        const samples = filteredSelections.map(selection => helpers.findSample(result as HotelResult, selection))

        setSelectedSamples(samples)

        // Setup nights

        setNights(moment(criteria?.to).diff(moment(criteria?.from), 'days'))

    }, [])

    useEffect(() => {

        if (hotels && selectedSamples) {
            setIsReady(true)
        }

    }, [hotels, selectedSamples])


    useEffect(() => {

        if (isReady) {
            const items: Array<Item> = []

            selectedSamples.forEach((sample) => {
                const nextItem = { count: 1, roomClassName: getRoomClassName(sample) as string, sampleName: sample.sample_name }
                const matchedItem = items.find(item => item.roomClassName === nextItem.roomClassName && item.sampleName === nextItem.sampleName)
                if (matchedItem) {
                    matchedItem.count = matchedItem.count + nextItem.count
                } else {
                    items.push(nextItem)
                }
            })

            setItems(items)

            const payment: Payment = {subtotal: 0, tax: 0, total: 0, currency: 'THB'}
            selectedSamples.forEach(sample=>{
                payment.total =  payment.total+ parseFloat(sample.total_amount.amount)
            })

            payment.tax = (payment.total * 7)/107
            payment.subtotal = payment.total-payment.tax

            setPayment(payment)
        }


    }, [isReady])

    const getRoomClassName = (sample: Sample) => {
        const hotel = hotels[result?.hotel_id as string]
        if (hotel) {
            const roomClass = hotel.room_classes.find(roomClass => roomClass.room_class_id === sample.room_class_id)
            console.log('roomClass', roomClass, 'sample', sample)
            return roomClass?.room_class_name
        }
        return ''
    }

    return (
        <>
            {hotels && occupants && selectedSamples &&
                <div className="shadow-soft bg-white rounded-sm">
                    <div className="pt-5 pb-3 px-5 border-bottom">
                        <a href="#" className="d-block mb-3">
                            <img className="img-fluid rounded-xs" src={result?.images.filter(image => image.primary)[0]?.image_url || result?.images[0].image_url} alt="Image-Description" />
                        </a>
                        <a href="#" className="text-dark font-weight-bold pr-xl-1">{result?.name}</a>
                        <div className="my-1 flex-horizontal-center text-gray-1">
                            <i className="icon flaticon-pin-1 mr-2 font-size-15"></i> {result?.address}
                        </div>
                    </div>
                    {/*Basics Accordion */}
                    <div id="basicsAccordion">
                        {/*Card */}
                        <div className="card rounded-0 border-top-0 border-left-0 border-right-0">
                            <div className="card-header card-collapse bg-transparent border-0" id="basicsHeadingOne">
                                <h5 className="mb-0">
                                    <button type="button" className="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                                        data-toggle="collapse"
                                        data-target="#basicsCollapseOne"
                                        aria-expanded="true"
                                        aria-controls="basicsCollapseOne">
                                        Booking Detail

                                            <span className="card-btn-arrow font-size-14 text-dark">
                                            <i className="fas fa-chevron-down"></i>
                                        </span>
                                    </button>
                                </h5>
                            </div>
                            <div id="basicsCollapseOne" className="collapse show"
                                aria-labelledby="basicsHeadingOne"
                                data-parent="#basicsAccordion">
                                <div className="card-body px-4 pt-0">
                                    {/*Fact List */}
                                    <ul className="list-unstyled font-size-1 mb-0 font-size-16">
                                        <li className="d-flex justify-content-between py-2">
                                            <span><small className="font-weight-bold">{formatDatetime(criteria?.from as string, 'shortDate')} - {formatDatetime(criteria?.to as string, 'shortDate')}</small> <br />
                                                {items.map(item => {
                                                    return <span className="text-gray-1 font-weight-normal"><small>{item.count} x {item.roomClassName} - {item.sampleName}</small></span>
                                                })}

                                            </span>
                                            {/* <span className="text-secondary"><a href="#" className="text-underline">Edit</a></span> */}
                                        </li>
                                        <li className="d-flex justify-content-between py-2">
                                            <span className="font-weight-medium">Stay</span>
                                            <span className="text-secondary">{nights} {nights as number > 1 ? 'Nights' : 'Night'}</span>
                                        </li>

                                        <li className="d-flex justify-content-between py-2">
                                            <span className="font-weight-medium">Room</span>
                                            <span className="text-secondary">{criteria?.rooms.length} {criteria?.rooms.length as number > 1 ? 'Rooms' : 'Room'}</span>
                                        </li>

                                        <li className="d-flex justify-content-between py-2">
                                            <span className="font-weight-medium">Adults</span>
                                            <span className="text-secondary">{occupants?.adults}</span>
                                        </li>
                                        {occupants?.children as number > 0 && <li className="d-flex justify-content-between py-2">
                                            <span className="font-weight-medium">Children</span>
                                            <span className="text-secondary">{occupants?.children}</span>
                                        </li>}
                                    </ul>
                                    {/*End Fact List */}
                                </div>
                            </div>
                        </div>
                        {/*End Card */}


                        {/*Card */}
                        <div className="card rounded-0 border-top-0 border-left-0 border-right-0">
                            <div className="card-header card-collapse bg-transparent border-0" id="basicsHeadingFour">
                                <h5 className="mb-0">
                                    <button type="button" className="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                                        data-toggle="collapse"
                                        data-target="#basicsCollapseFour"
                                        aria-expanded="false"
                                        aria-controls="basicsCollapseFour">
                                        Payment

                                            <span className="card-btn-arrow font-size-14 text-dark">
                                            <i className="fas fa-chevron-down"></i>
                                        </span>
                                    </button>
                                </h5>
                            </div>
                            <div id="basicsCollapseFour" className="collapse show"
                                aria-labelledby="basicsHeadingFour"
                                data-parent="#basicsAccordion">
                                <div className="card-body px-4 pt-0">
                                    {/*Fact List */}
                                    <ul className="list-unstyled font-size-1 mb-0 font-size-16">
                                        <li className="d-flex justify-content-between py-2">
                                            <span className="font-weight-medium">Subtotal</span>
                                            <span className="text-secondary">{formatPrice(payment?.subtotal as number, payment?.currency as string)}</span>
                                        </li>

                                        {/* <li className="d-flex justify-content-between py-2">
                                            <span className="font-weight-medium">Extra Price</span>
                                            <span className="text-secondary">€0,00</span>
                                        </li> */}

                                        <li className="d-flex justify-content-between py-2">
                                            <span className="font-weight-medium">Tax <small>(7%)</small></span>
                                            <span className="text-secondary">{formatPrice(payment?.tax as number, payment?.currency as string)}</span>
                                        </li>

                                        <li className="d-flex justify-content-between py-2 font-size-17 font-weight-bold">
                                            <span className="font-weight-bold">Pay Amount</span>
                                            <span className="">{formatPrice(payment?.total as number, payment?.currency as string)}</span>
                                        </li>
                                    </ul>
                                    {/*End Fact List */}
                                </div>
                            </div>
                        </div>
                        {/*End Card */}
                    </div>
                    {/*End Basics Accordion */}
                </div>

            }

        </>
    )
}

export default Sidebar
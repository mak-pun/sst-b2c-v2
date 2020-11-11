import React, { useState, useEffect } from 'react'
import { $ } from '../helper'

type Props = {
    mode: 'horizontal' | 'vertical'
    rooms: number;
    adults: number;
    children: number;
    setRooms: (rooms: number) => void;
    setAdults: (rooms: number) => void;
    setChildren: (rooms: number) => void;

}
const RoomAndGuests = (props: Props) => {

    const {
        mode,
        rooms,
        adults,
        children,
        setRooms,
        setAdults,
        setChildren
    } = props


    useEffect(() => {
        // initialization of quantity counter
        $.HSCore.components.HSQantityCounter.init('.js-quantity');
    }, [])

    return (

        <div>
            {/* Input */}
            <span className="d-block text-gray-1 text-left font-weight-normal mb-0">Rooms and Guests</span>
            <div className="mb-4 position-relative">
                <div className="border-bottom border-width-2 border-color-1">
                    <a style={{borderBottom: 'none', lineHeight: '26px'}} id="basicDropdownClickInvoker" className="dropdown-nav-link dropdown-toggle d-flex pt-3 pb-2" href="#" role="button"
                        aria-controls="basicDropdownClick"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-unfold-event="click"
                        data-unfold-target="#basicDropdownClick"
                        data-unfold-type="css-animation"
                        data-unfold-duration="300"
                        data-unfold-delay="300"
                        data-unfold-hide-on-scroll="true"
                        data-unfold-animation-in="slideInUp"
                        data-unfold-animation-out="fadeOut">
                        {/* <i className="flaticon-plus d-flex align-items-center mr-3 font-size-18 text-primary font-weight-semi-bold"></i> */}
                        <span className="pl-3 text-black font-size-14 font-weight-semi-bold">{rooms} Rooms - {adults + children} Guests</span>
                    </a>
                    <div id="basicDropdownClick" className="dropdown-menu dropdown-unfold col-11 m-0" aria-labelledby="basicDropdownClickInvoker">
                        <div className="js-quantity w-100 py-2 px-3 mb-3">
                            <div className="mx-3 row align-items-center justify-content-between">
                                <span className="d-block font-size-16 text-secondary font-weight-medium">Rooms</span>
                                <div className="d-flex">
                                    <a className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="#" onClick={() => rooms > 1 && setRooms(rooms - 1)}>
                                        <small className="fas fa-minus btn-icon__inner"></small>
                                    </a>
                                    <input className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value={rooms} onChangeCapture={() => console.log('changed')} />
                                    <a className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="#" onClick={() => setRooms(rooms + 1)}>
                                        <small className="fas fa-plus btn-icon__inner"></small>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 py-2 px-3 mb-3">
                            <div className="js-quantity mx-3 row align-items-center justify-content-between">
                                <span className="d-block font-size-16 text-secondary font-weight-medium">Adults</span>
                                <div className="d-flex">
                                    <a className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="#" onClick={() => adults > 1 && setAdults(adults - 1)}>
                                        <small className="fas fa-minus btn-icon__inner"></small>
                                    </a>
                                    <input className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value={adults} />
                                    <a className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="#" onClick={() => setAdults(adults + 1)}>
                                        <small className="fas fa-plus btn-icon__inner"></small>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 py-2 px-3">
                            <div className="js-quantity mx-3 row align-items-center justify-content-between">
                                <span className="d-block font-size-16 text-secondary font-weight-medium">Child</span>
                                <div className="d-flex">
                                    <a className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="#" onClick={() => children > 0 && setChildren(children - 1)}>
                                        <small className="fas fa-minus btn-icon__inner"></small>
                                    </a>
                                    <input className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value={children} />
                                    <a className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="#" onClick={() => setChildren(children + 1)}>
                                        <small className="fas fa-plus btn-icon__inner"></small>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="w-100 text-right py-1 pr-5">
                    <a className="text-primary font-weight-semi-bold font-size-16" href="#">Done</a>
                </div> */}
                    </div>
                </div>
            </div>
            {/* End Input */}
        </div>





    )
}

export default RoomAndGuests
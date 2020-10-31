import React from 'react'
import Amenities from './Amenities'

const SelectRoom = () => {
    return (
        <>
            <div className="border-bottom py-4">
                <h5 id="scroll-amenities" className="font-size-21 font-weight-bold text-dark mb-4">
                    Select Your Room
                    </h5>
                <div className="card border-color-7 mb-5 overflow-hidden">
                    <div className="position-absolute top-0 right-0 mr-md-1 mt-md-1">
                        <div className="border border-brown bg-brown rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-2 mt-2">
                            <span className="font-weight-normal text-white font-size-14">Today's best offer</span>
                        </div>
                    </div>
                    <div className="product-item__outer w-100">
                        <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-3dot5">
                                <div className="pt-5 pb-md-5 pl-4 pr-4 pl-md-5 pr-md-2 pr-xl-2">
                                    <div className="product-item__header mt-2 mt-md-0">
                                        <div className="position-relative">
                                            <img className="img-fluid rounded-sm" src={process.env.PUBLIC_URL + '/assets/img/200x154/img1.jpg'} alt="Image Description" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-md-7 col-lg-7 col-xl-5 flex-horizontal-center pl-xl-0">
                                <div className="w-100 position-relative m-4 m-md-0">
                                    <a href="../hotels/hotel-booking.html" className="mb-2 d-inline-block">
                                        <span className="font-weight-bold font-size-17 text-dark text-dark">Deluxe Twin Room</span>
                                    </a>
                                    <div className="mt-1 pt-2">
                                        <div className="d-flex mb-1">
                                            <div className="ml-0">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="media mb-3 text-gray-1">
                                                        <small className="mr-2">
                                                            <small className="flaticon-wifi-signal font-size-17 text-primary"></small>
                                                        </small>
                                                        <div className="media-body font-size-1 ml-1">
                                                            Free Wi-Fi
                                                            </div>
                                                    </li>
                                                    <li className="media mb-3 text-gray-1">
                                                        <small className="mr-2">
                                                            <small className="flaticon-plans font-size-17 text-primary"></small>
                                                        </small>
                                                        <div className="media-body font-size-1 ml-1">
                                                            15 m²
                                                            </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ml-7">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="media mb-3 text-gray-1">
                                                        <small className="mr-2">
                                                            <small className="flaticon-bed-1 font-size-17 text-primary"></small>
                                                        </small>
                                                        <div className="media-body font-size-1 ml-1">
                                                            2 single beds
                                                            </div>
                                                    </li>
                                                    <li className="media mb-3 text-gray-1">
                                                        <small className="mr-2">
                                                            <small className="flaticon-bathtub font-size-17 text-primary"></small>
                                                        </small>
                                                        <div className="media-body font-size-1 ml-1">
                                                            Shower and bathtub
                                                            </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <a href="#" className="text-underline font-size-14">Room photos and details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-xl-3dot5 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                                <div className="flex-content-center border-xl-left py-xl-5 ml-4 ml-xl-0 justify-content-start justify-content-xl-center">
                                    <div className="text-center my-xl-1">
                                        <div className="mb-2 pb-1">
                                            <span className="font-size-14">From </span>
                                            <span className="font-weight-bold font-size-22 ml-1"> £899.00</span>
                                            <span className="font-size-14"> / night</span>
                                        </div>
                                        <a href="../hotels/hotel-booking.html" className="btn btn-outline-primary border-radius-3 border-width-2 px-4 font-weight-bold min-width-200 py-2 text-lh-lg">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card border-color-7 mb-5 overflow-hidden">
                    <div className="position-absolute top-0 right-0 mr-md-1 mt-md-1">
                        <div className="border border-maroon bg-maroon rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-2 mt-2">
                            <span className="font-weight-normal text-white font-size-14">Save 13% Today</span>
                        </div>
                    </div>
                    <div className="product-item__outer w-100">
                        <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-3dot5">
                                <div className="pt-5 pb-md-5 pl-4 pr-4 pl-md-5 pr-md-2 pr-xl-2">
                                    <div className="product-item__header mt-2 mt-md-0">
                                        <div className="position-relative">
                                            <img className="img-fluid rounded-sm" src={process.env.PUBLIC_URL + '/assets/img/200x154/img2.jpg'} alt="Image Description" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-md-7 col-lg-7 col-xl-5 flex-horizontal-center pl-xl-0">
                                <div className="w-100 position-relative m-4 m-md-0">
                                    <a href="../hotels/hotel-booking.html" className="mb-2 d-inline-block">
                                        <span className="font-weight-bold font-size-17 text-dark text-dark">Deluxe Gold Twin Room</span>
                                    </a>
                                    <div className="mt-1 pt-2">
                                        <div className="d-flex mb-1">
                                            <div className="ml-0">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="media mb-3 text-gray-1">
                                                        <small className="mr-2">
                                                            <small className="flaticon-wifi-signal font-size-17 text-primary"></small>
                                                        </small>
                                                        <div className="media-body font-size-1 ml-1">
                                                            Free Wi-Fi
                                                            </div>
                                                    </li>
                                                    <li className="media mb-3 text-gray-1">
                                                        <small className="mr-2">
                                                            <small className="flaticon-plans font-size-17 text-primary"></small>
                                                        </small>
                                                        <div className="media-body font-size-1 ml-1">
                                                            15 m²
                                                            </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ml-7">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="media mb-3 text-gray-1">
                                                        <small className="mr-2">
                                                            <small className="flaticon-bed-1 font-size-17 text-primary"></small>
                                                        </small>
                                                        <div className="media-body font-size-1 ml-1">
                                                            2 single beds
                                                            </div>
                                                    </li>
                                                    <li className="media mb-3 text-gray-1">
                                                        <small className="mr-2">
                                                            <small className="flaticon-bathtub font-size-17 text-primary"></small>
                                                        </small>
                                                        <div className="media-body font-size-1 ml-1">
                                                            Shower and bathtub
                                                            </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <a href="#" className="text-underline font-size-14">Room photos and details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-xl-3dot5 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                                <div className="flex-content-center border-xl-left py-xl-5 ml-4 ml-xl-0 justify-content-start justify-content-xl-center">
                                    <div className="text-center my-xl-1">
                                        <div className="mb-2 pb-1">
                                            <span className="font-size-14">From </span>
                                            <span className="font-weight-bold font-size-22 ml-1"> £480.00</span>
                                            <span className="font-size-14"> / night</span>
                                        </div>
                                        <a href="../hotels/hotel-booking.html" className="btn btn-outline-primary border-radius-3 border-width-2 px-4 font-weight-bold min-width-200 py-2 text-lh-lg">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card border-color-7 mb-5 overflow-hidden">
                    <div className="product-item__outer w-100">
                        <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-3dot5">
                                <div className="pt-5 pb-md-5 pl-4 pr-4 pl-md-5 pr-md-2 pr-xl-2">
                                    <div className="product-item__header mt-2 mt-md-0">
                                        <div className="position-relative">
                                            <img className="img-fluid rounded-sm" src={process.env.PUBLIC_URL + '/assets/img/200x154/img3.jpg'} alt="Image Description" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-md-7 col-lg-7 col-xl-5 flex-horizontal-center pl-xl-0">
                                <div className="w-100 position-relative m-4 m-md-0">
                                    <a href="../hotels/hotel-booking.html" className="mb-2 d-inline-block">
                                        <span className="font-weight-bold font-size-17 text-dark text-dark">Rock Royalty Queen Room</span>
                                    </a>
                                    <div className="mt-1 pt-2">
                                        <div className="d-flex mb-1">
                                            <div className="ml-0">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="media mb-3 text-gray-1">
                                                        <small className="mr-2">
                                                            <small className="flaticon-wifi-signal font-size-17 text-primary"></small>
                                                        </small>
                                                        <div className="media-body font-size-1 ml-1">
                                                            Free Wi-Fi
                                                            </div>
                                                    </li>
                                                    <li className="media mb-3 text-gray-1">
                                                        <small className="mr-2">
                                                            <small className="flaticon-plans font-size-17 text-primary"></small>
                                                        </small>
                                                        <div className="media-body font-size-1 ml-1">
                                                            15 m²
                                                            </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ml-7">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="media mb-3 text-gray-1">
                                                        <small className="mr-2">
                                                            <small className="flaticon-bed-1 font-size-17 text-primary"></small>
                                                        </small>
                                                        <div className="media-body font-size-1 ml-1">
                                                            2 single beds
                                                            </div>
                                                    </li>
                                                    <li className="media mb-3 text-gray-1">
                                                        <small className="mr-2">
                                                            <small className="flaticon-bathtub font-size-17 text-primary"></small>
                                                        </small>
                                                        <div className="media-body font-size-1 ml-1">
                                                            Shower and bathtub
                                                            </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <a href="#" className="text-underline font-size-14">Room photos and details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-xl-3dot5 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                                <div className="flex-content-center border-xl-left py-xl-5 ml-4 ml-xl-0 justify-content-start justify-content-xl-center">
                                    <div className="text-center my-xl-1">
                                        <div className="mb-2 pb-1">
                                            <span className="font-size-14">From </span>
                                            <span className="font-weight-bold font-size-22 ml-1"> £999.00</span>
                                            <span className="font-size-14"> / night</span>
                                        </div>
                                        <a href="../hotels/hotel-booking.html" className="btn btn-outline-primary border-radius-3 border-width-2 px-4 font-weight-bold min-width-200 py-2 text-lh-lg">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Amenities></Amenities>
            </div>

        </>
    )
}

export default SelectRoom
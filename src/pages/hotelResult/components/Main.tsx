import React, { useEffect } from 'react';
import Header from './Header'
import Description from './Description'
import NearestEssentials from './NearestEssentials'
import WhatsNearby from './WhatsNearby'
import HouseRules from './HouseRules'
import AverageReviews from './AverageReviews'
import VerifiedGuestComments from './VerifiedGuestComments'
import WriteAReview from './WriteAReview'
import HotelNearby from './HotelNearby'
import { useDispatch, useSelector } from 'react-redux';
import { getHotelResult } from '../../../features/hotelResult/hotelResultSlice'
import { useCurrentStateAndParams } from '@uirouter/react';
import { RootState } from '../../../app/rootReducer';
import { getHotel } from '../../../features/hotel/hotel';
import RoomClassResults from './selectRoom/RoomClassResults';

const Main = () => {



    return <>

        {/* ========== MAIN CONTENT ========== */}
        <main id="content">
            {/* <div className="bg-primary-darken py-4">
                <div className="container">
                    <!-- Search Jobs Form -->
                    <div className="card border-0 bg-transparent">
                        <div className="card-body px-0 pt-0 pb-1">
                            <form className="js-validate">
                                <div className="row d-block nav-select-1 d-lg-flex align-items-end">
                                    <div className="col-sm-12 col-lg-3dot6 col-xl-3dot7 mb-4 mb-lg-0 ">
                                        <span className="d-block text-primary-lighten font-weight-normal text-left mb-0">Destination or Hotel Name</span>
                                        <div className="flex-horizontal-center border-bottom border-width-2">
                                            <i className="flaticon-pin-1 text-white"></i>
                                            <!-- Select -->
                                            <select className="js-select selectpicker dropdown-select tab-dropdown flex-grow-1 bg-transparent border-0 pl-0 d-flex align-items-center text-white font-weight-semi-bold" title="Where are you going?"
                                                data-style="bg-transparent text-white"
                                                data-live-search="true"
                                                data-searchbox-classes="input-group-sm">
                                                <option className="border-bottom border-color-1" value="project1" data-content='
                                                    <span className="d-flex align-items-center">
                                                        <span className="font-size-16">London, United Kingdom</span>
                                                    </span>'>
                                                    London, United Kingdom
                                                </option>
                                                <option className="border-bottom border-color-1" value="project2" data-content='
                                                    <span className="d-flex align-items-center">
                                                        <span className="font-size-16">New York, United States</span>
                                                    </span>'>
                                                    New York, United States
                                                </option>
                                                <option  className="border-bottom border-color-1" value="project3" data-content='
                                                    <span className="d-flex align-items-center">
                                                        <span className="font-size-16">New South Wales, Australia</span>
                                                    </span>'>
                                                    New South Wales, Australia
                                                </option>
                                                <option className="border-bottom border-color-1" value="project4" data-content='
                                                    <span className="d-flex align-items-center">
                                                        <span className="font-size-16">Istanbul, Turkey</span>
                                                    </span>'>
                                                    Istanbul, Turkey
                                                </option>
                                                <option className="" value="project4" data-content='
                                                    <span className="d-flex align-items-center">
                                                        <span className="font-size-16">Reykjavík, Iceland</span>
                                                    </span>'>
                                                    Reykjavík, Iceland
                                                </option>
                                            </select>
                                            <!-- End Select -->
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3dot7 col-xl-3dot6 mb-4 mb-lg-0 ">
                                        <!-- Input -->
                                        <span className="d-block text-primary-lighten text-left font-weight-normal mb-0">Check In - Out</span>
                                        <div className="border-bottom border-width-2 border-color-1">
                                            <div id="datepickerWrapperFromOne" className="u-datepicker input-group">
                                                <div className="input-group-prepend">
                                                    <span className="d-flex align-items-center mr-2">
                                                      <i className="flaticon-calendar text-white font-weight-semi-bold"></i>
                                                    </span>
                                                </div>
                                                 <input className="js-range-datepicker text-white font-size-lg-16 shadow-none font-weight-bold form-control hero-form bg-transparent  border-0" type="date"
                                                     data-rp-wrapper="#datepickerWrapperFromOne"
                                                     data-rp-type="range"
                                                     data-rp-date-format="M d / Y"
                                                     data-rp-default-date='["Jul 7 / 2020", "Aug 25 / 2020"]'>
                                            </div>
                                             <!-- End Datepicker -->
                                        </div>
                                        <!-- End Input -->
                                    </div>

                                    <div className="col-sm-12 col-lg-2dot8 mb-4 mb-lg-0 dropdown-custom dropdown-custom_white">
                                        <!-- Input -->
                                        <span className="d-block text-primary-lighten text-left font-weight-normal mb-0">Rooms and Guests</span>
                                        <a id="basicDropdownClickInvoker" className="dropdown-nav-link dropdown-toggle d-flex pt-3 pb-2 text-lh-1dot7" href="javascript:;" role="button"
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
                                            <i className="flaticon-plus d-flex align-items-center mr-3 font-size-18 text-white font-weight-semi-bold"></i>
                                            <span className="font-size-16 font-weight-semi-bold text-white">2 Rooms - 3 Guests</span>
                                        </a>
                                        <div id="basicDropdownClick" className="dropdown-menu dropdown-unfold col-11 m-0" aria-labelledby="basicDropdownClickInvoker">
                                            <div className="w-100 py-2 px-3 mb-3">
                                                <div className="js-quantity mx-3 row align-items-center justify-content-between">
                                                    <span className="d-block font-size-16 text-secondary font-weight-medium">Rooms</span>
                                                    <div className="d-flex">
                                                        <a className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                                                            <small className="fas fa-minus btn-icon__inner"></small>
                                                        </a>
                                                        <input className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value="1">
                                                        <a className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                                                            <small className="fas fa-plus btn-icon__inner"></small>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 py-2 px-3 mb-3">
                                                <div className="js-quantity mx-3 row align-items-center justify-content-between">
                                                    <span className="d-block font-size-16 text-secondary font-weight-medium">Adults</span>
                                                    <div className="d-flex">
                                                        <a className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                                                            <small className="fas fa-minus btn-icon__inner"></small>
                                                        </a>
                                                        <input className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value="1">
                                                        <a className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                                                            <small className="fas fa-plus btn-icon__inner"></small>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 py-2 px-3">
                                                <div className="js-quantity mx-3 row align-items-center justify-content-between">
                                                    <span className="d-block font-size-16 text-secondary font-weight-medium">Child</span>
                                                    <div className="d-flex">
                                                        <a className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                                                            <small className="fas fa-minus btn-icon__inner"></small>
                                                        </a>
                                                        <input className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value="1">
                                                        <a className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="javascript:;">
                                                            <small className="fas fa-plus btn-icon__inner"></small>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 text-right py-1 pr-5">
                                                <a className="text-primary font-weight-semi-bold font-size-16" href="#">Done</a>
                                            </div>
                                        </div>
                                        <!-- End Input -->
                                    </div>

                                    <div className="col-sm-12 col-lg align-self-lg-end text-md-right">
                                        <button type="submit" className="btn btn-primary w-100 border-radius-3 mb-xl-0 mb-lg-0 transition-3d-hover"><i className="flaticon-magnifying-glass font-size-20 mr-2"></i>Search</button>
                                    </div>
                                </div>
                              <!-- End Checkbox -->
                            </form>
                        </div>
                    </div>
                    <!-- End Search Jobs Form --> 
                </div>
            </div> */}
            {/* <!-- Breadcrumb */}

            {/* <div className="border-bottom mb-7">
                <div className="container">
                    <nav className="py-3" aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-no-gutter mb-0 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                            <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="#">Home</a></li>
                            <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="#">Hotels</a></li>
                            <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="#">London Hotels</a></li>
                            <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">Park Avenue Baker Street London</li>
                        </ol>
                    </nav>
                </div>
            </div> */}
            {/* End Breadcrumb --> */}

            <div className="container mt-7">
                <Header></Header>
                <Description></Description>
                <RoomClassResults></RoomClassResults>
                {/* <NearestEssentials></NearestEssentials>
                <WhatsNearby></WhatsNearby>
                <HouseRules></HouseRules>
                <AverageReviews></AverageReviews>
                <VerifiedGuestComments></VerifiedGuestComments>
                <WriteAReview></WriteAReview>
                <HotelNearby></HotelNearby> */}
            </div>
        </main>
        {/* ========== END MAIN CONTENT ========== */}


    </>
}

export default Main








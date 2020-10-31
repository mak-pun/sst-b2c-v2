import React, { useEffect } from 'react';
import {$} from '../../../helper'

const Hero = ()=>{

    useEffect(()=>{
        // initialization of unfold component
        $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));
        // initialization of datepicker
        $.HSCore.components.HSRangeDatepicker.init('.js-range-datepicker');
        // initialization of select
        $.HSCore.components.HSSelectPicker.init('.js-select');
        // initialization of quantity counter
        $.HSCore.components.HSQantityCounter.init('.js-quantity');
    }, [])

    return <>
    
            {/* ========== HERO ========== */}
            <div className="hero-block hero-v4 bg-img-hero-bottom text-center z-index-2" style={{position: 'relative'}}>
                {/* Credit: https://www.pexels.com/photo/view-of-palm-trees-on-beach-247447/ */}
                <div style={{
                    zIndex: 0,
                    overflow: 'hidden', 
                    position:'absolute', 
                    width:'100%', 
                    height:'100%', 
                    filter: 'brightness(80%)', 
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundImage: "url("+process.env.PUBLIC_URL+"/assets/img/1920x800/img3.jpg)"
                    }} ></div>
                <div className="container space-2 space-top-lg-4 space-top-xl-10" style={{zIndex:10}}>
                    <div className="row justify-content-md-center pb-xl-11" style={{position: 'relative'}}>
                        {/* Info */}
                        <div className="mb-wd-11 pb-5 py-lg-5">
                            <h1 className="font-size-50 font-size-xs-30 text-white font-weight-bold">Find Your Ideal Hotel and Compare Prices</h1>
                            <p className="font-size-20 font-weight-normal text-white">Check out the best deals on over 2,000,000 hotels worldwide</p>
                        </div>
                        {/* End Info */}
                    </div>
                    <div className="mb-lg-n16">
                        {/* Search Jobs Form */}
                            <div className="card border-0 tab-shadow">
                                <div className="card-body">
                                    <form className="js-validate">
                                      <div className="row d-block nav-select d-lg-flex mb-lg-3 px-2 px-lg-3">
                                        <div className="col-sm-12 col-lg-3dot6 col-xl-3dot7 mb-4 mb-lg-0 ">
                                            <span className="d-block text-gray-1 font-weight-normal text-left mb-0">Destination or Hotel Name</span>
                                            {/* Select */}
                                            <select className="js-select selectpicker dropdown-select tab-dropdown col-12 pl-0 flaticon-pin-1 d-flex align-items-center text-primary font-weight-semi-bold" title="Where are you going?"
                                                data-style=""
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
                                            {/* End Select */}
                                        </div>

                                        <div className="col-sm-12 col-lg-3dot7 col-xl-3dot6 mb-4 mb-lg-0 ">
                                            {/* Input */}
                                            <span className="d-block text-gray-1 text-left font-weight-normal mb-0">Check In - Out</span>
                                            <div className="border-bottom border-width-2 border-color-1">
                                                <div id="datepickerWrapperFromOne" className="u-datepicker input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="d-flex align-items-center mr-2">
                                                          <i className="flaticon-calendar text-primary font-weight-semi-bold"></i>
                                                        </span>
                                                    </div>
                                                     <input className="js-range-datepicker font-size-lg-16 shadow-none font-weight-bold form-control hero-form bg-transparent  border-0" type="date"
                                                         data-rp-wrapper="#datepickerWrapperFromOne"
                                                         data-rp-type="range"
                                                         data-rp-date-format="M d / Y"
                                                         data-rp-default-date='["Jul 7 / 2020", "Aug 25 / 2020"]' />
                                                </div>
                                                 {/* End Datepicker */}
                                            </div>
                                            {/* End Input */}
                                        </div>

                                        <div className="col-sm-12 col-lg-2dot8 mb-4 mb-lg-0 dropdown-custom">
                                            {/* Input */}
                                            <span className="d-block text-gray-1 text-left font-weight-normal mb-0">Rooms and Guests</span>
                                            <a id="basicDropdownClickInvoker" className="dropdown-nav-link dropdown-toggle d-flex pt-3 pb-2" href="#" role="button"
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
                                                <i className="flaticon-plus d-flex align-items-center mr-3 font-size-18 text-primary font-weight-semi-bold"></i>
                                                <span className="text-black font-size-16 font-weight-semi-bold">2 Rooms - 3 Guests</span>
                                            </a>
                                            <div id="basicDropdownClick" className="dropdown-menu dropdown-unfold col-11 m-0" aria-labelledby="basicDropdownClickInvoker">
                                                <div className="w-100 py-2 px-3 mb-3">
                                                    <div className="js-quantity mx-3 row align-items-center justify-content-between">
                                                        <span className="d-block font-size-16 text-secondary font-weight-medium">Rooms</span>
                                                        <div className="d-flex">
                                                            <a className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="#">
                                                                <small className="fas fa-minus btn-icon__inner"></small>
                                                            </a>
                                                            <input className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value="1" />
                                                            <a className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="#">
                                                                <small className="fas fa-plus btn-icon__inner"></small>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-100 py-2 px-3 mb-3">
                                                    <div className="js-quantity mx-3 row align-items-center justify-content-between">
                                                        <span className="d-block font-size-16 text-secondary font-weight-medium">Adults</span>
                                                        <div className="d-flex">
                                                            <a className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="#">
                                                                <small className="fas fa-minus btn-icon__inner"></small>
                                                            </a>
                                                            <input className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value="1" />
                                                            <a className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="#">
                                                                <small className="fas fa-plus btn-icon__inner"></small>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-100 py-2 px-3">
                                                    <div className="js-quantity mx-3 row align-items-center justify-content-between">
                                                        <span className="d-block font-size-16 text-secondary font-weight-medium">Child</span>
                                                        <div className="d-flex">
                                                            <a className="js-minus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="#">
                                                                <small className="fas fa-minus btn-icon__inner"></small>
                                                            </a>
                                                            <input className="js-result form-control h-auto border-0 rounded p-0 max-width-6 text-center" type="text" value="1" />
                                                            <a className="js-plus btn btn-icon btn-medium btn-outline-secondary rounded-circle" href="#">
                                                                <small className="fas fa-plus btn-icon__inner"></small>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-100 text-right py-1 pr-5">
                                                    <a className="text-primary font-weight-semi-bold font-size-16" href="#">Done</a>
                                                </div>
                                            </div>
                                            {/* End Input */}
                                        </div>

                                        <div className="col-sm-12 col-lg-1dot8 align-self-lg-end text-md-right">
                                            <button type="submit" className="btn btn-primary btn-md border-radius-3 mb-xl-0 mb-lg-1 transition-3d-hover"><i className="flaticon-magnifying-glass font-size-20 mr-2"></i>Search</button>
                                        </div>
                                      </div>
                                      {/* End Checkbox */}
                                    </form>
                                </div>
                            </div>
                        {/* End Search Jobs Form */}
                    </div>
                </div>
            </div>
            {/* ========== END HERO ========== */}
    
    </>
}

export default Hero
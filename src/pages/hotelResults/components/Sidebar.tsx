import React, { useEffect } from 'react'
import {$, Custombox} from '../../../helper'
import SearchForm from '../../../components/SearchForm';

const Sidebar = () => {

    useEffect(()=>{


        // initialization of header
        // $.HSCore.components.HSHeader.init($('#header'));

        // initialization of google map
        // function initMap() {
        //     $.HSCore.components.HSGMap.init('.js-g-map');
        // }

        // initialization of unfold component
        $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

        // initialization of autonomous popups
        $.HSCore.components.HSModalWindow.init('[data-modal-target]', '.js-modal-window', {
            autonomous: true
        });

        // initialization of show animations
        // $.HSCore.components.HSShowAnimation.init('.js-animation-link');

        // initialization of datepicker
        $.HSCore.components.HSRangeDatepicker.init('.js-range-datepicker');

        // initialization of forms
        $.HSCore.components.HSRangeSlider.init('.js-range-slider');

        // initialization of select
        $.HSCore.components.HSSelectPicker.init('.js-select');

        // initialization of malihu scrollbar
        $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

        // initialization of quantity counter
        $.HSCore.components.HSQantityCounter.init('.js-quantity');


    }, [])

    const closeModal = ()=>{
        console.log('close Modal')
        Custombox.modal.close();
    }

    const renderRatingAccordion = () => {
        return (
            <>

                <div id="RatingAccordion" className="accordion rounded shadow-none border-bottom">
                    <div className="card-collapse" id="shopRatingHeadingOne">
                        <h3 className="mb-0">
                            <button type="button" className="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#shopRatingOne" aria-expanded="false" aria-controls="shopRatingOne">
                                <span className="row align-items-center">
                                    <span className="col-9">
                                        <span className="font-weight-bold font-size-17 text-dark mb-3">Star Rating</span>
                                    </span>
                                    <span className="col-3 text-right">
                                        <span className="card-btn-arrow">
                                            <span className="fas fa-chevron-down small"></span>
                                        </span>
                                    </span>
                                </span>
                            </button>
                        </h3>
                    </div>
                    <div id="shopRatingOne" className="collapse show" aria-labelledby="shopRatingHeadingOne" data-parent="#RatingAccordion">
                        <div className="card-body pt-0 mt-1 px-5">
                            {/* Checkboxes */}
                            <div className="form-group font-size-14 text-lh-md text-secondary mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="brandAdidas" />
                                    <label className="custom-control-label text-lh-inherit text-color-1" htmlFor="brandAdidas">
                                        <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary">
                                            <div className="green-lighter ml-1 letter-spacing-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group font-size-14 text-lh-md text-secondary mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="brandNewBalance" />
                                    <label className="custom-control-label text-lh-inherit text-color-1" htmlFor="brandNewBalance">
                                        <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary">
                                            <div className="green-lighter ml-1 letter-spacing-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group font-size-14 text-lh-md text-secondary mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="brandNike" />
                                    <label className="custom-control-label text-lh-inherit text-color-1" htmlFor="brandNike">
                                        <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary">
                                            <div className="green-lighter ml-1 letter-spacing-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group font-size-14 text-lh-md text-secondary mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="brandFredPerry" />
                                    <label className="custom-control-label text-lh-inherit text-color-1" htmlFor="brandFredPerry">
                                        <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary">
                                            <div className="green-lighter ml-1 letter-spacing-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    const renderPriceRangeAccordion = () => {
        return (
            <>
                <div id="shopCartAccordion" className="accordion rounded shadow-none">
                    <div className="border-0">
                        <div className="card-collapse" id="shopCardHeadingOne">
                            <h3 className="mb-0">
                                <button type="button" className="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#shopCardOne" aria-expanded="false" aria-controls="shopCardOne">
                                    <span className="row align-items-center">
                                        <span className="col-9">
                                            <span className="d-block font-size-lg-15 font-size-17 font-weight-bold text-dark">Price Range ($)</span>
                                        </span>
                                        <span className="col-3 text-right">
                                            <span className="card-btn-arrow">
                                                <span className="fas fa-chevron-down small"></span>
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            </h3>
                        </div>
                        <div id="shopCardOne" className="collapse show" aria-labelledby="shopCardHeadingOne" data-parent="#shopCartAccordion">
                            <div className="card-body pt-0 px-5">
                                <div className="pb-3 mb-1 d-flex text-lh-1">
                                    <span>£</span>
                                    <span id="rangeSliderExample3MinResult" className=""></span>
                                    <span className="mx-0dot5"> — </span>
                                    <span>£</span>
                                    <span id="rangeSliderExample3MaxResult" className=""></span>
                                </div>
                                <input className="js-range-slider" type="text"
                                    data-extra-classes="u-range-slider height-35"
                                    data-type="double"
                                    data-grid="false"
                                    data-hide-from-to="true"
                                    data-min="0"
                                    data-max="3456"
                                    data-from="200"
                                    data-to="3456"
                                    data-prefix="$"
                                    data-result-min="#rangeSliderExample3MinResult"
                                    data-result-max="#rangeSliderExample3MaxResult" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const renderMealAccordion = () => {
        return (
            <>
                <div id="shopCategoryAccordion" className="accordion rounded-0 shadow-none border-top">
                    <div className="border-0">
                        <div className="card-collapse" id="shopCategoryHeadingOne">
                            <h3 className="mb-0">
                                <button type="button" className="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#shopCategoryOne" aria-expanded="false" aria-controls="shopCategoryOne">
                                    <span className="row align-items-center">
                                        <span className="col-9">
                                            <span className="font-weight-bold font-size-17 text-dark mb-3">Meals</span>
                                        </span>
                                        <span className="col-3 text-right">
                                            <span className="card-btn-arrow">
                                                <span className="fas fa-chevron-down small"></span>
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            </h3>
                        </div>
                        <div id="shopCategoryOne" className="collapse show" aria-labelledby="shopCategoryHeadingOne" data-parent="#shopCategoryAccordion">
                            <div className="card-body pt-0 mt-1 px-5 pb-4">
                                {/* Checkboxes */}
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="1" />
                                        <label className="custom-control-label" htmlFor="1">Breakfast Included</label>
                                    </div>
                                    <span>749</span>
                                </div>
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="2" />
                                        <label className="custom-control-label" htmlFor="2">All-inclusive</label>
                                    </div>
                                    <span>630</span>
                                </div>
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="3" />
                                        <label className="custom-control-label" htmlFor="3">Breakfast & dinner included</label>
                                    </div>
                                    <span>58</span>
                                </div>
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="4" />
                                        <label className="custom-control-label" htmlFor="4">Kitchen facilities</label>
                                    </div>
                                    <span>29</span>
                                </div>
                                {/* End Checkboxes */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    const renderFacilitiesAccordion = () => {
        return (
            <>

                <div id="facilityCategoryAccordion" className="accordion rounded-0 shadow-none border-top">
                    <div className="border-0">
                        <div className="card-collapse" id="facilityCategoryHeadingOne">
                            <h3 className="mb-0">
                                <button type="button" className="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#facilityCategoryOne" aria-expanded="false" aria-controls="facilityCategoryOne">
                                    <span className="row align-items-center">
                                        <span className="col-9">
                                            <span className="font-weight-bold font-size-17 text-dark mb-3">Facilities</span>
                                        </span>
                                        <span className="col-3 text-right">
                                            <span className="card-btn-arrow">
                                                <span className="fas fa-chevron-down small"></span>
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            </h3>
                        </div>
                        <div id="facilityCategoryOne" className="collapse show" aria-labelledby="facilityCategoryHeadingOne" data-parent="#facilityCategoryAccordion">
                            <div className="card-body pt-0 mt-1 px-5 pb-4">
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="Adidas" />
                                        <label className="custom-control-label" htmlFor="Adidas">Parking</label>
                                    </div>
                                    <span>749</span>
                                </div>
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="NewBalance" />
                                        <label className="custom-control-label" htmlFor="NewBalance">Restaurant</label>
                                    </div>
                                    <span>630</span>
                                </div>
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="Nike" />
                                        <label className="custom-control-label" htmlFor="Nike">Pet friendly</label>
                                    </div>
                                    <span>58</span>
                                </div>
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="FredPerry" />
                                        <label className="custom-control-label" htmlFor="FredPerry">Room service</label>
                                    </div>
                                    <span>29</span>
                                </div>
                                {/* End Checkboxes */}

                                {/* View More - Collapse */}
                                <div className="collapse" id="collapseBrand1">
                                    <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="brandGucci" />
                                            <label className="custom-control-label" htmlFor="brandGucci">Gucci</label>
                                        </div>
                                        <span>5</span>
                                    </div>
                                    <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="brandMango" />
                                            <label className="custom-control-label" htmlFor="brandMango">Mango</label>
                                        </div>
                                        <span>1</span>
                                    </div>
                                </div>
                                {/* End View More - Collapse */}

                                {/* Link */}
                                <a className="link link-collapse small font-size-1" data-toggle="collapse" href="#collapseBrand1" role="button" aria-expanded="false" aria-controls="collapseBrand1">
                                    <span className="link-collapse__default font-size-14">Show all 13</span>
                                    <span className="link-collapse__active font-size-14">Show less</span>
                                </a>
                                {/* End Link */}
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    const renderPropertyTypeAccordion = () => {
        return (
            <>

                <div id="propertyCategoryAccordion" className="accordion rounded-0 shadow-none border-top">
                    <div className="border-0">
                        <div className="card-collapse" id="propertyCategoryHeadingOne">
                            <h3 className="mb-0">
                                <button type="button" className="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#propertyCategoryOne" aria-expanded="false" aria-controls="propertyCategoryOne">
                                    <span className="row align-items-center">
                                        <span className="col-9">
                                            <span className="font-weight-bold font-size-17 text-dark mb-3">Property Type</span>
                                        </span>
                                        <span className="col-3 text-right">
                                            <span className="card-btn-arrow">
                                                <span className="fas fa-chevron-down small"></span>
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            </h3>
                        </div>
                        <div id="propertyCategoryOne" className="collapse show" aria-labelledby="propertyCategoryHeadingOne" data-parent="#propertyCategoryAccordion">
                            <div className="card-body pt-0 mt-1 px-5 pb-4">
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brandhotel" />
                                        <label className="custom-control-label" htmlFor="brandhotel">Hotels</label>
                                    </div>
                                    <span>749</span>
                                </div>
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brandapartmet" />
                                        <label className="custom-control-label" htmlFor="brandapartmet">Apartments</label>
                                    </div>
                                    <span>630</span>
                                </div>
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brandbed" />
                                        <label className="custom-control-label" htmlFor="brandbed">Bed and Breakfasts</label>
                                    </div>
                                    <span>58</span>
                                </div>
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brandresorts" />
                                        <label className="custom-control-label" htmlFor="brandresorts">Resorts</label>
                                    </div>
                                    <span>29</span>
                                </div>
                                {/* End Checkboxes */}

                                {/* View More - Collapse */}
                                <div className="collapse" id="collapseBrand2">
                                    <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="Gucci" />
                                            <label className="custom-control-label" htmlFor="Gucci">Gucci</label>
                                        </div>
                                        <span>5</span>
                                    </div>
                                    <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="Mango" />
                                            <label className="custom-control-label" htmlFor="Mango">Mango</label>
                                        </div>
                                        <span>1</span>
                                    </div>
                                </div>
                                {/* End View More - Collapse */}

                                {/* Link */}
                                <a className="link link-collapse small font-size-1" data-toggle="collapse" href="#collapseBrand2" role="button" aria-expanded="false" aria-controls="collapseBrand2">
                                    <span className="link-collapse__default font-size-14">Show all 39</span>
                                    <span className="link-collapse__active font-size-14">Show less</span>
                                </a>
                                {/* End Link */}
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    const renderCityAccordion = () => {
        return (
            <>

                <div id="cityCategoryAccordion" className="accordion rounded-0 shadow-none border-top">
                    <div className="border-0">
                        <div className="card-collapse" id="cityCategoryHeadingOne">
                            <h3 className="mb-0">
                                <button type="button" className="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed" data-toggle="collapse" data-target="#cityCategoryOne" aria-expanded="false" aria-controls="cityCategoryOne">
                                    <span className="row align-items-center">
                                        <span className="col-9">
                                            <span className="font-weight-bold font-size-17 text-dark mb-3">City</span>
                                        </span>
                                        <span className="col-3 text-right">
                                            <span className="card-btn-arrow">
                                                <span className="fas fa-chevron-down small"></span>
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            </h3>
                        </div>
                        <div id="cityCategoryOne" className="collapse show" aria-labelledby="cityCategoryHeadingOne" data-parent="#cityCategoryAccordion">
                            <div className="card-body pt-0 mt-1 px-5 pb-4">
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brandamsterdam" />
                                        <label className="custom-control-label" htmlFor="brandamsterdam">Amsterdam</label>
                                    </div>
                                    <span>749</span>
                                </div>
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brandrotterdam" />
                                        <label className="custom-control-label" htmlFor="brandrotterdam">Rotterdam</label>
                                    </div>
                                    <span>630</span>
                                </div>
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brandvalkenburg" />
                                        <label className="custom-control-label" htmlFor="brandvalkenburg">Valkenburg</label>
                                    </div>
                                    <span>58</span>
                                </div>
                                <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brandeindhoven" />
                                        <label className="custom-control-label" htmlFor="brandeindhoven">Eindhoven</label>
                                    </div>
                                    <span>29</span>
                                </div>
                                {/* End Checkboxes */}

                                {/* View More - Collapse */}
                                <div className="collapse" id="collapseBrand3">
                                    <div className="form-group font-size-14 text-lh-md text-secondary mb-3 flex-center-between">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="gucci" />
                                            <label className="custom-control-label" htmlFor="gucci">Gucci</label>
                                        </div>
                                        <span>5</span>
                                    </div>
                                    <div className="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="mango" />
                                            <label className="custom-control-label" htmlFor="mango">Mango</label>
                                        </div>
                                        <span>1</span>
                                    </div>
                                </div>
                                {/* End View More - Collapse */}

                                {/* Link */}
                                <a className="link link-collapse small font-size-1" data-toggle="collapse" href="#collapseBrand3" role="button" aria-expanded="false" aria-controls="collapseBrand3">
                                    <span className="link-collapse__default font-size-14">Show all 25</span>
                                    <span className="link-collapse__active font-size-14">Show less</span>
                                </a>
                                {/* End Link */}
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }



    const renderModal = () => {
        return (
            <>


                <div id="ontargetModal" className="js-modal-window u-modal-window max-height-100vh width-100vw overflow-hidden"
                    data-modal-type="ontarget"
                    data-open-effect="zoomIn"
                    data-close-effect="zoomOut"
                    data-speed="500">
                    <div className="bg-white">
                        <div className="border-bottom py-xl-2">
                            <div className="row d-block d-md-flex flex-horizontal-center mx-0">
                                <div className="col-xl">
                                    {/* Nav Links */}
                                    <ul className="row nav align-items-center py-xl-1 px-0 mb-3 mb-xl-0 border-bottom border-xl-bottom-0" role="tablist">
                                        <li className="col-6 col-md-3 col-lg-auto border-bottom border-xl-bottom-0 mx-0 col-xl-auto nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1">
                                            <select className="js-select selectpicker dropdown-select bootstrap-select__custom-nav w-xl-auto"
                                                data-style="btn-sm py-2 px-3 px-xl-3 px-wd-4 font-size-16 text-dark d-flex align-items-center"
                                                defaultValue="one">
                                                <option value="one">City</option>
                                                <option value="two">Two</option>
                                                <option value="three">Three</option>
                                                <option value="four">Four</option>
                                            </select>
                                        </li>
                                        <li className="col-6 col-md-3 col-lg-auto border-bottom border-xl-bottom-0 mx-0 col-xl-auto nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                                            <select className="js-select selectpicker dropdown-select bootstrap-select__custom-nav w-xl-auto"
                                                data-style="btn-sm py-2 px-3 px-xl-3 px-wd-4 font-size-16 text-dark d-flex align-items-center"
                                                defaultValue="one">
                                                <option value="one">Price</option>
                                                <option value="two">Two</option>
                                                <option value="three">Three</option>
                                                <option value="four">Four</option>
                                            </select>
                                        </li>
                                        <li className="col-6 col-md-3 col-lg-auto border-bottom border-xl-bottom-0 mx-0 col-xl-auto nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                                            <select className="js-select selectpicker dropdown-select bootstrap-select__custom-nav w-xl-auto"
                                                data-style="btn-sm py-2 px-3 px-xl-3 px-wd-4 font-size-16 text-dark d-flex align-items-center"
                                                defaultValue="one">
                                                <option value="one">Stars</option>
                                                <option value="two">Two</option>
                                                <option value="three">Three</option>
                                                <option value="four">Four</option>
                                            </select>
                                        </li>
                                        <li className="col-6 col-md-3 col-lg-auto border-bottom border-xl-bottom-0 mx-0 col-xl-auto nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                                            <select className="js-select selectpicker dropdown-select bootstrap-select__custom-nav w-xl-auto"
                                                data-style="btn-sm py-2 px-3 px-xl-3 px-wd-4 font-size-16 text-dark d-flex align-items-center"
                                                defaultValue="one">
                                                <option value="one">Guest Rating</option>
                                                <option value="two">Two</option>
                                                <option value="three">Three</option>
                                                <option value="four">Four</option>
                                            </select>
                                        </li>
                                        <li className="col-6 col-md-3 col-lg-auto border-bottom border-xl-bottom-0 mx-0 col-xl-auto nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                                            <select className="js-select selectpicker dropdown-select bootstrap-select__custom-nav w-xl-auto"
                                                data-style="btn-sm py-2 px-3 px-xl-3 px-wd-4 font-size-16 text-dark d-flex align-items-center"
                                                defaultValue="one">
                                                <option value="one">Meals</option>
                                                <option value="two">Two</option>
                                                <option value="three">Three</option>
                                                <option value="four">Four</option>
                                            </select>
                                        </li>
                                        <li className="col-6 col-md-3 col-lg-auto border-bottom border-xl-bottom-0 mx-0 col-xl-auto nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                                            <select className="js-select selectpicker dropdown-select bootstrap-select__custom-nav w-xl-auto"
                                                data-style="btn-sm py-2 px-3 px-xl-3 px-wd-4 font-size-16 text-dark d-flex align-items-center"
                                                defaultValue="one">
                                                <option value="one">Facilities</option>
                                                <option value="two">Two</option>
                                                <option value="three">Three</option>
                                                <option value="four">Four</option>
                                            </select>
                                        </li>
                                        <li className="col-6 col-md-3 col-lg-auto border-bottom border-xl-bottom-0 mx-0 col-xl-auto nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                                            <select className="js-select selectpicker dropdown-select bootstrap-select__custom-nav w-xl-auto"
                                                data-style="btn-sm py-2 px-3 px-xl-3 px-wd-4 font-size-16 text-dark d-flex align-items-center"
                                                defaultValue="one">
                                                <option value="one">Property Type</option>
                                                <option value="two">Two</option>
                                                <option value="three">Three</option>
                                                <option value="four">Four</option>
                                            </select>
                                        </li>
                                    </ul>
                                    {/* End Nav Links */}
                                </div>
                                <div className="col-xl-auto">
                                    <div className="d-flex justify-content-center justify-content-xl-start">
                                        {/* Not working because of the modal need to migrate to React */}
                                        <button type="button" className="btn btn-wide btn-blue-1 font-weight-normal font-size-14 rounded-xs mb-3 mb-xl-0" aria-label="Close" onClick={closeModal}>
                                            <span aria-hidden="true">Back to hotel list</span>
                                            <i className="fas fa-times font-size-15 ml-3"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="height-100vh-72">
                            <div className="row no-gutters">
                                <div className="col-lg-5 col-xl-4 col-wd-3gdot5 order-1 order-lg-0">
                                    <div className="pt-4 px-4 px-xl-5">
                                        <div className="mb-4">
                                            <div className="mb-2 text-gray-1">
                                                50 of 3771 hotels shown
                                                                    </div>
                                            <select className="form-control js-select selectpicker dropdown-select" required data-msg="Please select option." data-error-className="u-has-error" data-success-className="u-has-success"
                                                data-style="form-control font-size-14 border-width-2 border-gray font-weight-normal"
                                                defaultValue="one">
                                                <option value="One">Recommended</option>
                                                <option value="Two">Low to High</option>
                                                <option value="Three">High to Low</option>
                                                <option value="Four">Popular</option>
                                            </select>
                                        </div>
                                        <div className="js-scrollbar height-100vh-72">
                                            <ul className="d-block list-unstyled">
                                                <li className="card mb-4 overflow-hidden">
                                                    <div className="product-item__outer w-100">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="product-item__header">
                                                                    <div className="position-relative">
                                                                        <a href="#" className="d-block gradient-overlay-half-bg-gradient-v5"><img className="img-fluid min-height-150 card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img58.jpg'} /></a>
                                                                    </div>
                                                                    <div className="position-absolute top-0 left-0 pt-3 pl-4">
                                                                        <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                                            <span className="flaticon-valentine-heart"></span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="position-absolute bottom-0 left-0 right-0">
                                                                        <div className="px-4 pb-3">
                                                                            <a href="#" className="d-block">
                                                                                <div className="d-flex align-items-center font-size-14 text-white">
                                                                                    <i className="icon flaticon-pin-1 mr-2 font-size-20"></i> Greater London
                                                                                                        </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 flex-horizontal-center">
                                                                <div className="w-100 position-relative m-4 m-md-0">
                                                                    <div className="mb-1 pb-1">
                                                                        <span className="green-lighter ml-2">
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                        </span>
                                                                    </div>
                                                                    <a href="#">
                                                                        <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Empire Prestige Causeway Bay </span>
                                                                    </a>
                                                                    <div className="card-body p-0">
                                                                        <div className="my-2">
                                                                            <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                                                            <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                                                        </div>
                                                                        <div className="mb-0">
                                                                            <span className="mr-1 font-size-14 text-gray-1">From</span>
                                                                            <span className="font-weight-bold">£350.00</span>
                                                                            <span className="font-size-14 text-gray-1"> / night</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="card mb-4 overflow-hidden">
                                                    <div className="product-item__outer w-100">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="product-item__header">
                                                                    <div className="position-relative">
                                                                        <a href="#" className="d-block gradient-overlay-half-bg-gradient-v5"><img className="img-fluid min-height-150 card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img59.jpg'} /></a>
                                                                    </div>
                                                                    <div className="position-absolute top-0 left-0 pt-3 pl-4">
                                                                        <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                                            <span className="flaticon-valentine-heart"></span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="position-absolute bottom-0 left-0 right-0">
                                                                        <div className="px-4 pb-3">
                                                                            <a href="#" className="d-block">
                                                                                <div className="d-flex align-items-center font-size-14 text-white">
                                                                                    <i className="icon flaticon-pin-1 mr-2 font-size-20"></i> Greater London
                                                                                                        </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 flex-horizontal-center">
                                                                <div className="w-100 position-relative m-4 m-md-0">
                                                                    <div className="mb-1 pb-1">
                                                                        <span className="green-lighter ml-2">
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                        </span>
                                                                    </div>
                                                                    <a href="#">
                                                                        <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Empire Prestige Causeway Bay </span>
                                                                    </a>
                                                                    <div className="card-body p-0">
                                                                        <div className="my-2">
                                                                            <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                                                            <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                                                        </div>
                                                                        <div className="mb-0">
                                                                            <span className="mr-1 font-size-14 text-gray-1">From</span>
                                                                            <span className="font-weight-bold">£350.00</span>
                                                                            <span className="font-size-14 text-gray-1"> / night</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="card mb-4 overflow-hidden">
                                                    <div className="product-item__outer w-100">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="product-item__header">
                                                                    <div className="position-relative">
                                                                        <a href="#" className="d-block gradient-overlay-half-bg-gradient-v5"><img className="img-fluid min-height-150 card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img60.jpg'} /></a>
                                                                    </div>
                                                                    <div className="position-absolute top-0 left-0 pt-3 pl-4">
                                                                        <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                                            <span className="flaticon-valentine-heart"></span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="position-absolute bottom-0 left-0 right-0">
                                                                        <div className="px-4 pb-3">
                                                                            <a href="#" className="d-block">
                                                                                <div className="d-flex align-items-center font-size-14 text-white">
                                                                                    <i className="icon flaticon-pin-1 mr-2 font-size-20"></i> Greater London
                                                                                                        </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 flex-horizontal-center">
                                                                <div className="w-100 position-relative m-4 m-md-0">
                                                                    <div className="mb-1 pb-1">
                                                                        <span className="green-lighter ml-2">
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                        </span>
                                                                    </div>
                                                                    <a href="#">
                                                                        <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Empire Prestige Causeway Bay </span>
                                                                    </a>
                                                                    <div className="card-body p-0">
                                                                        <div className="my-2">
                                                                            <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                                                            <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                                                        </div>
                                                                        <div className="mb-0">
                                                                            <span className="mr-1 font-size-14 text-gray-1">From</span>
                                                                            <span className="font-weight-bold">£350.00</span>
                                                                            <span className="font-size-14 text-gray-1"> / night</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="card mb-4 overflow-hidden">
                                                    <div className="product-item__outer w-100">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="product-item__header">
                                                                    <div className="position-relative">
                                                                        <a href="#" className="d-block gradient-overlay-half-bg-gradient-v5"><img className="img-fluid min-height-150 card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img3.jpg'} /></a>
                                                                    </div>
                                                                    <div className="position-absolute top-0 left-0 pt-3 pl-4">
                                                                        <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                                            <span className="flaticon-valentine-heart"></span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="position-absolute bottom-0 left-0 right-0">
                                                                        <div className="px-4 pb-3">
                                                                            <a href="#" className="d-block">
                                                                                <div className="d-flex align-items-center font-size-14 text-white">
                                                                                    <i className="icon flaticon-pin-1 mr-2 font-size-20"></i> Greater London
                                                                                                        </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 flex-horizontal-center">
                                                                <div className="w-100 position-relative m-4 m-md-0">
                                                                    <div className="mb-1 pb-1">
                                                                        <span className="green-lighter ml-2">
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                        </span>
                                                                    </div>
                                                                    <a href="#">
                                                                        <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Empire Prestige Causeway Bay </span>
                                                                    </a>
                                                                    <div className="card-body p-0">
                                                                        <div className="my-2">
                                                                            <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                                                            <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                                                        </div>
                                                                        <div className="mb-0">
                                                                            <span className="mr-1 font-size-14 text-gray-1">From</span>
                                                                            <span className="font-weight-bold">£350.00</span>
                                                                            <span className="font-size-14 text-gray-1"> / night</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="card mb-4 overflow-hidden">
                                                    <div className="product-item__outer w-100">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="product-item__header">
                                                                    <div className="position-relative">
                                                                        <a href="#" className="d-block gradient-overlay-half-bg-gradient-v5"><img className="img-fluid min-height-150 card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img61.jpg'} /></a>
                                                                    </div>
                                                                    <div className="position-absolute top-0 left-0 pt-3 pl-4">
                                                                        <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                                            <span className="flaticon-valentine-heart"></span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="position-absolute bottom-0 left-0 right-0">
                                                                        <div className="px-4 pb-3">
                                                                            <a href="#" className="d-block">
                                                                                <div className="d-flex align-items-center font-size-14 text-white">
                                                                                    <i className="icon flaticon-pin-1 mr-2 font-size-20"></i> Greater London
                                                                                                        </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 flex-horizontal-center">
                                                                <div className="w-100 position-relative m-4 m-md-0">
                                                                    <div className="mb-1 pb-1">
                                                                        <span className="green-lighter ml-2">
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                        </span>
                                                                    </div>
                                                                    <a href="#">
                                                                        <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Empire Prestige Causeway Bay </span>
                                                                    </a>
                                                                    <div className="card-body p-0">
                                                                        <div className="my-2">
                                                                            <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                                                            <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                                                        </div>
                                                                        <div className="mb-0">
                                                                            <span className="mr-1 font-size-14 text-gray-1">From</span>
                                                                            <span className="font-weight-bold">£350.00</span>
                                                                            <span className="font-size-14 text-gray-1"> / night</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="card mb-4 overflow-hidden">
                                                    <div className="product-item__outer w-100">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="product-item__header">
                                                                    <div className="position-relative">
                                                                        <a href="#" className="d-block gradient-overlay-half-bg-gradient-v5"><img className="img-fluid min-height-150 card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img62.jpg'} /></a>
                                                                    </div>
                                                                    <div className="position-absolute top-0 left-0 pt-3 pl-4">
                                                                        <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                                            <span className="flaticon-valentine-heart"></span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="position-absolute bottom-0 left-0 right-0">
                                                                        <div className="px-4 pb-3">
                                                                            <a href="#" className="d-block">
                                                                                <div className="d-flex align-items-center font-size-14 text-white">
                                                                                    <i className="icon flaticon-pin-1 mr-2 font-size-20"></i> Greater London
                                                                                                        </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 flex-horizontal-center">
                                                                <div className="w-100 position-relative m-4 m-md-0">
                                                                    <div className="mb-1 pb-1">
                                                                        <span className="green-lighter ml-2">
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                        </span>
                                                                    </div>
                                                                    <a href="#">
                                                                        <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Empire Prestige Causeway Bay </span>
                                                                    </a>
                                                                    <div className="card-body p-0">
                                                                        <div className="my-2">
                                                                            <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                                                            <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                                                        </div>
                                                                        <div className="mb-0">
                                                                            <span className="mr-1 font-size-14 text-gray-1">From</span>
                                                                            <span className="font-weight-bold">£350.00</span>
                                                                            <span className="font-size-14 text-gray-1"> / night</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="card mb-4 overflow-hidden">
                                                    <div className="product-item__outer w-100">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="product-item__header">
                                                                    <div className="position-relative">
                                                                        <a href="#" className="d-block gradient-overlay-half-bg-gradient-v5"><img className="img-fluid min-height-150 card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img63.jpg'} /></a>
                                                                    </div>
                                                                    <div className="position-absolute top-0 left-0 pt-3 pl-4">
                                                                        <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                                            <span className="flaticon-valentine-heart"></span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="position-absolute bottom-0 left-0 right-0">
                                                                        <div className="px-4 pb-3">
                                                                            <a href="#" className="d-block">
                                                                                <div className="d-flex align-items-center font-size-14 text-white">
                                                                                    <i className="icon flaticon-pin-1 mr-2 font-size-20"></i> Greater London
                                                                                                        </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 flex-horizontal-center">
                                                                <div className="w-100 position-relative m-4 m-md-0">
                                                                    <div className="mb-1 pb-1">
                                                                        <span className="green-lighter ml-2">
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                        </span>
                                                                    </div>
                                                                    <a href="#">
                                                                        <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Empire Prestige Causeway Bay </span>
                                                                    </a>
                                                                    <div className="card-body p-0">
                                                                        <div className="my-2">
                                                                            <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                                                            <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                                                        </div>
                                                                        <div className="mb-0">
                                                                            <span className="mr-1 font-size-14 text-gray-1">From</span>
                                                                            <span className="font-weight-bold">£350.00</span>
                                                                            <span className="font-size-14 text-gray-1"> / night</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="card mb-4 overflow-hidden">
                                                    <div className="product-item__outer w-100">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="product-item__header">
                                                                    <div className="position-relative">
                                                                        <a href="#" className="d-block gradient-overlay-half-bg-gradient-v5"><img className="img-fluid min-height-150 card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'} /></a>
                                                                    </div>
                                                                    <div className="position-absolute top-0 left-0 pt-3 pl-4">
                                                                        <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                                            <span className="flaticon-valentine-heart"></span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="position-absolute bottom-0 left-0 right-0">
                                                                        <div className="px-4 pb-3">
                                                                            <a href="#" className="d-block">
                                                                                <div className="d-flex align-items-center font-size-14 text-white">
                                                                                    <i className="icon flaticon-pin-1 mr-2 font-size-20"></i> Greater London
                                                                                                        </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 flex-horizontal-center">
                                                                <div className="w-100 position-relative m-4 m-md-0">
                                                                    <div className="mb-1 pb-1">
                                                                        <span className="green-lighter ml-2">
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                        </span>
                                                                    </div>
                                                                    <a href="#">
                                                                        <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Empire Prestige Causeway Bay </span>
                                                                    </a>
                                                                    <div className="card-body p-0">
                                                                        <div className="my-2">
                                                                            <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                                                            <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                                                        </div>
                                                                        <div className="mb-0">
                                                                            <span className="mr-1 font-size-14 text-gray-1">From</span>
                                                                            <span className="font-weight-bold">£350.00</span>
                                                                            <span className="font-size-14 text-gray-1"> / night</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="card mb-4 overflow-hidden">
                                                    <div className="product-item__outer w-100">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="product-item__header">
                                                                    <div className="position-relative">
                                                                        <a href="#" className="d-block gradient-overlay-half-bg-gradient-v5"><img className="img-fluid min-height-150 card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img10.jpg'} /></a>
                                                                    </div>
                                                                    <div className="position-absolute top-0 left-0 pt-3 pl-4">
                                                                        <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                                            <span className="flaticon-valentine-heart"></span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="position-absolute bottom-0 left-0 right-0">
                                                                        <div className="px-4 pb-3">
                                                                            <a href="#" className="d-block">
                                                                                <div className="d-flex align-items-center font-size-14 text-white">
                                                                                    <i className="icon flaticon-pin-1 mr-2 font-size-20"></i> Greater London
                                                                                                        </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 flex-horizontal-center">
                                                                <div className="w-100 position-relative m-4 m-md-0">
                                                                    <div className="mb-1 pb-1">
                                                                        <span className="green-lighter ml-2">
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                            <small className="fas fa-star font-size-10"></small>
                                                                        </span>
                                                                    </div>
                                                                    <a href="#">
                                                                        <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">Empire Prestige Causeway Bay </span>
                                                                    </a>
                                                                    <div className="card-body p-0">
                                                                        <div className="my-2">
                                                                            <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                                                            <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                                                        </div>
                                                                        <div className="mb-0">
                                                                            <span className="mr-1 font-size-14 text-gray-1">From</span>
                                                                            <span className="font-weight-bold">£350.00</span>
                                                                            <span className="font-size-14 text-gray-1"> / night</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-xl-8 col-wd-8gdot5">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.315136188916!2d80.28787859999998!3d13.09419335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f6b00bf787831af!2sApollo%20City%20Centre%20Hospital%20Sowcarpet!5e0!3m2!1sen!2sin!4v1580992215999!5m2!1sen!2sin" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    return (
        <>


            <div className="navbar-expand-lg navbar-expand-lg-collapse-block">
                <button className="btn d-lg-none mb-5 p-0 collapsed" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="far fa-caret-square-down text-primary font-size-20 card-btn-arrow ml-0"></i>
                    <span className="text-primary ml-2">Sidebar</span>
                </button>


               



                <div id="sidebar" className="collapse navbar-collapse">
                    <div className="mb-6 w-100">
                        <div className="pb-4 mb-2">
                            <div className="sidebar border border-color-1 rounded-xs">
                                <div className="p-4 mb-1">
                                    <SearchForm mode='vertical'/>
                                   
                                </div>
                            </div>
                        </div>
                        {/* <div className="pb-4 mb-2"> */}
                            {/* <a href="#ontargetModal" className="d-block border rounded"
                                data-modal-target="#ontargetModal"
                                data-modal-effect="fadein">
                                <img src="../../assets/img/map-markers/map.jpg" alt="" width="100%" />
                            </a> */}
                            {/* On Target Modal */}
                            {/* {renderModal()} */}

                            {/* End On Target Modal */}
                        {/* </div> */}

                        {/* <div className="sidenav border border-color-8 rounded-xs"> */}
                            {/* Accordiaon */}

                            {/* {renderRatingAccordion()} */}

                            {/* {renderPriceRangeAccordion()} */}

                            {/* {renderMealAccordion()} */}

                            {/* {renderFacilitiesAccordion()} */}

                            {/* {renderPropertyTypeAccordion()} */}

                            {/* {renderCityAccordion()} */}

                            {/* End Accordion */}
                        {/* </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar
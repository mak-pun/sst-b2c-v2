import React, { useEffect } from 'react'
import { $ } from '../../../helper'
import ResultCard from '../../../components/ResultCard';
import ResultLine from '../../../components/ResultLine';

const Results = () => {

    useEffect(() => {

        // initialization of select
        $.HSCore.components.HSSelectPicker.init('.js-select');

        // initialization of slick carousel
        $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
    }, [])

    const renderControlBar = () => {
        return (
            <>
                {/* Shop-control-bar Title */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="font-size-21 font-weight-bold mb-0 text-lh-1">London: 3292 hotels found</h3>
                    <ul className="nav tab-nav-shop flex-nowrap" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link font-size-22 p-0 active" id="pills-three-example1-tab" data-toggle="pill" href="#pills-three-example1" role="tab" aria-controls="pills-three-example1" aria-selected="true">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    <i className="fa fa-list"></i>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-size-22 p-0 ml-2" id="pills-one-example1-tab" data-toggle="pill" href="#pills-one-example1" role="tab" aria-controls="pills-one-example1" aria-selected="false">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    <i className="fa fa-th"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* End shop-control-bar Title */}
            </>
        )
    }

    const renderNavLink = () => {
        return (
            <>

                {/* Nav Links */}
                <div className="mb-5">
                    <ul className="nav flex-nowrap border border-radius-3 tab-nav align-items-center py-2 px-0" role="tablist">
                        <li className="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1">
                            <a href="#" className="nav-link font-weight-normal text-gray-1 text-lh-1dot6 py-1 px-4 px-wd-5 font-weight-normal font-size-15 ">Recommended
                        </a>
                        </li>
                        <li className="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                            <select
                                className="js-select selectpicker dropdown-select bootstrap-select__custom-nav w-auto"
                                data-style="btn-sm py-1 px-4 px-wd-5 font-weight-normal font-size-15  text-gray-1 d-flex align-items-center"
                                defaultValue='one'
                            >
                                <option value="one">Price</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                                <option value="four">Four</option>
                            </select>
                        </li>
                        <li className="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                            <select
                                className="js-select selectpicker dropdown-select bootstrap-select__custom-nav w-auto"
                                data-style="btn-sm py-1 px-4 px-wd-5 font-weight-normal font-size-15  text-gray-1 d-flex align-items-center"
                                defaultValue='one'
                            >
                                <option value="one">Stars</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                                <option value="four">Four</option>
                            </select>
                        </li>
                        <li className="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                            <a href="#" className="nav-link font-weight-normal text-gray-1 text-lh-1dot6 py-1 px-4 px-wd-5 font-weight-normal font-size-15 ">Guest Rating
                        </a>
                        </li>
                        <li className="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                            <a href="#" className="nav-link font-weight-normal text-gray-1 text-lh-1dot6 py-1 px-4 px-wd-5 font-weight-normal font-size-15 ">Distance
                        </a>
                        </li>
                        <li className="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                            <a href="#" className="nav-link font-weight-normal text-gray-1 text-lh-1dot6 py-1 px-4 px-wd-5 font-weight-normal font-size-15 ">Top Reviewed
                        </a>
                        </li>
                    </ul>
                </div>
                {/* End Nav Links */}

            </>
        )
    }

    const results = [{
        images: [process.env.PUBLIC_URL + '/assets/img/300x230/img8.jpg', process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
        location: 'Greater London, United Kingdom',
        stars: 5,
        title: 'Empire Prestige Causeway Bay',
        price: 899,
        currency: 'THB'
    }, {
        images: [process.env.PUBLIC_URL + '/assets/img/300x230/img8.jpg', process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
        location: 'Istanbul, Turkey',
        stars: 5,
        title: 'Park Avenue Baker Street London',
        price: 899,
        currency: 'THB'
    }]


    return (
        <>
            {renderControlBar()}


            {/* Slick Tab carousel */}
            <div className="u-slick__tab">
                {/* {renderNavLink()} */}

                {/* Tab Content */}
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-three-example1" role="tabpanel" aria-labelledby="pills-three-example1-tab" data-target-group="groups">
                        <ul className="d-block list-unstyled products-group prodcut-list-view">
                            {results.map(result=>{
                                return (
                                    <li className="mb-5 overflow-hidden">
                                        <ResultLine
                                        images={result.images}
                                        stars={result.stars}
                                        location={result.location}
                                        title={result.title}
                                        price={result.price}
                                        currency={result.currency}
                                        ></ResultLine>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="tab-pane fade" id="pills-one-example1" role="tabpanel" aria-labelledby="pills-one-example1-tab" data-target-group="groups">
                        <div className="row">
                            {results.map(result => {
                                return (
                                    <div className="col-md-6 col-lg-4 mb-3 mb-md-4 pb-1">
                                        <ResultCard
                                            image={result.images[0]}
                                            stars={result.stars}
                                            location={result.location}
                                            title={result.title}
                                            price={result.price}
                                            currency={result.currency}
                                            type='tab'
                                        ></ResultCard>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* End Tab Content */}
            </div>
            {/* Slick Tab carousel */}
        </>
    )
}

export default Results
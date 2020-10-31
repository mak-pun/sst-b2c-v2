import React, { useEffect } from 'react'
import { $ } from '../../../helper'
import ResultCard from '../../../components/ResultCard'

const ProductCardsRatingWithCarousel = () => {

    const popularHotels = [{
        images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
        location: 'Greater London, United Kingdom',
        stars: 5,
        title: 'Empire Prestige Causeway Bay',
        price: 899,
        currency: 'THB'
    }, {
        images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
        location: 'Istanbul, Turkey',
        stars: 5,
        title: 'Park Avenue Baker Street London',
        price: 899,
        currency: 'THB'
    }, {
        images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
        location: 'Istanbul, Turkey',
        stars: 5,
        title: 'New Road Hotel',
        price: 899,
        currency: 'THB'
    }, {
        images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
        location: 'stanbul, Turkey',
        stars: 5,
        title: 'New York Marriott Downtown',
        price: 899,
        currency: 'THB'
    },
    {
        images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
        location: 'Greater London, United Kingdom',
        stars: 5,
        title: 'Empire Prestige Causeway Bay',
        price: 899,
        currency: 'THB'
    }, {
        images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
        location: 'Istanbul, Turkey',
        stars: 5,
        title: 'Park Avenue Baker Street London',
        price: 899,
        currency: 'THB'
    }, {
        images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
        location: 'Istanbul, Turkey',
        stars: 5,
        title: 'New Road Hotel',
        price: 899,
        currency: 'THB'
    }, {
        images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
        location: 'stanbul, Turkey',
        stars: 5,
        title: 'New York Marriott Downtown',
        price: 899,
        currency: 'THB'
    }]
    useEffect(() => {
        // initialization of slick carousel
        $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
    }, [])
    return <>


        {/* Product Cards Ratings With carousel */}
        <div className="product-card-block product-card-v3">
            <div className="container-fluid space-top-2 space-top-lg-3">
                <div className="w-md-80 w-lg-50 text-center mx-md-auto pb-4 mt-xl-4">
                    <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">Most Popular Hotels</h2>
                </div>
                <div className="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-3"
                    data-slides-show="5"
                    data-slides-scroll="1"
                    data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v1 u-slick__arrow-classic--v1 u-slick__arrow-centered--y rounded-circle"
                    data-arrow-left-classes="fas fa-chevron-left u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left shadow-5"
                    data-arrow-right-classes="fas fa-chevron-right u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right shadow-5"
                    data-pagi-classes="text-center u-slick__pagination mt-4"
                    data-responsive='[{
                    "breakpoint": 1025,
                    "settings": {
                    "slidesToShow": 3
                    }
                    }, {
                    "breakpoint": 992,
                    "settings": {
                    "slidesToShow": 2
                    }
                    }, {
                    "breakpoint": 768,
                    "settings": {
                    "slidesToShow": 1
                    }
                    }, {
                    "breakpoint": 554,
                    "settings": {
                    "slidesToShow": 1
                    }
                    }]'>
                    {popularHotels.map(result => {
                        return (
                            <>
                                <div className="js-slide mt-2">
                                    <ResultCard
                                        type='common'
                                        image={result.images[0]}
                                        location={result.location}
                                        title={result.title}
                                        stars={result.stars}
                                        price={result.price}
                                        currency={result.currency}
                                    ></ResultCard>
                                </div>
                            </>
                        )
                    })}
                    {/* <div className="js-slide mt-2">
                        <div className="card transition-3d-hover shadow-hover-2 h-100 w-100">
                            <div className="position-relative">
                                <a href="../hotels/hotel-sinlge-v1.html" className="d-block gradient-overlay-half-bg-gradient-v5">
                                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'} alt="Image Description" />
                                </a>
                                <div className="position-absolute top-0 right-0 pt-3 pr-3">
                                    <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                        <span className="flaticon-heart-1 font-size-20"></span>
                                    </button>
                                </div>
                                <div className="position-absolute bottom-0 left-0 right-0">
                                    <div className="px-4 pb-3">
                                        <a href="../hotels/hotel-sinlge-v1.html" className="d-block">
                                            <div className="d-flex align-items-center font-size-14 text-white">
                                                <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                                </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-4 pt-2 pb-3">
                                <div className="mb-2">
                                    <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary letter-spacing-3">
                                        <div className="green-lighter">
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                        </div>
                                    </div>
                                </div>
                                <a href="../hotels/hotel-sinlge-v1.html" className="card-title font-size-17 font-weight-medium text-dark">Empire Prestige Causeway Bay</a>
                                <div className="mt-2 mb-3">
                                    <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                    <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                </div>
                                <div className="mb-0">
                                    <span className="mr-1 font-size-14 text-gray-1">From</span>
                                    <span className="font-weight-bold">£899.00</span>
                                    <span className="font-size-14 text-gray-1"> / night</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="js-slide mt-2">
                        <div className="card transition-3d-hover shadow-hover-2 h-100 w-100">
                            <div className="position-relative">
                                <a href="../hotels/hotel-sinlge-v1.html" className="d-block gradient-overlay-half-bg-gradient-v5">
                                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img10.jpg'} alt="Image Description" />
                                </a>
                                <div className="position-absolute top-0 right-0 pt-3 pr-3">
                                    <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                        <span className="flaticon-heart-1 font-size-20"></span>
                                    </button>
                                </div>
                                <div className="position-absolute bottom-0 left-0 right-0">
                                    <div className="px-4 pb-3">
                                        <a href="../hotels/hotel-sinlge-v1.html" className="d-block">
                                            <div className="d-flex align-items-center font-size-14 text-white">
                                                <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Istanbul, Turkey
                                </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-4 pt-2 pb-3">
                                <div className="mb-2">
                                    <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary letter-spacing-3">
                                        <div className="green-lighter">
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                        </div>
                                    </div>
                                </div>
                                <a href="../hotels/hotel-sinlge-v1.html" className="card-title font-size-17 font-weight-medium text-dark">Park Avenue Baker Street London</a>
                                <div className="mt-2 mb-3">
                                    <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                    <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                </div>
                                <div className="mb-0">
                                    <span className="mr-1 font-size-14 text-gray-1">From</span>
                                    <span className="font-weight-bold">£899.00</span>
                                    <span className="font-size-14 text-gray-1"> / night</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="js-slide mt-2">
                        <div className="card transition-3d-hover shadow-hover-2 h-100 w-100">
                            <div className="position-relative">
                                <a href="../hotels/hotel-sinlge-v1.html" className="d-block gradient-overlay-half-bg-gradient-v5">
                                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img12.jpg'} alt="Image Description" />
                                </a>
                                <div className="position-absolute top-0 right-0 pt-3 pr-3">
                                    <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                        <span className="flaticon-heart-1 font-size-20"></span>
                                    </button>
                                </div>
                                <div className="position-absolute bottom-0 left-0 right-0">
                                    <div className="px-4 pb-3">
                                        <a href="../hotels/hotel-sinlge-v1.html" className="d-block">
                                            <div className="d-flex align-items-center font-size-14 text-white">
                                                <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Istanbul, Turkey
                                </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-4 pt-2 pb-3">
                                <div className="mb-2">
                                    <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary letter-spacing-3">
                                        <div className="green-lighter">
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                        </div>
                                    </div>
                                </div>
                                <a href="../hotels/hotel-sinlge-v1.html" className="card-title font-size-17 font-weight-medium text-dark">New Road Hotel</a>
                                <div className="mt-2 mb-3">
                                    <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                    <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                </div>
                                <div className="mb-0">
                                    <span className="mr-1 font-size-14 text-gray-1">From</span>
                                    <span className="font-weight-bold">£899.00</span>
                                    <span className="font-size-14 text-gray-1"> / night</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="js-slide mt-2">
                        <div className="card transition-3d-hover shadow-hover-2 h-100 w-100">
                            <div className="position-relative">
                                <a href="../hotels/hotel-sinlge-v1.html" className="d-block gradient-overlay-half-bg-gradient-v5">
                                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img11.jpg'} alt="Image Description" />
                                </a>
                                <div className="position-absolute top-0 right-0 pt-3 pr-3">
                                    <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                        <span className="flaticon-heart-1 font-size-20"></span>
                                    </button>
                                </div>
                                <div className="position-absolute bottom-0 left-0 right-0">
                                    <div className="px-4 pb-3">
                                        <a href="../hotels/hotel-sinlge-v1.html" className="d-block">
                                            <div className="d-flex align-items-center font-size-14 text-white">
                                                <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Istanbul, Turkey
                                </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-4 pt-2 pb-3">
                                <div className="mb-2">
                                    <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary letter-spacing-3">
                                        <div className="green-lighter">
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                        </div>
                                    </div>
                                </div>
                                <a href="../hotels/hotel-sinlge-v1.html" className="card-title font-size-17 font-weight-medium text-dark">New York Marriott Downtown</a>
                                <div className="mt-2 mb-3">
                                    <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                    <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                </div>
                                <div className="mb-0">
                                    <span className="mr-1 font-size-14 text-gray-1">From</span>
                                    <span className="font-weight-bold">£899.00</span>
                                    <span className="font-size-14 text-gray-1"> / night</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="js-slide mt-2">
                        <div className="card transition-3d-hover shadow-hover-2 h-100 w-100">
                            <div className="position-relative">
                                <a href="../hotels/hotel-sinlge-v1.html" className="d-block gradient-overlay-half-bg-gradient-v5">
                                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'} alt="Image Description" />
                                </a>
                                <div className="position-absolute top-0 right-0 pt-3 pr-3">
                                    <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                        <span className="flaticon-heart-1 font-size-20"></span>
                                    </button>
                                </div>
                                <div className="position-absolute bottom-0 left-0 right-0">
                                    <div className="px-4 pb-3">
                                        <a href="../hotels/hotel-sinlge-v1.html" className="d-block">
                                            <div className="d-flex align-items-center font-size-14 text-white">
                                                <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                                </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-4 pt-2 pb-3">
                                <div className="mb-2">
                                    <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary letter-spacing-3">
                                        <div className="green-lighter">
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                        </div>
                                    </div>
                                </div>
                                <a href="../hotels/hotel-sinlge-v1.html" className="card-title font-size-17 font-weight-medium text-dark">Empire Prestige Causeway Bay</a>
                                <div className="mt-2 mb-3">
                                    <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                    <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                </div>
                                <div className="mb-0">
                                    <span className="mr-1 font-size-14 text-gray-1">From</span>
                                    <span className="font-weight-bold">£899.00</span>
                                    <span className="font-size-14 text-gray-1"> / night</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="js-slide mt-2">
                        <div className="card transition-3d-hover shadow-hover-2 h-100 w-100">
                            <div className="position-relative">
                                <a href="../hotels/hotel-sinlge-v1.html" className="d-block gradient-overlay-half-bg-gradient-v5">
                                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img12.jpg'} alt="Image Description" />
                                </a>
                                <div className="position-absolute top-0 right-0 pt-3 pr-3">
                                    <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                        <span className="flaticon-heart-1 font-size-20"></span>
                                    </button>
                                </div>
                                <div className="position-absolute bottom-0 left-0 right-0">
                                    <div className="px-4 pb-3">
                                        <a href="../hotels/hotel-sinlge-v1.html" className="d-block">
                                            <div className="d-flex align-items-center font-size-14 text-white">
                                                <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Istanbul, Turkey
                                </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-4 pt-2 pb-3">
                                <div className="mb-2">
                                    <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary letter-spacing-3">
                                        <div className="green-lighter">
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                        </div>
                                    </div>
                                </div>
                                <a href="../hotels/hotel-sinlge-v1.html" className="card-title font-size-17 font-weight-medium text-dark">New Road Hotel</a>
                                <div className="mt-2 mb-3">
                                    <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                    <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                </div>
                                <div className="mb-0">
                                    <span className="mr-1 font-size-14 text-gray-1">From</span>
                                    <span className="font-weight-bold">£899.00</span>
                                    <span className="font-size-14 text-gray-1"> / night</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="js-slide mt-2">
                        <div className="card transition-3d-hover shadow-hover-2 h-100 w-100">
                            <div className="position-relative">
                                <a href="../hotels/hotel-sinlge-v1.html" className="d-block gradient-overlay-half-bg-gradient-v5">
                                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'} alt="Image Description" />
                                </a>
                                <div className="position-absolute top-0 right-0 pt-3 pr-3">
                                    <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                        <span className="flaticon-heart-1 font-size-20"></span>
                                    </button>
                                </div>
                                <div className="position-absolute bottom-0 left-0 right-0">
                                    <div className="px-4 pb-3">
                                        <a href="../hotels/hotel-sinlge-v1.html" className="d-block">
                                            <div className="d-flex align-items-center font-size-14 text-white">
                                                <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                                </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-4 pt-2 pb-3">
                                <div className="mb-2">
                                    <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary letter-spacing-3">
                                        <div className="green-lighter">
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                        </div>
                                    </div>
                                </div>
                                <a href="../hotels/hotel-sinlge-v1.html" className="card-title font-size-17 font-weight-medium text-dark">Empire Prestige Causeway Bay</a>
                                <div className="mt-2 mb-3">
                                    <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                                    <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                                </div>
                                <div className="mb-0">
                                    <span className="mr-1 font-size-14 text-gray-1">From</span>
                                    <span className="font-weight-bold">£899.00</span>
                                    <span className="font-size-14 text-gray-1"> / night</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="js-slide mt-2">
            <div className="card transition-3d-hover shadow-hover-2 h-100 w-100">
                <div className="position-relative">
                    <a href="../hotels/hotel-sinlge-v1.html" className="d-block gradient-overlay-half-bg-gradient-v5">
                        <img className="card-img-top" src={process.env.PUBLIC_URL + '/assets/img/300x230/img11.jpg'} alt="Image Description" />
                    </a>
                    <div className="position-absolute top-0 right-0 pt-3 pr-3">
                      <button type="button" className="btn btn-sm btn-icon text-white rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                        <span className="flaticon-heart-1 font-size-20"></span>
                      </button>
                    </div>
                    <div className="position-absolute bottom-0 left-0 right-0">
                        <div className="px-4 pb-3">
                            <a href="../hotels/hotel-sinlge-v1.html" className="d-block">
                                <div className="d-flex align-items-center font-size-14 text-white">
                                    <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Istanbul, Turkey
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-body px-4 pt-2 pb-3">
                    <div className="mb-2">
                        <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary letter-spacing-3">
                            <div className="green-lighter">
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                            </div>
                        </div>
                    </div>
                    <a href="../hotels/hotel-sinlge-v1.html" className="card-title font-size-17 font-weight-medium text-dark">New York Marriott Downtown</a>
                    <div className="mt-2 mb-3">
                        <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                        <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                    </div>
                    <div className="mb-0">
                        <span className="mr-1 font-size-14 text-gray-1">From</span>
                        <span className="font-weight-bold">£899.00</span>
                        <span className="font-size-14 text-gray-1"> / night</span>
                    </div>
                </div>
            </div>
        </div> */}
                </div>
            </div>
        </div>
        {/* End Product Cards Ratings With carousel */}

    </>
}

export default ProductCardsRatingWithCarousel


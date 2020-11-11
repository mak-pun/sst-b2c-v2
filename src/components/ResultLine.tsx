import React, { useState, useEffect } from 'react'
import { useSref, UISref } from '@uirouter/react'
import { v4 as uuid } from 'uuid'

import { $, format } from '../helper'
import Stars from './Stars'
import AvailabilityBadge from './AvailabilityBadge'

type Props = {
    searchId: string;
    hotelId: string;
    state: 'INSTANT' | 'ON_REQUEST'
    title: string;
    stars: number;
    images: Array<string>;
    location: string;
    instantSamples: Array<any>;
    instantPrice: number;
    lowCostSamples: Array<any>;
    lowCostPrice: number;
    bestOfferSamples: Array<any>;
    bestOfferPrice: number;
    currency: string;
    amenities: Array<string>;
}
const ResultLine = (props: Props) => {
    const {
        searchId,
        hotelId,
        state,
        title,
        stars,
        images,
        location,
        instantSamples,
        instantPrice,
        lowCostSamples,
        lowCostPrice,
        bestOfferSamples,
        bestOfferPrice,
        currency,
        amenities,
    } = props

    const [slickElementId, setSlickElementId] = useState<string>('')
    const findOutMoreLink = useSref('hotel.result', { hotelId, searchId })

    useEffect(() => {
        setSlickElementId(uuid())
    }, [])

    useEffect(() => {
        if (slickElementId) {
            // initialization of slick carousel
            try {
                $.HSCore.components.HSSlickCarousel.init('#' + slickElementId);
            } catch (error) {
                console.log(error)
            }
        }
    }, [slickElementId])


    // const renderStars = (stars: number) => {
    //     const starElements = []
    //     for (let i = 0; i < stars; i++) {
    //         starElements.push(<small key={i} className="fas fa-star"></small>)
    //     }
    //     return starElements
    // }

    const renderPriceButton = (label: string, price: number, sampleId: string, color: 'primary' | 'warning' | 'success') => {
        // const link = useSref('hotel.result', { hotelId, searchId, sampleId })
        return (
            <li style={{ cursor: 'pointer' }} onClick={() => console.log('clicked')} className={'border rounded-xs d-flex flex-column align-items-center text-lh-1 pt-2 pb-1 px-2 my-1 border-' + color}>
                <UISref to='hotel.result' params={{ hotelId, searchId, sampleId }} className=''>
                    <a>
                    <span className="font-weight-bold d-block font-weight-normal font-size-18 text-black">{format.formatPrice(price, currency)}</span>
                    <span className={'d-block py-1 font-weight-bold font-size-14 text-' + color}>{label}</span>

                    </a>
                    
                </UISref>
            </li>
        )

    }
    
    return (
        <>
            <div className="card">
                <div className="product-item__outer w-100">
                    <div className="row">
                        <div className="col-md-5 col-xl-4">
                            <div className="product-item__header">
                                <div className="position-relative">
                                    <div id={slickElementId} className="js-slick-carousel u-slick u-slick--equal-height "
                                        data-slides-show="1"
                                        data-slides-scroll="1"
                                        data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle"
                                        data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left"
                                        data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right"
                                        data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0">
                                        {images.map((image, index) => (
                                            <div key={index} className="js-slide">
                                                <a {...findOutMoreLink} className="d-block gradient-overlay-half-bg-gradient-v5"><img className="img-fluid min-height-230 card-img-top" src={image} /></a>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-xl-5 col-wd-4gdot5 flex-horizontal-center">
                            <div className="w-100 position-relative m-4 m-md-0">
                                <div className="mb-1 pb-1">
                                    <AvailabilityBadge status={state}></AvailabilityBadge>
                                    {/* <span className={'badge text-white rounded-xs font-size-13 py-1 p-xl-2 ' + (state === 'INSTANT' ? 'badge-green' : 'badge-orange')}>{format.formatSampleAvailability(state)}</span> */}
                                    {/* <span className="text-yellow-lighter-2 ml-2"> */}
                                        {/* {renderStars(stars)} */}
                                        <Stars number={stars} className={'ml-2'}></Stars>
                                    {/* </span> */}
                                </div>

                                <a {...findOutMoreLink}>
                                    <span className="font-weight-medium font-size-17 text-dark d-flex mb-1">{title}</span>
                                </a>
                                <div className="card-body p-0">
                                    {/* <a href="../hotels/hotel-single-v1.html" className="d-block mb-3"> */}
                                    <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1 d-block mb-3">
                                        <i className="icon flaticon-placeholder mr-2 font-size-20"></i> {location}
                                        {/* <small className="px-1 font-size-15"> - </small> */}
                                        {/* <span className="text-primary font-size-14">View on map</span> */}
                                    </div>
                                    {/* </a> */}
                                    <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-wrap">
                                        {amenities.slice(0, 3).map((amenity, index) => {
                                            return <li key={index} className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-lg-2">
                                                <span className="font-weight-normal font-size-14">{amenity}</span>
                                            </li>
                                        })}

                                        {amenities.length > 3 && <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                                            <span className="font-weight-normal font-size-14">{amenities.length - 3} more amenities</span>
                                        </li>}
                                    </ul>
                                    {/* <ul className="list-unstyled d-md-flex">
                                        <li className="border border-green bg-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                                            <span className="font-weight-normal font-size-14 text-white">Lowest price includes</span>
                                        </li>
                                        <li className="border border-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 ml-md-n1 mb-2 mb-md-0">
                                            <span className="font-weight-normal font-size-14 text-green">Free breakfast</span>
                                        </li>
                                    </ul> */}
                                    <UISref to='hotel.result' params={{ searchId, hotelId }}>
                                        <button type="button" className="btn btn-block btn-xs btn-outline-primary">Find out more</button>
                                    </UISref>

                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-wd-3gdot5 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                            <div className="d-xl-flex flex-wrap border-xl-left ml-4 ml-xl-0 pr-xl-3 pr-wd-5 text-xl-right justify-content-xl-end">
                                <ul style={{ width: '100%' }} className="list-unstyled d-flex flex-column pl-4">
                                    {instantSamples.length > 0 && renderPriceButton('Book instant', instantPrice, instantSamples[0].sample_id, 'primary')}
                                    {lowCostSamples.length > 0 && renderPriceButton('Book cheapest', lowCostPrice, lowCostSamples[0].sample_id, 'warning')}
                                    {bestOfferSamples.length > 0 && renderPriceButton('Book best offer', bestOfferPrice, bestOfferSamples[0].sample_id, 'success')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultLine
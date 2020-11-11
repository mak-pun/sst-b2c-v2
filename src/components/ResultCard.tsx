import React from 'react'
import { format } from '../helper'
import { UISref } from '@uirouter/react'
import Stars from './Stars'

type Props = {
    type: 'common' | 'tab'
    searchId: string;
    hotelId: string;
    title: string;
    stars: number;
    image: string;
    location: string;
    price: number;
    currency: string;
}
const ResultCard = (props: Props) => {
    const {
        type,
        searchId,
        hotelId,
        title,
        stars,
        image,
        location,
        price,
        currency,
    } = props

    // const starElements = []
    // for (let i = 0; i < stars; i++) {
    //     starElements.push(<small key={i} className="fas fa-star"></small>)
    // }

    return (
        <>
            <div className={'card transition-3d-hover shadow-hover-2 h-100 ' + (type === 'common' ? 'w-100' : 'tab-card')}>
                <div className="position-relative">
                    <UISref to='hotel.result' params={{ searchId, hotelId }}>
                        <a className="d-block gradient-overlay-half-bg-gradient-v5">
                            <img className="card-img-top" src={image} alt="Image Description" />
                        </a>
                    </UISref>
                    <div className="position-absolute bottom-0 left-0 right-0">
                        <div className="px-4 pb-3">
                            <div className="d-flex align-items-center font-size-14 text-white">
                                <i className="icon flaticon-placeholder mr-2 font-size-20"></i> {location}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body px-4 pt-2 pb-3">
                    <div className="mb-2">
                        <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary letter-spacing-3">
                            {/* <div className="text-yellow-lighter-2"> */}
                                <Stars number={stars}></Stars>
                            {/* </div> */}
                        </div>
                    </div>
                    <UISref to='hotel.result' params={{ searchId, hotelId }}>
                        <a className="card-title font-size-17 font-weight-medium text-dark">{title}</a>
                    </UISref>
                    <div className="mb-0">
                        <span className="mr-1 font-size-14 text-gray-1">Price start from</span>
                        <span className="font-weight-bold">{format.formatPrice(price, currency)}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultCard
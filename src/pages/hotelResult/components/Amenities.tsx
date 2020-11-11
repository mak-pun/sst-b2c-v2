import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/rootReducer'

const Amenities = () => {

    const {result} = useSelector((state: RootState) => state.hotelResult)

    const icons: {[name: string]: string} = {
        'Wi-Fi': 'wifi-signal',
        'Bar/Lounge': 'wine-glass',
        'Pool Bar': 'wine-glass',
        'Health Club / Gym': 'weightlifting',
        'On-Site Restaurants': 'hamburger',
        'Pool': 'lifeboat',
        'Spa': 'bathrobe',
        'Tours': 'climbing',
        'Area Shuttle': 'sedan',
        'Airport Transfer': 'airplane',
        'Parking': 'car',
        'Valet Parking': 'car',
        'Laundry': 'clothes',
        'Room Service': 'folded-towel',
        '24 Hour Front Desk': 'support',
        'Business Center': 'three-men-conference',
        'Rooftop Terrace': 'town',
        'Concierge': 'customer-service',
        'Childcare': 'chair',
        'Shops': 'price',
        'Disabled Facilities': 'home',
        'Nightclub': 'wine-glass'
    }

    return (
        <>
            <h5 id="scroll-amenities" className="font-size-21 font-weight-bold text-dark mb-4">
                Amenities
            </h5>
            <ul className="list-group list-group-borderless list-group-horizontal list-group-flush no-gutters row">
                {result?.amenities.map((amenity, index)=>{
                    return <li key={index} className="col-md-4 list-group-item"><i className={'text-primary font-size-24 mr-3 flaticon-' + icons[amenity]}></i>{amenity}</li>
                })}
                {/* <li className="col-md-4 list-group-item"><i className="flaticon-wifi-signal mr-3 text-primary font-size-24"></i>Wifi</li> */}
                {/* <li className="col-md-4 list-group-item"><i className="flaticon-alarm mr-3 text-primary font-size-24"></i>Wake-up call</li> */}
                {/* <li className="col-md-4 list-group-item"><i className="flaticon-bathrobe mr-3 text-primary font-size-24"></i>Bathrobes</li> */}
                {/* <li className="col-md-4 list-group-item"><i className="flaticon-weightlifting mr-3 text-primary font-size-24"></i>Fitness center</li> */}
                {/* <li className="col-md-4 list-group-item"><i className="flaticon-phone-call mr-3 text-primary font-size-24"></i>Telephone</li> */}
                {/* <li className="col-md-4 list-group-item"><i className="flaticon-folded-towel mr-3 text-primary font-size-24"></i>Dry cleaning</li> */}
                {/* <li className="col-md-4 list-group-item"><i className="flaticon-wine-glass mr-3 text-primary font-size-24"></i>Mini bar</li> */}
                {/* <li className="col-md-4 list-group-item"><i className="flaticon-hair-dryer mr-3 text-primary font-size-24"></i>Hair dryer</li> */}
                {/* <li className="col-md-4 list-group-item"><i className="flaticon-desk-chair mr-3 text-primary font-size-24"></i>High chair</li> */}
                {/* <li className="col-md-4 list-group-item"><i className="flaticon-hamburger mr-3 text-primary font-size-24"></i>Restaurant</li> */}
                {/* <li className="col-md-4 list-group-item"><i className="flaticon-air-conditioner mr-3 text-primary font-size-24"></i>Air Conditioning</li> */}
                {/* <li className="col-md-4 list-group-item"><i className="flaticon-slippers mr-3 text-primary font-size-24"></i>Slippers</li> */}

                
                {/* <li className='col-md-4 list-group-item'><span className="fa fa-swimming-pool mr-3 text-primary font-size-24"></span>Pool</li> */}
            </ul>
        </>
    )
}

export default Amenities


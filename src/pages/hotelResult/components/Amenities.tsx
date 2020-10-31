import React from 'react'

const Amenities = () => {
    return (
        <>
            <h5 id="scroll-amenities" className="font-size-21 font-weight-bold text-dark mb-4">
                Amenities
                    </h5>
            <ul className="list-group list-group-borderless list-group-horizontal list-group-flush no-gutters row">
                <li className="col-md-4 list-group-item"><i className="flaticon-wifi-signal mr-3 text-primary font-size-24"></i>Wifi</li>
                <li className="col-md-4 list-group-item"><i className="flaticon-alarm mr-3 text-primary font-size-24"></i>Wake-up call</li>
                <li className="col-md-4 list-group-item"><i className="flaticon-bathrobe mr-3 text-primary font-size-24"></i>Bathrobes</li>
                <li className="col-md-4 list-group-item"><i className="flaticon-weightlifting mr-3 text-primary font-size-24"></i>Fitness center</li>
                <li className="col-md-4 list-group-item"><i className="flaticon-phone-call mr-3 text-primary font-size-24"></i>Telephone</li>
                <li className="col-md-4 list-group-item"><i className="flaticon-folded-towel mr-3 text-primary font-size-24"></i>Dry cleaning</li>
                <li className="col-md-4 list-group-item"><i className="flaticon-wine-glass mr-3 text-primary font-size-24"></i>Mini bar</li>
                <li className="col-md-4 list-group-item"><i className="flaticon-hair-dryer mr-3 text-primary font-size-24"></i>Hair dryer</li>
                <li className="col-md-4 list-group-item"><i className="flaticon-desk-chair mr-3 text-primary font-size-24"></i>High chair</li>
                <li className="col-md-4 list-group-item"><i className="flaticon-hamburger mr-3 text-primary font-size-24"></i>Restaurant</li>
                <li className="col-md-4 list-group-item"><i className="flaticon-air-conditioner mr-3 text-primary font-size-24"></i>Air Conditioning</li>
                <li className="col-md-4 list-group-item"><i className="flaticon-slippers mr-3 text-primary font-size-24"></i>Slippers</li>
            </ul>
        </>
    )
}

export default Amenities
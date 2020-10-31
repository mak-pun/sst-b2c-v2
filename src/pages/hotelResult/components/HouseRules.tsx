import React from 'react'

const HouseRules = () => {
    return (<>
        <div className="border-bottom py-4 position-relative">
            <h5 id="scroll-specifications" className="font-size-21 font-weight-bold text-dark mb-4">
                House Rules
                    </h5>
            <ul className="list-group list-group-borderless list-group-horizontal list-group-flush no-gutters row">
                <li className="col-md-4 list-group-item py-0">
                    <div className="font-weight-bold text-dark mb-2">Check-in/Check-out</div>
                    <div className="text-gray-1 mb-2 pt-1">Check-in from: 15:00</div>
                    <div className="text-gray-1 mb-4 pt-1">Check-out until: 11:00</div>
                    <div className="font-weight-bold text-dark mb-2">Getting around</div>
                    <div className="text-gray-1 mb-4 pt-1">Distance from city center: 0 km</div>
                    <div className="font-weight-bold text-dark mb-2">The property</div>
                    <div className="text-gray-1 mb-2 pt-1">Number of floors: 8</div>
                    <div className="text-gray-1 mb-2 pt-1">Number of rooms : 998</div>
                    <div className="text-gray-1 mb-4 pt-1">Most recent renovation: 2019</div>
                </li>
                <li className="col-md-4 list-group-item py-0">
                    <div className="font-weight-bold text-dark mb-2">Extras</div>
                    <div className="text-gray-1 mb-2 pt-1">Breakfast charge (unless included in room price): 20 GBP</div>
                    <div className="text-gray-1 mb-4 pt-1">Still Water Horse Head Statue - 70 m</div>
                    <div className="font-weight-bold text-dark mb-2">The property</div>
                    <div className="text-gray-1 mb-2 pt-1">Number of floors: 8</div>
                    <div className="text-gray-1 mb-2 pt-1">Number of rooms : 998</div>
                    <div className="text-gray-1 mb-2 pt-1">Most recent renovation: 2019</div>
                </li>
            </ul>
            <div className="collapse" id="collapseLinkExample4">
                <ul className="list-group list-group-borderless list-group-horizontal list-group-flush no-gutters row">
                    <li className="col-md-4 list-group-item py-0">
                        <div className="font-weight-bold text-dark mb-2">Check-in/Check-out</div>
                        <div className="text-gray-1 mb-2 pt-1">Check-in from: 15:00</div>
                        <div className="text-gray-1 mb-4 pt-1">Check-out until: 11:00</div>
                        <div className="font-weight-bold text-dark mb-2">Getting around</div>
                        <div className="text-gray-1 mb-2 pt-1">Distance from city center: 0 km</div>
                    </li>
                    <li className="col-md-4 list-group-item py-0">
                        <div className="font-weight-bold text-dark mb-2">Extras</div>
                        <div className="text-gray-1 mb-2 pt-1">Breakfast charge (unless included in room price): 20 GBP</div>
                        <div className="text-gray-1 mb-4 pt-1">Still Water Horse Head Statue - 70 m</div>
                        <div className="font-weight-bold text-dark mb-2">The property</div>
                        <div className="text-gray-1 mb-2 pt-1">Number of floors: 8</div>
                        <div className="text-gray-1 mb-2 pt-1">Number of rooms : 998</div>
                        <div className="text-gray-1 mb-4 pt-1">Most recent renovation: 2019</div>
                    </li>
                </ul>
            </div>

            <a className="link-collapse link-collapse-custom gradient-overlay-half mb-5 d-inline-block border-bottom border-primary" data-toggle="collapse" href="#collapseLinkExample4" role="button" aria-expanded="false" aria-controls="collapseLinkExample4">
                <span className="link-collapse__default font-size-14">View More <i className="flaticon-down-chevron font-size-10 ml-1"></i></span>
                <span className="link-collapse__active font-size-14">View Less <i className="flaticon-arrow font-size-10 ml-1"></i></span>
            </a>
        </div>

    </>)
}

export default HouseRules
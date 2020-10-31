import React from 'react'

const NearestEssentials = () => {
    return (
        <>
            <div className="border-bottom py-4 position-relative">
                <h5 id="scroll-specifications" className="font-size-21 font-weight-bold text-dark mb-4">
                    Nearest Essentials
                    </h5>
                <ul className="list-group list-group-borderless list-group-horizontal list-group-flush no-gutters row">
                    <li className="col-md-4 mb-5 list-group-item py-0">
                        <div className="font-weight-bold text-dark mb-1">Airports</div>
                        <div className="text-gray-1">London City Airport (LCY)</div>
                        <div className="text-primary mb-2">14.4 km</div>
                        <div className="text-gray-1">Heathrow Airport (LHR)</div>
                        <div className="text-primary">21.2 km</div>
                    </li>
                    <li className="col-md-4 mb-5 list-group-item py-0">
                        <div className="font-weight-bold text-dark mb-1">Public transportation</div>
                        <div className="text-gray-1">Marble Arch Tube Station</div>
                        <div className="text-primary mb-2">40 m</div>
                        <div className="text-gray-1">Baker Street Tube Station</div>
                        <div className="text-primary">9 m</div>
                    </li>
                    <li className="col-md-4 mb-5 list-group-item py-0">
                        <div className="font-weight-bold text-dark mb-1">Hospital or clinic</div>
                        <div className="text-gray-1">The Wellington Hospital</div>
                        <div className="text-primary">2.1 km</div>
                    </li>
                    <li className="col-md-4 mb-5 list-group-item py-0">
                        <div className="font-weight-bold text-dark mb-1">Horsepower (hp)</div>
                        <div className="text-gray-1">200</div>
                    </li>
                    <li className="col-md-4 mb-5 list-group-item py-0">
                        <div className="font-weight-bold text-dark mb-1">Transmission</div>
                        <div className="text-gray-1">Manual</div>
                    </li>
                    <li className="col-md-4 mb-5 list-group-item py-0">
                        <div className="font-weight-bold text-dark mb-1">Condition</div>
                        <div className="text-gray-1">New</div>
                    </li>
                    <li className="col-md-4 mb-5 list-group-item py-0">
                        <div className="font-weight-bold text-dark mb-1">Drive</div>
                        <div className="text-gray-1">Rear</div>
                    </li>
                    <li className="col-md-4 mb-5 list-group-item py-0">
                        <div className="font-weight-bold text-dark mb-1">Warranty</div>
                        <div className="text-gray-1">Yes</div>
                    </li>
                    <li className="col-md-4 mb-5 list-group-item py-0">
                        <div className="font-weight-bold text-dark mb-1">Hospital or clinic</div>
                        <div className="text-gray-1">The Wellington Hospital</div>
                        <div className="text-primary">2.1 km</div>
                    </li>
                </ul>
                <div className="collapse" id="collapseLinkExample2">
                    <ul className="list-group list-group-borderless list-group-horizontal list-group-flush no-gutters row">
                        <li className="col-md-4 mb-5 list-group-item py-0">
                            <div className="font-weight-bold text-dark mb-1">Airports</div>
                            <div className="text-gray-1">London City Airport (LCY)</div>
                            <div className="text-primary mb-2">14.4 km</div>
                            <div className="text-gray-1">Heathrow Airport (LHR)</div>
                            <div className="text-primary">21.2 km</div>
                        </li>
                        <li className="col-md-4 mb-5 list-group-item py-0">
                            <div className="font-weight-bold text-dark mb-1">Public transportation</div>
                            <div className="text-gray-1">Marble Arch Tube Station</div>
                            <div className="text-primary mb-2">40 m</div>
                            <div className="text-gray-1">Baker Street Tube Station</div>
                            <div className="text-primary">9 m</div>
                        </li>
                        <li className="col-md-4 mb-5 list-group-item py-0">
                            <div className="font-weight-bold text-dark mb-1">Shopping</div>
                            <div className="text-gray-1">Harrods</div>
                            <div className="text-primary">1.5 km</div>
                        </li>
                    </ul>
                </div>

                <a className="link-collapse link-collapse-custom gradient-overlay-half mb-5 d-inline-block border-bottom border-primary" data-toggle="collapse" href="#collapseLinkExample2" role="button" aria-expanded="false" aria-controls="collapseLinkExample2">
                    <span className="link-collapse__default font-size-14">View More <i className="flaticon-down-chevron font-size-10 ml-1"></i></span>
                    <span className="link-collapse__active font-size-14">View Less <i className="flaticon-arrow font-size-10 ml-1"></i></span>
                </a>
            </div>
        </>
    )
}

export default NearestEssentials
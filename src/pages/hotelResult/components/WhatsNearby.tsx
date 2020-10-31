import React from 'react'

const WhatsNearby = () => {
    return (
        <>
            <div className="border-bottom py-4 position-relative">
                <h5 id="scroll-specifications" className="font-size-21 font-weight-bold text-dark mb-4">
                    What's Nearby
                    </h5>
                <ul className="list-group list-group-borderless list-group-horizontal list-group-flush no-gutters row">
                    <li className="col-md-4 list-group-item py-0">
                        <div className="font-weight-bold text-dark mb-2">Popular landmarks</div>
                        <div className="text-gray-1 mb-2 pt-1">Buckingham Palace - 1.84 km</div>
                        <div className="text-gray-1 mb-2 pt-1">St. James's Park - 2.09 km</div>
                        <div className="text-gray-1 mb-2 pt-1">British Museum - 2.32 km</div>
                        <div className="text-gray-1 mb-2 pt-1">Westminster Abbey - 2.65 km</div>
                        <div className="text-gray-1 mb-2 pt-1">Houses of Parliament - 2.78 km</div>
                        <div className="text-gray-1 mb-2 pt-1">Camden Market - 3.31 km</div>
                        <div className="text-gray-1 mb-2 pt-1">Tower Bridge - 5.85 km</div>
                        <div className="text-gray-1 mb-2 pt-1">Tower of London - 5.76 km</div>
                    </li>
                    <li className="col-md-4 list-group-item py-0">
                        <div className="font-weight-bold text-dark mb-2">Nearby landmarks</div>
                        <div className="text-gray-1 mb-2 pt-1">Marble Arch Tube Station - 40 m</div>
                        <div className="text-gray-1 mb-2 pt-1">Still Water Horse Head Statue - 70 m</div>
                        <div className="text-gray-1 mb-2 pt-1">Marble Arch - 80 m</div>
                        <div className="text-gray-1 mb-2 pt-1">Tyburn Tree - 140 m</div>
                        <div className="text-gray-1 mb-2 pt-1">Speakers’ Corner - 160 m</div>
                        <div className="text-gray-1 mb-2 pt-1">Homemade London - 220 m</div>
                        <div className="text-gray-1 mb-2 pt-1">Salt Whisky Bar - 240 m</div>
                        <div className="text-gray-1 mb-2 pt-1">Clarks - 280 m</div>
                    </li>
                </ul>
                <div className="collapse" id="collapseLinkExample3">
                    <ul className="list-group list-group-borderless list-group-horizontal list-group-flush no-gutters row">
                        <li className="col-md-4 mb-2 list-group-item py-0">
                            <div className="text-gray-1 mb-2 pt-1">Buckingham Palace - 1.84 km</div>
                            <div className="text-gray-1 mb-2 pt-1">St. James's Park - 2.09 km</div>
                            <div className="text-gray-1 mb-2 pt-1">British Museum - 2.32 km</div>
                        </li>
                        <li className="col-md-4 mb-2 list-group-item py-0">
                            <div className="text-gray-1 mb-2 pt-1">Marble Arch Tube Station - 40 m</div>
                            <div className="text-gray-1 mb-2 pt-1">Still Water Horse Head Statue - 70 m</div>
                            <div className="text-gray-1 mb-2 pt-1">Marble Arch - 80 m</div>
                        </li>
                    </ul>
                </div>

                <a className="link-collapse link-collapse-custom gradient-overlay-half mb-5 d-inline-block border-bottom border-primary" data-toggle="collapse" href="#collapseLinkExample3" role="button" aria-expanded="false" aria-controls="collapseLinkExample3">
                    <span className="link-collapse__default font-size-14">View More <i className="flaticon-down-chevron font-size-10 ml-1"></i></span>
                    <span className="link-collapse__active font-size-14">View Less <i className="flaticon-arrow font-size-10 ml-1"></i></span>
                </a>
            </div>
        </>
    )
}

export default WhatsNearby
import React from 'react'

const Description = () => {
    return (<>

        <div className="border-bottom position-relative">
            <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark">
                Description
                    </h5>
            <p>The 4-star Park Central Hotel offers comfort and convenience whether you're on business or holiday in New York (NY). Featuring a complete list of amenities, guests will find their stay at the property a comfortable one. Service-minded staff will welcome and guide you at the Park Central Hotel. Air conditioning, heating, desk, alarm clock, iPod docking station can be found in selected guestrooms. The hotel offers various recreational opportunities. Park Central Hotel combines warm hospitality with a lovely ambiance to make your stay in New York (NY) unforgettable.</p>

            <div className="collapse" id="collapseLinkExample">
                <p>Once inside the historic palace located on the Right Bank of the Seine, see unmissable and iconic sights Once inside the historic palace located on the Right Bank of the Seine, see unmissable and iconic sights such as the Mona Lisa and Venus de Milo. Discover masterpieces of the Renaissance and ancient Egyptian relics, along with paintings from the 13th to 20th centuries, prints from the Royal Collection, and much more such as the Mona Lisa and Venus de Milo. Discover masterpieces of the Renaissance and ancient Egyptian relics, along with paintings from the 13th to 20th centuries, prints from the Royal Collection, and much more.</p>
            </div>

            <a className="link-collapse link-collapse-custom gradient-overlay-half mb-5 d-inline-block border-bottom border-primary" data-toggle="collapse" href="#collapseLinkExample" role="button" aria-expanded="false" aria-controls="collapseLinkExample">
                <span className="link-collapse__default font-size-14">View More <i className="flaticon-down-chevron font-size-10 ml-1"></i></span>
                <span className="link-collapse__active font-size-14">View Less <i className="flaticon-arrow font-size-10 ml-1"></i></span>
            </a>
        </div>

    </>)
}

export default Description
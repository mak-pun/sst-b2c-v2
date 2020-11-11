import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/rootReducer'
import { useCurrentStateAndParams } from '@uirouter/react'

const Description = () => {
    const {hotels, isLoading} = useSelector((state: RootState)=> state.hotel)
    const { params } = useCurrentStateAndParams()
    const [description, setDescription] = useState<string>('')
    useEffect(()=>{
        if(hotels[params.hotelId]){
            setDescription(hotels[params.hotelId].description)
        }
    }, [hotels])

    return (<>

        <div className="border-bottom position-relative">
            <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark">Description</h5>
            <p style={{whiteSpace: 'pre-line'}}>{description}</p>
            {/* <div className="collapse" id="collapseLinkExample">
                <p>Once inside the historic palace located on the Right Bank of the Seine, see unmissable and iconic sights Once inside the historic palace located on the Right Bank of the Seine, see unmissable and iconic sights such as the Mona Lisa and Venus de Milo. Discover masterpieces of the Renaissance and ancient Egyptian relics, along with paintings from the 13th to 20th centuries, prints from the Royal Collection, and much more such as the Mona Lisa and Venus de Milo. Discover masterpieces of the Renaissance and ancient Egyptian relics, along with paintings from the 13th to 20th centuries, prints from the Royal Collection, and much more.</p>
            </div> */}

            {/* <a className="link-collapse link-collapse-custom gradient-overlay-half mb-5 d-inline-block border-bottom border-primary" data-toggle="collapse" href="#collapseLinkExample" role="button" aria-expanded="false" aria-controls="collapseLinkExample">
                <span className="link-collapse__default font-size-14">View More <i className="flaticon-down-chevron font-size-10 ml-1"></i></span>
                <span className="link-collapse__active font-size-14">View Less <i className="flaticon-arrow font-size-10 ml-1"></i></span>
            </a> */}
        </div>

    </>)
}

export default Description
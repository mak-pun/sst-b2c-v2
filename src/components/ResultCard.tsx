import React from 'react'

type Props = {
    image: string;
    location: string;
    stars: number;
    title: string;
    price: number;
    currency: string;
    type: 'common' | 'tab'
}
const ResultCard = (props: Props) => {
    const {
        image,
        location,
        stars,
        title,
        price,
        currency,
        type
    } = props

    const starElements = []
    for (let i = 0; i < stars; i++) {
        starElements.push(<small key={i} className="fas fa-star"></small>)
    }

    return (
        <>
            <div className={'card transition-3d-hover shadow-hover-2 h-100 ' + (type === 'common' ? 'w-100' : 'tab-card')}>
                <div className="position-relative">
                    <a href="../hotels/hotel-sinlge-v1.html" className="d-block gradient-overlay-half-bg-gradient-v5">
                        <img className="card-img-top" src={image} alt="Image Description" />
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
                                    <i className="icon flaticon-placeholder mr-2 font-size-20"></i> {location}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-body px-4 pt-2 pb-3">
                    <div className="mb-2">
                        <div className="d-inline-flex align-items-center font-size-13 text-lh-1 text-primary letter-spacing-3">
                            <div className="green-lighter">
                                {starElements}
                            </div>
                        </div>
                    </div>
                    <a href="../hotels/hotel-sinlge-v1.html" className="card-title font-size-17 font-weight-medium text-dark">{title}</a>
                    {/* <div className="mt-2 mb-3">
                        <span className="badge badge-pill badge-primary py-1 px-2 font-size-14 border-radius-3 font-weight-normal">4.6/5</span>
                        <span className="font-size-14 text-gray-1 ml-2">(166 reviews)</span>
                    </div> */}
                    <div className="mb-0">
                        <span className="mr-1 font-size-14 text-gray-1">From</span>
                        <span className="font-weight-bold">{currency} {price}</span>
                        <span className="font-size-14 text-gray-1"> / night</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultCard
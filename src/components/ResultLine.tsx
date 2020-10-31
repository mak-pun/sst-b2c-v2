import React from 'react'

type Props = {
    images: Array<string>;
    location: string;
    stars: number;
    title: string;
    price: number;
    currency: string;
}
const ResultLine = (props: Props) => {
    const {
        images,
        location,
        stars,
        title,
        price,
        currency,
    } = props

    const starElements = []
    for (let i = 0; i < stars; i++) {
        starElements.push(<small key={i} className="fas fa-star"></small>)
    }

    return (
        <>
            <div className="card">
                <div className="product-item__outer w-100">
                    <div className="row">
                        <div className="col-md-5 col-xl-4">
                            <div className="product-item__header">
                                <div className="position-relative">
                                    <div className="js-slick-carousel u-slick u-slick--equal-height "
                                        data-slides-show="1"
                                        data-slides-scroll="1"
                                        data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle"
                                        data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left"
                                        data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right"
                                        data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0">
                                        {images.map(image => (
                                            <div className="js-slide">
                                                <a href="../hotels/hotel-single-v1.html" className="d-block gradient-overlay-half-bg-gradient-v5"><img className="img-fluid min-height-230 card-img-top" src={image} /></a>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-xl-5 col-wd-4gdot5 flex-horizontal-center">
                            <div className="w-100 position-relative m-4 m-md-0">
                                <div className="mb-1 pb-1">
                                    <span className="badge badge-orange text-white rounded-xs font-size-13 py-1 p-xl-2">Limited Time Offer</span>
                                    <span className="green-lighter ml-2">
                                        {starElements}
                                    </span>
                                </div>

                                <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                    <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                        <span className="flaticon-heart-1 font-size-20"></span>
                                    </button>
                                </div>
                                <a href="../hotels/hotel-single-v1.html">
                                    <span className="font-weight-medium font-size-17 text-dark d-flex mb-1">{title}</span>
                                </a>
                                <div className="card-body p-0">
                                    <a href="../hotels/hotel-single-v1.html" className="d-block mb-3">
                                        <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                                            <i className="icon flaticon-placeholder mr-2 font-size-20"></i> {location}
                                                                            {/* <small className="px-1 font-size-15"> - </small> */}
                                            {/* <span className="text-primary font-size-14">View on map</span> */}
                                        </div>
                                    </a>
                                    <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap">
                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                                            <span className="font-weight-normal font-size-14">Breakfast</span>
                                        </li>
                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                                            <span className="font-weight-normal font-size-14">Free Cancellation</span>
                                        </li>
                                        <li className="border border-dark rounded-xs d-flex align-items-center text-lh-1 py-1 px-2 mb-2 mb-md-0">
                                            <span className="font-weight-normal font-size-14">Pay at the hotel</span>
                                        </li>
                                    </ul>
                                    <ul className="list-unstyled d-md-flex">
                                        <li className="border border-green bg-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mb-2 mb-md-0">
                                            <span className="font-weight-normal font-size-14 text-white">Lowest price includes</span>
                                        </li>
                                        <li className="border border-green rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 ml-md-n1 mb-2 mb-md-0">
                                            <span className="font-weight-normal font-size-14 text-green">Free breakfast</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-wd-3gdot5 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                            <div className="d-xl-flex flex-wrap border-xl-left ml-4 ml-xl-0 pr-xl-3 pr-wd-5 text-xl-right justify-content-xl-end">
                                <div className="mb-xl-5 mb-wd-7">
                                    <div className="mb-0">
                                        <div className="my-xl-1">
                                            <div className="d-flex align-items-center justify-content-xl-end mb-2">
                                                <span className="badge badge-primary rounded-xs font-size-14 p-2 mr-2 mb-0">4.6 /5 </span>
                                                <span className="font-size-17 font-weight-bold text-primary">Very Good</span>
                                            </div>
                                        </div>
                                        <span className="font-size-14 text-gray-1">(1,186 Reviews)</span>
                                    </div>
                                    <span className="font-size-14 pl-xl-2">"Great value" "Excellent location"</span>
                                </div>
                                <div className="mb-0">
                                    <span className="mr-1 font-size-14 text-gray-1">From</span>
                                    <span className="font-weight-bold">{currency} {price}</span>
                                    <span className="font-size-14 text-gray-1"> / night</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultLine
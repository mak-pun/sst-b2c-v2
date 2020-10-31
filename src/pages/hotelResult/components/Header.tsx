import React, { useEffect } from 'react'
import {$} from '../../../helper'

const Header = () => {

    useEffect(()=>{
        // initialization of popups
        $.HSCore.components.HSFancyBox.init('.js-fancybox');
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-lg-8 col-xl-9">
                    <div className="d-block d-md-flex flex-center-between align-items-start mb-2">
                        <div className="mb-3">
                            <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap mb-2">
                                <li className="border border-brown bg-brown rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                                    <span className="font-weight-normal text-white font-size-14">Newly renovated</span>
                                </li>
                                <li className="border border-maroon bg-maroon rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                                    <span className="font-weight-normal font-size-14 text-white">Free Wi-Fi</span>
                                </li>
                            </ul>
                            <div className="d-block d-md-flex flex-horizontal-center mb-2 mb-md-0">
                                <h4 className="font-size-23 font-weight-bold mb-1">Park Avenue Baker Street London</h4>
                                <div className="ml-3 font-size-10 letter-spacing-2">
                                    <span className="d-block green-lighter ml-1">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="d-block d-md-flex flex-horizontal-center font-size-14 text-gray-1">
                                <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                                    <a href="#" className="ml-1 d-block d-md-inline"> - View on map</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="mb-4">
                        <div className="flex-center-between">
                            <div className="flex-horizontal-center mr-2">
                                <div className="badge-primary rounded-xs px-1">
                                    <span className="badge font-size-19 px-2 py-2 mb-0 text-lh-inherit">4.6 /5 </span>
                                </div>

                                <div className="ml-2 text-lh-1">
                                    <div className="ml-1">
                                        <h4 className="text-primary font-size-17 font-weight-bold mb-0">Excellent</h4>
                                        <span className="text-gray-1 font-size-14">(1,186 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                            <ul className="ml-n1 list-group list-group-borderless list-group-horizontal custom-social-share">
                                <li className="list-group-item px-1 py-0">
                                    <a href="#" className="height-45 width-45 border rounded border-width-2 flex-content-center">
                                        <i className="flaticon-like font-size-18 text-dark"></i>
                                    </a>
                                </li>
                                <li className="list-group-item px-1 py-0">
                                    <a href="#" className="height-45 width-45 border rounded border-width-2 flex-content-center">
                                        <i className="flaticon-share font-size-18 text-dark"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-xl-9">
                    <div className="pb-4 mb-2">
                        <div className="row mx-n1">
                            <div className="col-lg-8 col-xl-9 mb-1 mb-lg-0 px-0 px-lg-1">
                                <a className="js-fancybox u-media-viewer" href="javascript:;"
                                    data-src={process.env.PUBLIC_URL + '/assets/img/960x490/img7.jpg'}
                                    data-fancybox="fancyboxGallery6"
                                    data-caption="Mytravel in frames - image #01"
                                    data-speed="700">
                                    <img className="img-fluid border-radius-3 min-height-458" src={process.env.PUBLIC_URL + '/assets/img/960x490/img7.jpg'} alt="Image Description" />

                                    <span className="u-media-viewer__container">
                                        <span className="u-media-viewer__icon">
                                            <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="col-lg-4 col-xl-3 px-0">
                                <a className="js-fancybox u-media-viewer pb-1" href="javascript:;"
                                    data-src={process.env.PUBLIC_URL + '/assets/img/960x490/img8.jpg'}
                                    data-fancybox="fancyboxGallery6"
                                    data-caption="Mytravel in frames - image #02"
                                    data-speed="700">
                                    <img className="img-fluid border-radius-3 min-height-150" src={process.env.PUBLIC_URL + '/assets/img/960x490/img8.jpg'} alt="Image Description" />

                                    <span className="u-media-viewer__container">
                                        <span className="u-media-viewer__icon">
                                            <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                        </span>
                                    </span>
                                </a>
                                <a className="js-fancybox u-media-viewer pb-1" href="javascript:;"
                                    data-src={process.env.PUBLIC_URL + '/assets/img/960x490/img9.jpg'}
                                    data-fancybox="fancyboxGallery6"
                                    data-caption="Mytravel in frames - image #03"
                                    data-speed="700">
                                    <img className="img-fluid border-radius-3 min-height-150" src={process.env.PUBLIC_URL + '/assets/img/960x490/img9.jpg'} alt="Image Description" />

                                    <span className="u-media-viewer__container">
                                        <span className="u-media-viewer__icon">
                                            <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                        </span>
                                    </span>
                                </a>
                                <a className="js-fancybox u-media-viewer u-media-viewer__dark" href="javascript:;"
                                    data-src={process.env.PUBLIC_URL + '/assets/img/960x490/img10.jpg'}
                                    data-fancybox="fancyboxGallery6"
                                    data-caption="Mytravel in frames - image #43"
                                    data-speed="700">
                                    <img className="img-fluid border-radius-3 min-height-150" src={process.env.PUBLIC_URL + '/assets/img/960x490/img10.jpg'} alt="Image Description" />

                                    <span className="u-media-viewer__container z-index-2 w-100">
                                        <span className="u-media-viewer__icon u-media-viewer__icon--active w-100  bg-transparent">
                                            <span className="u-media-viewer__icon-inner font-size-14">SEE ALL PHOTOS</span>
                                        </span>
                                    </span>
                                </a>

                                <img className="js-fancybox d-none" alt="Image Description"
                                    data-fancybox="fancyboxGallery6"
                                    data-src={process.env.PUBLIC_URL + '/assets/img/960x490/img11.jpg'}
                                    data-caption="Mytravel in frames - image #05"
                                    data-speed="700" />
                                <img className="js-fancybox d-none" alt="Image Description"
                                    data-caption="Mytravel in frames - image #06"
                                    data-src={process.env.PUBLIC_URL + '/assets/img/960x490/img12.jpg'}
                                    data-fancybox="fancyboxGallery6"
                                    data-speed="700" />
                                <img className="js-fancybox d-none" alt="Image Description"
                                    data-fancybox="fancyboxGallery6"
                                    data-src={process.env.PUBLIC_URL + '/assets/img/960x490/img10.jpg'}
                                    data-caption="Mytravel in frames - image #07"
                                    data-speed="700" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="border border-color-7 rounded px-4 pt-4 pb-3 mb-5">
                        <div className="px-2 pt-2">
                            <a href="https://goo.gl/maps/kCVqYkjHX3XvoC4B9" className="d-inline-block border rounded mb-4 overflow-hidden">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/240x170/img1.jpg'} alt="Image-Description" />
                            </a>
                            <div className="flex-horizontal-center mb-4 mt-1">
                                <div className="border-primary border rounded-xs px-3 text-lh-1dot7 py-1">
                                    <span className="font-size-21 font-weight-bold px-1 mb-0 text-lh-inherit text-primary">4.5</span>
                                </div>

                                <div className="ml-2 text-lh-1">
                                    <div className="ml-1">
                                        <h4 className="text-primary font-size-17 font-weight-bold mb-0">Exceptional</h4>
                                        <span className="text-gray-1 font-size-14">Location rating score</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <i className="flaticon-placeholder-1 font-size-25 text-primary mr-3 pr-1"></i>
                                <h6 className="mb-0 font-size-14 text-gray-1">
                                    <a href="#">Better than 99% of properties in London</a>
                                </h6>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <i className="flaticon-medal font-size-25 text-primary mr-3 pr-1"></i>
                                <h6 className="mb-0 font-size-14 text-gray-1">
                                    <a href="#">Exceptional location - Inside city center</a>
                                </h6>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <i className="flaticon-home font-size-25 text-primary mr-3 pr-1"></i>
                                <h6 className="mb-0 font-size-14 text-gray-1">
                                    <a href="#">Popular neighborhood</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
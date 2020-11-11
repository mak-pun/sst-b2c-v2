import React, { useEffect, useState } from 'react'
import {$} from '../../../helper'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/rootReducer'
import { HotelImage } from '../../../api/types'
import { each } from 'jquery'
import Stars from '../../../components/Stars'

const Header = () => {

    const { result, isLoading, error} = useSelector((state: RootState)=>state.hotelResult)
    
    const [primaryImage, setPrimaryImage] = useState<HotelImage>()
    const [otherImages, setOtherImages] = useState<Array<HotelImage>>()
    const [hotelTypes, setHotelTypes] = useState<Array<string>>([])


    const hotelTypesColor: {[char: string]: string} = {
        A: 'danger',
        B: 'blue',
        C: 'green',
        F: 'brown',
        G: 'brown',
        H: 'brown',
        L: 'brown',
        N: 'maroon',
        R: 'orange',
        S: 'maroon',
        T: 'warning',
        V: 'warning'
    }

    useEffect(()=>{
        // initialization of popups
        $.HSCore.components.HSFancyBox.init('.js-fancybox');
    }, [])

    useEffect(()=>{
        if(result){
            // Main image

            const images = result.images.map((image)=>{
                return {
                    ...image, 
                    image_url: image.thumbnail_url
                        .replace('w_200','w_960')
                        .replace('h_200', 'h_490')
                        .replace('c_fit', 'c_fill')
                    }
            })

            let primaryImageTemp = images.filter(image=>image.primary)[0]
            let otherImagesTemp = images.filter(image=>!image.primary)

            setPrimaryImage(primaryImageTemp)
            setOtherImages(otherImagesTemp)

            const hotelTypes = [...result.hotel_types]
            hotelTypes.sort()
            setHotelTypes(hotelTypes)
        }
        
    }, [result])

    return (
        <>
            <div className="row">
                <div className="col-lg-8 col-xl-9">
                    <div className="d-block d-md-flex flex-center-between align-items-start mb-2">
                        <div className="mb-3">
                            <ul className="list-unstyled mb-2 d-md-flex flex-lg-wrap flex-xl-nowrap mb-2">
                                {hotelTypes.map((hotelType, index)=>{
                                    return <li key={index} className={'border rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 border-' + (hotelTypesColor[hotelType.slice(0, 1)] || 'blue') +' bg-'+ (hotelTypesColor[hotelType.substr(0,1)] || 'blue')}>
                                        <span className="font-weight-normal text-white font-size-14">{hotelType}</span>
                                    </li>
                                })}
                                {/* <li className="border border-brown bg-brown rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0">
                                    <span className="font-weight-normal text-white font-size-14">Newly renovated</span>
                                </li>
                                <li className="border border-maroon bg-maroon rounded-xs d-flex align-items-center text-lh-1 py-1 px-3 mr-md-2 mb-2 mb-md-0 mb-lg-2 mb-xl-0 mb-md-0">
                                    <span className="font-weight-normal font-size-14 text-white">Free Wi-Fi</span>
                                </li> */}
                            </ul>
                            <div className="d-block d-md-flex flex-horizontal-center mb-2 mb-md-0">
                            <h4 className="font-size-23 font-weight-bold mb-1">{result?.name}</h4>
                                <div className="ml-3 font-size-10 letter-spacing-2">
                                    <Stars number={parseInt(result?.star as string)} className={'d-block ml-1'}></Stars>
                                </div>
                            </div>
                            <div className="d-block d-md-flex flex-horizontal-center font-size-14 text-gray-1">
                                <i className="icon flaticon-placeholder mr-2 font-size-20"></i> {result?.address}
                                    <a target="_blank" rel="noopener noreferrer" href={'https://maps.google.com/?q='+result?.location.latitude+','+result?.location.longitude} className="ml-1 d-block d-md-inline"> - View on map</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-4 col-xl-3">
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
                </div> */}


                {primaryImage && otherImages && (
                <div className="col-lg-8 col-xl-9">
                    <div className="pb-4 mb-2">
                        <div className="row mx-n1">
                            <div className="col-lg-8 col-xl-9 mb-1 mb-lg-0 px-0 px-lg-1">
                                <a className="js-fancybox u-media-viewer" href="#"
                                    data-src={primaryImage?.thumbnail_url}
                                    data-fancybox="fancyboxGallery6"
                                    // data-caption="Mytravel in frames - image #01"
                                    data-speed="700">
                                    <img className="img-fluid border-radius-3 min-height-458" src={primaryImage?.image_url} alt="Image Description" />

                                    <span className="u-media-viewer__container">
                                        <span className="u-media-viewer__icon">
                                            <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="col-lg-4 col-xl-3 px-0">
                                {otherImages.slice(0, 2).map((image, index)=>{
                                    return (
                                        <a key={index} className="js-fancybox u-media-viewer pb-1" href="#"
                                            data-src={image.image_url}
                                            data-fancybox="fancyboxGallery6"
                                            // data-caption="Mytravel in frames - image #02"
                                            data-speed="700">
                                            <img className="img-fluid border-radius-3 min-height-150" src={image.image_url} alt="Image Description" />

                                            <span className="u-media-viewer__container">
                                                <span className="u-media-viewer__icon">
                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                </span>
                                            </span>
                                        </a>
                                    )
                                })}
                                <a className="js-fancybox u-media-viewer u-media-viewer__dark" href="#"
                                    data-src={otherImages[2]?.image_url}
                                    data-fancybox="fancyboxGallery6"
                                    // data-caption="Mytravel in frames - image #43"
                                    data-speed="700">
                                    <img className="img-fluid border-radius-3 min-height-150" src={otherImages[2]?.image_url} alt="Image Description" />

                                    <span className="u-media-viewer__container z-index-2 w-100">
                                        <span className="u-media-viewer__icon u-media-viewer__icon--active w-100  bg-transparent">
                                            <span className="u-media-viewer__icon-inner font-size-14">SEE ALL PHOTOS</span>
                                        </span>
                                    </span>
                                </a>
                                {otherImages.slice(3, otherImages.length).map((image, index)=>{
                                    return <img key={index} className="js-fancybox d-none" alt="Image Description"
                                    data-fancybox="fancyboxGallery6"
                                    data-src={image.image_url}
                                    // data-caption="Mytravel in frames - image #05"
                                    data-speed="700" />
                                })}
                                {/* <img className="js-fancybox d-none" alt="Image Description"
                                    data-fancybox="fancyboxGallery6"
                                    data-src={process.env.PUBLIC_URL + '/assets/img/960x490/img11.jpg'}
                                    // data-caption="Mytravel in frames - image #05"
                                    data-speed="700" />
                                <img className="js-fancybox d-none" alt="Image Description"
                                    // data-caption="Mytravel in frames - image #06"
                                    data-src={process.env.PUBLIC_URL + '/assets/img/960x490/img12.jpg'}
                                    data-fancybox="fancyboxGallery6"
                                    data-speed="700" />
                                <img className="js-fancybox d-none" alt="Image Description"
                                    data-fancybox="fancyboxGallery6"
                                    data-src={process.env.PUBLIC_URL + '/assets/img/960x490/img10.jpg'}
                                    // data-caption="Mytravel in frames - image #07"
                                    data-speed="700" /> */}
                            </div>
                        </div>
                    </div>
                </div>
                )}

                {/* 
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
                </div> */}
                <div className="col-lg-4 col-xl-3">
                    <div className="border border-color-7 rounded px-4 pt-4 pb-3 mb-5">
                        <div className="px-2 pt-2">
                            <a target="_blank" rel="noopener noreferrer" href={'https://maps.google.com/?q='+result?.location.latitude+','+result?.location.longitude} className="d-inline-block border rounded mb-4 overflow-hidden">
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
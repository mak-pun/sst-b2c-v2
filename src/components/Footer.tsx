import React, { useEffect } from 'react';
import {$} from '../helper'
import { useSref } from '@uirouter/react';

const Footer = ()=>{

    const homeSref = useSref('home', {})
    const findHotelSref = useSref('hotel.results', {})


    useEffect(()=>{
        // initialization of go to
        $.HSCore.components.HSGoTo.init('.js-go-to');
        // initialization of select
        $.HSCore.components.HSSelectPicker.init('.js-select');

    }, [])

    return <>
    
{/* ========== FOOTER ========== */}
<footer className="footer mt-4">
    <div className="space-bottom-2 space-top-1">
        <div className="container">
            <div className="row justify-content-xl-between">
                <div className="col-12 col-lg-4 col-xl-3dot1 mb-6 mb-md-10 mb-xl-0">
                    {/* Contacts */}
                    <div className="d-md-flex d-lg-block">
                        <div className="mb-5 mr-md-7 mr-lg-0">
                            <h4 className="h6 mb-4 font-weight-bold">Need My Travel Help?</h4>
                            <a href="tel:(888)-1234-56789">
                                <div className="d-flex align-items-center">
                                    <div className="mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40px" height="40px">
                                            <path fillRule="evenodd"  className="fill-primary"
                                             d="M36.093,16.717 L33.133,16.717 L30.864,19.693 C30.717,19.886 30.487,20.000 30.244,20.000 C30.244,20.000 30.243,20.000 30.243,20.000 C30.000,20.000 29.771,19.888 29.623,19.695 L27.335,16.717 L24.372,16.717 C22.218,16.717 20.465,14.965 20.465,12.811 L20.465,3.907 C20.465,1.753 22.218,0.001 24.372,0.001 L36.093,0.001 C38.247,0.001 40.000,1.753 40.000,3.907 L40.000,12.811 C40.000,14.965 38.247,16.717 36.093,16.717 ZM38.437,3.907 C38.437,2.615 37.386,1.563 36.093,1.563 L24.372,1.563 C23.080,1.563 22.028,2.615 22.028,3.907 L22.028,12.811 C22.028,14.103 23.080,15.155 24.372,15.155 L27.721,15.155 C27.964,15.155 28.193,15.268 28.340,15.460 L30.240,17.934 L32.124,15.462 C32.272,15.269 32.502,15.155 32.746,15.155 L36.093,15.155 C37.386,15.155 38.437,14.103 38.437,12.811 L38.437,12.811 L38.437,3.907 ZM31.014,8.429 L31.014,9.647 C31.014,10.078 30.664,10.428 30.232,10.428 C29.801,10.428 29.451,10.078 29.451,9.647 L29.451,8.239 C29.451,7.618 29.876,7.089 30.485,6.953 C31.041,6.829 31.416,6.323 31.376,5.752 C31.337,5.186 30.881,4.730 30.316,4.691 C29.992,4.669 29.685,4.777 29.451,4.996 C29.216,5.216 29.086,5.514 29.086,5.834 C29.086,6.266 28.736,6.616 28.305,6.616 C27.873,6.616 27.523,6.266 27.523,5.834 C27.523,5.087 27.837,4.365 28.384,3.854 C28.939,3.336 29.663,3.081 30.423,3.132 C31.763,3.225 32.843,4.304 32.935,5.644 C33.024,6.927 32.225,8.068 31.014,8.429 ZM30.233,11.646 C30.438,11.646 30.640,11.729 30.785,11.874 C30.930,12.020 31.014,12.221 31.014,12.427 C31.014,12.633 30.930,12.834 30.785,12.980 C30.640,13.125 30.438,13.209 30.233,13.209 C30.027,13.209 29.825,13.125 29.680,12.980 C29.535,12.834 29.451,12.633 29.451,12.427 C29.451,12.221 29.535,12.020 29.680,11.874 C29.825,11.729 30.027,11.646 30.233,11.646 ZM14.440,16.019 L23.973,25.550 L24.760,24.764 C24.760,24.764 24.760,24.764 24.760,24.764 C24.760,24.764 24.761,24.763 24.761,24.763 L26.731,22.794 C27.574,21.951 28.695,21.487 29.887,21.487 C31.079,21.487 32.200,21.951 33.043,22.794 L38.693,28.442 C39.536,29.285 40.000,30.406 40.000,31.598 C40.000,32.790 39.536,33.910 38.693,34.753 L37.204,36.242 C34.780,38.665 31.557,40.000 28.129,40.000 C24.701,40.000 21.478,38.665 19.054,36.242 L13.486,30.676 C13.181,30.370 13.181,29.875 13.486,29.570 C13.792,29.265 14.286,29.265 14.592,29.570 L20.159,35.137 C22.288,37.265 25.118,38.438 28.129,38.438 C30.646,38.438 33.038,37.617 34.998,36.104 L25.313,26.421 L24.526,27.208 C24.221,27.513 23.726,27.513 23.421,27.208 L12.782,16.572 C12.636,16.425 12.553,16.227 12.553,16.019 C12.553,15.812 12.636,15.614 12.782,15.467 L16.092,12.158 C17.223,11.027 17.223,9.187 16.092,8.056 L10.448,2.413 C9.317,1.282 7.476,1.282 6.345,2.413 L4.928,3.830 L10.929,9.830 C11.234,10.135 11.234,10.630 10.929,10.935 C10.776,11.087 10.576,11.163 10.376,11.163 C10.176,11.163 9.976,11.087 9.824,10.935 L3.890,5.002 C0.490,9.418 0.812,15.794 4.856,19.837 L10.346,25.326 C10.651,25.631 10.651,26.126 10.346,26.431 C10.041,26.736 9.546,26.736 9.241,26.431 L3.751,20.943 C-1.253,15.940 -1.253,7.800 3.751,2.797 L5.240,1.308 C6.981,-0.432 9.813,-0.432 11.553,1.308 L17.197,6.951 C18.938,8.691 18.938,11.522 17.197,13.263 L14.440,16.019 ZM36.170,35.066 L37.588,33.648 C38.135,33.101 38.437,32.372 38.437,31.598 C38.437,30.823 38.135,30.094 37.587,29.547 L31.938,23.899 C31.390,23.351 30.662,23.049 29.887,23.049 C29.112,23.049 28.384,23.351 27.836,23.899 L26.418,25.316 L36.170,35.066 ZM11.492,12.280 C11.492,12.074 11.576,11.873 11.721,11.727 C11.866,11.581 12.068,11.498 12.274,11.498 C12.479,11.498 12.681,11.581 12.826,11.727 C12.971,11.873 13.055,12.074 13.055,12.280 C13.055,12.485 12.971,12.687 12.826,12.832 C12.681,12.977 12.479,13.061 12.274,13.061 C12.068,13.061 11.866,12.977 11.721,12.832 C11.576,12.687 11.492,12.485 11.492,12.280 ZM12.046,27.349 C12.252,27.349 12.453,27.433 12.599,27.578 C12.744,27.724 12.828,27.925 12.828,28.130 C12.828,28.336 12.744,28.538 12.599,28.683 C12.453,28.828 12.252,28.912 12.046,28.912 C11.841,28.912 11.639,28.828 11.494,28.683 C11.348,28.538 11.265,28.336 11.265,28.130 C11.265,27.925 11.348,27.724 11.494,27.578 C11.639,27.433 11.841,27.349 12.046,27.349 Z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="mb-2 h6 font-weight-normal text-gray-1">Got Questions ? Call us 24/7!</div>
                                        <small className="d-block font-size-18 font-weight-normal text-primary">Call Us: <span className="text-primary font-weight-semi-bold">+66 (0)2-630-33029</span></small>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="ml-md-6 ml-lg-0">
                            <div className="mb-4">
                                <h4 className="h6 font-weight-bold mb-2 font-size-17">Contact Info</h4>
                                <address className="pr-4">
                                    <span className="mb-2 h6 font-weight-normal text-gray-1">
                                    35/F Jewelry Trade Center, 919/375 Silom Road Bangkok, Thailand 10500
                                    </span>
                                </address>
                            </div>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item mr-2">
                                    <a className="btn btn-icon btn-social btn-bg-transparent" href="https://www.facebook.com/sunseriestravel/">
                                        <span className="fab fa-facebook-f btn-icon__inner"></span>
                                    </a>
                                </li>
                                <li className="list-inline-item mr-2">
                                    <a className="btn btn-icon btn-social btn-bg-transparent" href="https://www.linkedin.com/company/sun-series-travel-co-ltd-/about/">
                                        <span className="fab fa-linkedin-in btn-icon__inner"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Contacts */}
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-1dot8 mb-6 mb-md-10 mb-xl-0">
                    <h4 className="h6 font-weight-bold mb-2 mb-xl-4">Company</h4>
                    {/* List Group */}
                    <ul className="list-group list-group-flush list-group-borderless mb-0">
                        <li><a className="text-decoration-on-hover list-group-item list-group-item-action" href="../others/about.html">About us</a></li>
                        <li><a className="text-decoration-on-hover list-group-item list-group-item-action" href="../others/contact.html">Careers</a></li>
                        <li><a className="list-group-item list-group-item-action text-decoration-on-hover" href="../others/terms-conditions.html">Terms of Use</a></li>
                        <li><a className="list-group-item list-group-item-action text-decoration-on-hover" href="../others/terms-conditions.html">Privacy Statement</a></li>
                        <li><a className="list-group-item list-group-item-action text-decoration-on-hover" href="../others/terms-conditions.html">Give Us Feedbacks</a></li>
                    </ul>
                    {/* End List Group */}
                </div>

                <div className="col-12 col-md-6 col-lg-4 col-xl-1dot8 mb-6 mb-md-10 mb-xl-0">
                    <h4 className="h6 font-weight-bold mb-2 mb-xl-4">Other Services</h4>
                   {/* List Group */}
                    <ul className="list-group list-group-flush list-group-borderless mb-0">
                        <li><a className="list-group-item list-group-item-action text-decoration-on-hover" href="../others/about.html">Investor Relations</a></li>
                        <li><a className="list-group-item list-group-item-action text-decoration-on-hover" href="../others/about.html">Rewards Program</a></li>
                        <li><a className="list-group-item list-group-item-action text-decoration-on-hover" href="../others/about.html">PointsPLUS</a></li>
                        <li><a className="list-group-item list-group-item-action text-decoration-on-hover" href="../others/about.html">Partners</a></li>
                        <li><a className="list-group-item list-group-item-action text-decoration-on-hover" href="../others/about.html">List My Hotel</a></li>
                    </ul>
                    {/* End List Group */}
                </div>

                <div className="col-12 col-md-6 col-lg-4 col-xl-1dot8 mb-6 mb-md-0">
                    <h4 className="h6 font-weight-bold mb-2 mb-xl-4">Support</h4>
                    {/* List Group */}
                    <ul className="list-group list-group-flush list-group-borderless mb-0">
                        <li>
                            <a className="list-group-item list-group-item-action text-decoration-on-hover" href="../others/terms-conditions.html">Account</a>
                        </li>
                        <li>
                            <a className="list-group-item list-group-item-action text-decoration-on-hover" href="../others/terms-conditions.html">Legal</a>
                        </li>
                        <li>
                            <a className="list-group-item list-group-item-action text-decoration-on-hover" href="../others/contact.html">Contact</a>
                        </li>
                        <li>
                            <a className="list-group-item list-group-item-action text-decoration-on-hover" href="../others/terms-conditions.html">Affiliate Program</a>
                        </li>
                        <li>
                            <a className="list-group-item list-group-item-action text-decoration-on-hover" href="../others/terms-conditions.html">Privacy Policy</a>
                        </li>
                    </ul>
                    {/* End List Group */}
                </div>
                <div className="col-12 col-md-6 col-lg col-xl-3dot1">
                    <div className="mb-4 mb-xl-2">
                        <h4 className="h6 font-weight-bold mb-2 mb-xl-4">Mailing List</h4>
                        <p className="m-0 text-gray-1">Sign up for our mailing list to get latest updates and offers.</p>
                    </div>
                    <form className="js-validate js-focus-state js-form-message" noValidate>
                        <label className="sr-only text-gray-1" htmlFor="subscribeSrEmailExample1">Your Email</label>
                        <div className="input-group">
                            <input type="email" className="form-control height-54 font-size-14 border-radius-3 border-width-2 border-color-8" name="email" id="subscribeSrEmailExample1" placeholder="Your Email" aria-label="Your email address" aria-describedby="subscribeButtonExample3" required data-msg="Please enter a valid email address." data-error-class-name="u-has-error" data-success-class-name="u-has-success" />
                            <div className="input-group-append ml-3">
                                <button className="btn btn-primary border-radius-3 height-54 min-width-112 font-size-14" type="submit" id="subscribeButtonExample3">Subscribes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div className="border-top border-bottom border-color-8 space-1">
        <div className="container">
            <div className="row d-block d-xl-flex align-items-md-center">
                <div className="col-xl-4 mb-4 mb-xl-0">
                    {/* Logo */}
                    <a className="d-inline-flex align-items-center" href="#" aria-label="MyTravel">
                        <img height='35' src={process.env.PUBLIC_URL + '/assets/img/sunseries-logo-h.svg'} />
                    </a>
                    {/* End Logo */}
                </div>
                <div className="bootstrap-select__custom col-xl-8 d-block d-lg-flex justify-content-xl-end align-items-center">
                    <div className="mb-4 mb-lg-0">
                        <ul className="d-flex list-unstyled mb-0">
                            <li className="mr-2 ml-0"><img className="max-width-40" src="../../assets/img/icons/img3.png" alt="Payment Icons" /></li>
                            <li className="mx-2"><img className="max-width-40" src="../../assets/img/icons/img4.png" alt="Payment Icons" /></li>
                            <li className="mx-2"><img className="max-width-40" src="../../assets/img/icons/img5.png" alt="Payment Icons" /></li>
                            <li className="mx-2"><img className="max-width-40" src="../../assets/img/icons/img6.png" alt="Payment Icons" /></li>
                            <li className="ml-2 mr--0"><img className="max-width-40" src="../../assets/img/icons/img7.png" alt="Payment Icons" /></li>
                        </ul>
                    </div>
                    <select className="js-select selectpicker dropdown-select min-width-256 w-100 w-md-auto border-radius-3 mb-3 mb-md-0 mr-md-5"
                        data-style="border border-width-2 border-color-8" defaultValue='one'>
                        <option className="border-bottom py-2 font-size-16" value="one" >English(United States)</option>
                        <option className="border-bottom py-2 font-size-16" value="one">English(United Kingdom)</option>
                        <option className="border-bottom py-2 font-size-16" value="one">English</option>
                        <option className="py-2 font-size-16" value="four">Thai</option>
                    </select>
                    <select className="js-select selectpicker dropdown-select pr-0 max-width-155 w-100 border-radius-3"
                        data-style="border border-width-2 border-color-8" defaultValue='one'>
                        <option className="py-2 font-size-16" value="one">$ THB</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div className="space-1">
        <div className="container">
            <div className="d-lg-flex d-md-block justify-content-between align-items-center">
                {/* Copyright */}
                <p className="mb-3 mb-lg-0 text-gray-1">© 2020 Sun Series Travel. All rights reserved</p>
                {/* End Copyright */}

                {/* Social Networks */}
                <ul className="list-inline mb-0">
                    <li className="list-inline-item  pb-3 pb-md-0">
                        <a {...homeSref} className="list-group-item-action text-decoration-on-hover pr-3">Home</a>
                    </li>
                    <li className="list-inline-item  pb-3 pb-md-0">
                        <a {...findHotelSref} className="list-group-item-action text-decoration-on-hover pr-3" href="../home/home-v4.html">Find hotel</a>
                    </li>
                    <li className="list-inline-item  pb-3 pb-md-0">
                        <a className="list-group-item-action text-decoration-on-hover pr-3" href="../home/home-v4.html">About us</a>
                    </li>
                    <li className="list-inline-item  pb-3 pb-md-0">
                        <a className="list-group-item-action text-decoration-on-hover pr-3" href="../home/home-v4.html">Contact us</a>
                    </li>
                </ul>
                {/* End Social Networks */}
            </div>
        </div>
    </div>
</footer>
{/* ========== End FOOTER ========== */}
    

    {/* Page Preloader */}
    <div id="jsPreloader" className="page-preloader">
        <div className="page-preloader__content-centered">
            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    </div>
    {/* End Page Preloader */}

    {/* Go to Top */}
    <a className="js-go-to u-go-to-modern" href="#" data-position='{"bottom": 15, "right": 15 }' data-type="fixed" data-offset-top="400" data-compensation="#header" data-show-effect="slideInUp" data-hide-effect="slideOutDown">
        <span className="flaticon-arrow u-go-to-modern__inner"></span>
    </a>
    {/* End Go to Top */}

    
    </>
}
export default Footer


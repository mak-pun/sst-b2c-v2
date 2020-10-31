import React, { useEffect } from 'react';
import { dzsprx_init } from '../../../helper'

const Banner = () => {
    useEffect(() => {
        dzsprx_init('#prx1', { direction: "normal" })
    }, [])

    return <>

        {/* Banner v3 */}
        {/* <div className="banner-block banner-v3 dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll" data-options='{direction: "normal"}'> */}
        {/* Apply your Parallax background image here */}
        {/* <div className="divimage dzsparallaxer--target bg-img-hero" style={{height: '130%', backgroundImage: "url("+ process.env.PUBLIC_URL+"/assets/img/1920x800/img4.jpg)"}}></div>
        <div className="text-center space-3">
            <div className="pt-xl-2 pb-xl-5 mb-xl-1">
                <h6 className="text-gray-4 font-size-30 font-weight-bold mb-1 opacity-6">Enjoy Summer Deals</h6>
                <h5 className="text-white font-size-40 font-weight-bold mb-5 pb-xl-1">Up to 40% Discount!</h5>
                <a className="btn btn-outline-white border-width-2 min-width-200 font-weight-normal transition-3d-hover" href="../blog/blog-list.html">Learn more</a>
            </div>
        </div> */}
        {/* </div> */}
        {/*End Banner v3*/}

        {/*  Banner v6 */}
        <div className="banner-block banner-v6">
            <div id="prx1" className="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll" style={{height: '700px'}}>
                {/* <!-- Apply your Parallax background image here --> */}
                {/* Credit: https://unsplash.com/photos/SYx3UCHZJlo */}
                <div className="divimage dzsparallaxer--target" style={{ height: '120%', backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/1920x960/img3.jpg)" }}></div>
                <div className="container text-left space-2 space-md-3">
                    <div className="pb-3 mb-1 space-top-lg-3 mt-2">
                        <h6 className="text-gray-4 font-size-30 font-weight-bold mb-1 opacity-6">Enjoy Summer Deals</h6>
                        <h5 className="text-white font-size-40 font-weight-bold mb-5 pb-xl-1">Up to 40% Discount!</h5>
                        <a className="btn btn-outline-white border-width-2 min-width-200 font-weight-normal transition-3d-hover" href="../blog/blog-list.html">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
        {/*  End Banner v6 */}

        {/* <div className="banner-block banner-v3 bg-img-hero space-3" style={{backgroundImage: "url("+process.env.PUBLIC_URL+"/assets/img/1920x800/img4.jpg)"}}>
        <div className="max-width-650 mx-auto text-center mt-xl-5 mb-xl-2 px-3 px-md-0">
            <h6 className="text-white font-size-40 font-weight-bold mb-1">Travel Tips</h6>
            <p className="text-white font-size-18 font-weight-normal mb-4 pb-1 px-md-3 px-lg-0">Northern Ireland’s is now contingent. Britain is getting a divorce Northern Ireland is being offered a trial separation for Britain there is a one</p>
            <a className="btn btn-outline-white border-width-2 rounded-xs min-width-200 font-weight-normal transition-3d-hover" href="../blog/blog-list.html">Get Inspired</a>
        </div>
    </div> */}

    </>
}
export default Banner


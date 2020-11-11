import React, { useEffect, useState, ReactElement } from 'react';
import { $ } from '../../../helper'
import _ from 'lodash'
import SearchForm from '../../../components/SearchForm';

const Hero = () => {


    useEffect(() => {
        // initialization of unfold component
        $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));
    }, [])


    return <>

        {/* ========== HERO ========== */}
        <div className="hero-block hero-v4 bg-img-hero-bottom text-center z-index-2" style={{ position: 'relative' }}>
            {/* Credit: https://www.pexels.com/photo/view-of-palm-trees-on-beach-247447/ */}
            <div style={{
                zIndex: 0,
                overflow: 'hidden',
                position: 'absolute',
                width: '100%',
                height: '100%',
                filter: 'brightness(80%)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/1920x800/img3.jpg)"
            }} ></div>
            <div className="container space-2 space-top-lg-4 space-top-xl-10" style={{ zIndex: 10 }}>
                <div className="row justify-content-md-center pb-xl-11" style={{ position: 'relative' }}>
                    {/* Info */}
                    <div className="mb-wd-11 pb-5 py-lg-5">
                        <h1 className="font-size-50 font-size-xs-30 text-white font-weight-bold">Find Your Ideal Hotel and Compare Prices</h1>
                        <p className="font-size-20 font-weight-normal text-white">Check out the best deals on over 2,000,000 hotels worldwide</p>
                    </div>
                    {/* End Info */}
                </div>
                <div className="mb-lg-n16">
                    {/* Search Jobs Form */}
                    <div className="card border-0 tab-shadow">
                        <div className="card-body">
                            <SearchForm mode='horizontal' />
                        </div>
                    </div>
                    {/* End Search Jobs Form */}
                </div>
            </div>
        </div>
        {/* ========== END HERO ========== */}

    </>
}

export default Hero
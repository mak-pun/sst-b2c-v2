import React from 'react';

const IconBlock = ()=>{
    return <>
    
           
            {/* Icon Block v1 */}
            <div className="icon-block-center icon-center-v1 border-bottom border-color-8 mt-5 pt-5">
                <div className="container text-center space-bottom-1">
                    {/* Title */}
                    <div className="w-md-80 w-lg-50 text-center mx-md-auto pb-1">
                        <h2 className="section-title text-black font-size-30 font-weight-bold">Why Choose</h2>
                    </div>
                    {/* End Title */}

                    {/* Features */}
                    <div className="mb-2">
                        <div className="row">
                            {/* Icon Block */}
                            <div className="col-md-4">
                                <i className="flaticon-price text-primary font-size-80 mb-3"></i>
                                <h5 className="font-size-17 text-dark font-weight-bold mb-2"><a href="#">Competitive Pricing</a></h5>
                                <p className="text-gray-1 px-xl-2 px-uw-7">With 500+ suppliers and the purchasing power of 300 million members, mytravel.com can save you more!</p>
                            </div>
                            {/* End Icon Block */}

                            {/* Icon Block */}
                            <div className="col-md-4">
                                <i className="flaticon-medal text-primary font-size-80 mb-3"></i>
                                <h5 className="font-size-17 text-dark font-weight-bold mb-2"><a href="#">Award-Winning Service</a></h5>
                                <p className="text-gray-1 px-xl-2 px-uw-7">Travel worry-free knowing that we're here if you needus, 24 hours a day</p>
                            </div>
                            {/* End Icon Block */}

                            {/* Icon Block */}
                            <div className="col-md-4">
                                <i className="flaticon-global-1 text-primary font-size-80 mb-3"></i>
                                <h5 className="font-size-17 text-dark font-weight-bold mb-2"><a href="#">Worldwide Coverage</a></h5>
                                <p className="text-gray-1 px-xl-2 px-uw-7">Over 1,200,000 hotels in more than 200 countries and regions & flights to over 5,000 cities</p>
                            </div>
                            {/* End Icon Block */}
                        </div>
                    </div>
                    {/* End Features */}
                </div>
            </div>
            {/* End Icon Block v1 */}

    
    </>
}

export default IconBlock
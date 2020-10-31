import React from 'react';

const Destination = () => {
    return <>
        {/* Destinantion v4 */}
        <div className="destination-block destination-v4">
            <div className="container space-bottom-1 pt-3">
                <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mt-3">
                    <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">Popular Destination</h2>
                </div>
                <div className="row">
                    {/* Card Block */}
                    <div className="col-md-6 mb-3 mb-md-0">
                        {/* Credit: https://unsplash.com/photos/B64B6-kAWlw */}
                        <div className="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/assets/img/630x350/img3.jpg)' }}>
                            <header className="w-100 d-flex justify-content-between mb-3">
                                <div>
                                    <div className="destination pb-3 text-lh-1">
                                        <a href="../others/destination.html" className="text-white font-weight-bold font-size-21">Bangkok</a>
                                    </div>
                                    <div className="mt-1 pt-1">
                                        <a href="../hotels/hotel-single-v1.html" className="text-white">9,929 Hotels</a>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                    {/* End Card Block */}

                    {/* Card Block */}
                    <div className="col-md-6 col-xl-3 mb-3 mb-md-4 pb-1">
                        {/* Credit: https://unsplash.com/photos/DcT8PX2WTN8 */}
                        <div className="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/assets/img/300x350/img7.jpg)' }}>
                            <header className="w-100 d-flex justify-content-between mb-3">
                                <div>
                                    <div className="destination pb-3 text-lh-1">
                                        <a href="../others/destination.html" className="text-white font-weight-bold font-size-21">Pattaya</a>
                                    </div>
                                    <div className="mt-1 pt-1">
                                        <a href="../hotels/hotel-single-v1.html" className="text-white">8,817 Hotels</a>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                    {/* End Card Block */}


                    {/* Card Block */}
                    <div className="col-md-6 col-xl-3 mb-3 mb-md-4 pb-1">
                        {/* Credit: https://unsplash.com/photos/pQB76-hsbeo */}

                        <div className="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/assets/img/300x350/img8.jpg)' }}>
                            <header className="w-100 d-flex justify-content-between mb-3">
                                <div>
                                    <div className="destination pb-3 text-lh-1">
                                        <a href="../others/destination.html" className="text-white font-weight-bold font-size-21">Chiang Mai</a>
                                    </div>
                                    <div className="mt-1 pt-1">
                                        <a href="../hotels/hotel-single-v1.html" className="text-white">5,780 Hotels</a>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                    {/* End Card Block */}


                    {/* Card Block */}
                    <div className="col-md-6 col-xl-3 mb-3 mb-md-4 pb-1">
                        {/* Credit: https://unsplash.com/photos/SKiQhlOVau8 */}
                        <div className="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/assets/img/300x350/img9.jpg)' }}>
                            <header className="w-100 d-flex justify-content-between mb-3">
                                <div>
                                    <div className="destination pb-3 text-lh-1">
                                        <a href="../others/destination.html" className="text-white font-weight-bold font-size-21">Hua Hin/Cha-am</a>
                                    </div>
                                    <div className="mt-1 pt-1">
                                        <a href="../hotels/hotel-single-v1.html" className="text-white">4,137 Hotels</a>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                    {/* End Card Block */}


                    {/* Card Block */}
                    <div className="col-md-6 col-xl-3 mb-3 mb-md-4 pb-1">
                        {/* Credit: https://unsplash.com/photos/ilqWPf4TLZM */}
                        <div className="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/assets/img/300x350/img10.jpg)' }}>
                            <header className="w-100 d-flex justify-content-between mb-3">
                                <div>
                                    <div className="destination pb-3 text-lh-1">
                                        <a href="../others/destination.html" className="text-white font-weight-bold font-size-21">Chonburi</a>
                                    </div>
                                    <div className="mt-1 pt-1">
                                        <a href="../hotels/hotel-single-v1.html" className="text-white">838 Hotels</a>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                    {/* End Card Block */}

                    {/* Card Block */}
                    <div className="col-md-6 mb-3 mb-md-0">
                        {/* https://unsplash.com/photos/is1BA_NN5Dw */}
                        <div className="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/assets/img/630x350/img4.jpg)' }}>
                            <header className="w-100 d-flex justify-content-between mb-3">
                                <div>
                                    <div className="destination pb-3 text-lh-1">
                                        <a href="../others/destination.html" className="text-white font-weight-bold font-size-21">Krabi</a>
                                    </div>
                                    <div className="mt-1 pt-1">
                                        <a href="../hotels/hotel-single-v1.html" className="text-white">1,642 Hotels</a>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                    {/* End Card Block */}
                </div>
            </div>
        </div>
        {/* End Destinantion v4 */}

    </>
}
export default Destination


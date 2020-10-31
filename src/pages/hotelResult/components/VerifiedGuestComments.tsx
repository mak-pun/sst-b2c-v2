import React from 'react'

const VerifiedGuestComments = () => {
    return (<>

        <div className="border-bottom py-4">
            <h5 className="font-size-21 font-weight-bold text-dark mb-8">
                Showing 16 verified guest comments
                    </h5>
            <div className="media flex-column flex-md-row align-items-center align-items-md-start mb-4">
                <div className="mr-md-5">
                    <a className="d-block" href="#">
                        <img className="img-fluid mb-3 mb-md-0 rounded-circle" src={process.env.PUBLIC_URL + '/assets/img/85x85/img1.jpg'} alt="Image-Description" />
                    </a>
                </div>
                <div className="media-body text-center text-md-left">
                    <div className="mb-4">
                        <h6 className="font-weight-bold text-gray-3">
                            <a href="#">Helena</a>
                        </h6>
                        <div className="font-weight-normal font-size-14 text-gray-9 mb-2">April 25, 2019 at 10:46 am</div>
                        <div className="d-flex align-items-center flex-column flex-md-row mb-2">
                            <button type="button" className="btn btn-xs btn-primary rounded-xs font-size-14 py-1 px-2 mr-2 mb-2 mb-md-0">4.6 /5 </button>
                            <span className="font-weight-bold font-italic text-gray-3">The worst hotel ever ”</span>
                        </div>
                        <p className="text-lh-1dot6 mb-0 pr-lg-5">Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                    </div>
                    <div className="review">
                        <div className="row no-gutters justify-content-between align-items-center border border-color-8 border-width-2 rounded-xs p-3 px-md-3 py-md-2 pr-xl-5">
                            <div className="col">
                                <div className="font-weight-normal font-size-14 text-gray-1 mx-lg-1 my-lg-1 mb-3 mb-md-0">Was This Review...?</div>
                            </div>
                            <div className="col-md-6 col-lg-7 col-xl-4">
                                <div className="d-flex justify-content-between my-lg-1">
                                    <a className="text-indigo-light" href="#">
                                        <i className="flaticon-like-1 font-size-15 mr-1"></i>
                                        <span className="font-size-14 font-weight-normal">Like</span>
                                    </a>
                                    <a className="text-gray-7" href="#">
                                        <i className="flaticon-dislike font-size-15 mr-1"></i>
                                        <span className="font-size-14 font-weight-normal">Dislike</span>
                                    </a>
                                    <a className="text-red-light-2" href="#">
                                        <i className="flaticon-like font-size-15 mr-1"></i>
                                        <span className="font-size-14 font-weight-normal">Love</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="media flex-column flex-md-row align-items-center align-items-md-start mb-0">
                <div className="mr-md-5">
                    <a className="d-block" href="#">
                        <img className="img-fluid mb-3 mb-md-0 rounded-circle" src={process.env.PUBLIC_URL + '/assets/img/85x85/img2.jpg'} alt="Image-Description" />
                    </a>
                </div>
                <div className="media-body text-center text-md-left">
                    <div className="mb-4">
                        <h6 className="font-weight-bold text-gray-3">
                            <a href="#">Ashleigh</a>
                        </h6>
                        <div className="font-weight-normal font-size-14 text-gray-9 mb-2">April 25, 2019 at 10:46 am</div>
                        <div className="d-flex align-items-center flex-column flex-md-row mb-2">
                            <button type="button" className="btn btn-xs btn-primary rounded-xs font-size-14 py-1 px-2 mr-2 mb-2 mb-md-0">4.6 /5 </button>
                            <span className="font-weight-bold font-italic text-gray-3">Was too noisy and not suitable for business meetings.”</span>
                        </div>
                        <p className="text-lh-1dot6 pr-lg-5 mb-0">Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                    </div>
                    <div className="review">
                        <div className="row no-gutters justify-content-between align-items-center border border-color-8 border-width-2 rounded-xs p-3 px-md-3 py-md-2 pr-xl-5">
                            <div className="col">
                                <div className="font-weight-normal font-size-14 text-gray-1 mx-lg-1 my-lg-1 mb-3 mb-md-0">Was This Review...?</div>
                            </div>
                            <div className="col-md-6 col-lg-7 col-xl-4">
                                <div className="d-flex justify-content-between my-lg-1">
                                    <a className="text-indigo-light" href="#">
                                        <i className="flaticon-like-1 font-size-15 mr-1"></i>
                                        <span className="font-size-14 font-weight-normal">Like</span>
                                    </a>
                                    <a className="text-gray-7" href="#">
                                        <i className="flaticon-dislike font-size-15 mr-1"></i>
                                        <span className="font-size-14 font-weight-normal">Dislike</span>
                                    </a>
                                    <a className="text-red-light-2" href="#">
                                        <i className="flaticon-like font-size-15 mr-1"></i>
                                        <span className="font-size-14 font-weight-normal">Love</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default VerifiedGuestComments
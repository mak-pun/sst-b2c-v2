import React from 'react'

const AverageReviews = () => {
    return (
        <>
            <div className="border-bottom py-4">
                <h5 id="scroll-reviews" className="font-size-21 font-weight-bold text-dark mb-4">
                    Average Reviews
                    </h5>
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="border rounded flex-content-center py-5 border-width-2">
                            <div className="text-center">
                                <h2 className="font-size-50 font-weight-bold text-primary mb-0 text-lh-sm">
                                    4.2<span className="font-size-20">/5</span>
                                </h2>
                                <div className="font-size-25 text-dark mb-3">Very Good</div>
                                <div className="text-gray-1">From 40 reviews</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <h6 className="font-weight-normal text-gray-1 mb-1">
                                    Cleanliness
                                    </h6>
                                <div className="flex-horizontal-center mr-6">
                                    <div className="progress bg-gray-33 rounded-pill w-100" style={{height:'7px'}}>
                                        <div className="progress-bar rounded-pill" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                    <div className="ml-3 text-primary font-weight-bold">
                                        4.8
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h6 className="font-weight-normal text-gray-1 mb-1">
                                    Facilities
                                    </h6>
                                <div className="flex-horizontal-center mr-6">
                                    <div className="progress bg-gray-33 rounded-pill w-100" style={{height:'7px'}}>
                                        <div className="progress-bar rounded-pill" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                    <div className="ml-3 text-primary font-weight-bold">
                                        1.4
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h6 className="font-weight-normal text-gray-1 mb-1">
                                    Value for money
                                    </h6>
                                <div className="flex-horizontal-center mr-6">
                                    <div className="progress bg-gray-33 rounded-pill w-100" style={{height:'7px'}}>
                                        <div className="progress-bar rounded-pill" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                    <div className="ml-3 text-primary font-weight-bold">
                                        3.2
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h6 className="font-weight-normal text-gray-1 mb-1">
                                    Service
                                    </h6>
                                <div className="flex-horizontal-center mr-6">
                                    <div className="progress bg-gray-33 rounded-pill w-100" style={{height:'7px'}}>
                                        <div className="progress-bar rounded-pill" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                    <div className="ml-3 text-primary font-weight-bold">
                                        5.0
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h6 className="font-weight-normal text-gray-1 mb-1">
                                    Location
                                    </h6>
                                <div className="flex-horizontal-center mr-6">
                                    <div className="progress bg-gray-33 rounded-pill w-100" style={{height:'7px'}}>
                                        <div className="progress-bar rounded-pill" role="progressbar" style={{width: '86%'}} aria-valuenow={86} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                    <div className="ml-3 text-primary font-weight-bold">
                                        4.8
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AverageReviews
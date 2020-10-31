import React from 'react'

const WriteAReview = () => {
    return (<>

        <div className="py-4">
            <h5 className="font-size-21 font-weight-bold text-dark mb-6">
                Write a Review
                    </h5>
            <div className="row">
                <div className="col-md-4 mb-6">
                    <h6 className="font-weight-bold text-dark mb-1">
                        Cleanliness
                            </h6>
                    <span className="text-primary font-size-20 letter-spacing-3">
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile text-muted"></small>
                        <small className="far fa-smile text-muted"></small>
                    </span>
                </div>
                <div className="col-md-4 mb-6">
                    <h6 className="font-weight-bold text-dark mb-1">
                        Facilities
                            </h6>
                    <span className="text-primary font-size-20 letter-spacing-3">
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile text-muted"></small>
                        <small className="far fa-smile text-muted"></small>
                    </span>
                </div>
                <div className="col-md-4 mb-6">
                    <h6 className="font-weight-bold text-dark mb-1">
                        Value for money
                            </h6>
                    <span className="text-primary font-size-20 letter-spacing-3">
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile"></small>
                    </span>
                </div>
                <div className="col-md-4 mb-6">
                    <h6 className="font-weight-bold text-dark mb-1">
                        Service
                            </h6>
                    <span className="text-primary font-size-20 letter-spacing-3">
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile text-muted"></small>
                        <small className="far fa-smile text-muted"></small>
                    </span>
                </div>
                <div className="col-md-4 mb-6">
                    <h6 className="font-weight-bold text-dark mb-1">
                        Location
                            </h6>
                    <span className="text-primary font-size-20 letter-spacing-3">
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile"></small>
                        <small className="far fa-smile text-muted"></small>
                        <small className="far fa-smile text-muted"></small>
                    </span>
                </div>
            </div>
            <form className="js-validate" noValidate>
                <div className="row mb-5 mb-lg-0">
                    {/* Input */}
                    <div className="col-sm-6 mb-5">
                        <div className="js-form-message">
                            <input type="text" className="form-control" name="name" placeholder="Name" aria-label="Jack Wayley" required data-error-className="u-has-error" data-msg="Please enter your name." data-success-className="u-has-success" />
                        </div>
                    </div>
                    {/* End Input */}

                    {/* Input */}
                    <div className="col-sm-6 mb-5">
                        <div className="js-form-message">
                            <input type="email" className="form-control" name="email" placeholder="Email" aria-label="jackwayley@gmail.com" required data-msg="Please enter a valid email address." data-error-className="u-has-error" data-success-className="u-has-success" />
                        </div>
                    </div>
                    {/* End Input */}
                    <div className="col-sm-12 mb-5">
                        <div className="js-form-message">
                            <div className="input-group">
                                <textarea className="form-control" rows={6} cols={77} name="text" placeholder="Comment" aria-label="Hi there, I would like to ..." required data-msg="Please enter a reason." data-error-className="u-has-error" data-success-className="u-has-success"></textarea>
                            </div>
                        </div>
                    </div>
                    {/* End Input */}
                    <div className="col d-flex justify-content-center justify-content-lg-start">
                        <button type="submit" className="btn rounded-xs bg-blue-dark-1 text-white p-2 height-51 width-190 transition-3d-hover">Submit Review</button>
                    </div>
                </div>
            </form>
        </div>

    </>)
}

export default WriteAReview
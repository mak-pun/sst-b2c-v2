import React from 'react'

const Sidebar = () => {
    return (
        <>

            <div className="shadow-soft bg-white rounded-sm">
                <div className="pt-5 pb-3 px-5 border-bottom">
                    <a href="#" className="d-block mb-3">
                        <img className="img-fluid rounded-xs" src={process.env.PUBLIC_URL + '/assets/img/240x160/img3.jpg'} alt="Image-Description" />
                    </a>
                    <a href="#" className="text-dark font-weight-bold pr-xl-1">Park Avenue Baker Street London</a>
                    <div className="my-1 flex-horizontal-center text-gray-1">
                        <i className="icon flaticon-pin-1 mr-2 font-size-15"></i> United Kingdom
                                </div>
                </div>
                {/*Basics Accordion */}
                <div id="basicsAccordion">
                    {/*Card */}
                    <div className="card rounded-0 border-top-0 border-left-0 border-right-0">
                        <div className="card-header card-collapse bg-transparent border-0" id="basicsHeadingOne">
                            <h5 className="mb-0">
                                <button type="button" className="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                                    data-toggle="collapse"
                                    data-target="#basicsCollapseOne"
                                    aria-expanded="true"
                                    aria-controls="basicsCollapseOne">
                                    Booking Detail

                                                <span className="card-btn-arrow font-size-14 text-dark">
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                </button>
                            </h5>
                        </div>
                        <div id="basicsCollapseOne" className="collapse show"
                            aria-labelledby="basicsHeadingOne"
                            data-parent="#basicsAccordion">
                            <div className="card-body px-4 pt-0">
                                {/*Fact List */}
                                <ul className="list-unstyled font-size-1 mb-0 font-size-16">
                                    <li className="d-flex justify-content-between py-2">
                                        <span className="font-weight-medium">22 Sep 2019 - 23 Sep 2019 <br />
                                            <span className="text-gray-1 font-weight-normal">1 x Comfort Room</span>
                                        </span>
                                        <span className="text-secondary"><a href="#" className="text-underline">Edit</a></span>
                                    </li>
                                    <li className="d-flex justify-content-between py-2">
                                        <span className="font-weight-medium">Stay</span>
                                        <span className="text-secondary">7 Night</span>
                                    </li>

                                    <li className="d-flex justify-content-between py-2">
                                        <span className="font-weight-medium">Room</span>
                                        <span className="text-secondary">2 Room</span>
                                    </li>

                                    <li className="d-flex justify-content-between py-2">
                                        <span className="font-weight-medium">Adult</span>
                                        <span className="text-secondary">4</span>
                                    </li>
                                </ul>
                                {/*End Fact List */}
                            </div>
                        </div>
                    </div>
                    {/*End Card */}


                    {/*Card */}
                    <div className="card rounded-0 border-top-0 border-left-0 border-right-0">
                        <div className="card-header card-collapse bg-transparent border-0" id="basicsHeadingFour">
                            <h5 className="mb-0">
                                <button type="button" className="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                                    data-toggle="collapse"
                                    data-target="#basicsCollapseFour"
                                    aria-expanded="false"
                                    aria-controls="basicsCollapseFour">
                                    Payment

                                                <span className="card-btn-arrow font-size-14 text-dark">
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                </button>
                            </h5>
                        </div>
                        <div id="basicsCollapseFour" className="collapse show"
                            aria-labelledby="basicsHeadingFour"
                            data-parent="#basicsAccordion">
                            <div className="card-body px-4 pt-0">
                                {/*Fact List */}
                                <ul className="list-unstyled font-size-1 mb-0 font-size-16">
                                    <li className="d-flex justify-content-between py-2">
                                        <span className="font-weight-medium">Subtotal</span>
                                        <span className="text-secondary">€580,00</span>
                                    </li>

                                    <li className="d-flex justify-content-between py-2">
                                        <span className="font-weight-medium">Extra Price</span>
                                        <span className="text-secondary">€0,00</span>
                                    </li>

                                    <li className="d-flex justify-content-between py-2">
                                        <span className="font-weight-medium">Tax</span>
                                        <span className="text-secondary">0 %</span>
                                    </li>

                                    <li className="d-flex justify-content-between py-2 font-size-17 font-weight-bold">
                                        <span className="font-weight-bold">Pay Amount</span>
                                        <span className="">€580,00</span>
                                    </li>
                                </ul>
                                {/*End Fact List */}
                            </div>
                        </div>
                    </div>
                    {/*End Card */}
                </div>
                {/*End Basics Accordion */}
            </div>
        </>
    )
}

export default Sidebar
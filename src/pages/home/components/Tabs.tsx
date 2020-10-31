import React from 'react';
import ResultCard from '../../../components/ResultCard';

const Tabs = () => {

    const newYorkHotels = [{
        images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
        location: 'Greater London, United Kingdom',
        stars: 5,
        title: 'Empire Prestige Causeway Bay',
        price: 899,
        currency: 'THB'
    }, {
        images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
        location: 'Istanbul, Turkey',
        stars: 5,
        title: 'Park Avenue Baker Street London',
        price: 899,
        currency: 'THB'
    }, {
        images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
        location: 'Istanbul, Turkey',
        stars: 5,
        title: 'New Road Hotel',
        price: 899,
        currency: 'THB'
    }, {
        images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
        location: 'stanbul, Turkey',
        stars: 5,
        title: 'New York Marriott Downtown',
        price: 899,
        currency: 'THB'
    }]

    const hongkongHotels = [
        {
            images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
            location: 'Greater London, United Kingdom',
            stars: 5,
            title: 'Empire Prestige Causeway Bay',
            price: 899,
            currency: 'THB'
        }, {
            images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
            location: 'Istanbul, Turkey',
            stars: 5,
            title: 'Park Avenue Baker Street London',
            price: 899,
            currency: 'THB'
        }, {
            images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
            location: 'Istanbul, Turkey',
            stars: 5,
            title: 'New Road Hotel',
            price: 899,
            currency: 'THB'
        }, {
            images: [process.env.PUBLIC_URL + '/assets/img/300x230/img9.jpg'],
            location: 'stanbul, Turkey',
            stars: 5,
            title: 'New York Marriott Downtown',
            price: 899,
            currency: 'THB'
        }]

    return <>

        {/* Tabs v3 */}
        <div className="tabs-block tabs-v3">
            <div className="container space-top-1 pb-3 mb-1">
                <div className="w-md-80 w-lg-50 text-center mx-md-auto my-3">
                    <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">Recommended Hotels</h2>
                </div>
                {/* Nav Classic */}
                <ul className="nav tab-nav-line flex-nowrap pb-4 tab-nav justify-content-lg-center text-nowrap" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link font-weight-medium active" id="pills-one-example-t3-tab" data-toggle="pill" href="#pills-one-example-t3" role="tab" aria-controls="pills-one-example-t3" aria-selected="true">
                            <div className="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                                <span className="tabtext font-weight-semi-bold">New York</span>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-medium" id="pills-two-example-t3-tab" data-toggle="pill" href="#pills-two-example-t3" role="tab" aria-controls="pills-two-example-t3" aria-selected="true">
                            <div className="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                                <span className="tabtext font-weight-semi-bold">Hong Kong</span>
                            </div>
                        </a>
                    </li>
                </ul>
                {/* End Nav Classic */}
                <div className="tab-content">
                    <div className="tab-pane fade active show" id="pills-one-example-t3" role="tabpanel" aria-labelledby="pills-one-example-t3-tab">
                        <div className="row">
                            {newYorkHotels.map(result => {
                                return (
                                    <>
                                        <div className="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                                            <ResultCard
                                                type='tab'
                                                image={result.images[0]}
                                                location={result.location}
                                                title={result.title}
                                                stars={result.stars}
                                                price={result.price}
                                                currency={result.currency}
                                            ></ResultCard>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-two-example-t3" role="tabpanel" aria-labelledby="pills-two-example-t3-tab">
                        <div className="row">
                            {hongkongHotels.map(result => {
                                return (
                                    <>
                                        <div className="col-md-6 col-lg-4 col-xl-3 mb-3 mb-md-4 pb-1">
                                            <ResultCard
                                                type='tab'
                                                image={result.images[0]}
                                                location={result.location}
                                                title={result.title}
                                                stars={result.stars}
                                                price={result.price}
                                                currency={result.currency}
                                            ></ResultCard>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Tabs v3 */}


    </>
}
export default Tabs


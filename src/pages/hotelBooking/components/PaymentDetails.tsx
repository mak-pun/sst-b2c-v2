import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { PaymentInformation, switchToStep, book } from '../../../features/HotelBookingConfirmation/hotelBookingConfirmationSlice'
import { RootState } from '../../../app/rootReducer'



const schema = yup.object().shape({
    cardHolderName: yup.string().required().label('Card Holder Name'),
    cardNumber: yup.string().required().label('Card Number'),
    expiryMonth: yup.string().required().label('Expire Month'),
    expiryYear: yup.string().required().label('Expire Year'),
    ccv: yup.string().label('CCV'),
})


const PaymentDetails = () => {

    const dispatch = useDispatch()
    const {booking: quotedBooking, guestInformation, stepCompleted} = useSelector((state: RootState)=>state.hotelBookingConfirmation)
    const { register, handleSubmit, errors } = useForm<PaymentInformation>({ resolver: yupResolver(schema) })


    const [years, setYears] = useState<Array<string>>([])

    const onSubmit = handleSubmit(({ cardHolderName, cardNumber, expiryMonth,expiryYear,ccv  }) => {
        console.log(cardHolderName, cardHolderName, cardNumber, expiryMonth, expiryYear, ccv)
        
        const creditcard = {
            cardHolderName,
            cardNumber,
            expiryMonth,
            expiryYear,
            ccv
        }
        dispatch(book(creditcard, quotedBooking, guestInformation))
    })

    useEffect(()=>{
        let date = moment();
        let years = []
        for(let i = 0; i< 10;i++){
           
            years.push(date.format('YYYY'))
            date = date.add(1, 'year')

        }

        setYears(years)

    }, [])

    // useEffect(()=>{
    //     if(paymentInformation.paid){
    //         dispatch(book('3'))
    //     }
    // },[paymentInformation.paid])

    useEffect(()=>{
        if(stepCompleted === 2){
            dispatch(switchToStep('3'))
        }
    },[stepCompleted])
    
    return (
        <>
            <div className="pt-4 pb-5 px-5">
                <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-4">
                    Your Card Information
                                </h5>
                {/*Nav Classic */}
                <ul className="nav nav-classic nav-choose border-0 nav-justified border mx-n3" role="tablist">
                    <li className="nav-item mx-3 mb-4 mb-md-0">
                        <a className="rounded py-5 border-width-2 border nav-link font-weight-medium active" id="pills-one-example2-tab" data-toggle="pill" href="#pills-one-example2" role="tab" aria-controls="pills-one-example2" aria-selected="true">
                            <div className="height-25 width-25 flex-content-center bg-primary rounded-circle position-absolute left-0 top-0 ml-2 mt-2">
                                <i className="flaticon-tick text-white font-size-15"></i>
                            </div>
                            <div className="d-md-flex justify-content-md-center align-items-md-center flex-wrap">
                                <img className="img-fluid mb-3" src={process.env.PUBLIC_URL + '/assets/img/199x35/img1.jpg'} alt="Image-Description" />
                                <div className="w-100 text-dark">Payment with credit card</div>
                            </div>
                        </a>
                    </li>
                </ul>
                {/*End Nav Classic */}

                {/*Tab Content */}
                <div className="tab-content">
                    <div className="tab-pane fade pt-8 show active" id="pills-one-example2" role="tabpanel" aria-labelledby="pills-one-example2-tab">
                        {/*Payment Form */}
                        <form onSubmit={onSubmit} noValidate>
                            <div className="row">
                                {/*Input */}
                                <div className="col-sm-6 mb-4">
                                    <div className={errors.cardHolderName ? 'u-has-error' : ''}>
                                        <label className="form-label">
                                            Card Holder Name
                                        </label>

                                        <input
                                            ref={register}
                                            type="text"
                                            className="form-control"
                                            name="cardHolderName"
                                        />
                                    </div>
                                </div>
                                {/*End Input */}

                                {/*Input */}
                                <div className="col-sm-6 mb-4">
                                    <div className={errors.cardNumber ? 'u-has-error' : ''}>
                                        <label className="form-label">
                                            Card Number
                                        </label>

                                        <input
                                            ref={register}
                                            type="number"
                                            className="form-control"
                                            name="cardNumber"
                                        />
                                    </div>
                                </div>
                                {/*End Input */}

                                <div className="w-100"></div>

                                {/*Input */}
                                <div className="col-sm-6 mb-4">
                                    <div className="row">
                                        <div className="col-sm-6 mb-4 mb-md-0">
                                            <div className={errors.expiryMonth ? 'u-has-error' : ''}>
                                                <label className="form-label">
                                                    Expiry Month
                                                </label>

                                                <select ref={register} className="form-control" name="expiryMonth">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className={errors.expiryYear ? 'u-has-error' : ''}>
                                                <label className="form-label">
                                                    Expiry Year
                                                </label>

                                                <select ref={register} className="form-control" name="expiryYear">
                                                    {years.map(year=>{
                                                        return <option value={year}>{year}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Input */}

                                {/*Input */}
                                <div className="col-sm-6 mb-4">
                                    <div className={errors.ccv ? 'u-has-error' : ''}>
                                        <label className="form-label">
                                            CCV
                                        </label>
                                        <input
                                            ref={register}
                                            type="number"
                                            className="form-control"
                                            name="ccv"
                                        />
                                    </div>
                                </div>
                                {/*End Input */}

                                <div className="w-100"></div>

                                <div className="col">
                                    {/*Checkbox */}
                                    {/* <div className="js-form-message mb-5">
                                        <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
                                            <input type="checkbox" className="custom-control-input" id="termsCheckbox" name="termsCheckbox" required
                                                data-msg="Please accept our Terms and Conditions."
                                                data-error-className="u-has-error"
                                                data-success-className="u-has-success" />
                                            <label className="custom-control-label" htmlFor="termsCheckbox">
                                                <small>
                                                    By continuing, you agree to the
                                                                    <a className="link-muted" href="../pages/terms.html">Terms and Conditions</a>
                                                </small>
                                            </label>
                                        </div>
                                    </div> */}
                                    {/*End Checkbox */}
                                    <button type="submit" className="btn btn-primary w-100 rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3">CONFIRM BOOKING</button>
                                </div>
                            </div>
                        </form>
                        {/*End Payment Form */}
                    </div>


                </div>
                {/*End Tab Content */}
            </div>
        </>
    )
}

export default PaymentDetails
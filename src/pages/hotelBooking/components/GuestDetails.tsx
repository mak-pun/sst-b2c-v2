import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { GuestInformation, switchToStep, quote } from '../../../features/HotelBookingConfirmation/hotelBookingConfirmationSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../app/rootReducer'
import { Criteria } from '../../../api/types'

const schema = yup.object().shape({
    firstName: yup.string().required().label('First Name'),
    lastName: yup.string().required().label('Last Name'),
    email: yup.string().required().label('Email'),
    phone: yup.string().required().label('Phone'),
    specialRequirements: yup.string().label('Special Requirements'),
})

const GuestDetails = () => {

    const dispatch = useDispatch()
    const {criteria, searchId, } = useSelector((state: RootState)=>state.hotelSearch)
    const {selections, result} = useSelector((state: RootState)=>state.hotelResult)
    const {stepCompleted} = useSelector((state: RootState)=>state.hotelBookingConfirmation)
    const { register, handleSubmit, errors } = useForm<GuestInformation>({ resolver: yupResolver(schema) })

    const onSubmit = handleSubmit(({ firstName, lastName, email, phone, specialRequirements }) => {

        if (specialRequirements === undefined) {
            specialRequirements = ''
        }

        const guestInformation = {
            firstName,
            lastName,
            email,
            phone,
            specialRequirements
        }

        const finalSelections = selections.filter(selection=>selection.isRoomClassSelected && selection.isSampleSelected)

        dispatch(quote(
            searchId as string,
            result?.hotel_id as string, 
            criteria as Criteria,
            guestInformation,
            finalSelections
            ))
    })

    useEffect(()=>{
        if(stepCompleted === 1){
            dispatch(switchToStep('2'))
        }
    },[stepCompleted])

    return (
        <>
            <div className="pt-4 pb-5 px-5">
                <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-4">
                    Let us know who you are
                                </h5>
                {/*Contacts Form */}
                <form onSubmit={onSubmit} noValidate>
                    <div className="row">
                        {/*Input */}
                        <div className="col-sm-6 mb-4">
                            <div className={errors.firstName ? 'u-has-error' : ''}>
                                <label className="form-label">
                                    First Name
                                    <span className="text-danger">*</span>
                                </label>

                                <input
                                    ref={register}
                                    type="text"
                                    className={'form-control'}
                                    name="firstName"
                                />

                                <div className="invalid-feedback" style={{ display: 'block' }}>{errors.firstName?.message}</div>

                            </div>
                        </div>
                        {/*End Input */}

                        {/*Input */}
                        <div className="col-sm-6 mb-4">
                            <div className={errors.lastName ? 'u-has-error' : ''}>
                                <label className="form-label">
                                    Last name
                                    <span className="text-danger">*</span>
                                </label>

                                <input
                                    ref={register}
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                />

                                <div className="invalid-feedback" style={{ display: 'block' }}>{errors.lastName?.message}</div>

                            </div>
                        </div>
                        {/*End Input */}

                        {/*Input */}
                        <div className="col-sm-6 mb-4">
                            <div className={errors.email ? 'u-has-error' : ''}>
                                <label className="form-label">
                                    Email
                                    <span className="text-danger">*</span>
                                </label>

                                <input
                                    ref={register}
                                    type="email"
                                    className="form-control"
                                    name="email"
                                />

                                <div className="invalid-feedback" style={{ display: 'block' }}>{errors.email?.message}</div>

                            </div>
                        </div>
                        {/*End Input */}

                        {/*Input */}
                        <div className="col-sm-6 mb-4">
                            <div className={errors.phone ? 'u-has-error' : ''}>
                                <label className="form-label">
                                    Phone
                                    <span className="text-danger">*</span>
                                </label>

                                <input
                                    ref={register}
                                    type="number"
                                    className="form-control"
                                    name="phone"
                                />

                                <div className="invalid-feedback" style={{ display: 'block' }}>{errors.phone?.message}</div>

                            </div>
                        </div>
                        {/*End Input */}

                        <div className="w-100"></div>

                        <div className="col">
                            {/*Input */}
                            <div className="js-form-message mb-6">
                                <label className="form-label">
                                    Special Requirements
                                </label>

                                <div className="input-group">
                                    <textarea
                                        ref={register}
                                        className="form-control"
                                        rows={4}
                                        name="specialRequirements"
                                    ></textarea>
                                </div>

                            </div>
                            {/*End Input */}
                        </div>

                        <div className="w-100"></div>

                        <div className="col-sm-12 align-self-end">
                            <div className="text-right">
                                <button type="submit" className="btn btn-primary btn-wide rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3">NEXT PAGE</button>
                            </div>
                        </div>
                    </div>
                </form>
                {/*End Contacts Form */}
            </div>
        </>
    )
}

export default GuestDetails
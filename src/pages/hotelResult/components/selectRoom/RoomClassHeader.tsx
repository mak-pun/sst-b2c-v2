import React from 'react'
import AvailabilityBadge from '../../../../components/AvailabilityBadge'
import SelectButton from '../../../../components/SelectButton'
import { RoomClassResult, Sample } from '../../../../api/types'
import { format } from '../../../../helper'
import moment from 'moment'
import CostPerDayButton from './CostPerDayButton'
import { Selection, selectRoomClass } from '../../../../features/hotelResult/hotelResultSlice'
import { useDispatch } from 'react-redux'

type Props = {
    roomClass: RoomClassResult;
    selectedSample: Sample;
    selection: Selection;
}

const RoomClassHeader = (props: Props) => {

    const { roomClass, selectedSample, selection } = props

    const dispatch = useDispatch()

    return (
        <div className="row border-bottom">
            <div className="col my-3 mx-3">
                <div className="d-flex align-items-start">


                    <img className="mr-3 rounded-sm" src={process.env.PUBLIC_URL + '/assets/img/80x80/img1.jpg'} alt="Image Description" />
                    <div className="flex-grow-1">
                        <h6 className="font-size-15 text-dark mb-0">{roomClass.room_class_name}</h6>
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex flex-column mr-3">
                                <p className='font-weight-bold my-0 text-dark'>{format.formatPrice(parseFloat(selectedSample?.total_amount.amount as string), selectedSample?.total_amount.currency as string)}</p>
                                {
                                    selectedSample?.cancellation_deadline &&
                                    <small className="font-weight-bold my-0 text-grey"> Guarantee by <strong>
                                        {moment(selectedSample.cancellation_deadline).diff(moment(), 'days') <= 0 ? 'TODAY' : format.formatDatetime(selectedSample.cancellation_deadline, 'date')}
                                    </strong></small>
                                }
                            </div>
                            <div className="d-flex flex-grow-1 align-items-center justify-content-between">

                                <div>
                                    {selectedSample?.room_left !== '0' && <span className="badge badge-secondary text-white rounded-xs font-size-13 py-1 p-xl-2 mr-2">
                                        {selectedSample?.room_left === '999' && 'Unlimited rooms available'}
                                        {selectedSample?.room_left !== '999' && selectedSample?.room_left !== '0' && (selectedSample?.room_left + ' room(s) available')}
                                    </span>}
                                    <AvailabilityBadge status={roomClass.availability} className='px-3'></AvailabilityBadge>
                                    <CostPerDayButton sample={selectedSample as Sample}></CostPerDayButton>
                                </div>


                               
                                <SelectButton label='Select' selected={selection?.isRoomClassSelected} onClicked={() => { dispatch(selectRoomClass(selection)) }}></SelectButton>

                            </div>


                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default RoomClassHeader
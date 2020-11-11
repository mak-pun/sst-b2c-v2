import React, { useState, useEffect } from 'react'
import Amenities from '../Amenities'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../app/rootReducer'
import AvailabilityBadge from '../../../../components/AvailabilityBadge'
import SelectButton from '../../../../components/SelectButton'
import { format } from '../../../../helper'
import { filters } from '../../../../util'
import SimplifiedRoomClassOptions from './SimplifiedRoomClassOptions'
import AvailablePromotions from './AvailablePromotions'
import RoomClassHeader from './RoomClassHeader'
import OtherOptions from './OtherOptions'
import { Sample } from '../../../../api/types'
import RoomClassResult from './RoomClassResult'

const RoomClassResults = () => {
    const { criteria } = useSelector((state: RootState) => state.hotelSearch)
    const { result, selections } = useSelector((state: RootState) => state.hotelResult)

    // console.log('criteria', criteria,criteria?.rooms.map(room=>room.adults))
    // console.log('result', result)
    // console.log('selections', selections)

    const countAdultsFromRoomIndex = (roomIndex: string): number=>{
        return criteria?.rooms[parseInt(roomIndex) - 1].adults as number
    }

    const countChildrenFromRoomIndex = (roomIndex: string): number=>{
        return criteria?.rooms[parseInt(roomIndex) - 1].children.length as number
    }

    return (<>


        <div className="py-4 mb-5">
            <h5 id='scroll-amenities' className='font-size-21 font-weight-bold text-dark mb-4'>
                Select Your Room
                </h5>

            {
                result && selections.length > 0 ?
                    <div className="tabs-block tabs-v1">
                        <div className="container space-1">
                            <ul className="nav tab-nav-pill flex-nowrap pb-4 pb-lg-5 tab-nav" role="tablist">
                                {result?.room.map(room => {
                                    return (
                                        <li key={room.index} className="nav-item">
                                            <a className="nav-link font-weight-medium active" id="pills-one-example-t1-tab" data-toggle="pill" href="#pills-one-example-t1" role="tab" aria-controls="pills-one-example-t1" aria-selected="true">
                                                <div className="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                                                    <span className="tabtext font-weight-semi-bold mr-2">{'Room ' + room.index} </span>
                                    <span className="badge badge-primary badge-pill">{countAdultsFromRoomIndex(room.index)} {countAdultsFromRoomIndex(room.index) > 1 ? 'Adults' : 'Adult'} {countChildrenFromRoomIndex(room.index)>0? (countChildrenFromRoomIndex(room.index) + ' ' + (countChildrenFromRoomIndex(room.index)>1?'Children': 'Child')) : ''}</span>
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })}
                                {/* 
                        <li className="nav-item">
                            <a className="nav-link font-weight-medium" id="pills-two-example-t1-tab" data-toggle="pill" href="#pills-two-example-t1" role="tab" aria-controls="pills-two-example-t1" aria-selected="true">
                                <div className="d-flex flex-column flex-md-row  position-relative text-dark align-items-center">
                                    <span className="tabtext font-weight-semi-bold">Hotel</span>
                                </div>
                            </a>
                        </li> */}
                            </ul>
                            <div className="tab-content">
                                {result?.room.map(room => {
                                    return (
                                        <div key={room.index} className="tab-pane fade active show" id="pills-one-example-t1" role="tabpanel" aria-labelledby="pills-one-example-t1-tab">
                                            <div className="row">
                                                <div className="col">
                                                    {room.room_classes.map(roomClass => {
                                                        return (
                                                            <RoomClassResult
                                                                roomNo={room.index}
                                                                roomClass={roomClass}
                                                                key={room.index + '-' + roomClass.room_class_id}
                                                            ></RoomClassResult>

                                                        )
                                                    })}

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                    </div>
                    : null
            }





            <Amenities></Amenities>
        </div>
    </>)
}

export default RoomClassResults
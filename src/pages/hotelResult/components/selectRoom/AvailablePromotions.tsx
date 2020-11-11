import React from 'react'
import { RoomClassResult } from '../../../../api/types'
import AvailablePromotion from './AvailablePromotion'
import { Selection } from '../../../../features/hotelResult/hotelResultSlice'

type Props = {
    roomNo: string;
    roomClass: RoomClassResult
    selection: Selection
}

const AvailablePromotions = (props: Props) => {

    const { roomNo, roomClass, selection } = props

    return (
        <div className="w-100 position-relative m-4 m-md-0">

            <div className="mt-1 pt-2">
                <div className="mb-1 px-3">
                    <h6>Available Promotions</h6>
                    <ul className="list-unstyled mb-0">
                        {roomClass.samples.map(sample => {
                            return (
                                <AvailablePromotion 
                                key={roomNo + '-' + roomClass.room_class_id + '-' + sample.sample_name} 
                                roomNo={roomNo}
                                sample={sample}
                                selection={selection}
                                ></AvailablePromotion>
                            )
                        })}
                    </ul>
                    {/* <div className="ml-0">
                    <ul className="list-unstyled mb-0">
                        <li className="media mb-3 text-gray-1">
                            <small className="mr-2">
                                <small className="flaticon-wifi-signal font-size-17 text-primary"></small>
                            </small>
                            <div className="media-body font-size-1 ml-1">
                                Free Wi-Fi
                    </div>
                        </li>
                        <li className="media mb-3 text-gray-1">
                            <small className="mr-2">
                                <small className="flaticon-plans font-size-17 text-primary"></small>
                            </small>
                            <div className="media-body font-size-1 ml-1">
                                15 m²
                    </div>
                        </li>
                    </ul>
                </div>
                <div className="ml-7">
                    <ul className="list-unstyled mb-0">
                        <li className="media mb-3 text-gray-1">
                            <small className="mr-2">
                                <small className="flaticon-bed-1 font-size-17 text-primary"></small>
                            </small>
                            <div className="media-body font-size-1 ml-1">
                                2 single beds
                    </div>
                        </li>
                        <li className="media mb-3 text-gray-1">
                            <small className="mr-2">
                                <small className="flaticon-bathtub font-size-17 text-primary"></small>
                            </small>
                            <div className="media-body font-size-1 ml-1">
                                Shower and bathtub
                    </div>
                        </li>

                    </ul>
                </div> */}
                </div>
                {/* <a href="#" className="text-underline font-size-14">Room photos and details</a> */}
            </div>
        </div>
    )
}

export default AvailablePromotions
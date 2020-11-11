import React, { useEffect, useState } from 'react'
import OtherOption from './OtherOption'
import { RoomClassResult, Sample, AvailableOption } from '../../../../api/types'
import { Selection } from '../../../../features/hotelResult/hotelResultSlice'

type Props = {
    label: string;
    roomNo: string;
    roomClass: RoomClassResult;
    selectedSample: Sample;
    selection: Selection
    type: 'hotel_option' | 'promotion_option';
}

const OtherOptions = (props: Props)=>{

    const {label, roomNo, roomClass, selectedSample, selection, type} = props 


    const [options, setOptions] = useState<Array<AvailableOption>>([])

    useEffect(() => {

        const filteredAvailableOptions = selectedSample?.available_options.filter(availableOption=>availableOption.type === type)

        setOptions(filteredAvailableOptions as Array<AvailableOption>)

    }, [selectedSample])

    return (
            options?.length > 0 
            ?
            (
                <div className="w-100 position-relative m-4 m-md-0">
                    <div className="mt-1 pt-2">
                        <div className="mb-1 px-3">
                            <h6>{label}</h6>
                            <ul className="list-unstyled mb-0">
                                {options?.map(option => {
                                    return (
                                        <OtherOption 
                                        key={roomNo + '-' + roomClass.room_class_id + '-' + selectedSample?.sample_name + '-' + option.id} 
                                        option={option}
                                        selection={selection}
                                        ></OtherOption>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )
            :null
    )
} 

export default OtherOptions
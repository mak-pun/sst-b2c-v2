import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../app/rootReducer'
import SimplifiedRoomClassOptions from './SimplifiedRoomClassOptions'
import AvailablePromotions from './AvailablePromotions'
import RoomClassHeader from './RoomClassHeader'
import OtherOptions from './OtherOptions'
import { Sample, RoomClassResult as RoomClassResultType } from '../../../../api/types'
import { Selection } from '../../../../features/hotelResult/hotelResultSlice'

type Props = {
    roomNo: string;
    roomClass: RoomClassResultType;
}

const RoomClassResult = (props: Props) => {

    const { roomNo, roomClass } = props

    const { selections } = useSelector((state: RootState) => state.hotelResult)

    const [selection, setSelection] = useState<Selection>()
    const [selectedSample, setSelectedSample] = useState<Sample>()

    // console.log(roomClass)


    useEffect(() => {

        const matchedSelection = selections.find(selection => {
            return selection.roomNo === roomNo &&
                selection.roomClassId === roomClass.room_class_id &&
                selection.isSampleSelected
        })

        const matchedSample = roomClass.samples.find(sample => {
            return sample.sample_id === matchedSelection?.sampleId
        })

        setSelection(matchedSelection)
        setSelectedSample(matchedSample)

        console.log('in useEffect', matchedSelection, matchedSample)
    }, [selections])


    return (

        <div className="card border-color-7 mb-5 overflow-hidden">

            <RoomClassHeader
                roomClass={roomClass}
                selectedSample={selectedSample as Sample}
                selection={selection as Selection}
            />

            <div className="product-item__outer w-100">
                {selection &&
                    <div className="row">
                        <div className="col-6">

                            <SimplifiedRoomClassOptions
                                roomNo={roomNo}
                                roomClass={roomClass}
                                selectedSample={selectedSample as Sample}
                                selection={selection as Selection}
                            />

                            <OtherOptions
                                label="Hotel Options"
                                type='hotel_option'
                                roomNo={roomNo}
                                roomClass={roomClass}
                                selectedSample={selectedSample as Sample}
                                selection={selection as Selection}
                            />

                            <OtherOptions
                                label="Promotion Options"
                                type='promotion_option'
                                roomNo={roomNo}
                                roomClass={roomClass}
                                selectedSample={selectedSample as Sample}
                                selection={selection as Selection}
                            />
                        </div>
                        <div className="col-6">
                            <AvailablePromotions
                                roomNo={roomNo}
                                roomClass={roomClass}
                                selection={selection as Selection}
                            />
                        </div>
                    </div>
                }

            </div>

        </div>

    )
}

export default RoomClassResult
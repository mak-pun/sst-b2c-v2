import React, { useEffect } from 'react'
import { RoomClassResult } from '../../../../api/types'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../../app/rootReducer'
import { useCurrentStateAndParams } from '@uirouter/react'
import { ucfirst } from '../../../../helper/format'
import { Selection, selectBedCombination } from '../../../../features/hotelResult/hotelResultSlice'

type Props = {
    roomNo: string,
    roomClass: RoomClassResult;
    selection: Selection
}

const BedSelection = (props: Props) => {

    const dispatch = useDispatch()
    const { roomNo, roomClass, selection } = props
    const { params } = useCurrentStateAndParams()
    const { bedTypes } = useSelector((state: RootState) => state.hotel)

    useEffect(()=>{



    }, [selection])

    

    return (
        <div className="mb-3 p-3 bg-light border">

            {roomClass.rooms.map((room, index) => {
                return <form>
                    <div className="form-group mb-1">
                        <label htmlFor="exampleFormControlSelect1" className='d-flex align-items-center'><small className="font-weight-bold">Bed Room</small> <span className="ml-2 badge badge-primary">#{roomNo}</span></label>
                        <select className="mb-2 form-control form-control-xs" id="exampleFormControlSelect1">
                            {bedTypes[params.hotelId][roomClass.room_class_id].map(bedCombination => {
                                return <option key={roomNo+'-'+roomClass.room_class_id+'-'+bedCombination}onClick={()=>dispatch(selectBedCombination({selection, index, bedCombination}))} selected={bedCombination === selection.selectedBedCombinations[index]}>{ucfirst(bedCombination)}</option>
                            })}
                        </select>
                        <small className="font-weight-bold">Extra Bed Information</small><br />
                        <p className='mb-1'><small>Singe Bed</small></p>
                    </div>
                </form>
            })}


        </div>
    )
}

export default BedSelection
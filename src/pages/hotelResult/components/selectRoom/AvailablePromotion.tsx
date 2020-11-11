import React from 'react'
import { filters } from '../../../../util'
import { format } from '../../../../helper'
import { Sample } from '../../../../api/types'
import { useDispatch } from 'react-redux'
import { Selection, selectSample } from '../../../../features/hotelResult/hotelResultSlice'
import CostPerDayButton from './CostPerDayButton'

type Props = {
    roomNo: string;
    sample: Sample;
    selection: Selection;
}
const AvailablePromotion = (props: Props) => {
    const { roomNo, sample, selection } = props

    const dispatch = useDispatch()

    return (
        <li className="d-flex align-items-start media mb-2 text-gray-1">
            <button
                style={{ minWidth: '120px' }}
                onClick={() => dispatch(selectSample({ roomNo, roomClassId: sample.room_class_id, sampleId: sample.sample_id }))}
                type="button"
                className={'btn btn-xs mr-3 ' + (selection?.isSampleSelected && selection?.sampleId === sample.sample_id ? 'btn-primary' : 'btn-soft-primary')}>
                {format.formatPrice(parseFloat(sample.total_amount.amount), sample.total_amount.currency)}
            </button>
            <small style={{ paddingTop: '5px', paddingBottom: '5px' }} className='flex-grow-1'>{sample.sample_name}</small>

            {filters.hasValueAddWithExtraCost(sample.available_options) && <i title="Value added with extra cost" className="flaticon-price text-primary font-size-24 mr-2"></i>}
            {filters.hasValueAddWithoutExtraCost(sample.available_options) && <i title="Value added without extra cost" className="flaticon-price-1 text-primary font-size-24 mr-2"></i>}

            <CostPerDayButton sample={sample}></CostPerDayButton>
        </li>
    )
}

export default AvailablePromotion
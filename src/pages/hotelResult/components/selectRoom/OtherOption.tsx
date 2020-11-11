import React from 'react'
import { AvailableOption } from '../../../../api/types'
import { recalculateSample, Selection } from '../../../../features/hotelResult/hotelResultSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../app/rootReducer'
import { useCurrentStateAndParams } from '@uirouter/react'

type Props = {
    option: AvailableOption;
    selection: Selection;
}
const OtherOption = (props: Props) => {

    const { option, selection } = props


    const dispatch = useDispatch()
    const {params} = useCurrentStateAndParams()
    const { searchId } = useSelector((state: RootState) => state.hotelSearch)

    // console.log('option selection', selection)
    // console.log('searchId', searchId)


    const operate = (checkCondition: () => boolean, executeOperation: (amount: number) => number) => {
        if (checkCondition()) {
            const preparedSelection = { ...selection ,selectedOptions: [...selection.selectedOptions] }

            preparedSelection.selectedOptions = preparedSelection.selectedOptions.map(selectedOption => {
                if (selectedOption.selectedOptionId === option.selected_option_id) {
                    console.log('selectedOption', selectedOption)
                    selectedOption = {...selectedOption, amount: executeOperation(selectedOption.amount)}
                }
                return selectedOption
            })

            // console.log('preparedSelection', preparedSelection)
            dispatch(recalculateSample(params.searchId, params.hotelId, preparedSelection as Selection))
        }
    }

    return (
        <li className="d-flex align-items-start justify-content-space-between media mb-2 text-gray-1">

            <div className="d-flex flex-grow-1">
                <label className="flex-grow-1 mb-0" htmlFor="defaultCheck1" ><small>{option.name}</small></label>
                {option.min !== option.max ? (<div className="btn-group btn-group-toggle btn-group-sm" data-toggle="buttons">
                    <div className="btn-group" role="group">
                        <button
                            disabled={selection.isLoading || option.min === option.amount}
                            onClick={() => operate(() => option.min < option.amount, (amount) => amount - 1)}
                            type="button"
                            className="btn btn-xs btn-soft-secondary">
                            -
                    </button>
                        <button
                            disabled
                            type="button"
                            className="btn btn-xs btn-soft-secondary">
                            {option.amount}
                        </button>
                        <button
                            disabled={selection.isLoading || option.max === option.amount}
                            onClick={() => operate(() => option.max > option.amount, (amount) => amount + 1)}
                            type="button"
                            className="btn btn-xs btn-soft-secondary"
                        >
                            +
                    </button>
                    </div>
                </div>) : null}
                {option.min === option.max ? <input style={{ width: '15px', height: '15px' }} className="mt-1" type="checkbox" checked={true} disabled id="defaultCheck1" /> : null}
            </div>

        </li>
    )
}

export default OtherOption
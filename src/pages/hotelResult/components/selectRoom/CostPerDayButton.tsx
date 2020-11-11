import React from 'react'
import { format } from '../../../../helper'
import { Sample } from '../../../../api/types'

type Props = {
    sample: Sample
}

const CostPerDayButton = (props: Props) => {

    const { sample } = props

    return (
        sample
        ? <button type="button" className="btn btn-outline-primary btn-xs ml-2" style={{ minWidth: '140px' }} >
            <span>
                <em>
                    {format.formatPrice(parseFloat(sample.nights[0]?.total_amount_per_night.amount), sample.nights[0]?.total_amount_per_night.currency)}
                    &nbsp;
                    <abbr title="Per/Day">P/D</abbr>
                </em>
            </span>
        </button>
        : null
    )
}

export default CostPerDayButton
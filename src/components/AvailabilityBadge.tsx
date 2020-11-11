import React from 'react'
import { format } from '../helper'

type Props = {
    status: 'INSTANT' | 'ON_REQUEST';
    className?: string
}
const AvailabilityBadge = (props: Props) => {

    const { status, className } = props

    const formatSampleAvailability = (availabilty: string) => {
        return format.ucfirst(availabilty.toLowerCase().replace('_', ' '))
    }
    return (
        <>
            <span className={(className || '') + ' badge text-white rounded-xs font-size-13 py-1 p-xl-2 ' + (status === 'INSTANT' ? 'badge-green' : 'badge-secondary')}>
                {formatSampleAvailability(status)}
            </span>
        </>
    )
}

export default AvailabilityBadge
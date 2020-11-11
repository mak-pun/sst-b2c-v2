import React, { useState } from 'react'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

type Period = {
    from: any;
    to: any;
}
type Props = {
    mode: 'horizontal' | 'vertical'
    selectedPeriod: Period,
    selectPeriod: (period: Period) => void
}

const DateRangeSelector = (props: Props) => {

    const { mode, selectedPeriod, selectPeriod } = props

    const [dateFocusOn, setDateFocusOn] = useState<'startDate' | 'endDate' | null>(null)

    return (
        <div>
            <span className="d-block text-gray-1 text-left font-weight-normal mb-0">Check In - Out</span>


            <div className={'text-left border-bottom border-width-2 border-color-1 ' + (mode === 'vertical' ? 'mb-4' : '')}>
                <DateRangePicker
                    displayFormat='D MMM, YYYY'
                    startDate={selectedPeriod.from} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={selectedPeriod.to} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }: { startDate: any; endDate: any }) => selectPeriod({ from: startDate, to: endDate })} // PropTypes.func.isRequired,
                    focusedInput={dateFocusOn} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={(focusedInput: any) => setDateFocusOn(focusedInput)} // PropTypes.func.isRequired,
                />

            </div>


        </div>
    )
}

export default DateRangeSelector
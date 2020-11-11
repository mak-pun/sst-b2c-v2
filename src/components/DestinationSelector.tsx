import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/rootReducer'
import SelectSearch from 'react-select-search';

type Props = {
    mode: 'horizontal' | 'vertical'
    selectedDestination: string
    selectDestination: (destination: any) => void
}

type Destination = {
    name: string;
    value: string;
}

const DestinationSelector = (props: Props) => {

    const { mode, selectedDestination, selectDestination } = props

    const { cities, countries } = useSelector((state: RootState) => state.location)

    const [destinations, setDestinations] = useState<Array<Destination>>([])

    useEffect(() => {

        if (cities.length > 0 && countries.length > 0) {
            const destinationsTemp: Array<Destination> = []
            cities.forEach(city => {
                const country = countries.find(country => country.id === city.country_id)
                const name = (city.name + ', ' + country?.name).trim()
                destinationsTemp.push({ name: name, value: city.id })
            })
            setDestinations(destinationsTemp)
        }
    }, [cities, countries])

    return (
        <div className={'destination-selector ' + (mode === 'vertical' ? 'mb-4 vertical' : 'horizontal')}>
            <span className="d-block text-gray-1 font-weight-normal text-left mb-0">Destination or Hotel Name</span>
            <SelectSearch
                value={selectedDestination}
                onChange={selectDestination}
                search
                options={destinations}
                placeholder="Where are you going?"
            />
        </div>
    )
}

export default DestinationSelector
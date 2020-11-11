import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import DestinationSelector from './DestinationSelector'
import DateRangeSelector from './DateRateSelector'
import RoomAndGuests from './RoomAndGuests'
import type { Criteria } from '../api/types'

import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { searchHotels } from '../features/hotelSearch/hotelSearchSlice'
import { useRouter } from '@uirouter/react'
import { RootState } from '../app/rootReducer'

type Props = {
    mode: 'horizontal' | 'vertical'
}

type Period = {
    from: any;
    to: any;
}

type Room = {
    adults: number;
    children: Array<number>;
}


const SearchForm = (props: Props) => {

    const { mode } = props

    const {criteria: cachedCriteria} = useSelector((state: RootState)=>state.hotelSearch)
    const dispatch = useDispatch()
    const router = useRouter()

    const [criteria, setCriteria] = useState<Criteria>(cachedCriteria)


    // useEffect(() => {
    //     console.log(criteria)
    // }, [criteria])

    useEffect(()=>{
        if(cachedCriteria){
            console.log('cachedCriteria', cachedCriteria)
            setCriteria(cachedCriteria)
        }
    }, [cachedCriteria])

    /**
     * Destination Section
     */

    const selectDestination = (destination: string) => {
        const newCriteria = { ...criteria }
        newCriteria.hotel_ids = [destination]
        console.log('newCriteria', newCriteria)
        setCriteria(newCriteria)
    }


    /**
     * Period Section
     */

    const selectPeriod = (period: Period) => {

        if (period.from && period.to) {
            const newCriteria = { ...criteria }

            newCriteria.from = period.from.format('YYYY-MM-DD')
            newCriteria.to = period.to.format('YYYY-MM-DD')

            setCriteria(newCriteria)
        }

    }


    /**
     * Rooms Section
     */

    const setRooms = (rooms: number) => {

        const adults = getNumberOfAdults()
        const children = getNumberOfChildren()

        generateRooms(rooms, adults, children)
    }

    const setAdults = (adults: number) => {

        const rooms = getNumberOfRooms()
        const children = getNumberOfChildren()

        generateRooms(rooms, adults, children)
    }
    const setChildren = (children: number) => {

        const rooms = getNumberOfRooms()
        const adults = getNumberOfAdults()

        generateRooms(rooms, adults, children)
    }

    const getNumberOfRooms = () => {
        return criteria.rooms.length
    }

    const getNumberOfAdults = () => {
        return _.sum(criteria.rooms.map(room => room.adults))
    }

    const getNumberOfChildren = () => {
        return _.sum(criteria.rooms.map(room => room.children.length))
    }

    const generateRooms = (rooms: number, adults: number, children: number) => {
        const preparedRooms: Array<Room> = []
        // const generatedRooms: Array<Room> = []

        while (rooms > 0) {
            preparedRooms.push({ adults: 0, children: [] })
            rooms -= 1
        }

        let i = 0
        while (adults > 0) {
            if (!preparedRooms[i]) {
                i = 0
            }
            preparedRooms[i].adults += 1
            i++
            adults--
        }

        let j = 0
        while (children > 0) {
            if (!preparedRooms[j]) {
                j = 0
            }
            preparedRooms[j].children.push(12)
            j++
            children--
        }



        // preparedRooms.forEach(room => {
        //     if(room.adults === 0 && room.children.length > 0){
        //         // A Room must have at least one adult
        //         room.adults = 1
        //         generatedRooms.push(room)
        //     }else if(room.adults > 0){
        //         generatedRooms.push(room)
        //     }
        // });

        const newCriteria = { ...criteria }

        newCriteria.rooms = preparedRooms

        console.log(newCriteria.rooms)
        setCriteria(newCriteria)
    }


    /**
     * Search
     */

     const search = ()=>{
        if((criteria.hotel_ids as Array<string>).length > 0){
            dispatch(searchHotels(criteria))
            router.stateService.go('hotel.results')
        }
     }

    return (
        <form className={mode==='horizontal'?'mt-4':''}>
            {mode === 'horizontal' ? (<div className='row d-block nav-select d-lg-flex mb-lg-3 px-2 px-lg-3'>
                <div style={{ position: 'relative', paddingRight: '15px' }} className='col-sm-12 col-lg-3dot6 col-xl-3dot7 mb-4 mb-lg-0'>
                    <DestinationSelector mode={mode} selectedDestination={((criteria.hotel_ids as Array<string>)[0] || '') } selectDestination={selectDestination} />
                </div>

                <div className='col-sm-12 col-lg-3dot7 col-xl-3dot6 mb-4 mb-lg-0'>
                    <DateRangeSelector
                        mode={mode}
                        selectedPeriod={{ from: moment(criteria.from), to: moment(criteria.to) }}
                        selectPeriod={selectPeriod} />
                </div>

                <div className='col-sm-12 col-lg-2dot8 mb-4 mb-lg-0 dropdown-custom'>
                    <RoomAndGuests
                        mode={mode}
                        rooms={getNumberOfRooms()}
                        adults={getNumberOfAdults()}
                        children={getNumberOfChildren()}
                        setRooms={setRooms}
                        setAdults={setAdults}
                        setChildren={setChildren}
                    />
                </div>

                <div className='col-sm-12 col-lg-1dot8 align-self-lg-center text-md-right'>
                    <button type="button"  onClick={search} className="btn btn-primary btn-md border-radius-3 mb-xl-0 mb-lg-1 transition-3d-hover"><i className="flaticon-magnifying-glass font-size-20 mr-2"></i>Search</button>
                </div>
            </div>)
                : (
                    <div>
                        {/* Input */}
                        <DestinationSelector
                            mode={mode}
                            selectedDestination={criteria.city as string}
                            selectDestination={selectDestination}
                        />

                        <DateRangeSelector
                            mode={mode}
                            selectedPeriod={{ from: moment(criteria.from), to: moment(criteria.to) }}
                            selectPeriod={selectPeriod}
                        />

                        <RoomAndGuests
                            mode={mode}
                            rooms={getNumberOfRooms()}
                            adults={getNumberOfAdults()}
                            children={getNumberOfChildren()}
                            setRooms={setRooms}
                            setAdults={setAdults}
                            setChildren={setChildren}
                        />


                        <div className="text-center">
                            <button type="button" onClick={search} className="btn btn-primary height-60 w-100 font-weight-bold mb-xl-0 mb-lg-1 transition-3d-hover"><i className="flaticon-magnifying-glass mr-2 font-size-17"></i>Search</button>
                        </div>



                    </div>
                )}
        </form>
    )
}

export default SearchForm
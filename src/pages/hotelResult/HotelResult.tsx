import React, { useEffect, useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Main from './components/Main'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/rootReducer';
import { useCurrentStateAndParams, useRouter } from '@uirouter/react';
import { getHotelResult } from '../../features/hotelResult/hotelResultSlice';
import { getHotel } from '../../features/hotel/hotel';

const HotelResult = () => {


    const dispatch = useDispatch()
    
    const router = useRouter() 
    const { params } = useCurrentStateAndParams()
    const { isLoading: loadingHotel } = useSelector((state: RootState) => state.hotel)
    const { result, isLoading: loadingResult, selections } = useSelector((state: RootState) => state.hotelResult)

    const [isReady, setIsReady] = useState<boolean>(false)

    useEffect(() => {
        dispatch(getHotelResult(params.searchId, params.hotelId))
        dispatch(getHotel(params.hotelId))
        return ()=>{
            // dispatch(resetHotelResult())
            // dispatch(resetHotel({hotelId: params.hotelId}))
        }
    }, [])

    useEffect(()=>{
        const allSelected: Array<boolean> = []
        result?.room.forEach(room=>{
            const hasMadeSelection = !!selections.find(selection=>selection.isRoomClassSelected && selection.isSampleSelected)
            allSelected.push(hasMadeSelection)
        })

        const shouldNavigate = allSelected.length > 0 && allSelected.every((bool)=>bool)

        if(shouldNavigate){
            console.log('should navigate')
            router.stateService.go('hotel.booking')
        }


    }, [selections])

    useEffect(() => {
        if (loadingResult && loadingHotel) {
            setIsReady(true)
        }
    }, [loadingResult, loadingHotel])

    useEffect(()=>{
         if(isReady){
            // Page preloader
            setTimeout(function () {
                $('#jsPreloader').fadeOut(500)
            }, 800);
         }

    }, [isReady])

    const renderMain = ()=>{
        if(isReady){
            // console.log('is in main', result)
            return <Main></Main>
        }else{
            return null
        }
    }

    return <>
        <Header mode='solid'></Header>
        {/* TODO Handle error here */}
        {renderMain()}
        <Footer></Footer>
        {/* 

 */}



    </>;
}

export default HotelResult
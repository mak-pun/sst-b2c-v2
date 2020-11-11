import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'



import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';
import Home from './pages/home/Home'
import HotelResults from './pages/hotelResults/HotelResults'
import HotelResult from './pages/hotelResult/HotelResult'
import HotelBooking from './pages/hotelBooking/HotelBooking'
import { loadLocations } from './features/location/locationSlices';
import { login } from './features/accessControl/accessControl';
import { RootState } from './app/rootReducer';
import tokenManager from './util/helpers/tokenManager';

const states = [
  {
    name: 'home',
    url: '/home',
    component: Home
  },
  {
    name: 'hotel',
    url: '/hotel',
    abstract: true,
    component: UIView
  },
  {
    name: 'hotel.results',
    url: '/results',
    component: HotelResults
  },
  {
    name: 'hotel.result',
    url: '/:hotelId/result?searchId&sampleId',
    component: HotelResult
  },
  {
    name: 'hotel.booking',
    url: '/booking',
    component: HotelBooking
  },
  {
    name: 'otherwise',
    url: '*path',
    redirectTo: { state: 'home' }
  }
]

const plugins = [pushStateLocationPlugin]

function App() {

  const dispatch = useDispatch()

  const { token, isAuthenticated } = useSelector((state: RootState) => state.accessControl)
 
  useEffect(() => {
    dispatch(login('b2c@sunseries.travel', '1234'))
  }, [])

  useEffect(() => {
    if(isAuthenticated && token){
      tokenManager.setToken(token)
      console.log(tokenManager.getToken())
      dispatch(loadLocations())
    }
    
  }, [isAuthenticated, token])

  return (
    <>
      <UIRouter plugins={plugins} states={states}>
        {isAuthenticated && token && <UIView />}
      </UIRouter>
    </>
  );
}

export default App;

import React, { useEffect } from 'react';

import {UIRouter, UIView, pushStateLocationPlugin} from '@uirouter/react';
import Home from './pages/home/Home'
import HotelResults from './pages/hotelResults/HotelResults'
import HotelResult from './pages/hotelResult/HotelResult'
import HotelBooking from './pages/hotelBooking/HotelBooking'

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
    url: '/result',
    component: HotelResult
  },
  {
    name: 'hotel.booking',
    url: '/booking',
    component: HotelBooking
  }
]

const plugins = [pushStateLocationPlugin]

function App() {
  useEffect(()=>{

  }, [])

  return (
    <>
    <UIRouter plugins={plugins} states={states}>
      <UIView />
    </UIRouter>
    </>
  );
}

export default App;

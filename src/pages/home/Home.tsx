import React, { useEffect } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Main from './components/Main'

const Home = ()=>{
    useEffect(() => {
        // Page preloader
        setTimeout(function () {
            $('#jsPreloader').fadeOut(500)
        }, 800);
    }, [])
    return <>
    <Header mode='transparent'></Header>
    <Main></Main>
    <Footer></Footer>
    {/* 

 */}

    
    
    </>;
}

export default Home
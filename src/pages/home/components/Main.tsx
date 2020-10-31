import React from 'react';
import Hero from './Hero'
import ProductCardsRatingWithCarousel from './ProductCardsRatingWithCarousel'
import IconBlock from './IconBlock';
import Destination from './Destination';
import Banner from './Banner'
import Tabs from './Tabs'

const Main = ()=>{
    return <>
    
    
    {/* ========== MAIN CONTENT ========== */}
        <main id="content">

            <Hero />

            <ProductCardsRatingWithCarousel />

            <Destination />

            <Banner />

            <Tabs />

            <IconBlock/>
            
        </main>
        {/* ========== END MAIN CONTENT ========== */}

    
    </>
}

export default Main
import React from 'react';
import Sidebar from './Sidebar'
import Results from './Results'

const Main = () => {
    return <>

        {/* ========== MAIN CONTENT ========== */}
        <main id="content" role="main" className="border-bottom border-color-8">
            <div className="container pt-5 pt-xl-8">
                <div className="row mb-5 mb-lg-8 mt-xl-1">
                    <div className="col-lg-4 col-xl-3 order-lg-1 width-md-50">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-8 col-xl-9 order-md-1 order-lg-2 pb-5 pb-lg-0">
                        <Results></Results>
                    </div>
                </div>
            </div>
        </main>
        {/* ========== END MAIN CONTENT ========== */}


    </>
}

export default Main
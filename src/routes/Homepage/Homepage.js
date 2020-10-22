//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import OurWork from '../../components/OurWork/OurWork';
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo';
//////////////////////////////////////////////////////////////////////////////

class Homepage extends Component {
    render() {
        return (
            <>
                <div className='header'>
                    <h1 className='big_h1'>Find your path</h1>
                    <p className='big_p'>We write for and build high-performance websites and apps for the small
                    businesses that need them most. We're here to help you create something truly special.</p>
                </div>

                <div>
                    <OurWork />
                    <WhatWeDo />
                </div>
            </>
        )
    }
}

export default Homepage;
//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import OurWorkHome from '../../components/OurWorkHome/OurWorkHome';
import WhatWeDoHome from '../../components/WhatWeDoHome/WhatWeDoHome';
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
                    <OurWorkHome />
                    <WhatWeDoHome />
                </div>
            </>
        )
    }
}

export default Homepage;
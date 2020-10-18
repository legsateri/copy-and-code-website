//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import OurWorkHome from '../../components/OurWorkHome/OurWorkHome';
//////////////////////////////////////////////////////////////////////////////
import './Homepage.css';
//////////////////////////////////////////////////////////////////////////////

class Homepage extends Component {
    render() {
        return (
            <>
                <div className='home_header'>
                    <h1 className='home_h1'>Find your path</h1>
                    <p className='home_p'>We write for and build high-performance websites and apps for the small
                    businesses that need them most. We're here to help you create something truly special.</p>
                </div>

                <div>
                    <OurWorkHome />
                </div>
            </>
        )
    }
}

export default Homepage;
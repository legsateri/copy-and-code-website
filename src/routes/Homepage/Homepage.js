//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import './Homepage.css';
//////////////////////////////////////////////////////////////////////////////

class Homepage extends Component {
    render() {
        return (
            <>
                <div className='home_header'>
                    <h1 className='home_h1'>Three word headline</h1>
                    <p className='home_p'>We write for and build high-performance websites and apps for the small
                    businesses that need them most. With our help, you can create something truly
                    special for your business</p>
                </div>
            </>
        )
    }
}

export default Homepage;
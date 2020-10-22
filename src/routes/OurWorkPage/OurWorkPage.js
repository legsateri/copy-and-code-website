//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import OurWork from '../../components/OurWork/OurWork';
//////////////////////////////////////////////////////////////////////////////

class OurWorkPage extends Component {
    render() {
        return (
            <>
                <div className='header'>
                    <h1 className='big_h1'>Our work</h1>
                    <p className='big_p'>Here's a selection of the projects we've created over the last year.</p>
                </div>

                <div>
                    <OurWork />
                </div>
            </>
        )
    }
}

export default OurWorkPage;
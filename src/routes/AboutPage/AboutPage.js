//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//////////////////////////////////////////////////////////////////////////////
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo';
//////////////////////////////////////////////////////////////////////////////

class OurWorkPage extends Component {
    render() {
        return (
            <>
                <div className='header'>
                    <h1 className='big_h1'>We are Copy & Code</h1>
                    <p className='big_p'>Founded in 2020, Copy & Code is a small copywriting, desgin and web development agency based in Chicago. 
                    We work primarily with small-businesses, creating custom-made websites, marketing materials, booklets and more.</p>

                    <p className='big_p'>If you like what we do, and would like to work together, then feel free to <Link to='/contact' style={{ textDecoration: 'none' }} className='footer_link'>get in touch</Link>. </p>
                </div>

                <WhatWeDo />
            </>
        )
    }
}

export default OurWorkPage;
//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//////////////////////////////////////////////////////////////////////////////
import './Footer.css';
//////////////////////////////////////////////////////////////////////////////

class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <ul className='footer_flex'>
                        <Link to='/work' style={{ textDecoration: 'none' }}><li className='footer_item'>WORK</li></Link>
                        <Link to='/about' style={{ textDecoration: 'none' }}><li className='footer_item'>ABOUT</li></Link>
                        <Link to='/contact' style={{ textDecoration: 'none' }}><li className='footer_item'>CONTACT</li></Link>
                    </ul>

                    <p className='footer_copywrite'>Copyright © 2020 <a href='https://copycodechicago.com/' target='_blank' className='footer_link'>Copy & Code</a>, LLC. All rights reserved.</p>
                </footer>
            </>
        )
    }
}

export default Footer;
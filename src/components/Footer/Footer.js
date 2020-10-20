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
                        <li className='footer_item'>WORK</li>
                        <li className='footer_item'>ABOUT</li>
                        <li className='footer_item'>CONTACT</li>
                    </ul>

                    <p className='footer_copywrite'>Copyright © 2020 <a href='https://copycodechicago.com/' target='_blank' className='footer_link'>Copy & Code</a>, LLC. All rights reserved.</p>
                </footer>
            </>
        )
    }
}

export default Footer;
//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//////////////////////////////////////////////////////////////////////////////
import Logo from './temp_logo.png'
//////////////////////////////////////////////////////////////////////////////
import './Navigation.css';
//////////////////////////////////////////////////////////////////////////////

class FooterHome extends Component {
    render() {
        return (
            <>
                <nav className='navigation'>
                    <div className='navigation_flex'>
                        <p className='nav_item'>HOME</p>
                        <p className='nav_item'>WORK</p>
                        <img src={Logo} alt='Copy & Code' className='logo hide_small' />
                        <p className='nav_item'>ABOUT</p>
                        <p className='nav_item'>CONTACT</p>
                    </div>
                </nav>

            </>
        )
    }
}

export default FooterHome;
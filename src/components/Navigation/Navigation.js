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
                <nav className='navigation_desktop'>
                    <div className='navigation_flex'>
                        <Link to='/' style={{ textDecoration: 'none' }}><p className='nav_item'>HOME</p></Link>
                        <p className='nav_item'>WORK</p>
                        <Link to='/' style={{ textDecoration: 'none' }}><img src={Logo} alt='Copy & Code' className='logo' /></Link>
                        <p className='nav_item'>ABOUT</p>
                        <p className='nav_item'>CONTACT</p>
                    </div>
                </nav>

                <nav className='navigation_tablet'>
                    <Link to='/' style={{ textDecoration: 'none' }}><img src={Logo} alt='Copy & Code' className='logo' /></Link>

                    <div className='navigation_flex'>
                        <Link to='/' style={{ textDecoration: 'none' }}><p className='nav_item'>HOME</p></Link>
                        <p className='nav_item'>WORK</p>
                        <p className='nav_item'>ABOUT</p>
                        <p className='nav_item'>CONTACT</p>
                    </div>
                </nav>
            </>
        )
    }
}

export default FooterHome;
//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//////////////////////////////////////////////////////////////////////////////
import Logo from './temp_logo.png'
//////////////////////////////////////////////////////////////////////////////
import './Navigation.css';
//////////////////////////////////////////////////////////////////////////////

class Navigation extends Component {
    render() {
        return (
            <>
                <nav className='navigation_desktop'>
                    <div className='navigation_flex'>
                        <Link to='/' style={{ textDecoration: 'none' }}><p className='nav_item'>HOME</p></Link>
                        <Link to='/work' style={{ textDecoration: 'none' }}><p className='nav_item'>WORK</p></Link>
                        <Link to='/' style={{ textDecoration: 'none' }}><img src={Logo} alt='Copy & Code' className='logo' /></Link>
                        <p className='nav_item'>ABOUT</p>
                        <Link to='/contact' style={{ textDecoration: 'none' }}><p className='nav_item'>CONTACT</p></Link>
                    </div>
                </nav>

                <nav className='navigation_tablet'>
                    <Link to='/' style={{ textDecoration: 'none' }}><img src={Logo} alt='Copy & Code' className='logo' /></Link>

                    <div className='navigation_flex'>
                        <Link to='/' style={{ textDecoration: 'none' }}><p className='nav_item'>HOME</p></Link>
                        <Link to='/work' style={{ textDecoration: 'none' }}><p className='nav_item'>WORK</p></Link>
                        <p className='nav_item'>ABOUT</p>
                        <Link to='/contact' style={{ textDecoration: 'none' }}><p className='nav_item'>CONTACT</p></Link>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navigation;
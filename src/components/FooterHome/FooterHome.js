//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//////////////////////////////////////////////////////////////////////////////
import './FooterHome.css';
//////////////////////////////////////////////////////////////////////////////

class FooterHome extends Component {
    render() {
        return (
            <>
                <footer>
                    <div className='overall_container'>
                        <div className='footer_diagonal'>
                            <Link to="/" className='link_style' style={{ textDecoration: 'none' }}><p>HOME</p></Link>
                            <a href='mailto:allegrapusateri@gmail.com?subject=I want to hire you.' className='link_style' style={{ textDecoration: 'none' }}><p>CONTACT US</p></a>
                            <a href='https://github.com/legsateri' className='link_style' target='_blank' style={{ textDecoration: 'none' }}><p>GITHUB</p></a>
                        </div>

                        <div className='footer_container'>
                            <div className='footer'></div>
                        </div>
                    </div>
                </footer>

            </>
        )
    }
}

export default FooterHome;
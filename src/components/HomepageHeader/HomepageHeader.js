//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import Logo from "./temp_logo.png"
//////////////////////////////////////////////////////////////////////////////
import './HomepageHeader.css';
//////////////////////////////////////////////////////////////////////////////

class HomepageHeader extends Component {
    render() {
        return (
            <>
                <header className='home_header'>
                    <div className="grid">
                        <div className="item_1 grid_item">
                            <img src={Logo} alt='Copy & Code' className='logo' />
                        </div>

                        <div className="item_2 grid_item"></div>

                        <div className="item_3 grid_item">
                            <p className="home_header_copy">We write for and build high-performance websites and apps for the small businesses that need them most.</p>
                        </div>

                        <div className="item_4 grid_item hide">
                            <div className="half_circle_vertical"></div>
                        </div>

                        <div className="item_5 grid_item hide"></div>

                        <div className="item_6 grid_item hide">
                            <div className="mini_circle"></div>
                        </div>

                        <div className="item_7 grid_item hide">
                            <p className="home_header_copy angle">Welcome</p>
                        </div>

                        <div className="item_8 grid_item">
                            <div className="half_circle_horizontal"></div>
                        </div>

                        <div className="item_9 grid_item hide"></div>
                        <div className="item_10 grid_item hide"></div>

                        <div className="item_11 grid_item">
                            <div className="big_circle"></div>
                        </div>

                        <div className="item_12 grid_item"></div>

                        <div className="item_13 grid_item">
                            <div className="mini_circle"></div>
                        </div>

                        <div className="item_14 grid_item hide"></div>

                        <div className="item_15 grid_item hide">
                            <p className="home_header_copy">Write what you want. Code what you need.</p>
                        </div>

                        <div className="item_16 grid_item">
                            <p className="button">
                                <a href='mailto:allegrapusateri@gmail.com?subject=I want to hire you.' className="contact_button" style={{ textDecoration: 'none' }}>CONTACT US</a>
                            </p>
                        </div>

                        <div className="item_17 grid_item hide"></div>

                        <div className="item_18 grid_item hide">
                            <div className="mini_circle"></div>
                        </div>

                        <div className="item_19 grid_item hide"></div>

                        <div className="item_20 grid_item hide">
                            <div className="diagonal_line"></div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default HomepageHeader;
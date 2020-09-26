//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import './HomepageHeader.css';
//////////////////////////////////////////////////////////////////////////////

class HomepageHeader extends Component {
    render() {
        return (
            <>
                <header className='home_header'>
                    <div className="grid">
                        <div className="item_1 grid_item">LOGO</div>
                        <div className="item_2 grid_item"></div>

                        <div className="item_3 grid_item">
                            <p>We write for and build high-performance websites and apps for the small businesses that need them most.</p>
                        </div>

                        <div className="item_4 grid_item hide"></div>
                        <div className="item_5 grid_item hide"></div>
                        <div className="item_6 grid_item hide"></div>

                        <div className="item_7 grid_item hide">
                            <p>Welcome</p>
                        </div>

                        <div className="item_8 grid_item"></div>
                        <div className="item_9 grid_item hide"></div>
                        <div className="item_10 grid_item hide"></div>
                        <div className="item_11 grid_item"></div>
                        <div className="item_12 grid_item"></div>
                        <div className="item_13 grid_item"></div>
                        <div className="item_14 grid_item hide"></div>

                        <div className="item_15 grid_item hide">
                            <p>Write what you want.</p>
                            <p>Code what you need.</p>
                        </div>

                        <div className="item_16 grid_item">
                            <p>CONTACT US</p>
                        </div>

                        <div className="item_17 grid_item hide"></div>
                        <div className="item_18 grid_item hide"></div>
                        <div className="item_19 grid_item hide"></div>
                        <div className="item_20 grid_item hide"></div>
                    </div>
                </header>
            </>
        )
    }
}

export default HomepageHeader;
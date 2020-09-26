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
                    <div className='home_header_flex'>
                        <div className='mini_box_edge_left'></div>
                        <div className='mini_box'></div>
                        <div className='mini_box'></div>
                        <div className='mini_box mini_box_edge_mobile'></div>
                        <div className='mini_box hide_mobile'></div>
                        <div className='mini_box hide_mobile'></div>
                        <div className='mini_box hide_mobile'></div>
                        <div className='mini_box_edge_right hide_mobile'></div>
                    </div>

                    <div className='home_header_flex'>
                        <div className='mini_box_edge_left'></div>
                        <div className='mini_box'></div>
                        <div className='mini_box'></div>
                        <div className='mini_box mini_box_edge_mobile'></div>
                        <div className='mini_box hide_mobile'></div>
                        <div className='mini_box hide_mobile'></div>
                        <div className='mini_box hide_mobile'></div>
                        <div className='mini_box_edge_right hide_mobile'></div>
                    </div>

                    <div className='home_header_flex'>
                        <div className='mini_box_edge_left'></div>
                        <div className='mini_box'></div>
                        <div className='mini_box'></div>
                        <div className='mini_box mini_box_edge_mobile'></div>
                        <div className='mini_box hide_mobile'></div>
                        <div className='mini_box hide_mobile'></div>
                        <div className='mini_box hide_mobile'></div>
                        <div className='mini_box_edge_right hide_mobile'></div>
                    </div>

                    <div className='home_header_flex'>
                        <div className='mini_box_bottom_edge_left'></div>
                        <div className='mini_box_bottom'></div>
                        <div className='mini_box_bottom'></div>
                        <div className='mini_box_bottom mini_box_edge_mobile'></div>
                        <div className='mini_box_bottom hide_mobile'></div>
                        <div className='mini_box_bottom hide_mobile'></div>
                        <div className='mini_box_bottom hide_mobile'></div>
                        <div className='mini_box_bottom_edge_right hide_mobile'></div>
                    </div>
                </header>
            </>
        )
    }
}

export default HomepageHeader;
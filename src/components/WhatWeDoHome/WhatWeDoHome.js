//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import Books from './books.png';
import Laptop from './laptop.png';
import Pens from './pens.png';
//////////////////////////////////////////////////////////////////////////////
import './WhatWeDoHome.css';
//////////////////////////////////////////////////////////////////////////////

class WhatWeDoHome extends Component {
    render() {
        return (
            <>
                <h2 className='what_we_do_home'>WHAT WE DO</h2>

                <div className='what_we_do_grid'>
                    <div>
                        <img src={Laptop} alt='Laptop Icon' className='icon grid_area_1 grid_items'/>
                        <p className='grid_area_4 grid_items'>Let your business shine with a custom-coded website.</p>
                    </div>

                    <div>
                        <img src={Pens} alt='Pens Icon' className='icon_vertical grid_area_2 grid_items' />
                        <p className='grid_area_5 grid_items'>Find your brand’s voice and shout it from the rooftops.</p>
                    </div>

                    <div>
                        <img src={Books} alt='Books Icon' className='icon grid_area_3 grid_items' />
                        <p className='grid_area_6 grid_items'>Get the word out with an individual marketing approach.</p>
                    </div>
                </div>
            </>
        )
    }
}

export default WhatWeDoHome;
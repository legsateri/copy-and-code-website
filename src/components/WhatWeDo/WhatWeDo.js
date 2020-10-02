//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import Books from './books.png';
import Laptop from './laptop.png';
import Pens from './pens.png';
//////////////////////////////////////////////////////////////////////////////
import './WhatWeDo.css';
//////////////////////////////////////////////////////////////////////////////

class WhatWeDo extends Component {
    render() {
        return (
            <>
                <section>
                    <h1 className='what_we_do_header'>WHAT WE DO</h1>

                    <div className='icons_and_descriptions'>
                        <div className='grid_area_1 grid_items'>
                            <img src={Laptop} alt='Laptop Icon' className='laptop' />
                        </div>

                        <div className='grid_area_2 grid_items'>
                            <p className='what_we_do_copy'>Let your business shine with a custom-coded website.</p>
                        </div>

                        <div className='grid_area_3 grid_items'>
                            <img src={Pens} alt='Pens Icon' className='pens' />
                        </div>

                        <div className='grid_area_4 grid_items'>
                            <p className='what_we_do_copy'>Strategize the best marketing approach for your business and get the word out.</p>
                        </div>

                        <div className='grid_area_5 grid_items'>
                            <img src={Books} alt='Books Icon' className='books' />
                        </div>

                        <div className='grid_area_6 grid_items'>
                            <p className='what_we_do_copy'>Find your brand’s voice and shout it from the rooftops.</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default WhatWeDo;
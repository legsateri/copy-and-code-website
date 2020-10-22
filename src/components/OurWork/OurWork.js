//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//////////////////////////////////////////////////////////////////////////////
import './OurWork.css';
//////////////////////////////////////////////////////////////////////////////

class OurWork extends Component {
    render() {
        return (
            <>
                <div className='hexagon_flex our_work_desktop'>
                    <Link to='/work/jkmc' style={{ textDecoration: 'none' }}>
                        <div className='hexagon_jkmc hexagon_colors_jkmc hexagon_zero hexagon_triangle_up hexagon_triangle_up_large padding'></div>
                        <div className='rectangle_jkmc'></div>
                        <div className='hexagon_jkmc hexagon_colors_jkmc hexagon_zero hexagon_triangle_down hexagon_triangle_down_large'></div>
                    </Link>

                    <Link to='/work/homebound' style={{ textDecoration: 'none' }}>
                        <div className='hexagon_homebound hexagon_colors_homebound hexagon_zero hexagon_triangle_up hexagon_triangle_up_large padding'></div>
                        <div className='rectangle_homebound'></div>
                        <div className='hexagon_homebound hexagon_colors_homebound hexagon_zero hexagon_triangle_down hexagon_triangle_down_large'></div>
                    </Link>

                    <Link to='/work/rsna' style={{ textDecoration: 'none' }}>
                        <div className='hexagon_rsna hexagon_colors_rsna hexagon_zero hexagon_triangle_up hexagon_triangle_up_large'></div>
                        <div className='rectangle_rsna'></div>
                        <div className='hexagon_rsna hexagon_colors_rsna hexagon_zero hexagon_triangle_down hexagon_triangle_down_large'></div>
                    </Link>
                </div>

                <div className='our_work_tablet'>
                    <div className='hexagon_flex'>
                        <Link to='/work/jkmc' style={{ textDecoration: 'none' }}>
                            <div className='rectangle_jkmc padding'></div>
                        </Link>

                        <Link to='/work/homebound' style={{ textDecoration: 'none' }}>
                            <div className='rectangle_homebound'></div>
                        </Link>
                    </div>

                    <div className='hexagon_flex'>
                        <Link to='/work/rsna' style={{ textDecoration: 'none' }}>
                            <div className='rectangle_rsna'></div>
                        </Link>
                    </div>
                </div>

                <div className='our_work_mobile hexagon_flex'>
                    <Link to='/work/jkmc' style={{ textDecoration: 'none' }}>
                        <div className='rectangle_jkmc padding'></div>
                    </Link>

                    <Link to='/work/homebound' style={{ textDecoration: 'none' }}>
                        <div className='rectangle_homebound padding'></div>
                    </Link>

                    <Link to='/work/rsna' style={{ textDecoration: 'none' }}>
                        <div className='rectangle_rsna'></div>
                    </Link>
                </div>
            </>
        )
    }
}

export default OurWork;
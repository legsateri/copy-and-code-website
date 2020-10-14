//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from "react-router-dom";
//////////////////////////////////////////////////////////////////////////////
import './OurWorkHome.css';
//////////////////////////////////////////////////////////////////////////////

class OurWorkHome extends Component {
    render() {
        return (
            <>
                <section>
                    <h1 className='our_work_header'>OUR WORK</h1>

                    <div className='brands'>
                        <div>
                            <Link to='/our-work/jkmc' className='brand_link' style={{ textDecoration: 'none' }}><div className='brand_circle jkmc'></div></Link>
                            <p className="project_description">Rewrote and redesigned the website for a small, lady-owned lawfirm.</p>
                        </div>

                        <div>
                            <Link to='/our-work/homebound' className='brand_link' style={{ textDecoration: 'none' }}><div className='brand_circle sd308'></div></Link>
                            <p className="project_description">Created a Homebound Learning manual for a local school district.</p>
                        </div>

                        <div>
                            <Link to='/our-work/rsna' className='brand_link' style={{ textDecoration: 'none' }}><div className='brand_circle rsna'></div></Link>
                            <p className="project_description">Rebranded this medical association so it was more approachable.</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default OurWorkHome;
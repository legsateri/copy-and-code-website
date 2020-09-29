//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import './OurWork.css';
//////////////////////////////////////////////////////////////////////////////

class OurWork extends Component {
    render() {
        return (
            <>
                <section>
                    <h1 className='our_work_header'>Our Work</h1>

                    <div className='brands'>
                        <div>
                            <div className='brand_circle jkmc'></div>
                            <p className="project_description">Rewrote and redesigned the website for a small, lady-owned lawfirm.</p>
                        </div>

                        <div>
                            <div className='brand_circle sd308'></div>
                            <p className="project_description">Created a Homebound Learning manual for a local school district.</p>
                        </div>

                        <div>
                            <div className='brand_circle rsna'></div>
                            <p className="project_description">Rebranded this medical association so it was more approachable.</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default OurWork;
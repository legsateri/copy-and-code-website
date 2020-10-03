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
                    <h1 className='our_work_header'>OUR WORK</h1>

                    <div className='brands'>
                        <div>
                        <a href='https://jkmclegal.com/' className='brand_link' target='_blank' style={{ textDecoration: 'none' }}><div className='brand_circle jkmc'></div></a>
                            <p className="project_description">Rewrote and redesigned the website for a small, lady-owned lawfirm.</p>
                        </div>

                        <div>
                        <a href='https://drive.google.com/file/d/1vDQ_edc7Y3h4PEI783Rumn---9lXsj06/view?usp=sharing' className='brand_link' target='_blank' style={{ textDecoration: 'none' }}><div className='brand_circle sd308'></div></a>
                            <p className="project_description">Created a Homebound Learning manual for a local school district.</p>
                        </div>

                        <div>
                        <a href='https://drive.google.com/drive/folders/1OwCW_2TOCqA6HR_B04o4Dv6kSk4Ji_yu?usp=sharing' className='brand_link' target='_blank' style={{ textDecoration: 'none' }}><div className='brand_circle rsna'></div></a>
                            <p className="project_description">Rebranded this medical association so it was more approachable.</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default OurWork;
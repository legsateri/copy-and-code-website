//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import JKMC from './jkmc-legal.png';
//////////////////////////////////////////////////////////////////////////////
import './JKMcLegalPage.css';
//////////////////////////////////////////////////////////////////////////////

class JKMcLegalPage extends Component {
    render() {
        return (
            <>
                <main>
                    <div className='jkmc_flex'>
                        <img src={JKMC} alt='RSNA Sample' className='jkmc_sample' />
                        
                        <div className='center_mobile'>
                            <h1>JKMc LEGAL</h1>
                            
                            <p>Jane McCahill is a healthcare attorney in Chicago, assisting hospitals in a variety of areas, including government compliance and insurance claims.</p>
                            <p>We were brought in to redesign and rewrite this Squarespace site. Not only is the brand voice now more approachable, but the template is cleaner, better organized, and easier to manage.</p>

                            <h2 className='services'>Services</h2>

                            <ul>
                                <li>UX</li>
                                <li>Copywriting</li>
                            </ul>

                            <a href='https://jkmclegal.com/' target='_blank'><button className='download_button'>VIEW LIVE SITE</button></a>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default JKMcLegalPage;
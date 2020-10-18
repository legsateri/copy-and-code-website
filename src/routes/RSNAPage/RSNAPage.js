//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import RSNA from './rsna.png';
//////////////////////////////////////////////////////////////////////////////
import './RSNAPage.css';
//////////////////////////////////////////////////////////////////////////////

class RSNAPage extends Component {
    render() {
        return (
            <>
                <main>
                    <div className='rsna_flex'>
                        <img src={RSNA} alt='RSNA Sample' className='rsna_sample' />

                        <div className='center_mobile'>
                            <h1>RSNA</h1>
                            
                            <p>The Radiological Society of North America provides resources and grants to radiologists across the globe, as well as hosts the largest annual conference of its kind.</p>
                            <p>We were brought in to rebrand the website, helping them find a new brand voice that was friendly, digestible, and easy to understand. The site was also reorganized, so it is now more intuitive to navigate and controlled by a single CMS.</p>

                            <h2 className='services'>Services</h2>
                            
                            <ul>
                                <li>Copywriting</li>
                                <li>Editing</li>
                            </ul>

                            <a href='https://www.rsna.org/' target='_blank'><button className='download_button'>VIEW LIVE SITE</button></a>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default RSNAPage;
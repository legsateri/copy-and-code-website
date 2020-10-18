//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import Manual from './HomeboundAsset1.png';
import PDF from './HomeboundManual.pdf';
//////////////////////////////////////////////////////////////////////////////
import './HomeboundPage.css';
//////////////////////////////////////////////////////////////////////////////

class HomeboundPage extends Component {
    render() {
        return (
            <>
                <main>
                    <div className='homebound_flex'>
                        <img src={Manual} alt='Manual Sample' className='manual' />

                        <div className='center_mobile'>
                            <h1>SD308 HOMEBOUND MANUAL</h1>
                            
                            <p>Homebound Tutoring services are provided to students who, with a doctors note, are declared unable to attend school due to illness.</p>
                            <p>We worked with the school district to create a manual that laid out for the administration, teachers, and parents exactly how Homebound Tutoring was going to work in their schools.</p>

                            <h2 className='services'>Services</h2>

                            <ul>
                                <li>Copywriting</li>
                                <li>Editing</li>
                            </ul>

                            <a href = {PDF} target = "_blank"><button className='download_button'>VIEW MANUAL</button></a>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default HomeboundPage;
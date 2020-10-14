//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import Manual from './homebound-manual.png';
import PDF from './HomeboundManual.pdf'
//////////////////////////////////////////////////////////////////////////////
import './HomeboundPage.css';
//////////////////////////////////////////////////////////////////////////////

class HomeboundPage extends Component {
    render() {
        return (
            <>
                <main className='homebound_page'>
                    <div className='homebound_flex'>
                        <img src={Manual} alt='Manual Sample' className='manual' />
                        <div className='will_it_work'>
                            <h1 className='project_header'>SD308 HOMEBOUND MANUAL</h1>
                            <p className='project_conent'>Homebound Tutoring services are provided to students who, with a doctors note, are declared unable to attend school due to illness.</p>
                            <p className='project_conent'>We worked with the school district to create a manual that laid out for the administration, teachers, and parents exactly how Homebound Tutoring was going to work in their schools.</p>

                            <h2 className='services'>Services</h2>
                            <ul>
                                <li className='project_conent'>Copywriting</li>
                                <li className='project_conent'>Editing</li>
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
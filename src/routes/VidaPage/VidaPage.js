//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import Vida from './vida.png';
//////////////////////////////////////////////////////////////////////////////
import './VidaPage.css';
//////////////////////////////////////////////////////////////////////////////

class VidaPage extends Component {
    render() {
        return (
            <>
                <main>
                    <div className='vida_flex'>
                        <img src={Vida} alt='Vidas Angels Sample' className='vida_sample' />
                        
                        <div className='center_mobile'>
                            <h1>Vida's Angels</h1>
                            
                            <p>Vida's Angels is a local jewelry brand, selling custom, hand-made, and eco-friendly jewelry celebrating the connection between human and doggo.</p>
                            <p>We were brought in to get their website up and running properly on Squarespace. This involved selecting a cleaner template that would stand out amongst competitors, a complete rewrite so the brand voice was more concise and effective at generating a sale, and organizing the email flow that is triggered by a purchase. We also assisted the business owner in selecting their primary analytics and setting them up through the Squarespace platform to track the performance of their products and their website.</p>

                            <h2 className='services'>Services</h2>

                            <ul>
                                <li>UX</li>
                                <li>Copywriting</li>
                            </ul>

                            <a href='https://www.vidasangels.com/home' target='_blank'><button className='download_button'>VIEW LIVE SITE</button></a>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default VidaPage;
//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import Barrier from './barrier.png';
import PDF from './barrier-logo-tagline-exploration.pdf';
//////////////////////////////////////////////////////////////////////////////
import './BarrierPage.css';
//////////////////////////////////////////////////////////////////////////////

class BarrierPage extends Component {
    render() {
        return (
            <>
                <main>
                    <div className='barrier_flex'>
                        <img src={Barrier} alt='Barrier Sample' className='barrier_sample' />
                        
                        <div className='center_mobile'>
                            <h1>Barrier</h1>
                            
                            <p>A new diaper rash cream is in town. Barrier is made with natural ingredients by doctors with moms in mind.</p>
                            <p>We were brought in to create taglines and logos for this new product line. Working with a designer, we did two rounds of exploration—the first being broad and the second narrowing down concepts for the brand owners. The purpose of this exploration was to determine not just how the brand wanted to visually represent themselves going forward, but also to explore how they will talk about their product, which will determine what niche of this market they will be competing within.</p>

                            <h2 className='services'>Services</h2>

                            <ul>
                                <li>Copywriting</li>
                            </ul>

                            <a href = {PDF} target='_blank'><button className='download_button'>VIEW CREATIVE</button></a>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default BarrierPage;
//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//////////////////////////////////////////////////////////////////////////////
import ContactForm from '../../components/ContactForm/ContactForm';
//////////////////////////////////////////////////////////////////////////////
import './ContactUsPage.css';
//////////////////////////////////////////////////////////////////////////////

class Homepage extends Component {
    render() {
        return (
            <>
                <div className='contact'>
                    <h1 className='big_h1'>Contact us</h1>
                    <p className='big_p'>Get in touch with us to get the ball rolling.</p>

                    <ContactForm />
                </div>
            </>
        )
    }
}

export default Homepage;
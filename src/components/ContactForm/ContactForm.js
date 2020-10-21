//////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import axios from 'axios';
//////////////////////////////////////////////////////////////////////////////
import './ContactForm.css';
//////////////////////////////////////////////////////////////////////////////

class ContactForm extends Component {
    handleSubmit(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        axios({
            method: 'POST',
            url: 'https://hidden-basin-77244.herokuapp.com/send',
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert('Message Sent!');
            } else if (response.data.msg === 'fail') {
                alert(':( Message failed to send.')
            }
        })
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit.bind(this)} method='POST' className='contact_form'>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' />
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>

                    <div>
                        <label htmlFor='message'>Message</label>
                        <textarea rows='5' id='message' />
                    </div>

                    <button type='submit'>SUBMIT</button>
                </form>
            </>
        )
    }
}

export default ContactForm;
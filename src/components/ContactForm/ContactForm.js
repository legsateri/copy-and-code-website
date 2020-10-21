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
        })
            .then((response) => {
                if (response.data.msg === 'success') {
                    alert('Message Sent!')
                } else if (response.data.msg === 'fail') {
                    alert(':( Message failed to send.')
                }
            })
            .then(() => {
                window.location.reload(false);
            });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit.bind(this)} method='POST' className='contact_form'>
                    <input type='text' id='name' placeholder=' NAME' /> <br />
                    <input type='email' id='email' placeholder=' EMAIL' /> <br />
                    <textarea rows='10' id='message' /> <br />

                    <button type='submit' className='submit_button'>SUBMIT</button>
                </form>
            </>
        )
    }
}

export default ContactForm;
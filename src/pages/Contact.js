import React from 'react';
import PizzaLeft from '../assets/images/pizzaLeft.jpg';

const Contact = () => (
    <div className='contact'>
        <div className='left-side' style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
        <div className='right-side'>
            <h1> Contact Us </h1>

            <form id='contact-form' method='POST'>
                <label>Full Name</label>
                <input name='name' placeholder='Enter full name...' type='text'/>

                <label>Email</label>
                <input name='email' placeholder='Enter email...' type='email'/>

                <label>Message</label>
                <textarea
                    rows='6'
                    placeholder='Enter message...'
                    name='message'
                    required
                />
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
);

export default Contact;

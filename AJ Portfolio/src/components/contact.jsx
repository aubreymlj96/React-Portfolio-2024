import React from 'react';
import { emailValidation } from '../../utils/emailValidation';
import { useState } from 'react';

function Contact (){
    const [ formState, setFormState ] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errorMessage, setErrorState] = useState('');
    const handleChange = (event) => {
        if (event.target.name === 'email'){
            const valid = emailValidation(event.target.value);
            if (!valid || !event.target.value.length){
                setErrorState('Warning: Invalid Address');
                console.error('Invalid Email Address!');
            } else {
                setFormState({
                    ...formState, email: event.target.value})
            } 
        }
        if (!errorMessage){
            console.log('Success!')
            return (
                <div>
                    <p>Thank You for Reaching Out! You Should Receive a Response in X Days</p>
                    <button className='button primary mt-4' onClick={() => window.open('/#contact')}>Return to About Page</button>
                </div>
            )
        }
    };

function handleSubmit(){};

    return (
        <div>
            <p className='contactContent'>Contact Me!</p>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label className='label' htmlFor='name'>Name</label>
                    <input className='input' type='text' name='name' defaultValue={formState.name} onBlur={handleChange}/>
                </div>
                <div className='field'>
                    <label className='label' htmlFor='email'>Email</label>
                    <input className='input' type='email' name='email' defaultValue={formState.email} onBlur={handleChange}/>
                </div>
                <div className='field'>
                    <label className='label' htmlFor='message'>Message</label>
                    <input className='textarea' rows='20' name='message' defaultValue={formState.message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className='danger'>{errorMessage}</p>
                    </div>
                )}
                <button className='button primary mt-4' id='button' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact;
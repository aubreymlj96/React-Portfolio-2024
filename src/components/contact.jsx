import React from './react';
import { emailValidation } from '../../utils/emailValidation';

function Contact (){
    const handleChange = (event) => {
        if (event.target.name === 'email'){
            const valid = emailValidation(event.target.value);
            if (!valid){
                console.error('Invalid Email Address!');
            } else {
                console.log('Success')
            }
        } else {
            if (!event.target.value.length){
                console.error(`ERROR: ${event.target.name} is required`);
            } else {
                console.log('Success');
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

    return (
        <div>
            <p className='contactContent'>Contact Me!</p>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label className='label' htmlFor='name'>Name</label>
                    <input className='input' type='text' name='name' defaultValue={text} onBlur={handleChange}/>
                </div>
                <div className='field'>
                    <label className='label' htmlFor='email'>Email</label>
                    <input className='input' type='email' name='email' defaultValue={email} onBlur={handleChange}/>
                </div>
                <div className='field'>
                    <label className='label' htmlFor='message'>Message</label>
                    <input className='textarea' rows='20' name='message' defaultValue={message} onBlur={handleChange}/>
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
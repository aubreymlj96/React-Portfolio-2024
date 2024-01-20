import React from 'react';
import Bootstrap from 'bootstrap';

function About(){
    return (
        <div>
            <p className='aboutText'>My Journey: Becoming a Full Stack Developer</p>
            <img className='bioPic' src= './public/image/aubrey_johnson.JPG' alt='Aubrey Johnson'/>
            <p className='aboutText italic mt-6'>
                My name is Aubrey Johnson and I am currently studying to be a full stack developer. Professionally, I currently work 
                as a Product Consultant in the FinTech industry, managing client relationships relative to a bookbuilding application.
                I work/collaborate closely with product designers and developers ... TBC
            </p>
        </div>
    );
}

export default About;
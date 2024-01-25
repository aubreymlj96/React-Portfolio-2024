import React from 'react';
// import Bootstrap from 'bootstrap';

function About(){
    return (
        <div className='biography2'>
            <img className='bioPic' src= '/aubrey_johnson.JPG' alt='Aubrey Johnson'/>
            <p className='aboutText'>My Journey: Becoming a Full Stack Developer</p>
            <div className='biography'>
            <p className='aboutText2 italic mt-6'>
            My name is Aubrey Johnson and I am currently studying to be a full stack developer. Professionally, I started as an Client Success analyst at a data provider company that was then acquired by my current employer, S&P Global. Currently I work as a Product Consultant at S&P Global Market Intelligence, managing client relationships relative to a book-building application. Looking towards my future career-wise, I want to work towards working in the developer/product sector. As an application expert who demonstrates application capabilities to clients and works with product designers and developers, I have always been interested in how functionality works in applications/how applications are built and, by going back to school to harness and maintain developer skills, this will help me achieve professionally and I look forward to what this new career path holds. 
            </p>
            </div>
        </div>
    );
}

export default About;
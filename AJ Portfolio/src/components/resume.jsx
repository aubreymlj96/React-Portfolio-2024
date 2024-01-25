import React from 'react';

function Resume(){
    return (

        <div className='resumeContent2'>
            <div className='resumeContent3'>
            <p className='resumeContent'>Resume</p>
            <br/>
            <a className='button primary' href='/Resume - 3.25.22.pdf'>
                <span className='icon'>
                    <i className='download'></i>
                    <span>Download Resume</span>
                </span>
            </a>
            <div className='skillContent'>
            <p >My Skills</p>
            <ul>
                <li>HTML - CSS - JavaScript - JQuery - Web - APIs</li>
                <li>Third Party APIs - Server Side API - Node.js</li>
                <li>NoSQL - SQL- ORM - ODM - AVC - OOP - MERN</li>
                <li>Webpack</li>
            </ul>
            <p>Tools</p>
            <ul>
                <li>GitBash GitHub Heroku Render Insomnia</li>
                <li> Apollo Sandbox Compass</li>
            </ul>
            </div>
            </div>
        </div>

    )
}

export default Resume;
import React from 'react';

function Resume(){
    return (
        <div className='column'>
            <p className='resumeContent'>Resume</p>
            <br/>
            <a className='button primary' href='/public/resume.pdf'>
                <span className='icon'>
                    <i className='download'></i>
                    <span>Download Resume</span>
                </span>
            </a>
            <p className='skillContent'>My Skills</p>
            <br/>
            <ul>
                <li>HTML CSS JavaScript</li>
                <li>Webservice API JSON React</li>
                <li>Node.js NoSQL SQL</li>
            </ul>
        </div>
    )
}

export default Resume;
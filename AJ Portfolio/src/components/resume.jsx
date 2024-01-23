import React from 'react';

function Resume(){
    return (

        <div className='resumeContent2'>
            <p className='resumeContent'>Resume</p>
            <br/>
            <a className='button primary' href='/public/resume.pdf'>
                <span className='icon'>
                    <i className='download'></i>
                    <span>Download Resume</span>
                </span>
            </a>
            <div className='skillContent'>
            <p >My Skills</p>
            <ul>
                <li>HTML CSS JavaScript</li>
                <li>Webservice API JSON React</li>
                <li>Node.js NoSQL SQL</li>
            </ul>
            </div>
        </div>

    )
}

export default Resume;
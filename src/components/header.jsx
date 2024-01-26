import React from 'react';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Resume from './resume';
import Nav from './nav';

function Header(){
    const loadPage = () => {
        switch(currentPage) {
            case 'About':
                return <About/>
            case 'Portfolio':
                return <Portfolio/>
            case 'Contact':
                return <Contact/>
            case 'Resume':
                return <Resume/>
            default:
                return <About/>
        }
    };

    return (
        <div>
            <nav className='header'>
                <img src="./AJ Portfolio-logos_transparent2.png" alt="logo-header" id="logoheader"/>
                <div>
                    <a className='header-item' href='https://github.com/aubreymlj96?tab=repositories'>
                        <span className='headerContent'></span>
                    </a>
                </div>
            </nav>
            <div className='nav-bar'>
            <Nav />
            </div>
            <main>
            </main>
        </div>
    )
}

export default Header;
import React from 'react';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Resume from './resume';
import Nav from './nav';

function Header(){
    const [currentPage, handlePageChange] = useState('About');
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
            <nav className='navbar'>
                <div>
                    <a className='navbar item' href='https://github.com/aubreymlj96?tab=repositories'>
                        <span className='headerContent'>Aubrey Johnson</span>
                    </a>
                </div>
            </nav>
            <Nav 
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            />
            <main>
                <div>{loadPage(currentPage)}</div>
            </main>
        </div>
    )
}

export default Header;
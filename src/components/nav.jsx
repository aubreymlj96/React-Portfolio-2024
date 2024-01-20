import React from 'react';

function Nav(props){
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    return (
        <div className='tabs center'>
            <ul className='nav' id='nav-tabs'>
                {tabs.map((tab) => (
                    <li className=
                    {props.currentPage === tab ? "nav-item is-active" : "nav-item"}
                    key={tab}
                    >
                    <a href={tab.toLowerCase()} 
                    onClick={() => props.handlePageChange(tab)}
                    className={props.currentPage === tab ? "nav-link is-active" : "nav-link"}>
                    {tab}
                    </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Nav;
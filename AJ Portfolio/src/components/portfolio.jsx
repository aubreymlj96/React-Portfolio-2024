import React from 'react';

const projects = [
    {
        id: 1,
        title: "Text Editor",
        image: '/text editor-logos.png',
        description: 'An installable application that allows you to write/edit text',
        repository: 'https://github.com/aubreymlj96/Text-Editor-PWA',
        link: 'https://text-editor-2024-a603324856d7.herokuapp.com/'
    },
    {
        id: 2,
        title: "Tech Blog",
        image: '/tech blog-logos.png',
        description: 'A website that allows you to post and comment on blog posts',
        repository: 'https://github.com/aubreymlj96/Tech-Blog-2023',
        link: 'https://guarded-reaches-99212-de9e4e9eb976.herokuapp.com/'
    },
    {
        id: 3,
        title: "Hitch-hiker's Guide: Travel App",
        image: '/Hitch Hikers Guide-logos.png',
        description: 'A travel planning based application that helps travels look up flights and plan trips',
        repository: 'https://github.com/chilejay7/Hitchhiker-s-Guide-Travel-App-',
        link: 'https://chilejay7.github.io/Hitchhiker-s-Guide-Travel-App-/'
    },
    {
        id: 4,
        title: "Weather Dashboard",
        image: '/weather dashboard-logos.png',
        description: 'An dashboard that allows you to search and monitor weather forecasts',
        repository: 'https://github.com/aubreymlj96/Weather-Dashboard',
        link: 'https://aubreymlj96.github.io/Weather-Dashboard/'
    },
    {
        id: 5,
        title: "Online Code Quiz",
        image: '/code quiz-logos.png',
        description: 'An online quiz taker with questions/prompts',
        repository: 'https://github.com/aubreymlj96/code-quiz-project',
        link: 'https://text-editor-2024-a603324856d7.herokuapp.com/'
    },
    {
        id: 6,
        title: "CoinQuest",
        image: '/CoinQuest-logos.png',
        description: 'An application that allows kids to favorite toys while learning how to manage finances at the same time',
        repository: 'https://github.com/ltrokey/project2_group1',
        link: 'https://coin-quest-a86be143e8d5.herokuapp.com/'
    },
]

function Portfolio(){
    return (
        <div className='portContent2'>
            <p className='portContent'></p>
            <div className=''>
                {projects.map((project, i) =>(
                    <div className='card' key= {i}>
                        <div className='card-image'>
                            <figure className='image col-m'>
                                <a href={project.link}>
                                    <img src={project.image} alt='Project Image'/>
                                </a>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <div className='media-left'>
                                <div className='media-content'>
                                    {/* <p className='title' key={project.id}>
                                        {project.title}
                                    </p> */}
                                </div>
                                </div>
                            </div>
                            <div className='carcontent'>
                                {project.description}
                                <br/>
                                <div className='repocard'>
                                    <footer className='card-footer'>
                                        <a href={project.repository} className='card-footer-item'>Check Out the Repository Here!</a>
                                        <a href={project.link} className='card-footer-item'>Click Logo for Live Site!</a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;
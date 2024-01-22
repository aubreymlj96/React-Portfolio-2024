import React from 'react';

const projects = [
    {
        id: 1,
        title: "Text Editor",
        image: './public/images/',
        description: 'An installable application that allows you to write/edit text',
        repository: 'https://github.com/aubreymlj96/Text-Editor-PWA',
        link: 'https://text-editor-2024-a603324856d7.herokuapp.com/'
    },
    {
        id: 2,
        title: "Tech Blog",
        image: './public/images/',
        description: 'A website that allows you to post and comment on blog posts',
        repository: 'https://github.com/aubreymlj96/Tech-Blog-2023',
        link: 'https://guarded-reaches-99212-de9e4e9eb976.herokuapp.com/'
    },
    {
        id: 3,
        title: "Note Taker",
        image: './public/images/',
        description: 'A online note taker that allows you to add/edit/remove notes',
        repository: 'https://github.com/aubreymlj96/Note-Taker-Project',
        link: 'https://arcane-waters-60041-fabce6d99b88.herokuapp.com/'
    },
    {
        id: 4,
        title: "Weather Dashboard",
        image: './public/images/',
        description: 'An dashboard that allows you to search and monitor weather forecasts',
        repository: 'https://github.com/aubreymlj96/Weather-Dashboard',
        link: 'https://aubreymlj96.github.io/Weather-Dashboard/'
    },
    {
        id: 5,
        title: "Online Code Quiz",
        image: './public/images/',
        description: 'An online quiz taker with questions/prompts',
        repository: 'https://github.com/aubreymlj96/code-quiz-project',
        link: 'https://text-editor-2024-a603324856d7.herokuapp.com/'
    },
    {
        id: 6,
        title: "CoinQuest",
        image: './public/images/',
        description: 'An application that allows kids to favorite toys while learning how to manage finances at the same time',
        repository: 'https://github.com/ltrokey/project2_group1',
        link: 'https://coin-quest-a86be143e8d5.herokuapp.com/'
    },
]

function Portfolio(){
    return (
        <div>
            <p className='portContent'>Portfolio</p>
            <div className='columns desktop justify-content-center flex-wrap-wrap flex-direction-row'>
                {projects.map((project, i) =>(
                    <div className='card' key= {i}>
                        <div className='card-image'>
                            <figure className='image col-m'>
                                <a href={project.link}>
                                    <img src={project.link + project.image} alt='Project Image'/>
                                </a>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media'>
                                <div className='media-left'>
                                <div className='media-content'>
                                    <p className='title mt-4' key={project.id}>
                                        {project.title}
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className='content'>
                                {project.description}
                                <br/>
                                <div className='card'>
                                    <footer className='card-footer'>
                                        <a href={project.repository} className='card-footer-item'>Check Out the Repository!</a>
                                        <br/>
                                        <a href={project.link} className='card-footer-item'>Check Out the Live Site!</a>
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
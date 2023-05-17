import React from 'react'
import '../CSS/skills.css'

const Skills = () => {
    const skills = [{
        index: 0, name: 'React Js', url: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg'
    },
    {
        index: 1, name: 'Node Js', url: 'https://www.eventstore.com/hubfs/nodejs-comb.png'
    },
    {
        index: 2, name: 'Mongo DB', url: 'https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png'
    },
    {
        index: 3, name: 'C++', url: 'https://media.geeksforgeeks.org/img-practice/banner/cpp-programming-basic-to-advanced-thumbnail-old.png?v=1684154013.0731087'
    },
    {
        index: 4, name: 'Python', url: 'https://www.kindpng.com/picc/m/159-1595848_python-logo-png-transparent-background-python-logo-png.png'
    },
    ]
    return (
        <section className='skills'>
            <h1 className='heading'>Skills</h1>

            <div className='container'>
                {skills.map((item) => (
                    <div className='skill-icons' key={item.index}>
                        <img className='skills-img' src={item.url} alt={item.name}></img>
                        <p className='icon-name'>{item.name}</p>
                    </div>
                ))}
            </div>
        </section>


    )
}

export default Skills

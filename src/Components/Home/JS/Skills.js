import React from 'react'
import '../CSS/skills.css'

const Skills = () => {
    const skills = [{
        index: 0, name: 'C++', url: 'https://media.geeksforgeeks.org/img-practice/banner/cpp-programming-basic-to-advanced-thumbnail-old.png?v=1684154013.0731087'
    },
    {
        index: 1, name: 'Node Js', url: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-3550841-2970426.png'
    },
    {
        index: 2, name: 'React Js', url: 'https://c4.wallpaperflare.com/wallpaper/294/834/442/reactjs-facebook-javascript-minimalism-wallpaper-preview.jpg'
    },
    {
        index: 3, name: 'Mongo DB', url: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-5-1175140.png'
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

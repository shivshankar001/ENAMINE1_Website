import React from 'react'
import './navbar.css'

const Navbar = () => {
    const elements = ["Home", "About US", "College", "Skills", "Contact Us"]
    return (
        <div className='menu-bar'>
            <nav>
                <ul
                    className='menu'>
                    <a href='https://fontawesome.com/docs/web/style/animate' className='link-menu-elements'>
                        {elements.map((element) => (
                            <li
                                key={elements.indexOf(element)}
                                className='menu-elements'>
                                {element}
                            </li>
                        ))}
                    </a>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

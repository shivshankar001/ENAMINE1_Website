import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    const elements = [{ name: "Home", link: "/MyOwnWebsite/home" }, { name: "About US", link: "/MyOwnWebsite/about" }, { name: "College", link: "/MyOwnWebsite/college" }, { name: "Skills", link: "/MyOwnWebsite/skills" }, { name: "Contact Us", link: "/MyOwnWebsite/contact-us" }]
    return (
        <div className='menu-bar'>
            <nav>
                <ul
                    className='menu'>
                    <div className='link-menu-elements'>
                        {elements.map((element) => (
                            <NavLink
                                // key={elements.indexOf(element)}
                                to={element.link}
                                className='menu-elements'>
                                {element.name}
                            </NavLink>
                        ))}
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

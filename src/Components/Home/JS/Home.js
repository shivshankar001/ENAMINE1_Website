import React from 'react'
import '../CSS/home.css'
import Header from './Header'
import Description from './Description'
import Skills from './Skills'
import Footer from './Footer'
import Copyright from '../../Copyright/Copyright'

const Home = () => {
    return (
        <section id='intro'>
            <Header />
            <Description />
            <Skills />
            <Footer />
            <Copyright />
        </section>
    )
}

export default Home

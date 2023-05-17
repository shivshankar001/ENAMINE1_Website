import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from '../../Navbar/Navbar'
import '../CSS/carousal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faBiohazard } from '@fortawesome/free-solid-svg-icons'

const Carousal = () => {
    const [currentSlide, setCurrentSlide] = useState('0')


    const slides = [
        { url: 'https://wallpaperaccess.com/full/8901670.png', index: 0, topic: "Web Development", label: "Enthusiastically diving into the world of web development, I am captivated by the endless possibilities it offers. With expertise in React, Node.js, CSS, and MongoDB, I thrive on crafting dynamic and seamless digital experiences. The thrill of bringing ideas to life through code fuels my passion and pushes me to constantly learn and evolve in this ever-changing field." },
        { url: 'https://c4.wallpaperflare.com/wallpaper/629/223/720/code-rain-dark-wallpaper-preview.jpg', index: 1, topic: "Competetive Programming", label: "Immersed in the realm of competitive programming, I find exhilaration and intellectual challenge in solving intricate coding problems. With a keen understanding of algorithms and data structures, I thrive on the adrenaline rush of optimizing code for efficiency and pushing the boundaries of what's possible." },
        { url: 'https://getwallpapers.com/wallpaper/full/8/9/e/95677.jpg', index: 2, topic: 'Volleyball', label: "I excel as a setter on the volleyball court, orchestrating plays and facilitating the team's success. Volleyball is my passion, and the thrill of the game keeps me hooked. I proudly represented my hall of residence in the general championship, striving to bring victory and unity to our community." },
        { url: 'https://c4.wallpaperflare.com/wallpaper/137/703/603/anime-kimetsu-no-yaiba-tanjiro-kamado-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg', index: 3, topic: 'Anime', label: "Immersed in the captivating world of anime, I find solace and joy in every episode, transported to realms beyond imagination. Anime is my truest love, an art form that ignites my passion and fuels my creativity. With enthusiasm, I indulge in the wonders of animated storytellng, forever grateful for the memories it has etched in my heart." },
    ]
    const slidesStyles = {
        // backgroundImage: `url(${slides[Number(currentSlide)].url})`,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'none',
        // backgroundPosition: 'up',
        // objectFit: 'contain',
        height: '700px',
        width: '100%',
        rgba: '(0,0,0,0.5)',
        zIndex: "-1"
    }

    const slideBackward = () => {
        let nextSlide;
        if (Number(currentSlide) !== 0) {
            nextSlide = currentSlide - 1;
        }
        else {
            nextSlide = slides.length - 1
        }
        setCurrentSlide(nextSlide);

    }

    function slideForward() {
        let nextSlide;
        if (Number(currentSlide) !== slides.length - 1) {
            nextSlide = currentSlide + 1;
        }
        else {
            nextSlide = 0;
        }
        setCurrentSlide(nextSlide);
    }

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div className='slide-container'>
                <div className='slides' >
                    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} touch={true} wrap={true}>
                        {slides.map((item => (
                            <Carousel.Item style={slidesStyles} key={item.index}>
                                <div className='carousal'>
                                    <img
                                        className="d-block w-100 carousel-img"
                                        src={item.url}
                                        alt={"Slide No. " + item.index}
                                        style={{objectFit:'cover', height:700, filter:'blur(5px)'}}
                                    />
                                </div>
                                <Carousel.Caption>
                                    <h2>{ item.topic}</h2>
                                    <p style={{textAlign:'justify',fontWeight:'bold'}}>{item.label }</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )))}
                        {/* <FontAwesomeIcon icon={faBiohazard} size='2xl' className='biohazard' /> */}
                        <div className='header'>
                            <div className="header-image"><img className='image' src="https://c4.wallpaperflare.com/wallpaper/562/372/1012/programmers-javascript-minimalism-wallpaper-preview.jpg" alt="image" /></div>
                            <div className='icon-and-menu'>
                                <div className='logo'><img id='my-logo' src='https://i.pinimg.com/564x/3e/3c/f2/3e3cf2aff74d14530c0ef2aa25b55fc4.jpg' width={200}></img>
                                </div>
                                <Navbar />
                            </div>

                            <h1 className='carousal-hero-title-text'>
                                Shashwat Kumar
                            </h1>
                            <p className='carousal-para'>
                                2nd Year Undergraduate student at <span style={{fontWeight:'bolder'}}>IIT Kharagpur</span> <br />
                                <span style={{ fontWeight: 'bold' }}>Department of Computer Science and Engineering</span>
                            </p>
                        </div>
                    </Carousel>
                    {/* <div id='carousal'>
                        <FontAwesomeIcon icon={faAngleLeft} size="2xl" className='fa-angle-left' onClick={slideBackward} />
                        <FontAwesomeIcon icon={faAngleRight} size="2xl" className='fa-angle-right'
                            onClick={slideForward} />

                        <div className='icon-and-menu'>
                            <div className='logo'><FontAwesomeIcon icon={faBiohazard} size='2xl' className='biohazard' />
                            </div>
                            <Navbar />
                        </div>

                        <h1 className='carousal-hero-title-text'>
                            Shashwat Kumar
                        </h1>
                        <p className='carousal-para'>
                            2nd Year Undergraduate student at IIT Kharagpur<br />
                            Department of Computer Science and Engineering
                        </p>

                    </div> */}
                </div>
            </div>

        </>

    )
}

export default Carousal

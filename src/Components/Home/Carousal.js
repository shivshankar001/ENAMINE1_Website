import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import './carousal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faBiohazard } from '@fortawesome/free-solid-svg-icons'

const Carousal = () => {
    const [currentSlide, setCurrentSlide] = useState('0')


    const slides = [
        { url: 'https://wallpaperaccess.com/full/7282714.jpg', index: '0' },
        { url: 'https://wallpapercave.com/wp/wp9071934.jpg', index: '1' },
        { url: 'https://cellularnews.com/images/hd/demon-slayer-4k-2048X1152-35n2mzkc3j2f6ks5.jpeg', index: '2' },
        { url: 'https://w0.peakpx.com/wallpaper/554/38/HD-wallpaper-demon-slayer-characters-kimetsu-no-yaiba-artwork-anime.jpg', index: '3' },
    ]
    const slidesStyles = {
        backgroundImage: `url(${slides[Number(currentSlide)].url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        backgroundPosition: 'up',
        height: '100%',
        width: '100%'
    }

    const slideBackward = () => {
        let nextSlide;
        if (Number(currentSlide) !== 0) {
            nextSlide = currentSlide - 1;
        }
        else
        {
            nextSlide = slides.length - 1
            }
        setCurrentSlide(nextSlide);

    }

    function slideForward()
    {
        let nextSlide;
        if (Number(currentSlide) !== slides.length - 1) {
            nextSlide = currentSlide + 1;
        }
        else
        {
            nextSlide = 0;
        }
        setCurrentSlide(nextSlide);
    }


    return (
        <>
            <div className='slide-container'>
                <div className='slides' style={slidesStyles}>
                    <div id='carousal'>
                        <FontAwesomeIcon icon={faAngleLeft} size="2xl" className='fa-angle-left' onClick={slideBackward}/>
                        <FontAwesomeIcon icon={faAngleRight} size="2xl" className='fa-angle-right'
                        onClick={slideForward}/>

                        <div className='icon-and-menu'>
                            <div className='logo'><FontAwesomeIcon icon={faBiohazard} size='2xl' className='biohazard' />
                            </div>
                            <Navbar />
                        </div>

                        <h1 className='carousal-hero-title-text'>
                            Hero Title Text
                        </h1>
                        <p className='carousal-para'>
                            Hero discription
                        </p>
                        
                    </div>
                </div>
            </div>

        </>

    )
}

export default Carousal

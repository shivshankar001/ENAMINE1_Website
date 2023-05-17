import React from 'react'
import '../CSS/footer.css'
import logoPhone from '../Assets/Images/phone-solid.svg'
import logoFacebook from '../Assets/Images/facebook.svg'
import logoGithub from '../Assets/Images/github.svg'
import logoLinkedin from '../Assets/Images/linkedin.svg'
import logoEmail from '../Assets/Images/envelope-regular.svg'


const Footer = () => {
  const links = ['Home', 'About us', 'College - Materials', 'Skills']
  const myLinks = [
    {
      index: 0, name: 'Phone', image: logoPhone, value: '(+91) 8955602543', url: '#'
    },
    {
      index: 1, name: 'Email', image: logoEmail, value: 'kshashwat@kgpian.iitkgp.ac.in', url: '#'
    },
    {
      index: 2, name: 'Github', image: logoGithub, value: 'ENAMINE1', url: '#'
    },
    {
      index: 3, name: 'Linkedin', image: logoLinkedin, value: 'Shashwat Kumar', url: '#'
    },
    {
      index: 4, name: 'Facebook', image: logoFacebook, value: 'Shashwat Kumar', url: '#'
    }
  ]
  return (
    <section className='footer'>
      <div className="contact-us">
        <h2 className='subheading'>
          Contact us
        </h2>
        <p className='footer-para-body'>
          Send a Message
        </p>
        <input type="text" name="your name" className='your-name textbox' placeholder='Your Name' />
        <input type="eamil" name="Email" id="eamil" className='textbox' placeholder='Email' />
        <input type="text" name="Message" id="message" className='message textbox' placeholder='Message' />
        <button>Send</button>
      </div>
      <div className="sitemap">
        <h2 className='subheading'>
          Sitemap
        </h2>
        <p className='footer-para-body'>
          All our Pages
        </p>
        <div className="links-to-pages">
          {links.map((item) => (
            <a className='sitemap-links' href='#' key={links.indexOf(item)}>{item}</a>
          ))}
        </div>
      </div>
      <div className="usefull-links">
        <h2 className='subheading'>
          Usefull Links
        </h2>
        <p className='footer-para-body'>
          My Contacts
        </p>
        <div>
          {myLinks.map((item) => (
            <a className='footer-para-body sitemap-links' href={item.url} key={item.index}><img className='usefull-links-logo' src={item.image} alt={item.name}></img>{ item.value }</a>
          ))}
      </div>
    </div>
    </section >
  )
}

export default Footer

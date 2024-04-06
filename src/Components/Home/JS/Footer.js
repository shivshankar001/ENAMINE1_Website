import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS/footer.css'
import logoPhone from '../Assets/Images/phone-solid.svg'
import logoFacebook from '../Assets/Images/facebook.svg'
import logoGithub from '../Assets/Images/github.svg'
import logoLinkedin from '../Assets/Images/linkedin.svg'
import logoEmail from '../Assets/Images/envelope-regular.svg'


const Footer = () => {
  const links = [{ name: "Home", link: "/MyOwnWebsite/home" }, { name: "About US", link: "/MyOwnWebsite/about" }, { name: "College", link: "/MyOwnWebsite/college" }, { name: "Skills", link: "/MyOwnWebsite/skills" }, { name: "Contact Us", link: "/MyOwnWebsite/contact-us" }]
  const myLinks = [
    {
      index: 0, name: 'Phone', image: logoPhone, value: '(+91) 8955602543', url: 'tel:+918955602543'
    },
    {
      index: 1, name: 'Email', image: logoEmail, value: 'kshashwat@kgpian.iitkgp.ac.in', url: 'mailto:kshashwat@kgpian.iitkgp.ac.in'
    },
    {
      index: 2, name: 'Github', image: logoGithub, value: 'ENAMINE1', url: 'https://github.com/ENAMINE1'
    },
    {
      index: 3, name: 'Linkedin', image: logoLinkedin, value: 'Shashwat Kumar', url: 'https://www.linkedin.com/in/shashwat-kumar-270754223/'
    },
    {
      index: 4, name: 'Facebook', image: logoFacebook, value: 'Shashwat Kumar', url: 'https://www.facebook.com/profile.php?id=100075222348146'
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
        <div className="floating-label-group">
          <input type="text" id="username" className="form-control textbox" autoComplete="off" required />
          <label className="floating-label para-body">Your Name</label>
        </div>

        <div className="floating-label-group">
          <input type="email" id="email" className="form-control textbox" autoComplete="off" required />
          <label className="floating-label para-body">Email</label>
        </div>
        <div className='floating-label-group'>
          <label style={{ color: 'white', fontWeight: '600' }}>Message</label>
          {/* <input type="text" name="Message" id="message" className='message form-control' autoComplete="off" /> */}
          <textarea style={{
            height: '5rem', width: '15rem', borderRadius: '10px', padding: '10px', overflowY: 'auto'
          }} name="Message" id="message" className='message form-control' />
        </div>
        <button className='custom-btn btn-7'>Send</button>
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
            <NavLink className='sitemap-links' to={item.link} key={links.indexOf(item)}>{item.name}</NavLink>
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
            <a className='footer-para-body sitemap-links' href={item.url} key={item.index}><img className='usefull-links-logo' src={item.image} alt={item.name}></img>{item.value}</a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer
import React from 'react'
import '../CSS/description.css'

const Description = () => {
  return (
    <section id="description">
      <h1 className='heading'>A Little about Myself</h1>
      <div className='description'><div className='my-image'><img className='description-img' src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000' alt='MyImage' ></img></div>
        <div className='para-body'>
          I am a passionate and enthusiastic 2nd-year undergraduate at IIT Kharagpur, specializing in Computer Science. My main focus is competitive programming, where I excel in solving complex coding problems. Additionally, I have strong skills in web development, particularly in React, Node.js, CSS, and MongoDB. Alongside my academic pursuits, I also enjoy playing volleyball and find solace and inspiration in the captivating world of anime.
        </div></div>
    </section>
  )
}

export default Description

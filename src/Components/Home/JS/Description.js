import React from 'react'
import '../CSS/description.css'

const Description = () => {
  return (
    <section id="description">
      <h1 className='heading'>A Little about Myself</h1>
      <div className='description'>
        <div className='my-image'>
          <img className='description-img' src='https://t4.ftcdn.net/jpg/03/31/84/47/360_F_331844776_sU4f3bWxu2zwKsqnNdJvjEcmlbj0hVSP.jpg' alt='MyImage' >
          </img>
        </div>
        <div className='para-body'>
          I am a passionate and enthusiastic 2nd-year undergraduate at IIT Kharagpur, specializing in Computer Science. My main focus is competitive programming, where I excel in solving complex coding problems. Additionally, I have strong skills in web development, particularly in React, Node.js, CSS, and MongoDB. Alongside my academic pursuits, I also enjoy playing volleyball and find solace and inspiration in the captivating world of anime.
        </div>
      </div>
    </section>
  )
}

export default Description

import React from 'react'
import '../CSS/description.css'

const Description = () => {
  return (
    <section id = "description">
      <h1 className='heading'>A Little about Myself</h1>
      <div className='description'><div className='my-image'><img src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000' alt='MyImage' width={300} height={300} ></img></div>
        <div className='para-body'>
          I am a passionate and enthusiastic 2nd-year undergraduate student at IIT Kharagpur, pursuing a degree in Computer Science and Engineering. With a profound love for volleyball, I excel in the setter position, representing my hall of residence in the general championship. Alongside my sporting endeavors, I am equally devoted to the captivating world of anime, finding solace and inspiration in its immersive storytelling. Furthermore, my enthusiasm extends to web development, where I possess a strong command over React, Node.js, CSS, and MongoDB, enabling me to craft seamless digital experiences. In addition, I am actively engaged in the realm of competitive programming, constantly challenging myself to solve complex coding problems with efficiency and precision.
        </div></div>
    </section>
  )
}

export default Description

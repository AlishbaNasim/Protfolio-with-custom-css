import React from 'react'
import Image from 'next/image'
import heroImage from "../public/pp.jpg"
import "../styles/hero.css"
import Link from 'next/link'
function Hero() {
  return (
    <div className="mainhero">
    <div>
       {/*hero page image  */}
       <Image alt="heropicture" src={heroImage} width={500} height={500} className='imagehero'
       />
    </div>
    <div className="content">
        <h2 className="msg ">Hi, I am</h2> 
        <h1 className="heading1">Alishba Naseem</h1>
         <p className="para1">Front-end Developer</p>
    <div>
     <button className='calltoaction1 '> <Link href="/project">View my work</Link></button>
      <button className='calltoaction1'><Link href="/contact">Get in Touch</Link></button>
    </div>
     </div>
    </div>
  )
}

export default Hero
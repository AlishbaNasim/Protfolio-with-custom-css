import React from 'react'
import "../../../styles/about.css"
import Link from 'next/link'
function about() {
  return (
    <div className='about'>
      <div className="aboutme">
    <Link href="/"> <h1 className='heading'>About me</h1></Link> 
      <p className='para shadow-box'>
      Hello! I&apos;m Alishba Naseem&#44; a Front-end developer skilled in HTML&#44;CSS &#44; JavaScript&#44; and TypeScript. I started my journey six months ago with CLI-based projects like a calculator and a number-guessing game&#44; exploring JavaScript and TypeScript fundamentals.
<br/>
Currently, I&apos;m enhancing my expertise in Next.js and Tailwind CSS to build scalable&#44; responsive web applications. My projects range from command-line tools to full-featured web apps&#44; showcasing my adaptability and commitment to growth in web development. I&apos;m passionate about creating seamless user experiences and continuously learning new tools.
<br/>
        <button className='calltoaction '> <Link href="/project">View my work</Link></button></p>
    </div></div>
  )
}

export default about
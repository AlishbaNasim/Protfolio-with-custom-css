import React from 'react'
import "../../../styles/about.css"
import Link from 'next/link'
function about() {
  return (
    <div className='about'>
      <div className="aboutme">
    <Link href="/"> <h1 className='heading'>About me</h1></Link> 
      <p className='para shadow-box'>
        Hello! I'm Alishba Naseem, a Front-end developer with a strong foundation in HTML, CSS, JavaScript, and TypeScript. My journey began six months ago with building CLI-based projects, like a simple calculator , number guessing game  published on npm, where I explored the fundamentals of JavaScript and TypeScript alongside command-line interfaces. This experience laid the groundwork for my current projects and skill set.
<br/>        Currently, I’m focused on advancing my expertise in Next.js and Tailwind CSS to create scalable, responsive web applications. My projects now range from command-line tools to full-featured web applications, reflecting my adaptability and commitment to growth in web development.
        <br/>
       
        As I progress, I’m excited to continue building innovative projects and learning new tools that help me create seamless user experiences.
        <button className='calltoaction '> <Link href="/project">View my work</Link></button></p>
    </div></div>
  )
}

export default about
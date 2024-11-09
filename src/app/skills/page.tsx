import React from 'react'
import "../../../styles/skills.css"
import Link from 'next/link'
function skills() {
  return (
    <div className='skills'>
     <Link href="/"> <h1 className='heading3'>MY Skills</h1></Link>
      <div className="listSkills">
      <div  className="main html"><span >HTML <br/>90% </span></div>
      <div className="main css"><span>CSS<br/>80%</span></div>
      <div className="main  js"><span >JavaScript<br/>75%</span></div>
      <div className="main ts"><span >TypeScript<br/>75%</span></div>
      <div className="main figma"><span >Figma<br/>40%</span></div>
      <div className="main git"><span >Git<br/>50%</span></div>
      <div   className="main tailwind"><span >Tailwind<br/>60%</span></div>  
       <div className="main next"><span >Nextjs<br/>40%</span></div>
    </div></div>
  )
}

export default skills
import "../styles/header.css";
import React from 'react';
import Link from "next/link";


function Header() {
    return (
        <div className="mainDiv">
            {/* logo name */}
            <div  >
                <Link href="/"> <h1 className="logoName">Alishba Naseem</h1>
                </Link>
            </div>
            <div className="navBar" >
                <Link href="/about" className="nav">About</Link>
               <Link href="/skills"><div className="nav">Skills</div></Link> 
               <Link href="/project"> <div className="nav">Projects</div></Link>
               <Link href="/contact"> <div className="nav">Contact</div></Link>
            </div>
        </div>
    )
}

export default Header
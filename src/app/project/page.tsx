import React from 'react';
import "../../../styles/project.css";  // CSS ko import karna
import Link from 'next/link';
function Project() {
  return (
    <div className="project">
      <Link href="/"><div className="header">Projects</div></Link>
      <div className="project-list">
        <div className="project-item">
          <h1>Login-Signup-page</h1>
          <p>A simple login-signup-page that was created through Nextjs.</p>
          <a href="https://clone-panacloud-website.vercel.app/">Live Link</a>
        </div>
        <div className="project-item">
          <h1>CLI-based simple calculator</h1>
          <p>A simple CLI-based calculator that was created through TypeScript.</p>
          <p>npm publish command: a5na3-simple-calculator</p>
        </div>
        <div className="project-item">
          <h1>CLI-based Currency converter</h1>
          <p>A CLI-based currency converter that was created through TypeScript.</p>
          <p>npm publish command: a5na3-currency-converter</p>
        </div>
        <div className="project-item">
          <h1>CLI-based To-Do-List</h1>
          <p>A CLI-based to-doo-list that was created through TypeScript.</p>
          <p>npm publish command: a5na3-to-do-list</p>
        </div>
        <div className="project-item">
          <h1>CLI-based ATM machine</h1>
          <p>A CLI-based ATM machine that was created through TypeScript.</p>
          <p>npm publish command: a5na3-atm-machine</p>
        </div>
        <div className="project-item">
          <h1>PanaCloud website</h1>
          <p>A website that was cloned using HTML and CSS.</p>
          <p>Live link: <a href="https://clone-panacloud-website.vercel.app/">Link</a></p>
        </div>
      </div>
    </div>
  );
}

export default Project;

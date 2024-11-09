import React from 'react'
import "../../../styles/contact.css"
import Footer from '../../../components/Footer'
import Link from "next/link"
function contact() {
  return (
    <div className="contact">
      <div className='main1'>
      <Link href="/"> <h1 className='heading4'>Get in Touch</h1></Link> 
        <div className=' main2'>
          <div className='text'>
            <h3 >FIRST NAME</h3>
            <input type='text' placeholder='Please enter you first name...' className="custom-input" />
          </div>
          <div className='text'>
            <h3>LAST NAME</h3>
            <input type='text' className="custom-input" placeholder='Please enter you last name...' />
          </div>
          <div className='text'>
            <h3>EMAIL</h3>
            <input type='email' className="custom-input" placeholder='Please enter you  email' />
          </div>
          <div className='text'>
            <h3>PHONE NUMBER</h3>
            <input type='tel' className="custom-input" placeholder='Please enter you phone number' />
          </div>
          <div className='text'>
            <h3>MESSSAGE</h3>
            <textarea  rows={4} className="custom-input" placeholder='Please enter message' />
          </div>
          <button type='button' className='button '>Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default contact
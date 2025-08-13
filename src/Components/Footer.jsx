import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div style={{height:'400px',backgroundColor:'purple'}} className='d-flex justify-content-center align-items-center flex-column text-light'>
      <h1>Contact Us</h1>
    <h4><MdEmail />resumebuilder@gmail.com</h4>
    <h4><FaPhoneAlt />6282693587</h4>
    <h4>Connect With Us</h4>
    <div className='d-flex justify-content-evenly fs-4'>
    <FaWhatsapp />
    <FaFacebookF />
    <FaInstagram />
    </div>
    <p className='mt-5'>Designed & Built with 💗 using React</p>
    </div>
  )
}

export default Footer
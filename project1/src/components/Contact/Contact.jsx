import React from 'react'
import './Contact.css'
import Button from '../Button/Button'
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
export default function Contact() {
  return (
    <div className='Contact'>
      <h1>CONTACT US</h1>
      <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
      <div className="formBox">
        <div className="form">
            <div className="btns">
            <Button name='VIA SUPPORT CHAT' icon={<MdOutlineMessage />}/>
            <Button name='VIA CALL' icon={<IoCallOutline />}/>
            <button id='emailBtn'><MdOutlineMessage/> VIA EMAIL FORM</button>
            </div>
            <div className="formInput">
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Text'></textarea>
            </div>
        </div>
        <div className="formImg">
            <img src="https://png.pngtree.com/png-vector/20190826/ourmid/pngtree-job-png-image_1699611.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

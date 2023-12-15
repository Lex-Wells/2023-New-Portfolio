import React, { useRef, useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from "lottie-react"
import EmailHand from "./LottieAni/EmailHand.json"

const ContactUs = () => {

 
  const form = useRef();
  const [result,setResult] = useState("")
   


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d7o1bgr', "template_lz885er", form.current, '-3ZvqhWleFDmcp4BZ')
      .then((result) => {
          let res = result
          return setResult(res)
      }, (error) => {
          return error
      });
  };

  return (
  
result?   
<div className='overflow-hidden'>
  <h1 className='flex justify-center'>Email Sent</h1>
  <p className='flex justify-center text-center font-semibold text-sm lg:text-2xl sm:text-sm'>I'll get back to you soon!</p>

<div className='flex justify-center h-2/3 '>
  <div className=' h-40 w-1/2  flex justify-center  '>
      <Lottie className='items-center' animationData={EmailHand}/>
  </div>
</div>
</div>

:
  <div>
    <form className='flex items-center flex-col sm:w-full gap-1 my-7 text-left ' ref={form} onSubmit={sendEmail}>
      <label >Name</label>
      <input className='border-0 rounded-none border-b-2 bg-transparent outline-none text-left px-0 w-full ' 
      type="text" name="user_name" required/>
      <label>Email</label>
      <input className='border-0 rounded-none border-b-2 bg-transparent outline-none text-left px-0 w-full ' type="email" name="user_email" required/>
      <label>Message</label>
      <textarea className='border-0 rounded-none border-b-2 bg-transparent outline-none text-left px-0 w-full' name="message" required/>
      <input className=' flex items-center justify-center bg-background-2
g-2 rounded-md p-2 m-2 cursor-pointer shadow-md' type="submit" value="Send" />
    </form>
  </div> 
  );
};
export default ContactUs
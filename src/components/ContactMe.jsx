import React,{useRef,useState,useEffect} from 'react'
import {motion as m} from 'framer-motion'
import Lottie from "lottie-react"
import Horizline from "./LottieAni/Horizline.json"
import straightline from "./LottieAni/straight-line.json"
import ContactUs from './ContactUs'
import SocialMedia from './SocialMedia'

const ContactMe = () => {
  
  const mainDiv = useRef()
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1000;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    setWidth(mainDiv)
    console.log(width);
  }, []);


  return (
  
    
    <m.div
    className='bg-background-3 w-full h-full top-0 left-0 absolute lg:px-48 px-16 flex items-center justify-center'
    initial={{ x: "100%" }}
    animate={{ x: "0%" }}
    ref={mainDiv}
    transition={{ duration: 0.75, ease: "easeOut" }}
    exit={{ opacity: 0.5 }}
  >
    <div className='w-full'>
    {width < breakpoint ?
   <div className='flex items-center justify-center'>
    <h1 className='text-center text-lg font-extrabold'>Contact Me</h1>
   </div> 
    
    :
     <div>
        <Lottie animationData={Horizline} />
      </div>
    }
     
  
      <div className='flex items-center'>
      {width > breakpoint ? <div className='w-full'><SocialMedia /></div>: 
    <></>
      }
        {width > breakpoint ?
        
        <div className='min-h-10 -min-w-6'>
            <Lottie animationData={straightline} />
            <Lottie animationData={straightline} />
            <Lottie animationData={straightline} />
          </div> : ""
          
        }
        <div className='w-full'>
          <ContactUs />
        </div>
      </div>
     
      {width < breakpoint ? 
      <div className='flex items-center justify-center'> 
      <div className='w-1/2'><SocialMedia /></div>
      </div>
      :
       <Lottie animationData={Horizline} />
      }
    </div>
    
  </m.div>

 
   

  )
}

export default ContactMe
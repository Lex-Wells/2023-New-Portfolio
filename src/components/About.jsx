import React ,{useEffect, useState}from 'react'
import {motion as m} from 'framer-motion'
import headshot from "../pics/headshot-transparent.png"
import Lottie from "lottie-react"
import ManTyping from "./LottieAni/ManTyping.json"
import Fingerprint from "./LottieAni/Fingerprint.json"


const About = () => {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  const breakpoint = 1000;
  const imageBreapPoint = 1026
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  
  return (
  <>
 <m.div 
    className='bg-background-5 w-full h-full top-0 left-0 absolute lg:px-48 px-16 '
    initial={{y: "-100%"}} 
    animate={{y: "0%"}} 
    transition={{duration:0.75, ease:"easeOut"}}
    exit={{opacity:0.5}}
    >
    { width > breakpoint? <div  className='overflow-hidden w-full h-full top-0 left-0 -z-30 absolute lg:px-48 px-16 '>
          <Lottie animationData={Fingerprint}/>
      </div> :""}
 <div
 className=' mt-20 lg:w-2/3 h-1/2 p-4 flex flex-justify items-center md:items-center lg:items-center'
 >    
<div className='bg-background-3 shadow text-xs gap-2 sm:text-base font-thin flex items-center w-full sm:w-full sm:h-3/4 bottom-0 lg:top-0 p-3'>
{ width > breakpoint? <p className='g-2 rounded-md p-2 m-2 text-center sm:leading-6 leading-5'>
    My name is <b className='font-bold text-center'>Alexander J. Hardwell</b>. My passion for web development began with a solid foundation in HTML, CSS, JavaScript, and Python. This foundation has allowed me to explore more complex technologies, culminating in the completion of a MERN Stack project (MongoDB, Express, React, and Node.js). I am eager to share my enthusiasm and knowledge, contributing to collaborative projects and fostering a vibrant working environment.
  </p>:
  <p className='g-2 rounded-md p-2 m-2 text-center sm:leading-6 leading-5'>
  My name is <b className='font-bold text-center'>Alexander J. Hardwell</b>. My passion for web development began with a solid foundation in HTML, CSS, JavaScript, and Python. This foundation has allowed me to explore more complex technologies, such as the MERN Stack . I am eager to share my enthusiasm and knowledge, contributing to collaborative projects and fostering a vibrant working environment.
</p>
}
</div>

</div>
{ width > imageBreapPoint? 
<div className=' lg:w-1/2 md:w-2/3  bottom-0 right-0 absolute'>
  <img src={headshot}></img>
</div>:
 <Lottie 
 style={{ height: 200 }}
 animationData={ManTyping} />
}
    </m.div> 

  </>
  )
}



export default About
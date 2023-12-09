import React ,{useEffect, useState}from 'react'
import {motion as m} from 'framer-motion'
// import Lottie from "lottie-react"
// import Circles from "./LottieAni/Circles.json"
import headshot from "../pics/headshot-transparent.png"
import Lottie from "lottie-react"
import Man from "./LottieAni/ManTyping.json"
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
 <div className='shadow text-xs -z-40 gap-2 sm:text-base font-thin flex items-center w-full sm:w-full sm:h-1/2 bottom-0 lg:top-0 p-3 '>
      <p className=' g-2 rounded-md p-2 m-2 text-center sm:leading-6 leading-5 '>My name is <b className='font-bold text-center '>Alexander J. Hardwell</b>. I began my journey by learning HTML,CSS, JavaScript, and Python. I have also completed a MERN Stack(MongoDB, Express, React, and Node JS) project and I hope to master React Native soon.  I hope to share my passion with you.</p>   
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
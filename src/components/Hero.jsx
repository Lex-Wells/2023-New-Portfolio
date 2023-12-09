import React,{useState,useEffect} from 'react'
import { motion as m} from 'framer-motion'
import LeftHand from "../pics/left hand.png"
import RightHand from "../pics/right hand.png"
import { Link } from 'react-router-dom'
import Lottie from "lottie-react"
import SmoothManFace from "./LottieAni/SmoothManFace.json"
import SocialMedia from './SocialMedia'


const Hero = () => {
  const [loading,setLoading] = useState(false)
  const [showHand, setShowHand] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
    setTimeout(()=>{
      setShowHand(true)
    }, 3000)
  },[])
 ;

console.log(showHand);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1000;


  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return ( 
    width <breakpoint?
    <div 
    className='overflow-hidden resize-none '
    >

    <m.div
    className='bg-background-2 w-full h-full top-0 left-0 absolute lg:px-48 px-16  '
    initial={{y: "100%"}} 
    animate={{y: "0%"}} 
    transition={{duration:0.75, ease:"easeOut"}}
    exit={{opacity:0.5}}
    >
    </m.div>
  <div className='my-40'>
      <div className=' relative flex items-center justify-center ' >
    
        <m.img className='cursor-pointer lg:inset-0 lg:w-1/2 lg:h-full' 
        initial={{x: "-100%"}} 
        animate={{x: "0%"}} 
        transition={{duration:0.75, ease:"easeOut"}}
        exit={{opacity:0.5}}
        whileHover={{scale:1.2,  } }
        src={LeftHand}/>   


        <m.h1 className='cursor-pointer  lg:text-4xl flex items-center justify-center'
      initial={{y: "-100%"}} 
      animate={{y: "0%"}} 
      transition={{duration:0.75, ease:"easeOut"}}
      exit={{opacity:0.5}}
      ></m.h1> 


        <m.img
        initial={{x: "100%"}} 
        animate={{x: "0%"}} 
        transition={{duration:0.75, ease:"easeOut"}}
        exit={{opacity:0.5}}
        whileHover={{scale:1.2 } }
          className=' cursor-pointer lg:inset-0 lg:w-1/2 lg:h-full' src={RightHand}/>        
        </div>
        <m.div
        initial={{y: "100%"}} 
        animate={{y: "0%"}} 
        exit={{opacity:0.5}}
        transition={{duration:0.75, ease:"easeOut"}}
        >
            <m.h1 className='lg:text-8xl text-4xl flex items-center justify-center '
      initial={{y: "-100%"}} 
      animate={{y: "0%"}} 
      transition={{duration:0.75, ease:"easeOut"}}
      exit={{opacity:0.5}}
      >Web Developer</m.h1> 


    <div className=''>
      <p className='break-words text-center  lg:text-4xl text-sm flex items-center justify-center'>My passion for web development knows no bounds.</p>
      <Link to={"/contact"} className='hover:text-text-2 underline cursor-pointer flex justify-center'>Let's chat.</Link>
    </div>  
<div className=' flex justify-center overflow-hidden'>
        <Lottie
        style={{width:200, height: 200 }}
        animationData={SmoothManFace}/>
</div>
        </m.div>
  </div>  
 
 
    </div>
    :






    <div >
    <m.div
    className='bg-background-2 w-full h-full top-0 left-0 absolute lg:px-48 px-16'
    initial={{y: "100%"}} 
    animate={{y: "0%"}} 
    transition={{duration:0.75, ease:"easeOut"}}
    exit={{opacity:0.5}}
    >

    
    </m.div>
  <div className=' relative flex items-center justify-center ' >
 
     <m.img className='cursor-pointer lg:inset-0 lg:w-1/2 lg:h-full' 
     initial={{x: "-100%"}} 
     animate={{x: "0%"}} 
     transition={{duration:0.75, ease:"easeOut"}}
     exit={{opacity:0.5}}
     whileHover={{scale:1.2,  } }
     src={LeftHand}/>   


     <m.h1 className='cursor-pointer lg:text-4xl flex items-center justify-center'
   initial={{y: "-100%"}} 
   animate={{y: "0%"}} 
   transition={{duration:0.75, ease:"easeOut"}}
   exit={{opacity:0.5}}
  ></m.h1> 


     <m.img
     initial={{x: "100%"}} 
     animate={{x: "0%"}} 
     transition={{duration:0.75, ease:"easeOut"}}
     exit={{opacity:0.5}}
     whileHover={{scale:1.2 } }
      className=' cursor-pointer lg:inset-0 lg:w-1/2 lg:h-full' src={RightHand}/>        
    </div>
    <m.div
    initial={{y: "100%"}} 
    animate={{y: "0%"}} 
    exit={{opacity:0.5}}
    transition={{duration:0.75, ease:"easeOut"}}
    >
        <m.h1 className='lg:text-8xl text-4xl flex items-center justify-center'
   initial={{y: "-100%"}} 
   animate={{y: "0%"}} 
   transition={{duration:0.75, ease:"easeOut"}}
   exit={{opacity:0.5}}
  >Web Developer</m.h1> 


<div >
  <p className=' text-right lg:text-4xl text-1xl flex items-center justify-center'>My passion for web development knows no bounds.</p>
  <Link to={"/contact"} className='underline cursor-pointer flex justify-center'>Let's chat.</Link>
</div>  

    </m.div>
    
 
 
    </div>
  )
}

export default Hero

// const Hero = () => {
//   return (
//     <m.div
//     className='bg-background-5 w-full h-full top-0 left-0 absolute lg:px-48 px-16'
//     initial={{y: "100%"}} 
//     animate={{y: "0%"}} 
//     transition={{duration:0.75, ease:"easeOut"}}
//     exit={{opacity:0.5}}
//     >
//      <main>
//         <m.div 
//         className='my-9 p-1'
//         initial={{x: "100%"}} 
//     animate={{x: "0%"}} 
//     transition={{duration:0.75, ease:"easeIn"}}
//     exit={{opacity:0.5}}
//         >
//        </m.div>
//       <div className='rounded-md p-3 bg-background-2 w-full h-full p-30px flex items-center justify-center '>
//         <div className='space-y-4'>
//         <h1 className='text-3xl lg:text-3xl '  >Hey! I'm <b className='text-background-4'>Alexander J Hardwell</b> & I'm a </h1>
//           {/* <div className='flex'>
//            <m.div className='flex items-center'>
//                 <h1 className='text-2xl lg:text-left lg:text-6xl'>W </h1>
//                 <h1 className='text-2xl lg:text-left lg:text-6xl'>E</h1>
//                 <h1 className='text-2xl lg:text-left lg:text-6xl'>B</h1>
//             </m.div>
//             <div>{''}</div>
//             <m.div className='flex items-center'>
//                 <h1 className='text-2xl lg:text-left lg:text-6xl '> D </h1>
//                 <h1 className='text-2xl lg:text-left lg:text-6xl '> E </h1>
//                 <h1 className='text-2xl lg:text-left lg:text-6xl '> V</h1>
//             </m.div>
//           </div> */}
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat suscipit animi illo voluptatibus, reiciendis mollitia ab ut voluptates odio inc!</p>
//             <button>Click Here</button>
//         </div>  
//             <div className=' w-full h-full '>
//                   <Lottie   style={{ height: 475 }} animationData={ManTyping}/>
//           </div>
//        </div>
   
       
//     </main>
//     </m.div>
  
//   )
// }
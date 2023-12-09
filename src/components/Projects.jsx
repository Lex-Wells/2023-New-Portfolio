import React, { useState,useRef, useEffect} from 'react'
import {motion as m} from 'framer-motion'
import {useAnimation } from 'framer-motion'
import Lottie from "lottie-react"
import Man from "./LottieAni/ManTyping.json"
import { gsap } from 'gsap'
import  Data  from './Data'
import { Carousel, IconButton } from "@material-tailwind/react";
import Languages from './Languages'
import { TERipple } from 'tw-elements-react';
import GithubLogo from "../pics/github-logo.png"
import Particles1 from "../ParticlesComp/Particles1"



const Projects= () => {
  const [isOpen,setIsOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1000;
 const [projectPic, setProjectPic] = useState("")
 const [projectPicLink, setProjectPicLink] = useState("")
 const [linkIndex, setLinkIndex] = useState("")
 const box = useRef()
 

 const controls = useAnimation();

 const handleDivClick = async () => {
   await controls.start({ x: '-50%' });

   await controls.start({ opacity: 1 });
 };

 useEffect(() => {
  window.addEventListener("resize", () => setWidth(window.innerWidth));
}, []);



  const manageMouseEnter =(e, color, link)=>{
    gsap.to(e.target, {backgroundColor:color, marginLeft:"80px", duration:0.5,delay:0.2})
    gsap.to(box.current, {borderColor:color, duration:0.5,delay:0.2})
    setProjectPicLink(link)
  }
  const manageMouseLeave =(e)=>{
    gsap.to(e.target, {backgroundColor:"#AB9F9D", marginLeft:"0px",  duration:0.5,delay:0.2})
    gsap.to(box.current, {duration:0.5,delay:0.2})
  }
  const showPicEnter=(e,pic)=>{
    return setProjectPic(pic); 
  }

  // const handleClick = (index) => {
  //   // setIsOpen(!isOpen)
  //   //  setSelectedObject(index);
  //   //  console.log(isOpen);
  //   console.log(index);
   
  // };
  const [selectedObject, setSelectedObject] = useState(null);

  const handleClick = (index) => {
    setSelectedObject((prevSelected) => (prevSelected === index ? null : index))
    setLinkIndex(index)
    console.log(`MMMMSSS ${selectedObject}`);
    console.log(`Indesssxx ${linkIndex}`);
  };


  
  return (
    <>
    
<m.div
className='bg-background-4 w-full h-full top-0 left-0 absolute lg:px-48 px-16 '
    initial={{x: "-100%"}} 
    animate={{x: "0%"}} 
    transition={{duration:0.75, ease:"easeOut"}}
exit={{opacity:0.5}}
> 

    <m.div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

            <m.div >
              {Data.map((data, index)=>{
                return <m.div 
                transition={{layout:{duration: .5}}} 
                layout key={index}  
                style={{borderRadius: "1rem", 
                boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"
                }}
                className='rounded-lg bg-white p-3 mt-2 '>
                    <m.h2 layout="position" className='cursor-pointer text-center font-bold	' onClick={()=> handleClick(index)}>{data.name}</m.h2>
                    {selectedObject === index && (
                    <m.div>
                          
                          <div className='flex flex-col items-center'>
                          <a  className='cursor-pointer text-center font-extrabold text-background-6 text-l' href={data.link}>{data.site} <p> Link</p></a>
                          <a  className='text-center font-semibold  underline'>Languages Used</a>
                          {data.logos.map((dat, index)=>{
                                            return <div className='flex items-center justify-center'>
                                    <h1 className='text-center items-center justify-center text-sm'
                                  key={index}>{dat.name}</h1>
                                  <img className='w-10 h-15 sm:w-10 bg-contain items-center justify-center  ' src={dat.logo}></img>
                          </div>

                })}
                          </div>
                          <div  >
                            <a href={data.githubLink} className='flex items-center justify-center text-center underline cursor-pointer'> {data.site} Code</a>
                          <div className='flex items-center justify-center  '>
                          <a href={data.githubLink}><img href={data.githubLink} className='w-10 h-10 sm:w-10 bg-contain items-center justify-center cursor-pointer' src={data.github}></img></a>
                            </div>
                          </div>
                    </m.div>
                    )}
                </m.div>})}
            </m.div>

        
              {width < breakpoint?
                  <m.div></m.div>:
                  <m.div
                  initial={{x: "-100%"}} 
                  animate={{x: "0%"}} 
                  transition={{duration:3, ease:"easeOut"}}
                  >
                {selectedObject !== null && (
                  <Lottie
                  initial={{x: "-100%"}} 
                  animate={{x: "0%"}} 
                  transition={{duration:3, ease:"easeOut"}}
                  style={{width:400, height: 400 }}
                    animationData={Data[selectedObject].lottie}
                  ></Lottie>
                )}
              </m.div>   
              }
        
    </m.div>

</m.div>

 
   
    
    </>
  )
}

export default Projects
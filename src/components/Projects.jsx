import React, { useState,useRef, useEffect} from 'react'
import {motion as m} from 'framer-motion'
import {useAnimation } from 'framer-motion'
import Lottie from "lottie-react"
import  Data  from './Data'



const Projects= () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1000
 



 useEffect(() => {
  window.addEventListener("resize", () => setWidth(window.innerWidth));
}, []);


  const variants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: '0%' },
  };

  const [selectedObject, setSelectedObject] = useState(null);

  const handleClick = (index) => {
    setSelectedObject((prevSelected) => (prevSelected === index ? null : index))
    setLinkIndex(index)
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

    <m.div 
     style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
     className='mt-5'
     >

            <m.div >
              {Data.map((data, index)=>{
                return <m.div 
                transition={{layout:{duration: .5}}} 
                layout key={index}  
                style={{borderRadius: "1rem", 
                boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"
                }}
                className=' rounded-lg bg-white p-1 mt-1 '>
                    <m.h2 layout="position" className='cursor-pointer text-center font-extrabold	' onClick={()=> handleClick(index)}>{data.name}</m.h2>
                    {selectedObject === index && (
                    <m.div>
                          
                          <div className='flex flex-col items-center'>
                          <a  className='text-text-4 flex items-center justify-center text-center underline cursor-pointer font-extrabold'
                          target="_blank" rel="noopener noreferrer"
                          href={data.link}>{data.site} {data.site?<p>.com</p> : ""}</a>
                          <a  className='text-center font-medium'>Languages Used</a>
                          {data.logos.map((dat, index)=>{
                                            return <div className='flex items-center justify-center'>
                                    <h1 className='text-center items-center justify-center text-sm'
                                  key={index}>{dat.name}</h1>
                                  <img className='w-10 h-15 sm:w-10 bg-contain items-center justify-center  ' src={dat.logo}></img>
                          </div>

                })}
                          </div>
                          <div  >
                            <a target="_blank" rel="noopener noreferrer" href={data.githubLink} className=' text-text-4 font-extrabold flex items-center justify-center text-center underline cursor-pointer'> {data.site} Code</a>
                          <div className='flex items-center justify-center  '>
                          <a target="_blank" rel="noopener noreferrer" href={data.githubLink} ><img href={data.githubLink} className=' w-10 h-10 sm:w-10 bg-contain items-center justify-center cursor-pointer' src={data.github}></img></a>
                            </div>
                          </div>
                    </m.div>
                    )}
                </m.div>})}
            </m.div>

        
              {width < breakpoint?
                  <m.div></m.div>:
                  <m.div
                  initial="hidden"
                  animate={selectedObject !== null ? 'visible' : 'hidden'}
                  variants={variants}
                  transition={{ duration: 1.3, ease: "easeIn" }}
                >
                  {selectedObject !== null && (
                    <Lottie
                      style={{ width: 400, height: 400 }}
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
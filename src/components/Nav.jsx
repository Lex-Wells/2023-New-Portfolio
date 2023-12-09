import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {motion as m} from "framer-motion"
import { AnimatePresence } from 'framer-motion'


const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1000;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  let PageLinks = [
    {name: "Home", link: "/"},
    {name: "About", link: "/about"},
    {name: "Projects", link: "/projects"},
    {name: "Contact", link: "/contact"},
  ]

  const [shown, setShown] = useState(false)
  return (
    <>
   <nav className=' text-1xl lg:text-2xl text-background-1 p-2 font-thin z-20 absolute  w-full'>
      <div className=''>
        <m.ul 
        exit={{ opacity:0 }}
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        className=' lg:gap-8 gap-4 z-20 flex items-center justify-between'>
          <div
          >
             <Link 
              onClick={()=>{setShown(false)}}
             to={"/"} className=' resize-none hover:text-text-2 underline cursor-pointer flex justify-center'> 
             Alex J. Hardwell</Link>
          </div>
          {width > breakpoint?   <div className=' gap-8 z-20 flex items-center transition-all ease-in-out duration-200'>
            <Link className='hover:text-text-2 ' to={'/'}>Home</Link>
            <Link className='hover:text-text-2' to={'/about'}>About</Link>
            <Link className='hover:text-text-2' to={'/projects'}>Projects</Link>
            <Link className='hover:text-text-2' to={'/contact'}>Contact</Link>
            </div> : 
            <div className='cursor-pointer font-bold flex items-center'>
             {shown === false?
             <span onClick={()=>{setShown(true)}}
              className='text-3xl mr-1 pt-2 resize-none '>
              <ion-icon size="large" name="menu-outline"></ion-icon>
              </span>: ""}
              {shown === true?
                <m.ul 
                exit={{ opacity:0 }}
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                className=' absolute flex flex-col items-center top-1 right-1 p-1 transition-all ease-in-out duration-200 shadow'
                >
                <div >
                 
                  <ion-icon onClick={()=>{setShown(false)}}  name="close-outline"></ion-icon>
                 
                </div>
                {
                PageLinks.map((link)=>(
    
                  <li className='hover:text-text-2 relative ' key={link.name}>
                    <Link onClick={()=>{setShown(false)}}  className='left-20 transition-all ease-in-out duration-200' to={link.link}>{link.name}</Link>
                  </li>
       
                )
                )
                }
              </m.ul>: ""}
            </div>
            
            }
        </m.ul>
      </div>
    </nav>
    </>
  )
}



export default Nav
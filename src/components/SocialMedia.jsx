import React from 'react'
import insta from "../pics/insta.png"
import link from "../pics/link.png"



const SocialMedia = () => {
  return (

<div className="text-xs">
<div className='flex items-center justify-center bg-background-2
g-2 rounded-md p-2 m-2 cursor-pointer gap-1 lg:gap-6 shadow-md' 
onClick={()=>{window.open("https://www.instagram.com/ajh_webdev/")}}
>
        <img className='w-4 h-4 lg:w-8 lg:h-8 ' src={insta}></img>
        <h2>Instagram</h2>
</div>
<div
 className='flex items-center justify-center bg-background-2
g-2 rounded-md p-2  m-2 cursor-pointer gap-1 lg:gap-6 shadow-md'
onClick={()=>{window.open("https://www.linkedin.com/in/alexander-hardwell/")}}
>
        <img className=' w-5 h-5 lg:w-10 lg:h-10 ' src={link}></img>
        <h2>Linkedin</h2>
</div>
</div>
   
  )
}

export default SocialMedia
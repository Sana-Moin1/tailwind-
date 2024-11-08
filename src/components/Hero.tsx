import React from 'react'
import Navbar from './Navbar';
const Hero =()=> {
  return (
<div id="hero"className='min-h-screen bg-no-repeat bg-[url(/image.jpg)] bg-cover'
   
style={{backgroundSize:"35%", backgroundPosition:'left 100px top 100px'}}
>
    <Navbar/>
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
    <div className='hidden lg:block'></div>
    <div className='text-[80px] sm:text-[50px] font-normal leading-tight flex justify-center items-center'>
     <div>
      <h1 className='text-justify flex justify-between items-center'>My Portfolio Website</h1><br></br>
        <p className='text-red-400 pt-2 flex justify-evenly'data-aos="zoom-in-left">Hello! I am Sana Moin.I have developed my portfolio werbsite.Kindly have a look.</p>           
       
        </div>
     </div>
     </div>
     </div> 
  )
}
export  default Hero
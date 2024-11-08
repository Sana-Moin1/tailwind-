import React from 'react'
import { MdContactMail } from "react-icons/md";
import { BsTelephoneOutboundFill } from "react-icons/bs";


const Contact= () => {
  return (
    <div id ='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'data-aos="zoom-in-left" >Contact Us</h2>
                <p className='text-red-400 text-[18px] pt-2'data-aos="zoom-in-left">
                    Feel free to contact us or send message by submitting a Form.
                </p>
<div className='flex gap-3 items-center'data-aos="zoom-in-left" >
    <MdContactMail size={30}/> sanamoe74@gmail.com
</div>

<div className='flex gap-3 items-center'data-aos="zoom-in-left">
    <BsTelephoneOutboundFill size={30}/> 0312-9223161
</div>
            </div>
            <div className='space-y-8'>
<div className='flex flex-col gap-1' data-aos="zoom-in-left">
<label htmlFor="name">Name</label>
<input type="text"
className='h-[40px] bg-transparent border border-accent'
id='name'/>
</div>

<div className='flex flex-col gap-1'data-aos="zoom-in-left">
<label htmlFor="email">Email</label>
<input type="text"
className='h-[40px] bg-transparent border border-accent'
id='email'/>
</div>
<div className='flex flex-col gap-1'data-aos="zoom-in-left">
<label htmlFor="message">Message</label>
<textarea
className='bg-transparent border border-accent'
id='message' rows={8}>
</textarea>
</div>
     <button className='bg-amber-500 p-2 px-6'data-aos="zoom-in-left">Send</button> 
     
        
            
            </div>
        </div>


    </div>
  )
}

export default Contact


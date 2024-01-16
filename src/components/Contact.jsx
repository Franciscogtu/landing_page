import React from 'react'
import { AiOutlineHome, AiOutlineMenu ,AiOutlineProject , AiOutlineMail } from "react-icons/ai";
import { useState,useRef } from "react";

const Contact = () => {

  const [showForm, setShowForm] = useState(false)

  const handleYesClick =()=>{
    setShowForm(true);
    console.log("state changed")
}

const ContactOverlay = () => {
  return (
    <div className='  w-full  h-20   flex items-center justify-center md:pl-20 p-4 py-16  bg-cyan-600   text-white  rounded-lg mx-auto mb-6 0'>
      <h1 className='text-center text-lg font-thin'>Would you like to get in touch? 😉</h1>
      <button className='bg-white text-lg text-cyan-600 px-7 py-2 rounded-lg justify-center m-2' onClick={handleYesClick}>
        Yes
      </button>
    </div>
  );
};



  return (
    
    <div id='contact' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16  flex  items-center justify-center'>
    
    {!showForm && <ContactOverlay />}

    {showForm && (
      
    <form action="https://getform.io/f/6f86acfd-e7f9-49a6-96bd-86aa9536c69c"method='POST' encType='multipart/form-data' className='w-full relative  rounded-lg  bg-gray-100 shadow-2xl shadow-gray-200  bg-opacity-50'>
      <h1 className='text-4xl font-bold text-center text-[#001be] pb-3'>Contact</h1>
      
      <div className='grid md:grid-cols-2 gap-4 py-2'>
        <div className='flex flex-col py-2'>
     
          <label className='uppercase text-sm py-2'>Name</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Phone</label>
         <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
        </div>

      </div>

      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Email</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Subject</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
      </div>
      
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Message</label>
        <textarea className='border-2 rounded-lg p-3 flex border-gray-300' name="message"  rows="10"></textarea>
      </div>
      <button className='w-full bg-cyan-600 text-gray-100 mt-4 p-4 rounded-lg'>
        Send Message
      </button>


    </form>)}


    </div>
  )
}

export default Contact
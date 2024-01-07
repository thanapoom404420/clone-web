import React,{useState} from 'react'
import img from '/public/images/desktop/image-hero.jpg'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'



function Nav() {
  return (
    
    <div className='overflow-hidden'>
        <img src={img} className='absolute top-0 left-0 object-cover w-full h-[970px] mx-auto'/>
        <div className='flex relative justify-between w-full h-[200px] items-center md:px-[130px] px-[40px]'>
            <h1 id='loop' className='font-bold text-white md:text-5xl text-4xl flex'>loopstudios</h1>
        <ul className='hidden lg:flex text-white font-bold text-xl'>
            <li className='p-5 scale-100 duration-150 hover:scale-110 hover:underline underline-offset-8'>About</li>
            <li className='p-5 scale-100 duration-150 hover:scale-110 hover:underline underline-offset-8'>Careers</li>
            <li className='p-5 scale-100 duration-150 hover:scale-110 hover:underline underline-offset-8'>Events</li>
            <li className='p-5 scale-100 duration-150 hover:scale-110 hover:underline underline-offset-8'>Product</li>
            <li className='p-5 scale-100 duration-150 hover:scale-110 hover:underline underline-offset-8'>Support</li>
        </ul>
        </div>
        <div className='relative  p-[150px] px-[37px] max-w-[450px] mx-auto sm:mx-0 flex md:w-[850px] sm:max-w-[900px] sm:px-[150px] right-[30px] md:px-[150px] lg:px-[130px] mt-[200px]'>
            <h1 className='uppercase p-[5px]  lg:py-7 lg:px-10 border-solid sm:border-4 border-2 text-white font-light text-6xl sm:text-7xl'>immersive experiences that deliver</h1>
        </div>
    </div>
   
  )
}

export default Nav
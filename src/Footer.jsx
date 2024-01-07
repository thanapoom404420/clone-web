import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='w-full h-full bg-black mt-[90px] relative'>
        <div className='text-white '>
            <h1 className='flex justify-center sm:px-[100px] sm:justify-start pt-[60px] pb-[40px] text-4xl font-bold'>loopstudios</h1>
            <div className='flex justify-center sm:px-[100px] sm:justify-start font-bold text-lg'>
                <ul className='items-center flex sm:flex-row sm:justify-start flex-col pb-10'>
                <li className='py-5 sm:px-5'>About</li>
                <li className='py-5 sm:px-5'>Careers</li>
                <li className='py-5 sm:px-5'>Events</li>
                <li className='py-5 sm:px-5'>Products</li>
                <li className='py-5 sm:px-5'>Support</li>
                </ul>
            </div>
            <div className='text-white sm:absolute sm:top-[60px] sm:right-[50px] flex text-3xl mt-[8px]  justify-center'>
                <i className='px-3'><FaFacebook /></i>
                <i className='px-3'><FaTwitter /></i>
                <i className='px-3'><FaYoutube /></i>
                <i className='px-3'><FaInstagram /></i>
                </div>
                <div className='flex sm:hidden sm:absolute sm:top-[130px] sm:right-[50px] justify-center mt-[30px] font-medium pb-[60px]'>
                    <p>© 2021 Loopstudios. All rights reserved.</p>
                </div>
        </div>
    </div>
  )
}

export default Footer
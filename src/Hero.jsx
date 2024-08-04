import React from 'react'
import heroimg from '/public/images/desktop/image-interactive.jpg'

function Hero() {
  return (
    <div className='w-full max-h-[70vh] overflow-hidden md:max-h-[100vh] sm:h-[100vh] mt-[150px] md:mt-[80px] '>
        <div className='lg:h-full lg:max-w-[1290px] lg:flex block lg:mx-auto lg:justify-center lg:items-center md:w-full md:text-center sm:text-center sm:w-full'>
            <img src={heroimg} className='lg:flex lg:h-[900px] lg:absolute lg:max-w-[1200px] md:w-full md:p-[100px] sm:w-full  p-[20px] lg:ml-[50px] xl:max-w-[1200px]'/>
            <div className='bg-white lg:max-w-[600px] lg:h-[450px] lg:absolute lg:p-[70px] xl:ml-[800px] lg:mt-[400px] lg:ml-[600px] p-[50px] text-center lg:text-left'>
            <h1 className='uppercase text-4xl tracking-wide md:max-w-[390px] md:mx-auto sm:max-w-[590px] sm:mx-auto'>the leader in interactive vr</h1>
            <p className='mt-[30px] tracking-wide md:md:max-w-[390px] md:mx-auto sm:mx-auto sm:md:max-w-[390px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias facere, hic vero nostrum officiis pariatur ullam iste odit necessitatibus in aliquid fuga dolorum sed iure. Ipsum ipsa distinctio fugit quis?</p>
            </div>
        </div>
    </div>
  )
}

export default Hero

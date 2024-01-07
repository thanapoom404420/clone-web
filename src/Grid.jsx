import React from 'react'
import grid1 from '/public/images/desktop/image-deep-earth.jpg'
import grid2 from '/public/images/desktop/image-night-arcade.jpg'
import grid3 from '/public/images/desktop/image-soccer-team.jpg'
import grid4 from '/public/images/desktop/image-grid.jpg'
import grid5 from '/public/images/desktop/image-from-above.jpg'
import grid6 from'/public/images/desktop/image-pocket-borealis.jpg'
import grid7 from'/public/images/desktop/image-curiosity.jpg'
import grid8 from'/public/images/desktop/image-fisheye.jpg'

function Grid() {
  return (
    <div className='w-full overflow-hidden h-full lg:mt-[0px] mt-[170px] sm:mt-[200px]'>
     <div className='max-w-[1290px] flex-col flex mx-auto px-[0px] sm:px-[80px]'>
      <div className='flex justify-between items-center relative'>
        <h1 className='uppercase text-4xl font-light flex justify-center mx-auto sm:mx-0 sm:justify-start'>Our Creations</h1>
        <button className='border-2 border-black xl:mr-[px] py-2 px-10 tracking-widest duration-200 sm:top-0 sm:static sm:right-0 absolute z-10 top-[124rem] right-[38%] max-w-[200px] hover:bg-black hover:text-white'>SEE ALL</button>
      </div>
      <div className='w-full p-5 sm:p-0 flex flex-col items-center mx-auto h-full sm:grid sm:grid-cols-4 sm:gap-[10px]'>
        <div className='mt-[20px] relative'>
        <img src={grid1} alt="" className='sm:w-full relative sm:h-full w-[500px] my-2 h-[200px] object-cover object-right-bottom'/>
        <h1 className='absolute w-[2px] sm:w-[10px] text-white left-10 sm:left-1 md:left-1 lg:left-[30px] font-light text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl bottom-10'>DEEP EARTH</h1>
        </div>
        <div className='mt-[20px] relative'>
        <img src={grid2} alt="" className='sm:w-full sm:h-full w-[500px] my-2 h-[200px] object-cover object-right-bottom'/>
        <h1 className='absolute w-[2px] sm:w-[10px] text-white left-10 sm:left-1 md:left-1 lg:left-[30px] font-light text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl bottom-10'>NIGHT ARCADE</h1>
        </div>
        <div className='mt-[20px] relative'>
        <img src={grid3} alt="" className='sm:w-full sm:h-full w-[500px] my-2 h-[200px] object-cover object-right-bottom'/>
        <h1 className='absolute w-[250px] lg:w-[200px] md:w-[150px] sm:w-[120px] text-white lg:left-[30px] left-10 sm:left-1 md:left-1 font-light text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl bottom-10'>SOCCER TEAM VR</h1>
        </div>
        <div className='mt-[20px] relative'>
        <img src={grid4} alt="" className='sm:w-full sm:h-full w-[500px] my-2 h-[200px] object-cover object-right-bottom'/>
        <h1 className='absolute w-[2px] sm:w-[10px] text-white left-10 sm:left-1 md:left-1 lg:left-[30px] font-light text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl bottom-10'>THE GRID</h1>
        </div>
        <div className='mt-[20px] relative'>
        <img src={grid5} alt="" className='sm:w-full sm:h-full w-[500px] my-2 h-[200px] object-cover object-right-bottom'/>
        <h1 className='absolute w-[250px] lg:w-[250px] md:w-[200px] sm:w-[120px] text-white lg:left-[30px] left-10 sm:left-1 md:left-1 font-light text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl bottom-10'>FROM UP ABOVE VR</h1>
        </div>
        <div className='mt-[20px] relative'>
        <img src={grid6} alt="" className='sm:w-full sm:h-full w-[500px] my-2 h-[200px] object-cover object-right-bottom'/>
        <h1 className='absolute w-[2px] sm:w-[10px] text-white left-10 sm:left-1 md:left-1 lg:left-[30px] font-light text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl bottom-10'>POCKET BOREALIS</h1>
        </div>
        <div className='mt-[20px] relative'>
        <img src={grid7} alt="" className='sm:w-full sm:h-full w-[500px] my-2 h-[200px] object-cover object-right-bottom'/>
        <h1 className='absolute w-[2px] sm:w-[10px] text-white left-10 sm:left-1 md:left-1 lg:left-[30px] font-light text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl bottom-10'>THE CURIOSITY</h1>
        </div>
        <div className='mt-[20px] relative'>
        <img src={grid8} alt="" className='sm:w-full sm:h-full w-[500px] my-2 h-[200px] object-cover object-right-bottom'/>
        <h1 className='absolute w-[250px] lg:w-[200px] md:w-[150px] sm:w-[90px] text-white lg:left-[30px] left-10 sm:left-1 md:left-1 font-light text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl bottom-10'>MAKE IT FISHEYE</h1>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Grid
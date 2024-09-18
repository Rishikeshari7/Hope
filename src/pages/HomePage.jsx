import React from 'react'
import homeimage from "../assets/homeimage.png"
import pic from "../assets/pic.png"
import Oval from "../assets/Oval.png"
import Rectangle from "../assets/Rectangle.png"

const HomePage = () => {
  return (
    <div className=' overflow-x-clip'>
      {/* section1 */}
      <div className='relative animate-bgPulse  bg-bluefive flex flex-col md:flex-row  py-20 gap-10 justify-around items-center'>
      {/* left */}
      <div className=' w-10/12 text-center md:text-left md:max-w-[35rem] space-y-5'>
      <h1 className='flex text-textbrown text-5xl font-[Rowdies]' >Join us in creating a better world—because every action counts.</h1>
      <p className='text-blueone'>Raise funds as an individual or NGO for causes that matter most. Empower donors to contribute with confidence, knowing their support is reaching genuine and impactful initiatives.</p>
      <button className='bg-bluefour text-white px-8 py-3 rounded-full font-medium '>Make A Donation</button>
      </div>
      {/* right */}
      <div className='relative inline-block md:flex md:mr-10'>
      <img className=' size-80 md:size-96 aspect-square z-20 top-7 right-7' src={pic} />
      <img className=' absolute top-7 md:top-0  right-7 z-30 size-64 md:size-[22rem] aspect-square rounded-full' src={homeimage} ></img>
      </div>
      <img className='absolute size-80 -right-52 md:size-[40rem] md:-right-80 -bottom-28 z-10' src={Rectangle} />
      <img className='absolute size-28 -left-16 top-5 hidden sm:block' src={Oval}></img>
      <div className='absolute inset-0'>
        <div className='absolute bg-[#BFE9FF] w-32 h-32 rounded-md opacity-50 top-10 animate-moveRight'></div>
        <div className='absolute bg-[#BFE9FF] w-28 h-28 rounded-md opacity-50 top-20 animate-moveRight' style={{ animationDelay: '1s' }}></div>
        <div className='absolute bg-[#BFE9FF] w-36 h-36 rounded-md opacity-50 top-40 animate-moveRight' style={{ animationDelay: '2s' }}></div>
        <div className='absolute bg-[#BFE9FF] w-24 h-24 rounded-md opacity-50 top-60 animate-moveRight' style={{ animationDelay: '3s' }}></div>
        <div className='absolute bg-[#BFE9FF] w-40 h-40 rounded-md opacity-50 top-80 animate-moveRight' style={{ animationDelay: '4s' }}></div>
        
      </div>
      </div>
    </div>
  )
}

export default HomePage

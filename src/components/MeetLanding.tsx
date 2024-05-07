import Image from 'next/image'
import React from 'react'


const MeetLanding = ({meetID}) => {
  return (
   <>
      <Image src="/image/trees.jpg" alt="Trees" className="brightness-110 bg-cover bg-right-bottom h-screen w-screen transform overflow-hidden"
      
      width={100}
      height={100}/>

<div className="grid grid-cols-2 gap-0 w-screen h-screen bottom-0 left-0 absolute">
 
  <div className="backdrop-blur-lg bg-auto bg-left-bottom h-screen mix-blend-overlay overflow-hidden transform transition-all">
    <p className="right-0 w-fit bottom-2/3 absolute z-50 text-white roboto-condensed-900 font-bold md:font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight">YOUR</p>
    <div className="right-0 top-1/3 absolute w-3/4">
      <p className="text-right pt-0 text-md text-gray-100 pe-2 ubuntu-500">MEET ID </p>
    </div>
  </div>
  
  <div>
    <p className="absolute bottom-2/3 w-fit font-bold lg:text-7xl md:font-medium md:text-6xl roboto-condensed-900 sm:text-5xl text-4xl mix-blend-multiply text-stone-600/75 tracking-tight xl:text-8xl z-40">MEET</p>
    <p className="absolute top-1/3 w-fit pt-0 text-md mix-blend-multiply text-stone-600/75 ubuntu-500">{meetID}</p>
  
</div>
    </div>
   </>
  )
}

export default MeetLanding

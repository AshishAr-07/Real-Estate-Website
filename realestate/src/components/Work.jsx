import React from 'react'
import Image from 'next/image'
import Container from './Container'

export default function Work() {
  return (
   <Container>
     {/* It work section */}
     <div className="pt-10 ">
      <div className="text-center text-gray-900  text-5xl ">
        <p ><b>How it Works</b></p>
      </div>
     
    </div>

    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 " >
      <div className="grid place-content-center p-4 ">
        <Image src="/house.png " alt='house' width={100} height={100} className="w-16 h-16 my-8 mx-auto"></Image>
        <p className="text-center text-xl mb-2">Evaluate Property</p>
        <p className="text-center text-sm">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
      </div>
      <div className="grid place-content-center p-4">
        <Image src="/briefcase.png " alt='breifcase' width={100} height={100} className="w-16 h-16 my-8 mx-auto"></Image>
        <p className="text-center text-xl mb-2">Meeting with Agents</p>
        <p className="text-center text-sm">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
      </div>
      <div className="grid place-content-center p-4">
        <Image src="/key.png " alt='key' width={100} height={100} className="w-16 h-16 my-8 mx-auto"></Image>
        <p className="text-center text-xl mb-2">Close the Deal</p>
        <p className="text-center text-sm">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
      </div>
    </div>
    {/* end */}
   </Container>
  )
}

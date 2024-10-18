'use client'
import Image from 'next/image'
import React, { useState } from 'react'


export default function Slider() {
    const img1="/bnr1.webp"
     const img2="/bnr2.webp"
     const imgData=[img1,img2]
     const[slide,setSlide] =useState(0);

    const handleplus = () =>{
setSlide(slide === imgData.length -1? 0 : slide+1  )
    }
    const handleminus = () =>{
        setSlide(slide ===  0 ? imgData.length-1 : slide-1  )
            }


  return (
    <div className='w-full h-[80vh] border-2 relative '>

<Image 
        layout='fill'
        objectFit='cover' src={imgData[slide]}/>
        <div className=' w-full space-x-6 text-2xl flex justify-center items-center absolute  bottom-2'>
            <button onClick={handleminus} className='px-2 bg-white'>-</button>
            <button onClick={handleplus} className='px-2 bg-white'>+</button>
        </div>

    </div>
  )
}

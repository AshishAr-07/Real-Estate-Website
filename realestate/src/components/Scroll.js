'use client'
import React,{useState,useEffect} from 'react'
import { IoIosArrowUp } from "react-icons/io";

export default function Scroll() {

    const [isVisible,setIsVisible]=useState(false)

    useEffect(()=>{
        const toogleVisibility =()=>{
if (window.pageYOffset > 300) {
    setIsVisible(true)
} else {
    setIsVisible(false)
}
        }
        window.addEventListener("scroll",toogleVisibility)

return () => window.removeEventListener("scroll",toogleVisibility)

    },[])
    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }


  return (
   <>
    {
        isVisible && (
            <button 
            onClick={scrollToTop} className="fixed bottom-6 right-8 shadow-[0_4px_14px_0_rgb(0,0,0,10%)]  px-3 py-3 bg-[#15803D]  rounded-[50%]  ">
             <IoIosArrowUp color='white' size={22}/>
           </button>
        )
    }</>
  )
}

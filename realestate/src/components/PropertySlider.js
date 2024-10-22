'use client'

import React, { useState, useEffect } from 'react'
import Container from './Container'
import Image from 'next/image'
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5"
import { GiShower } from "react-icons/gi"
import { TfiRulerAlt2 } from "react-icons/tfi"


const property = [
  {
    id: 1,
    src: "/2.jpg",
    add: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, India",
    price: "₹12000",
    cat: "Featured",
    for: "For Rent",
    room: "4",
    bath: "2",
    area: "1200"
  },
  {
    id: 2,
    src: "/2.jpg",
    add: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, India",
    price: "₹1300000",
    cat: "Featured",
    for: "For Sale",
    room: "4",
    bath: "2",
    area: "1200"
  },
  {
    id: 3,
    src: "/2.jpg",
    add: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, India",
    price: "₹14000",
    cat: "Featured",
    for: "For Rent",
    room: "4",
    bath: "2",
    area: "1200"
  },
  {
    id: 4,
    src: "/2.jpg",
    add: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, India",
    price: "₹14000",
    cat: "Featured",
    for: "For Rent",
    room: "4",
    bath: "2",
    area: "1200"
  },
  {
    id: 5,
    src: "/2.jpg",
    add: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, India",
    price: "₹14000",
    cat: "Featured",
    for: "For Rent",
    room: "4",
    bath: "2",
    area: "1200"
  },
  {
    id: 6,
    src: "/2.jpg",
    add: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, India",
    price: "₹14000",
    cat: "Featured",
    for: "For Rent",
    room: "4",
    bath: "2",
    area: "1200"
  },
  {
    id: 7,
    src: "/2.jpg",
    add: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, India",
    price: "₹14000",
    cat: "Featured",
    for: "For Rent",
    room: "4",
    bath: "2",
    area: "1200"
  },
  {
    id: 8,
    src: "/2.jpg",
    add: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, India",
    price: "₹14000",
    cat: "Featured",
    for: "For Rent",
    room: "4",
    bath: "2",
    area: "1200"
  },
  {
    id: 9,
    src: "/2.jpg",
    add: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, India",
    price: "₹14000",
    cat: "Featured",
    for: "For Rent",
    room: "4",
    bath: "2",
    area: "1200"
  }
]

export default function PropertySlider() {
  const [index, setIndex] = useState(0)
  const [cardsPerSlide, setCardsPerSlide] = useState(3)

  const totalSlides = Math.ceil(property.length / cardsPerSlide)

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides)
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2)
      } else {
        setCardsPerSlide(3)
      }
    }
    const interval =setInterval(() => {
        nextSlide()
    }, 4000);


    handleResize()
    window.addEventListener('resize', handleResize)
    return () =>{
         window.removeEventListener('resize', handleResize)
        clearInterval(interval)
        }
         



  }, [nextSlide])

 

  return (
    <>
      <div className="text-center text-gray-900 py-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Featured Properties</h1>
      </div>
      <Container className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex gap-4 min-w-full">
              {property.slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide).map((item) => (
                <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3 border-2 rounded-t-md border-gray-100 shadow-lg">
                  <div className="relative">
                    <Image src={item.src} alt={`img${item.id}`} width={500} height={500} className="rounded-t-md w-full" />
                    <div className="flex w-full text-white text-xs sm:text-sm absolute top-5 justify-between px-4">
                      <p className="bg-[#15803D] rounded px-2 sm:px-4 py-1">{item.cat}</p>
                      <p className="bg-[#15803D] rounded px-2 sm:px-4 py-1">{item.for}</p>
                    </div>
                  </div>
                  <p className="pt-4 px-3 sm:px-5 text-sm sm:text-base">{item.add}</p>
                  <div className="flex   justify-between px-3  pb-5 pt-2">
                    <p className="font-semibold text-lg sm:text-xl mb-2 sm:mb-0">{item.price}</p>
                    <div className="flex gap-2 sm:gap-4 items-center text-gray-500 text-sm">
                      <span className="flex items-center gap-1">
                        <IoBedOutline size={18} />
                        {item.room}
                      </span>
                      <span className="flex items-center gap-1">
                        <GiShower size={18} />
                        {item.bath}
                      </span>
                      <span className="flex items-center gap-1">
                        <TfiRulerAlt2 size={16} />
                        {item.area}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 shadow-[0_4px_14px_0_rgb(0,0,0,10%)]  px-4 py-4 bg-[#fff]  rounded-[50%] "
          aria-label="Previous slide"
        >
          <IoIosArrowBack/>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 shadow-[0_4px_14px_0_rgb(0,0,0,10%)]  px-4 py-4 bg-[#fff]  rounded-[50%] "
          aria-label="Next slide"
        >
          <IoIosArrowForward />
        </button>
      </Container>
    </>
  )
}
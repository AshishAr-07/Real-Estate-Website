"use client";
import Image from "next/image";
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
import React, { useEffect, useState, useCallback, useMemo } from "react";

const SlideContent = ({ slide }) => (
  <h1 className="hidden md:flex text-5xl  px-4 font-bold text-white mb-8 text-center">
    {slide === 0 ? (
      <>
        Uncompromising Excellence <br />
        in Real Estate Advisory.
      </>
    ) : (
      <>
        Exceptional Properties, Expert Guidance <br /> Your Path to
        Homeownership.
      </>
    )}
  </h1>
);

export default function Slider() {
  const imgData = useMemo(() => ["/bnr1.webp", "/bnr2.webp"], []);
  const [slide, setSlide] = useState(0);

  const handleplus = useCallback(() => {
    setSlide((slide) => (slide === imgData.length - 1 ? 0 : slide + 1));
  }, [imgData.length]);

  const handleminus = useCallback(() => {
    setSlide((slide) => (slide === 0 ? imgData.length - 1 : slide - 1));
  }, [imgData.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleplus();
    }, 2000);

    return () => clearInterval(interval);
  }, [handleplus, slide]);

  return (
    <div className="w-full h-[80vh] relative">
      <Image
        layout="fill"
        objectFit="cover"
        alt={`Slide ${slide}`}
        src={imgData[slide]}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-4xl font-bold text-white mb-8 text-center">
          <SlideContent slide={slide} />
        </div>
        <div className="space-x-6 absolute bottom-4 text-2xl">
        <button 
           onClick={handleminus} className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)]  px-3 py-3 bg-[#fff]  rounded-[50%] ">
            <IoIosArrowBack/>
          </button>
          <button 
           onClick={handleplus} className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)]  px-3 py-3 bg-[#fff]  rounded-[50%]  ">
            <IoIosArrowForward/>
          </button>
          
        </div>
      </div>
    </div>
  );
}

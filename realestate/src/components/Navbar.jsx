"use client"
import Image from 'next/image';
import React, { useState, useCallback } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { TbXboxX } from "react-icons/tb";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleClick = useCallback(() => {
        setIsMenuOpen(prev => !prev)
    }, [])

    return (
        <div className='w-full sticky top-0 left-0 right-0 z-50 bg-white '>
            <nav className='flex justify-between md:px-0 px-5 max-w-screen-lg mx-auto items-center py-2'>

                <Image src='/logo.png'
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain" />

                <div className='md:hidden'>
                    <button onClick={handleClick}>{isMenuOpen ? <TbXboxX size={22} /> : <GiHamburgerMenu size={22} />}</button>
                </div>
                <ul className='hidden md:flex space-x-5 text-md justify-center items-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Property</li>
                    <li>Contact</li>
                </ul>
            </nav>
            {isMenuOpen && (
                <ul className='md:hidden absolute w-full bg-white z-10 transition-all duration-300 ease-in-out py-3 mt-0 md:px-0 px-5 space-y-2 shadow-md'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Property</li>
                    <li>Contact</li>
                </ul>
            )}
        </div>
    )
}
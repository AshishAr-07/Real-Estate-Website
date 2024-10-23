import React from 'react'
import Container from './Container'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

export default function Breadcrumb({ page }) {
  return (
    <div className='relative w-full bg-gray-100'>
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent opacity-40" />

      <Container className='relative'>
        <div className='flex flex-col items-center justify-center min-h-[240px] py-16 space-y-4'>
          {/* Page Title */}
          <h1 className='text-4xl md:text-5xl font-bold tracking-tight'>
            {page}
          </h1>

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className='flex items-center justify-center'>
            <ol className='flex items-center space-x-2 text-base md:text-lg'>
              <li className='flex items-center'>
                <Link 
                  href="/" 
                  className='hover:underline underline-offset-4 transition-all duration-200'
                >
                  Home
                </Link>
              </li>
              <li className='flex items-center text-gray-400'>
                <IoIosArrowForward 
                  size={20} 
                  className="mx-2"
                  aria-hidden="true"
                />
              </li>
              <li className='font-medium' aria-current="page">
                {page}
              </li>
            </ol>
          </nav>

          {/* Optional Decorative Line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full" />
        </div>
      </Container>
    </div>
  )
}
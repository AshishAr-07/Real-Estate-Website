import React from 'react'
import Container from './Container'
import Image from 'next/image'

export default function About() {
    return (
        <Container>
            <div className="py-12 flex  bg-white">
                <div className='flex flex-col lg:flex-row justify-between gap-12'>
                    <div className='lg:w-1/2 space-y-6'>
                        <h1 className='text-5xl  text-gray-900  '><b>About Us</b></h1>
                        <p className="text-lg text-gray-800 ">
                            Welcome to <span>Company</span>, your trusted partner in all things real estate. Since 2024, we've been dedicated to helping our clients find their perfect properties and make informed real estate decisions.
                        </p>
                        <p className="text-lg text-gray-800 ">
                            Our mission is to provide exceptional real estate services with integrity, professionalism, and a personal touch. We strive to exceed our clients' expectations by delivering tailored solutions for all their real estate needs.
                        </p>
                        <div className="border-t border-gray-200 pt-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-[#15803D] rounded-full mr-3"></div>
                                    <span><strong>Experience:</strong> 5 years of industry expertise</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-[#15803D] rounded-full mr-3"></div>
                                    <span><strong>Local Expertise:</strong> In-depth knowledge of the area</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:w-1/2 flex items-center justify-center'>
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-md">
                            <Image 
                                src='/abs.webp' 
                                layout="fill"
                                objectFit="cover"
                                alt="Our Team"
                                className='rounded'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
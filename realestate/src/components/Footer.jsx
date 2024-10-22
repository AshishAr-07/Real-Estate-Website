import React from 'react'
import Container from './Container'
import Image from 'next/image'

export default function Footer() {
    return (
       <div className='w-full bg-gray-100'>
 <Container>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-4 py-6'>
                <div className='md:col-span-2 flex flex-col'>
                    <Image src='/logo.png'
                        alt='logo'
                        width={256}
                        height={256}
                        className="w-16 h-16 object-contain" />
                    <p>All your property needs at one place.</p>
                </div>
                <div className='flex flex-col space-y-2'>
                    <h1 className='text-2xl pb-2'>Quick Links</h1>
                    <p>Home</p>
                    <p>About</p>
                    <p>Property</p>
                    <p>Contact</p>
                </div>
                <div className='flex flex-col space-y-2'>
                    <h1 className='text-2xl pb-2'>Contact Details</h1>
                    <p>Wz-186 floor-2 Dwarka,<br/>New Delhi-110077</p>
                    <p>realestate@gmail.com</p>
                   
                </div>

            </div>

        </Container>
        <div className='max-w-screen-xl mx-auto text-center py-2 border-t border-t-gray-300 '>© Real Estate 2024 | All Rights Reserved.</div>
       </div>
    )
}

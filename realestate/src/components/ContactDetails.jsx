import React from 'react'
import Container from './Container'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const details = [
    {
        icon: FaPhoneAlt,
        head: "Phone",
        content: "+91-0087450001",
        ariaLabel: "Contact phone number"
    },
    {
        icon: IoMdMail,
        head: "Mail",
        content: "dummy@gmail.com",
        ariaLabel: "Contact email address"
    },
    {
        icon: IoLocationSharp,
        head: "Address",
        content: "wz-856 dwarka nagri, New Dwarka New Delhi-110077",
        ariaLabel: "Office address"
    }
]

export default function ContactDetails() {
    return (
        <section className="w-full py-16 bg-gradient-to-b from-transparent to-gray-50">
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                    {details.map((item, index) => (
                        <div
                            key={index}
                            className='group relative flex flex-col gap-4 justify-center items-center p-8 rounded-lg border 
                                    '
                            aria-labelledby={`contact-heading-${index}`}
                        >
                            <div className='relative'>
                                <div className='absolute -inset-1 rounded-full opacity-70 group-hover:opacity-100 blur 
                                              transition-opacity duration-300 bg-gradient-to-r from-gray-100 to-gray-200' />
                                <div className='relative flex items-center justify-center w-16 h-16 rounded-full 
                                              bg-white shadow-sm group-hover:shadow transition-shadow duration-300'>
                                    <item.icon 
                                        size={28} 
                                        className="transition-transform duration-300 group-hover:scale-110"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>

                            <h2 
                                id={`contact-heading-${index}`}
                                className='text-2xl font-semibold tracking-tight'
                            >
                                {item.head}
                            </h2>

                            <p className='text-center text-gray-600 leading-relaxed'>
                                {item.content}
                            </p>

                            <div className='absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gray-100 to-gray-200 
                                          transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 
                                          rounded-b-lg'
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
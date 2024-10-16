import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { IoBedOutline } from "react-icons/io5";
import { GiShower } from "react-icons/gi";
import { TfiRulerAlt2 } from "react-icons/tfi";


const property = [{
    src: "/2.jpg",
    add: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, India",
    price: "₹12000",
    cat: "Featured",
    for: "For Rent",
    room:"4",
    bath:"2",
    area:"1200"
},
{
    src: "/2.jpg",
    add: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, India",
    price: "₹1300000",
    cat: "Featured",
    for: "For Sale",
    room:"4",
    bath:"2",
    area:"1200"
},
{
    src: "/2.jpg",
    add: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, India",
    price: "₹14000",
    cat: "Featured",
    for: "For Rent",
    room:"4",
    bath:"2",
    area:"1200"
}]

export default function Propety() {
    return (
        <Container>
            <div className="text-center text-gray-900  py-10 ">
                <p className=' text-5xl' ><b>Featured Properties</b></p>
                <p className='py-5'>Buy,sell and rent properties without any agent or commissions.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-5'>

                {property.map((items, index) => (
                    <div key={index} className='border-2 rounded-t-md relative  border-gray-100  shadow-lg'>
                        <Image src={items.src} alt='' width={500} height={500} className='rounded-t-md' ></Image>
                        <p className=" pt-4  px-5 " >{items.add}</p>
                        <div className='flex justify-between px-5 pb-5 pt-2'> <p >{items.price}</p>
                            <div className='flex gap-4 item text-gray-500'>
                                <span className='flex items-center gap-1'><IoBedOutline size={22} />{items.room}</span>
                            <span className='flex items-center gap-1'><GiShower size={22} />{items.bath}</span> 
                            <span className='flex items-center '><TfiRulerAlt2 size={20} />{items.area}</span></div>
                        </div>
                        <div className='flex w-full text-white text-sm absolute top-5 justify-between px-4'>
                            <p className='bg-[#15803D] rounded px-4 py-1'>{items.cat}</p>
                            <p className='bg-[#15803D] rounded px-4 py-1'>{items.for}</p>
                        </div>

                    </div>
                ))}


            </div>

        </Container>
    )
}

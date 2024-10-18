import React from 'react'
import Container from './Container'
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiShakingHands } from "react-icons/gi";
import { TbHomeSearch } from "react-icons/tb";

const service = [
    {
        head: "Sell Your Home",
        txt: "Discover the home you've been looking for. Browse our available listings now!",
        icon: IoHomeOutline,

    },
    {
        head: "Buy a Home",
        txt: "Discover the home you've been looking for. Browse our available listings now!",
        icon: GiShakingHands,
    },
    {
        head: "Rent a Home",
        txt: "Discover the home you've been looking for. Browse our available listings now!",
        icon: TbHomeSearch,
    }


]

export default function BuyRent() {
    return (
        <div className='relative w-full md:bg-[url("/bgimg.webp")] md:bg-fixed bg-no-repeat bg-cover my-20  py-16'>
            <div className='md:absolute md:inset-0 md:bg-black opacity-10'></div>
            <Container>
                <h1 className='text-5xl  text-center text-gray-900  pb-16'><b>What Are You Looking For ?</b></h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                    {
                        service.map((items, index) => (
                            <div key={index} className='flex mx-4 border z-10 md:bg-white rounded-xl p-8 flex-col gap-3 justify-center items-center shadow-lg'>
                                <span className='p-4 rounded-[50%] bg-[#15803D] '><items.icon color='white' size={40} /></span>
                                <p className='text-xl pt-4 '><b>{items.head}</b></p>
                                <p className='text-center'>{items.txt}</p>
                                <p className='flex items-center text-md justify-center pt-2 cursor-pointer'>Contact us<IoIosArrowRoundForward size={22} /></p>
                            </div>

                        ))

                    }

                </div>
            </Container>
        </div>
    )
}

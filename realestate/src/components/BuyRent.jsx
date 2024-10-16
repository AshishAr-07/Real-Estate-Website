import React from 'react'
import Container from './Container'
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";



export default function BuyRent() {
    return (
        <div className='w-full'>
            <Container>
                <h1 className='text-5xl text-center text-gray-900  py-10'><b>What Are You Looking For ?</b></h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                    <div className='flex border-2 p-5 flex-col gap-3 justify-center items-center'>
                    <span className='p-4 rounded-[50%] bg-[#15803D]'><IoHomeOutline color='white' size={45}/></span>
                    <p className='text-xl'><b>Sell Your Home</b></p>
                    <p className='text-center'> Sell your properties without any agent or commissions.</p>
                    <p className='flex items-center text-md justify-center'>Contact us<IoIosArrowRoundForward size={22}/></p>
                    </div>

                </div>
            </Container>
        </div>
    )
}

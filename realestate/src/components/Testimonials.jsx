import React from 'react'
import Container from './Container'
import { CgProfile } from "react-icons/cg";
import { RiDoubleQuotesL } from "react-icons/ri";

const test = [
    {
        para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius",
        name: "Rohit Kumar",
        icon:RiDoubleQuotesL,
    },
    {
        para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius",
        name: "Rohit Kumar",
    },
    {
        para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius",
        name: "Rohit Kumar",
    }
]

export default function Testimonials() {
    return (
        <div className='w-full bg-gray-100 py-12'>
            <Container>
            <h1 className='text-5xl text-center text-gray-900  py-10'><b>What Client Says ?</b></h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                {test.map((items, index) => (
                    <div key={index} className='relative bg-white shadow-md pt-12'>
                        <div className=' flex flex-col gap-2   px-5 py-5 items-center'>
                            <p className='text-sm'>{items.para}</p>
                            <span><CgProfile size={50} /></span>
                            <p>{items.name}</p>
                            <span className='absolute left-5 top-3'><RiDoubleQuotesL size={50} /></span>
                        </div>
                    </div>



                ))}
            </div>

        </Container>
        </div>
    )
}

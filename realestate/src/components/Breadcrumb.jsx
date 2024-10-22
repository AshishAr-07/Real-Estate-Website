import React from 'react'
import Container from './Container'
import { IoIosArrowForward  } from "react-icons/io";

export default function Breadcrumb(props) {
  return (
    <div className='w-full bg-gray-100  py-24'>
<Container className='space-y-2'>
  <div className='w-full text-center text-5xl'>{props.page}</div>
  <div className='w-full flex items-center justify-center text-3xl'>
<p>Home</p>
<IoIosArrowForward size={25}/>
<p>{props.page}</p>

  </div>
</Container>
    </div>
  )
}

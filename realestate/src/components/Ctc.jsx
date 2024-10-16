import React from 'react'
import Container from './Container'
import Button from './Button'

export default function Ctc() {
  return (
    <Container>
         <div className=" py-10 md:my-20 md:py-20">
          <div className="text-center text-gray-900 font-bold  md:flex md:justify-center md:items-center  md:text-5xl text-4xl">
            <p >Have Questions ?</p> <p>Get in Touch!</p>
          </div>
          <div className="text-center pt-3  ">
            <p >A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
          </div>
          <div className="text-center pt-3 ">  <Button>Contact Us</Button></div>
        </div>
        {/* end */}
    </Container>
  )
}

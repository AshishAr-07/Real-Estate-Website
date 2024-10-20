
import About from '@/components/About'
import Blog from '@/components/Blog'
import BuyRent from '@/components/BuyRent'
import Ctc from '@/components/Ctc'
import Navbar from '@/components/Navbar'
import PropetySlider from '@/components/PropertySlider'
import Propety from '@/components/Propety'
import Scroll from '@/components/Scroll'
import Slider from '@/components/Slider'
import Testimonials from '@/components/Testimonials'
import Work from '@/components/Work'
import React from 'react'

export default function page() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <About/>
    <Propety/>
    <Work/>
    <BuyRent/>
    <PropetySlider/>
    <Ctc/>
    <Testimonials/>
   <Blog/>
   <Scroll/>
    </>
  )
}

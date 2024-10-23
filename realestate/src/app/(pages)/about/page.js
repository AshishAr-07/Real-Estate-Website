import AboutSec from '@/components/AboutSec'
import Breadcrumb from '@/components/Breadcrumb'
import Spacer from '@/components/Spacer'
import Testimonials from '@/components/Testimonials'
import Work from '@/components/Work'
import React from 'react'

export default function page() {
  return (
    <>
    <Breadcrumb page = "About" />
    <AboutSec/>
    <Work/>
    <Testimonials className="bg-white"/>
    <Spacer/>
    </>
  )
}

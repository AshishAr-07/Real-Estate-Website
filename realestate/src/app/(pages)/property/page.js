import Breadcrumb from '@/components/Breadcrumb'
import Propety from '@/components/Propety'
import Spacer from '@/components/Spacer'
import React from 'react'

export default function page() {
  return (
    <>
    <Breadcrumb page= "Property" />
    <Propety/>
    <Spacer/>
    </>
  )
}

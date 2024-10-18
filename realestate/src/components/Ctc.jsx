import React from 'react'
import Container from './Container'
import Button from './Button'

export default function Ctc() {
  return (
    <div className='w-full py-20 '>
      <Container>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-5xl  text-center text-gray-900 "><b>Find Your Dream Home Today</b></h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover a wide range of properties cutomized to your needs. From apartments to luxurious houses, we have the perfect home waiting for you.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button >
              Start Your Home Search
            </Button>
          </div>
        </div>
      </div>
    </Container>
    </div>
  )
}

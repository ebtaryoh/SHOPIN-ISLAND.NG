import React from 'react'
import { Button, Image } from 'react-bootstrap'
import Hero from "../../src/Images/Hero_section.png"
const HeroSection = () => {
  return (
    <div className='hero-bg text-center'>
    <Image className='w-100' src={Hero}/>
   <div className='text-center hero-top '>
   <h1 className='text-white  fw-bold text-hero '>FANCY AND LUXURIOUS </h1>
   <h1 className='text-white  fw-bold text-hero '>CHAIRS</h1>
    <p className='text-white fs-4'>So comfortable and soft</p>
    {/* <Button className='btn-buy fw-bold '>Buy Now</Button> */}
   </div>
    </div>
  )
}

export default HeroSection
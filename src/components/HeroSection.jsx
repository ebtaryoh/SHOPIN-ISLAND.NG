import React from 'react'
import { Button, Image } from 'react-bootstrap'
import Hero from "../../src/Images/Hero_section.png"
const HeroSection = () => {
  return (
    <div>
    <Image className='w-100' src={Hero}/>
   <div className='text-center '>
   <h1 className=''>WOODEN LEIBAL PLAIN SOFA</h1>
    <p>So comfortable and soft</p>
    <Button className='btn-buy'>Buy Now</Button>
   </div>
    </div>
  )
}

export default HeroSection
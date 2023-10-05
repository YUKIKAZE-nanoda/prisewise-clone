import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const heroImage=[
    {imgUrl:'/assets/images/hero-1.svg',alt:"smartwatch"},
    {imgUrl:'/assets/images/hero-2.svg',alt:"bag"},
    {imgUrl:'/assets/images/hero-3.svg',alt:"lamp"},
    {imgUrl:'/assets/images/hero-4.svg',alt:"air fryer"},
    {imgUrl:'/assets/images/hero-5.svg',alt:"chair"},
    
]
const HeroCarousel = () => {
  return (
    <Carousel>
       {heroImage.map((image)=>(
        <Image/ >
       ))}
    </Carousel>
  )
}

export default HeroCarousel
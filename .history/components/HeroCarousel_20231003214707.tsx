import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const heroImages = [
    { imgUrl: '/assets/images/hero-1.svg', alt: "smartwatch" },
    { imgUrl: '/assets/images/hero-2.svg', alt: "bag" },
    { imgUrl: '/assets/images/hero-3.svg', alt: "lamp" },
    { imgUrl: '/assets/images/hero-4.svg', alt: "air fryer" },
    { imgUrl: '/assets/images/hero-5.svg', alt: "chair" },

]
const HeroCarousel = () => {
    return (
        <div>
            <Carousel showThumbs={false}
            autoPlay
            infiniteLoop
            interval={}
            >
                {heroImages.map((image) => (
                    <Image
                        src={image.imageUrl}
                        alt={image.alt}
                        width={484}
                        height={484}
                        className='object-contain'
                        key={image.alt}
                    />
                ))}
            </Carousel>
        </div>
    )
}

export default HeroCarousel
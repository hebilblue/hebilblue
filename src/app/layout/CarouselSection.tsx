import React from 'react'
import { Carousel } from '../component'
const CarouselSection = ({ carouselPlacement, data, children, className }: { carouselPlacement: string, data: React.ReactNode[], children: React.ReactNode, className?: string }) => {
    return (
        <div className={`bg-white items-center flex flex-col-reverse md:flex-row py-8 ${className}`}>
            {carouselPlacement === "left" &&
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
                    <Carousel slides={data} />
                </div>
            }
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-[12px] h-full p-4 md:p-0">
                {children}
            </div>
            {carouselPlacement === "right" &&
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
                    <Carousel slides={data} />
                </div>
            }
        </div>
    )
}

export default CarouselSection

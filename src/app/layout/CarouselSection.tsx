import React from 'react'
import { Carousel } from '../component'
const CarouselSection = ({ carouselPlacement, data, children }: { carouselPlacement: string, data: React.ReactNode[], children: React.ReactNode }) => {
    return (
        <div className="bg-white min-h-[500px] md:h-[500px] items-center flex flex-col md:flex-row">
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

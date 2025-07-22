"use client"

import { useState } from "react"

interface CarouselProps {
  slides: React.ReactNode[]
}

export default function Carousel({ slides }: CarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = slides.length

  const goToPreviousSlide = () => {
    setActiveSlide(prev => prev === 0 ? totalSlides - 1 : prev - 1)
  }

  const goToNextSlide = () => {
    setActiveSlide(prev => prev === totalSlides - 1 ? 0 : prev + 1)
  }

  return (
    <div className="flex relative w-full">
        {slides.map((slide, index) => (
          <div key={index} className={`w-full ${activeSlide === index ? "block" : "hidden"}`}>
            {slide}
          </div>
        ))}
        <div className="flex flex-row absolute bottom-2 left-2 md:bottom-4 md:left-4">
          <button className="bg-[#242953] p-[5px] px-[8px] hover:bg-[#1a1f3a] transition-colors" onClick={goToPreviousSlide}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
            <path d="M17.51 3.8701L15.73 2.1001L5.84003 12.0001L15.74 21.9001L17.51 20.1301L9.38003 12.0001L17.51 3.8701Z" fill="white"/>
          </svg>
          </button>
          <button className="bg-[#242953] p-[5px] px-[8px] hover:bg-[#1a1f3a] transition-colors" onClick={goToNextSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
              <path d="M6.49 3.8701L8.27 2.1001L18.16 12.0001L8.26 21.9001L6.49 20.1301L14.62 12.0001L6.49 3.8701Z" fill="white"/>
            </svg>
          </button>
        </div>
    </div>
  )
} 
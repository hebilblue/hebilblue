import Image from 'next/image'
import React from 'react'
import logoPattern from "../assets/hebilblue-logo-pattern.png"
import { useInView } from '../hooks/useInView'

const HeroSection = ({ children, id, className }: { children: React.ReactNode, id?: string, className?: string }) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2, rootMargin: '-50px' })

  return (
    <div
      ref={ref}
      className={`bg-white relative justify-between items-center flex flex-row py-8 md:py-0 md:min-h-[300px]`}
      id={id}
    >
      <Image
        src={logoPattern}
        alt="Logo"
        className={`w-[200px] md:w-[528px] opacity-50 md:opacity-100 hidden md:block fade-in-on-scroll ${isInView ? 'in-view' : ''}`}
      />
      <Image
        src={logoPattern}
        alt="Logo"
        className={`w-[200px] md:w-[528px] scale-x-[-1] opacity-50 hidden md:block md:opacity-100 fade-in-on-scroll-delayed ${isInView ? 'in-view' : ''}`}
        width={528}
        height={200}
      />
      <div className={`flex flex-col justify-center items-center md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full gap-3 md:px-4 ${className}`}>
        {children}
      </div>
  </div>
  )
}

export default HeroSection

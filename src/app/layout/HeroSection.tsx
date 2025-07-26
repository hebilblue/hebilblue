import Image from 'next/image'
import React from 'react'
import logoPattern from "../assets/hebilblue-logo-pattern.png"

const HeroSection = ({ children, id, className }: { children: React.ReactNode, id?: string, className?: string }) => {
  return (
    <div className={`bg-white relative justify-between items-center flex flex-row py-8 md:py-0 md:min-h-[300px]`} id={id}>
      <Image src={logoPattern} alt="Logo" className="w-[200px] md:w-[528px] opacity-50 md:opacity-100 hidden md:block" />
      <Image src={logoPattern} alt="Logo" className="w-[200px] md:w-[528px] scale-x-[-1] opacity-50 hidden md:block md:opacity-100" width={528} height={200} />
      <div className={`flex flex-col justify-center items-center md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full gap-3 md:px-4 ${className}`}>
        {children}
      </div>
  </div>
  )
}

export default HeroSection

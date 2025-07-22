import Image from 'next/image'
import React from 'react'
import logoPattern from "../assets/hebilblue-logo-pattern.png"

const HeroSection = ({children, id}: {children: React.ReactNode, id?: string}) => {
  return (
  <div className="bg-white relative justify-between items-center flex flex-row min-h-[200px] md:min-h-[300px]" id={id}>
      <Image src={logoPattern} alt="Logo" className="w-[200px] md:w-[528px] opacity-50 md:opacity-100 hidden md:block" />
      <Image src={logoPattern} alt="Logo" className="w-[200px] md:w-[528px] scale-x-[-1] opacity-50 md:opacity-100" width={528} height={200} />
      <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full gap-3 px-4 md:px-0">
        {children}
      </div>
  </div>
  )
}

export default HeroSection

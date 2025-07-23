"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/svg/facebook.svg";
import folder from "../assets/svg/folder.svg";
import instagram from "../assets/svg/instagram.svg";
import pin from "../assets/svg/location-pin.svg";
import message from "../assets/svg/message.svg";
import { typography } from "../styles/typography";

const pages = [
  "Hebilblue", "proje", "vaziyet planı", "olanaklar", "galeri", "hotel", "iletisim"
]

const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id)
  element?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page: string) => {
    scrolltoHash(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-gradient-to-b from-[#08162E] from-8% via-[#08162eb2] to-[#08162E]/0  border-b-1 border-b-[#C9B18B] absolute top-0 z-10 w-full" style={{ WebkitTransform: 'translateZ(0)' }}>
        <Image src={logo} alt="HebilBlue" width={162} height={108} className="md:w-[162px] md:h-[108px] w-[68px] h-[48px]" />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-end flex-col gap-[12px]">
          <div className="flex flex-row items-center gap-[12px]">
            <Link href="/" className="flex flex-row items-center gap-[5px] h-[24px] px-[6px] bg-[#C9B18B] rounded-[8px] ">
              <Image src={message} alt="message" width={15} height={17} />
              <p className={`${typography.body.small} text-[#08162E] uppercase`}>Sizi arayalım</p>
            </Link>
            <Link target="_blank" href="https://www.google.com/maps/place/Türkbükü,+Hebil+Cd.+No:156+D:000+00,+48483+Bodrum%2FMuğla/@37.1470123,27.3659852,17z/data=!4m9!1m2!2m1!1sCopyright+©+2025+hebilblue+All+rights+reserved.+Hebil+Blue+Satış+Ofisi+Türkbükü+Mah.+Hebil+Cad.+156+Sk.+Bodrum%2FMUĞLA+%2B90+252+000+00+00!3m5!1s0x14be6ff981187665:0x19b243e1d7730293!8m2!3d37.1470081!4d27.3708561!15sCo0BQ29weXJpZ2h0IMKpIDIwMjUgaGViaWxibHVlIEFsbCByaWdodHMgcmVzZXJ2ZWQuIEhlYmlsIEJsdWUgU2F0xLHFnyBPZmlzaSBUw7xya2LDvGvDvCBNYWguIEhlYmlsIENhZC4gMTU2IFNrLiBCb2RydW0vTVXEnkxBICs5MCAyNTIgMDAwIDAwIDAwkgEQY29tcG91bmRfc2VjdGlvbuABAA?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D" className="flex flex-row items-center gap-[5px] h-[24px] px-[6px] bg-[#08162E] rounded-[8px]">
              <Image src={pin} alt="pin" width={11} height={16} />
              <p className={`${typography.body.small} text-white uppercase`}>Yol Tarİfİ Al</p>
            </Link>
            <Link href="./katalog.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-[5px] h-[24px] px-[6px] bg-[#08162E] rounded-[8px]">
              <Image src={folder} alt="folder" width={17} height={17} />
              <p className={`${typography.body.small} text-white uppercase`}>proje kataloğu</p>
            </Link>
            <Link href="https://www.facebook.com/share/1712nP8mXi/?mibextid=wwXIfr">
              <Image src={facebook} alt="facebook" width={36} height={36} className="text-white" />
            </Link>
            <Link href="https://www.instagram.com/hebilblue?igsh=OGl3ZzNwd3dsbHdm" >
              <Image src={instagram} alt="instagram" width={36} height={36} className="text-white" />
            </Link>
          </div>
          <div className="flex flex-row items-center">
            {pages.map((page, index) => (
              <div key={index} className="flex flex-row items-center cursor-pointer">
                <a onClick={() => scrolltoHash(page)} className={`${typography.body.small} text-white uppercase hover:font-medium`}>{page}</a>
                {index !== pages.length - 1 && <div className="w-[1px] h-[19px] bg-[#C9B18B] mx-[12px]" />}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-20"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ WebkitTransform: 'translateZ(0)' }}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} style={{ WebkitTransform: 'translateZ(0)' }}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ WebkitTransform: 'translateZ(0)' }}></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${isMenuOpen ? 'opacity-40' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu} style={{ WebkitTransform: 'translateZ(0)' }}></div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-full sm:w-80 bg-[#08162E] z-20 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ WebkitTransform: 'translateZ(0)' }}>
        {/* Close button - Absolute positioned outside main container */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white hover:text-[#C9B18B] transition-colors p-2 z-30"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col h-full p-4 sm:p-6 pt-16" style={{ WebkitOverflowScrolling: 'touch' }}>
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-4 sm:space-y-6 flex-1 overflow-y-auto">
            {pages.map((page, index) => (
              <div key={index} className="border-b border-[#C9B18B]/30 pb-3 sm:pb-4">
                <a 
                  onClick={() => handleNavClick(page)} 
                  className={`${typography.body.regular} text-white uppercase hover:text-[#C9B18B] transition-colors cursor-pointer block py-2`}
                >
                  {page}
                </a>
              </div>
            ))}
          </div>

          {/* Mobile Action Buttons */}
          <div className="mt-auto space-y-3 sm:space-y-4 pt-4">
            <Link href="/" className="flex flex-row items-center justify-center gap-[6px] sm:gap-[8px] h-[36px] sm:h-[40px] px-[10px] sm:px-[12px] bg-[#C9B18B] rounded-[8px] w-full">
              <Image src={message} alt="message" width={15} height={17} />
              <p className={`${typography.body.small} text-[#08162E] uppercase`}>Sizi arayalım</p>
            </Link>
            <Link target="_blank" href="https://www.google.com/maps/place/Türkbükü,+Hebil+Cd.+No:156+D:000+00,+48483+Bodrum%2FMuğla/@37.1470123,27.3659852,17z/data=!4m9!1m2!2m1!1sCopyright+©+2025+hebilblue+All+rights+reserved.+Hebil+Blue+Satış+Ofisi+Türkbükü+Mah.+Hebil+Cad.+156+Sk.+Bodrum%2FMUĞLA+%2B90+252+000+00+00!3m5!1s0x14be6ff981187665:0x19b243e1d7730293!8m2!3d37.1470081!4d27.3708561!15sCo0BQ29weXJpZ2h0IMKpIDIwMjUgaGViaWxibHVlIEFsbCByaWdodHMgcmVzZXJ2ZWQuIEhlYmlsIEJsdWUgU2F0xLHFnyBPZmlzaSBUw7xya2LDvGvDvCBNYWguIEhlYmlsIENhZC4gMTU2IFNrLiBCb2RydW0vTVXEnkxBICs5MCAyNTIgMDAwIDAwIDAwkgEQY29tcG91bmRfc2VjdGlvbuABAA?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D" className="flex flex-row items-center justify-center gap-[6px] sm:gap-[8px] h-[36px] sm:h-[40px] px-[10px] sm:px-[12px] bg-white rounded-[8px] w-full">
              <Image src={pin} alt="pin" width={11} height={16} />
              <p className={`${typography.body.small} text-[#08162E] uppercase`}>Yol Tarİfİ Al</p>
            </Link>
            <Link href="./katalog.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-[6px] sm:gap-[8px] h-[36px] sm:h-[40px] px-[10px] sm:px-[12px] bg-white rounded-[8px] w-full">
              <Image src={folder} alt="folder" width={17} height={17} />
              <p className={`${typography.body.small} text-[#08162E] uppercase`}>proje kataloğu</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

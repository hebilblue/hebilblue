"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import logo from "../assets/logo.webp";
import facebook from "../assets/svg/facebook.svg";
import folder from "../assets/svg/folder.svg";
import instagram from "../assets/svg/instagram.svg";
import pin from "../assets/svg/location-pin.svg";
import message from "../assets/svg/message.svg";

import { typography } from "../styles/typography";
import LanguageSwitcher from "./LanguageSwitcher";

const googleLink = "https://www.google.com/maps/place/Türkbükü,+Hebil+Cd.+No:156+D:000+00,+48483+Bodrum%2FMuğla/@37.1470123,27.3659852,17z/data=!4m9!1m2!2m1!1sCopyright+©+2025+hebilblue+All+rights+reserved.+Hebil+Blue+Satış+Ofisi+Türkbükü+Mah.+Hebil+Cad.+156+Sk.+Bodrum%2FMUĞLA+%2B90+252+000+00+00!3m5!1s0x14be6ff981187665:0x19b243e1d7730293!8m2!3d37.1470081!4d27.3708561!15sCo0BQ29weXJpZ2h0IMKpIDIwMjUgaGViaWxibHVlIEFsbCByaWdodHMgcmVzZXJ2ZWQuIEhlYmlsIEJsdWUgU2F0xLHFnyBPZmlzaSBUw7xya2LDvGvDvCBNYWguIEhlYmlsIEJhZC4gMTU2IFNrLiBCb2RydW0vTVXEnkxBICs5MCAyNTIgMDAwIDAwIDAwkgEQY29tcG91bmRfc2VjdGlvbuABAA?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D"

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Check if we're on the KVKK page
  const isOnKVKKPage = pathname?.includes('/kvkk');



  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsAtTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pages = [
    { key: "hebilblue", label: t('header.navigation.hebilblue') },
    { key: "proje", label: t('header.navigation.project') },
    // { key: "vaziyet-plani", label: t('header.navigation.sitePlan') },
    { key: "olanaklar", label: t('header.navigation.amenities') },
    { key: "galeri", label: t('header.navigation.gallery') },
    // { key: "hotel", label: t('header.navigation.hotel') },
    { key: "iletisim", label: t('header.navigation.contact') }
  ];

  const getNavigationLink = (pageKey: string) => {
    if (isOnKVKKPage) {
      // If on KVKK page, navigate to home page with hash
      const currentLang = pathname?.split('/')[1] || 'tr';
      return `/${currentLang}#${pageKey}`;
    } else {
      // If on home page, use hash link
      return `#${pageKey}`;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky-header flex items-center justify-between p-2 md:p-4 border-b-1 border-b-[#C9B18B] w-full transition-all duration-300 ${isAtTop ? 'at-top' : ''}`}
      >
        <Link href="/">
          <Image src={logo} alt="HebilBlue" width={162} height={108} className="md:w-[162px] md:h-[108px] w-[68px] h-[48px] cursor-pointer hover:opacity-80 transition-opacity duration-200" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-end flex-col gap-[12px]">
          <div className="flex flex-row items-center gap-[12px]">
            <Link
              href={getNavigationLink('iletisim')}
              className="flex flex-row items-center gap-[5px] h-[24px] p-3 bg-[#C9B18B] rounded-[8px] cursor-pointer"
            >
              <Image src={message} alt="message" width={15} height={"17"} />
              <p lang={i18n.language} className={`${typography.body.small} text-[#08162E] uppercase`}>{t('header.callUs')}</p>
            </Link>
            <Link
              target="_blank"
              href={googleLink}
              className="flex flex-row items-center gap-[5px] h-[24px] px-[6px] bg-[#08162E] rounded-[8px]"
            >
              <Image src={pin} alt="pin" width={11} height={16} />
              <p lang={i18n.language} className={`${typography.body.small} text-white uppercase`}>{t('header.getDirections')}</p>
            </Link>
            <Link href={i18n.language === "tr" ? "/katalog_tr.pdf" : i18n.language === "ru" ? "/katalog_en.pdf" : "/katalog_en.pdf"} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-[5px] h-[24px] px-[6px] bg-[#08162E] rounded-[8px]">
              <Image src={folder} alt="folder" width={17} height={17} />
              <p lang={i18n.language} className={`${typography.body.small} text-white uppercase`}>{t('header.projectCatalog')}</p>
            </Link>
            <Link target="_blank" href="https://www.facebook.com/share/1712nP8mXi/?mibextid=wwXIfr">
              <Image src={facebook} alt="facebook" width={36} height={36} className="text-white" />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/hebilblue?igsh=OGl3ZzNwd3dsbHdm" >
              <Image src={instagram} alt="instagram" width={36} height={36} className="text-white" />
            </Link>
            <LanguageSwitcher />
          </div>
          <div className="flex flex-row items-center">
            {pages.map((page, index) => (
              <div key={index} className="flex flex-row items-center cursor-pointer">
                <Link href={getNavigationLink(page.key)} lang={i18n.language} className={`${typography.body.small} text-white uppercase hover:font-medium`}>{page.label}</Link>
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
              <div key={index} className={`border-b border-[#C9B18B]/30 pb-3 sm:pb-4 ${index !== 0 ? 'pt-0' : 'pt-3'}`}>
                <Link
                  href={getNavigationLink(page.key)}
                  lang={i18n.language}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${typography.body.regular} text-white uppercase hover:text-[#C9B18B] transition-colors cursor-pointer block py-2`}
                >
                  {page.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Action Buttons */}
          <div className="mt-auto space-y-3 sm:space-y-4 pt-4">
            <Link href={getNavigationLink('iletisim')} onClick={() => setIsMenuOpen(false)} className="flex flex-row items-center justify-center gap-[6px] sm:gap-[8px] h-[36px] sm:h-[40px] px-[10px] sm:px-[12px] bg-[#C9B18B] rounded-[8px] w-full">
              <Image src={message} alt="message" width={15} height={17} />
              <p lang={i18n.language} className={`${typography.body.small} text-[#08162E] uppercase`}>{t('header.callUs')}</p>
            </Link>
            <Link target="_blank" href="https://www.google.com/maps/place/Türkbükü,+Hebil+Cd.+No:156+D:000+00,+48483+Bodrum%2FMuğla/@37.1470123,27.3659852,17z/data=!4m9!1m2!2m1!1sCopyright+©+2025+hebilblue+All+rights+reserved.+Hebil+Blue+Satış+Ofisi+Türkbükü+Mah.+Hebil+Cad.+156+Sk.+Bodrum%2FMUĞLA+%2B90+252+000+00+00!3m5!1s0x14be6ff981187665:0x19b243e1d7730293!8m2!3d37.1470081!4d27.3708561!15sCo0BQ29weXJpZ2h0IMKpIDIwMjUgaGViaWxibHVlIEFsbC byaWdodHMgcmVzZXJ2ZWQuIEhlYmlsIEJsdWUgU2F0xLHFnyBPZmlzaSBUw7xya2LDvGvDvCBNYWguIEhlYmlsIEJhZC4gMTU2IFNrLiBCb2RydW0vTVXEnkxBICs5MCAyNTIgMDAwIDAwIDAwkgEQY29tcG91bmRfc2VjdGlvbuABAA?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D" className="flex flex-row items-center justify-center gap-[6px] sm:gap-[8px] h-[36px] sm:h-[40px] px-[10px] sm:px-[12px] bg-white rounded-[8px] w-full">
              <Image src={pin} alt="pin" width={11} height={16} />
              <p lang={i18n.language} className={`${typography.body.small} text-[#08162E] uppercase`}>{t('header.getDirections')}</p>
            </Link>
            <Link href={i18n.language === "tr" ? "/katalog_tr.pdf" : i18n.language === "ru" ? "/katalog_ru.pdf" : "/katalog_en.pdf"} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-[6px] sm:gap-[8px] h-[36px] sm:h-[40px] px-[10px] sm:px-[12px] bg-white rounded-[8px] w-full">
              <Image src={folder} alt="folder" width={17} height={17} />
              <p lang={i18n.language} className={`${typography.body.small} text-[#08162E] uppercase`}>{t('header.projectCatalog')}</p>
            </Link>
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

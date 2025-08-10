"use client"
import Image from "next/image"
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import doga from "../assets/doga.webp"
import kusbakisi from "../assets/kusbakisi.webp"
import kusbakisi2 from "../assets/kusbakisi_2.webp"
import kusbakisi3 from "../assets/kusbakisi_3.webp"
import otelNew from "../assets/otel-new.jpeg"
import { PhotoGrid } from "../component"
import Carousel from "../component/Carousel"
import { MapComponent } from "../component/map"
import { CarouselSection, HeroSection } from "../layout/index"
import { textStyles } from "../styles/typography"
import { serviceItems, svgFiles } from "../utils"

import { useState } from "react"
import slider1_1 from "../assets/slider1_1.webp"
import slider1_2 from "../assets/slider1_2.webp"
import slider1_3 from "../assets/slider1_3.webp"
import slider1_4 from "../assets/slider1_4.webp"
import slider2_1 from "../assets/slider2_1.webp"
import slider2_2 from "../assets/slider2_2.webp"
import slider2_3 from "../assets/slider2_3.webp"
import slider2_4 from "../assets/slider2_4.webp"
import ContactForm from "../component/ContactForm/ContactForm"
import PhotoItem, { ItemType } from "../component/PhotoItem"
import StatItem from "../component/StatItem"

import hero_1 from "../assets/hero-slider/hero-slider-1.jpg"
import hero_2 from "../assets/hero-slider/hero-slider-2.jpg"
import hero_3 from "../assets/hero-slider/hero-slider-3.jpg"
import hero_4 from "../assets/hero-slider/hero-slider-4.jpg"
import hero_5 from "../assets/hero-slider/hero-slider-5.jpg"

import gallery_1 from "../assets/gallery/dis-mekan/1.png"
import gallery_10 from "../assets/gallery/dis-mekan/10.png"
import gallery_11 from "../assets/gallery/dis-mekan/11.png"
import gallery_2 from "../assets/gallery/dis-mekan/2.png"
import gallery_3 from "../assets/gallery/dis-mekan/3.png"
import gallery_4 from "../assets/gallery/dis-mekan/4.png"
import gallery_5 from "../assets/gallery/dis-mekan/5.png"
import gallery_6 from "../assets/gallery/dis-mekan/6.png"
import gallery_7 from "../assets/gallery/dis-mekan/7.png"
import gallery_8 from "../assets/gallery/dis-mekan/8.png"
import gallery_9 from "../assets/gallery/dis-mekan/9.jpg"
import gallery_12 from "../assets/gallery/ic-mekan/1.png"
import gallery_21 from "../assets/gallery/ic-mekan/10.jpg"
import gallery_22 from "../assets/gallery/ic-mekan/11.jpg"
import gallery_13 from "../assets/gallery/ic-mekan/2.jpg"
import gallery_14 from "../assets/gallery/ic-mekan/3.jpg"
import gallery_15 from "../assets/gallery/ic-mekan/4.jpg"
import gallery_16 from "../assets/gallery/ic-mekan/5.jpg"
import gallery_17 from "../assets/gallery/ic-mekan/6.jpg"
import gallery_18 from "../assets/gallery/ic-mekan/7.jpg"
import gallery_19 from "../assets/gallery/ic-mekan/8.jpg"
import gallery_20 from "../assets/gallery/ic-mekan/9.jpg"
import gallery_23 from "../assets/gallery/iskele/1.png"
import gallery_24 from "../assets/gallery/iskele/2.png"
import gallery_25 from "../assets/gallery/iskele/3.png"
import gallery_26 from "../assets/gallery/iskele/4.jpg"
import gallery_27 from "../assets/gallery/sosyal-alanlar/1.png"
import gallery_28 from "../assets/gallery/sosyal-alanlar/2.png"

export default function HomeClient({ params }: { params: { lang: string } }) {
  const { t, i18n } = useTranslation();

  // Set language from URL parameter
  useEffect(() => {
    if (params.lang && i18n.language !== params.lang) {
      i18n.changeLanguage(params.lang);
    }
  }, [params.lang, i18n]);

  const slider_images_1 = [
    <Image src={slider1_1} alt="Slider 1" key="slider1_1" className="w-full md:w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
    <Image src={slider1_2} alt="Slider 2" key="slider1_2" className="w-full md:w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
    <Image src={slider1_3} alt="Slider 3" key="slider1_3" className="w-full md:w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
    <Image src={slider1_4} alt="Slider 4" key="slider1_4" className="w-full md:w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
  ]

  const slider_images_2 = [
    <Image src={slider2_1} alt="Slider 1" key="slider2_1" className="w-full md:w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
    <Image src={slider2_2} alt="Slider 2" key="slider2_2" className="w-full md:w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
    <Image src={slider2_3} alt="Slider 3" key="slider2_3" className="w-full md:w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
    <Image src={slider2_4} alt="Slider 4" key="slider2_4" className="w-full md:w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
  ]

  // Hero carousel images
  const heroCarouselImages = [
    <Image
      src={hero_1}
      alt="Hero Image"
      key="hero-1"
      className="w-full h-[300px] md:h-[600px] object-cover transition-transform duration-700 ease-in-out hover:scale-110"
    />,
    <Image
      src={hero_2}
      alt="Hero Banner"
      key="hero-2"
      className="w-full h-[300px] md:h-[600px] object-cover transition-transform duration-700 ease-in-out hover:scale-110"
    />,
    <Image
      src={hero_3}
      alt="Bird's Eye View"
      key="hero-3"
      className="w-full h-[300px] md:h-[600px] object-cover transition-transform duration-700 ease-in-out hover:scale-110"
    />,
      <Image
        src={hero_4}
        alt="Bird's Eye View 2"
        key="hero-4"
        className="w-full h-[300px] md:h-[600px] object-cover transition-transform duration-700 ease-in-out hover:scale-110"
      />,
      <Image
        src={hero_5}
        alt="Bird's Eye View 2"
        key="hero-5"
        className="w-full h-[300px] md:h-[600px] object-cover transition-transform duration-700 ease-in-out hover:scale-110"
      />,
  ]

  // Example photo grid data with wide variant
  const photoGridImages = [
    { src: gallery_1, alt: "Hebil Blue Gallery_1", variant: 'normal' as const },
    { src: gallery_2, alt: "Hebil Blue Gallery_2", variant: 'normal' as const },
    { src: gallery_3, alt: "Hebil Blue Gallery_3", variant: 'normal' as const },
    { src: gallery_4, alt: "Hebil Blue Gallery_4", variant: 'normal' as const },
    { src: gallery_5, alt: "Hebil Blue Gallery_5", variant: 'normal' as const },
    { src: gallery_6, alt: "Hebil Blue Gallery_6", variant: 'normal' as const },
    { src: gallery_7, alt: "Hebil Blue Gallery_7", variant: 'normal' as const },
    { src: gallery_8, alt: "Hebil Blue Gallery_8", variant: 'normal' as const },
    { src: gallery_9, alt: "Hebil Blue Gallery_9", variant: 'normal' as const },
    { src: gallery_10, alt: "Hebil Blue Gallery_10", variant: 'normal' as const },
    { src: gallery_11, alt: "Hebil Blue Gallery_11", variant: 'normal' as const },
    { src: gallery_12, alt: "Hebil Blue Gallery_12", variant: 'normal' as const },
    { src: gallery_13, alt: "Hebil Blue Gallery_13", variant: 'normal' as const },
    { src: gallery_14, alt: "Hebil Blue Gallery_14", variant: 'normal' as const },
    { src: gallery_15, alt: "Hebil Blue Gallery_15", variant: 'normal' as const },
    { src: gallery_16, alt: "Hebil Blue Gallery_16", variant: 'normal' as const },
    { src: gallery_17, alt: "Hebil Blue Gallery_17", variant: 'normal' as const },
    { src: gallery_18, alt: "Hebil Blue Gallery_18", variant: 'normal' as const },
    { src: gallery_19, alt: "Hebil Blue Gallery_19", variant: 'normal' as const },
    { src: gallery_20, alt: "Hebil Blue Gallery_20", variant: 'normal' as const },
    { src: gallery_21, alt: "Hebil Blue Gallery_21", variant: 'normal' as const },
    { src: gallery_22, alt: "Hebil Blue Gallery_22", variant: 'normal' as const },
    { src: gallery_23, alt: "Hebil Blue Gallery_23", variant: 'normal' as const },
    { src: gallery_24, alt: "Hebil Blue Gallery_24", variant: 'normal' as const },
    { src: gallery_25, alt: "Hebil Blue Gallery_25", variant: 'normal' as const },
    { src: gallery_26, alt: "Hebil Blue Gallery_26", variant: 'normal' as const },
    { src: gallery_27, alt: "Hebil Blue Gallery_27", variant: 'normal' as const },
    { src: gallery_28, alt: "Hebil Blue Gallery_28", variant: 'normal' as const },
    { src: "https://www.youtube.com/embed/tKicQIvFElM", alt: "Hebil Blue Video_1", variant: 'wide' as const },
    { src: "https://www.youtube.com/embed/WV8Mgz7qC8U", alt: "Hebil Blue Video_2", variant: 'wide' as const },
  ];

  const locations = [
    { name: t('locations.turkbuku'), distance: 3 },
    { name: t('locations.gundogan'), distance: 5 },
    { name: t('locations.cennet_koyu'), distance: 8.4 },
    { name: t('locations.yalikavak'), distance: 8 },
    { name: t('locations.airport'), distance: 40 },
  ]

  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  const PhotoModal = ({ selectedItem }: { selectedItem: ItemType | null }) => {
    if (!selectedItem) return null;
    console.log('selectedItem photo modal', selectedItem);
    return (
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-[9999]"
        onClick={() => setSelectedItem(null)}
      >
        <button
          onClick={() => setSelectedItem(null)}
          className="cursor-pointer absolute top-2 right-2 z-10 text-[#C9B18B] bg-opacity-80 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-[40px]"
        >
          ×
        </button>
        <div
          className="relative w-[90vw] h-[90vh] max-w-[800px] max-h-[600px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full">
            <PhotoItem image={selectedItem} />
          </div>
        </div>
      </div>
    )
  }


  return (
    <>
      <PhotoModal selectedItem={selectedItem} />
      <div className="w-full bg-white" style={{ WebkitTransform: 'translateZ(0)' }}>
        <div className="w-full " id="proje" >
            <div className="overflow-hidden">
              <Carousel slides={heroCarouselImages} height="h-[300px] md:h-[600px]" />
            </div>
          <HeroSection>
            <h1 className={textStyles.heroTitle}>{t('hero.title')}</h1>
            <p className={textStyles.heroDescription}>{t('hero.description')}</p>
            {/* <p className={textStyles.heroDescriptionShort}>{t('hero.description_short')}</p> */}
          </HeroSection>
          <div className="overflow-hidden" id="hotel">
            <Image src={otelNew} alt="BANNER_HOTEL" className="w-full h-[300px] md:h-[600px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />
          </div>
          <HeroSection id="hebilblue">
            {/* <h1 className={textStyles.heroTitle}>{t('banner.title')}</h1> */}
            <p className={textStyles.heroDescription}>{t('banner.description')}</p>
          </HeroSection>
          <div className="px-4 md:px-[96px] bg-white">
            <CarouselSection
              carouselPlacement="right"
              data={slider_images_1}
              className="pt-0 pb-0"
            >
              <p className={textStyles.sectionTitle}>{t('verandalar')}</p>
              <p className={textStyles.sectionDescription}>{t('verandalar_description')}</p>
            </CarouselSection>
            <CarouselSection
              carouselPlacement="left"
              data={slider_images_2}
              className="flex-col gap-2 md:pb-0 pb-8 pt-0 md:py-8"
            >
              <p className={textStyles.sectionTitle}>
                {t('timeless_architecture')}
              </p>
            </CarouselSection>
            <div className="flex flex-col-reverse md:flex-col gap-4 md:gap-0">
              <div className="p-0 md:p-[24px] pb-[18px] md:pb-[56px]">
                <p className={textStyles.sectionDescription}>
                  {t('zamansiz_mimari_description')}
                </p>
              </div>
              <div className="p-0 md:p-[24px] flex flex-wrap flex-row md:flex-row gap-[24px] w-full bg-white" id="vaziyet planı">
                <StatItem title={t('stats.modern_buildings')} value={80} suffix={t('stats.units')} />
                <StatItem title={t('stats.project_area')} value={30000} suffix={t('stats.square_meters')} />
                <StatItem title={t('stats.pier')} value={1400} suffix={t('stats.square_meters')} />
              </div>
            </div>
            <div className="py-[12px] md:py-[24px] flex flex-col md:flex-row gap-[8px] items-center justify-between w-full">
              <div className="flex flex-col gap-[8px]">
                <p className={textStyles.sectionTitle}>
                  {t('lifestyle_areas')}
                </p>
                <p className={textStyles.sectionDescription}>
                  {t('kullanim_alani_description_1')} <strong>{t('kullanim_alani_description_2')}</strong>{" "}{t('kullanim_alani_description_3')}
                </p>
              </div>
              <div className="overflow-hidden w-full min-w-[50%] md:w-[600px] h-[300px] md:h-[400px]">
                <Image src={kusbakisi} alt="kusbakisi" className="w-full h-full object-cover mb-[16px] md:mb-0 transition-transform duration-700 ease-in-out hover:scale-110" />
              </div>
            </div>
            <div className="py-[24px] flex flex-col md:flex-row gap-[8px] items-center justify-between w-full">
              <div className="overflow-hidden w-full min-w-[50%] md:w-[600px] h-[300px] md:h-[400px]">
                <Image src={doga} alt="doga" className="w-full h-full object-cover mb-[16px] md:mb-0 transition-transform duration-700 ease-in-out hover:scale-110" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className={textStyles.sectionTitle}>
                  {t('comfort_nature')}
                </p>
                <p className={textStyles.sectionDescription}>
                  {t('doga_description_1')}
                </p>
                <p className={textStyles.sectionDescription}>
                  {t('doga_description_2')}
                </p>
              </div>
            </div>
            <div className="p-[24px] md:py-[48px] flex items-center justify-center" id="olanaklar">
              <div className="flex flex-wrap flex-row gap-[8px] justify-center w-full md:w-[60%]">
                {
                  serviceItems.map((item, index) => (
                    <div key={index} className="h-fit w-[120px] md:w-[150px] flex flex-col gap-[8px] items-center justify-center">
                      {svgFiles[item.slug] && (
                        <Image
                          width={32}
                          height={32}
                          src={svgFiles[item.slug]}
                          alt={item.name}
                        />
                      )}
                      <p className={textStyles.serviceLabel}>{item.name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="bg-[#242953] py-5">
            <p className={textStyles.bannerTitle}>
              {t('city_dynamics')}
            </p>
          </div>

          {/* Photo Grid Example */}
          <div className="bg-white px-4 md:px-[96px] py-[24px] md:py-[48px]" id="galeri">
            <h2 className={`${textStyles.sectionTitle} mb-8`}>
              {t('project_images')}
            </h2>
            <PhotoGrid
              images={photoGridImages}
              columns={4}
              gap={"3"}
              className="mb-12"
              onClick={(img) => setSelectedItem(img)}
            />
          </div>
          <div className="bg-white mt-[-24px] md:mt-0 md:pt-0 px-4 md:px-[96px] pb-[48px] flex flex-col md:flex-row gap-[24px] md:gap-[8px] items-center justify-between w-full" >
            <div className="flex flex-col gap-[16px] md:gap-[8px] order-2 md:order-1">
              <p className={textStyles.sectionTitle}>
                <strong>{t('location.title')}</strong><br />{t('location.subtitle')}
              </p>
              <p className={textStyles.sectionDescription}>
                {t('location.description')}
              </p>
            </div>
            <Image src={kusbakisi2} alt="kusbakisi2" className="w-full md:w-[600px] h-[300px] md:h-[400px] object-cover order-1 md:order-2" />
          </div>
          <div className="bg-white px-8 md:px-[96px] pb-[48px] flex flex-row flex-wrap md:flex-row gap-[32px] md:gap-[8px] items-center justify-around">
            {
              locations.map((location, index) => (
                <div key={index} className="flex flex-col gap-[4px]">
                  <p className={`${textStyles.statsMedium} uppercase`}>
                    {location.name}
                  </p>
                  <p className={`${textStyles.statsMedium} uppercase`}>
                    {location.distance} km
                  </p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="bg-white flex flex-row gap-[8px] items-center justify-between w-full" id="iletisim">
          <MapComponent />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full bg-[#242953]">
          <div className="relative w-full md:w-[50%] h-[300px] md:h-[400px] bg-[#242953]">
            <Image src={kusbakisi3} alt="kusbakisi3" className="w-full h-full object-cover" />
            <div className="bg-[#FFFFFF] w-full h-full absolute left-0 top-0 opacity-50" />
          </div>
          <div className="relative w-full md:w-[50%] flex flex-col justify-center items-center h-full bg-[#242953] p-[24px]">
            <p className={textStyles.contactTitle}>{t('contact.title')}</p>
            <p className={`${textStyles.contactDescription} mt-[12px]`}>{t('contact.description')}</p>
            <div className="flex flex-col md:flex-row gap-[8px] mt-[12px] w-full">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="bg-white pb-[48px] flex flex-col gap-[8px] items-center justify-center py-[48px] px-4 md:px-0">
          <p className={textStyles.footerText}>
            {t('footer.copyright')}
          </p>
          <p className={textStyles.footerText}>
            {t('footer.office')}<br />{t('footer.address')}
          </p>
          <p className={textStyles.footerText}>
            {t('footer.phone')}
          </p>
        </div>
        <div className="bg-[#242953] flex flex-row items-center justify-between w-full h-[40px]">
        </div>
      </div>
    </>
  )
}; 
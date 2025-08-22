"use client"
import Image from "next/image"
import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import doga from "../assets/doga.webp"
import kusbakisi2 from "../assets/kusbakisi_2.webp"
import otelNew from "../assets/otel-new.webp"
import vaziyetPlan from "../assets/vaziyet-plani.webp"
import { KVKKAlert, PhotoGrid } from "../component"
import Carousel from "../component/Carousel"
import { MapComponent } from "../component/map"
import { CarouselSection, HeroSection } from "../layout/index"
import { textStyles } from "../styles/typography"
import { serviceItems, svgFiles } from "../utils"

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
import { useSelectedItem } from "../context/SelectedItemContext"

import hero_1 from "../assets/hero-slider/hero-slider-1.webp"
import hero_2 from "../assets/hero-slider/hero-slider-2.webp"
import hero_3 from "../assets/hero-slider/hero-slider-3.webp"
import hero_4 from "../assets/hero-slider/hero-slider-4.webp"
import hero_5 from "../assets/hero-slider/hero-slider-5.webp"

import gallery_1 from "../assets/gallery/gallery_01.webp"
import gallery_2 from "../assets/gallery/gallery_02.webp"
import gallery_3 from "../assets/gallery/gallery_03.webp"
import gallery_4 from "../assets/gallery/gallery_04.webp"
import gallery_5 from "../assets/gallery/gallery_05.webp"
import gallery_6 from "../assets/gallery/gallery_06.webp"
import gallery_7 from "../assets/gallery/gallery_07.webp"
import gallery_8 from "../assets/gallery/gallery_08.webp"
import gallery_9 from "../assets/gallery/gallery_09.webp"
import gallery_10 from "../assets/gallery/gallery_10.webp"
import gallery_11 from "../assets/gallery/gallery_11.webp"
import gallery_12 from "../assets/gallery/gallery_12.webp"

import google_earth_location from "../assets/google-earth.webp"

const key = (index: number, variant: string) => `slider-${index}-${variant}`

const heroClassName = "w-full h-[300px] md:h-[600px] object-cover transition-transform duration-700 ease-in-out hover:scale-110"
const sliderClassName = "w-full md:w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110"

const slider_images_1 = [
  <Image src={slider1_2} alt="Slider 2" key={key(1, "slider1")} className={sliderClassName} />,
  <Image src={slider1_1} alt="Slider 1" key={key(0, "slider1")} className={sliderClassName} />,
  <Image src={slider1_3} alt="Slider 3" key={key(2, "slider1")} className={sliderClassName} />,
  <Image src={slider1_4} alt="Slider 4" key={key(3, "slider1")} className={sliderClassName} />,
]

const slider_images_2 = [
  <Image src={slider2_1} alt="Slider 1" key={key(0, "slider2")} className={sliderClassName} />,
  <Image src={slider2_2} alt="Slider 2" key={key(1, "slider2")} className={sliderClassName} />,
  <Image src={slider2_3} alt="Slider 3" key={key(2, "slider2")} className={sliderClassName} />,
  <Image src={slider2_4} alt="Slider 4" key={key(3, "slider2")} className={sliderClassName} />,
]

const heroCarouselImages = [
  <Image
    src={hero_1}
    alt="hero-1"
    key="hero-1"
    className={heroClassName}
  />,
  <Image
    src={hero_2}
    alt="hero-2"
    key="hero-2"
    className={heroClassName}
  />,
  <Image
    src={hero_3}
    alt="hero-3"
    key="hero-3"
    className={heroClassName}
  />,
  <Image
    src={hero_4}
    alt="hero-4"
    key="hero-4"
    className={heroClassName}
  />,
  <Image
    src={hero_5}
    alt="herro-5"
    key="hero-5"
    className={heroClassName}
  />,
]

const slider1Sources = [
  { src: slider1_2, alt: "slider-1-2", variant: "normal" as const },
  { src: slider1_1, alt: "slider-1-1", variant: "normal" as const },
  { src: slider1_3, alt: "slider-1-3", variant: "normal" as const },
  { src: slider1_4, alt: "slider-1-4", variant: "normal" as const },
]

const slider2Sources = [
  { src: slider2_1, alt: "slider-2-1", variant: "normal" as const },
  { src: slider2_2, alt: "slider-2-2", variant: "normal" as const },
  { src: slider2_3, alt: "slider-2-3", variant: "normal" as const },
  { src: slider2_4, alt: "slider-2-4", variant: "normal" as const },
]

const heroCarouselSources = [
  { src: hero_1, alt: "Hero Image", variant: "normal" as const },
  { src: hero_2, alt: "Hero Banner", variant: "normal" as const },
  { src: hero_3, alt: "Bird's Eye View", variant: "normal" as const },
  { src: hero_4, alt: "Bird's Eye View 2", variant: "normal" as const },
  { src: hero_5, alt: "Bird's Eye View 2", variant: "normal" as const },
]

const photoGridImages = [
  { src: gallery_1, alt: "Hebil_Blue_Gallery_1", variant: 'normal' as const },
  { src: gallery_2, alt: "Hebil_Blue_Gallery_2", variant: 'normal' as const },
  { src: gallery_3, alt: "Hebil_Blue_Gallery_3", variant: 'normal' as const },
  { src: gallery_4, alt: "Hebil_Blue_Gallery_4", variant: 'normal' as const },
  { src: gallery_5, alt: "Hebil_Blue_Gallery_5", variant: 'normal' as const },
  { src: gallery_6, alt: "Hebil_Blue_Gallery_6", variant: 'normal' as const },
  { src: gallery_7, alt: "Hebil_Blue_Gallery_7", variant: 'normal' as const },
  { src: gallery_8, alt: "Hebil_Blue_Gallery_8", variant: 'normal' as const },
  { src: gallery_9, alt: "Hebil_Blue_Gallery_9", variant: 'normal' as const },
  { src: gallery_10, alt: "Hebil_Blue_Gallery_10", variant: 'normal' as const },
  { src: gallery_11, alt: "Hebil_Blue_Gallery_11", variant: 'normal' as const },
  { src: gallery_12, alt: "Hebil_Blue_Gallery_12", variant: 'normal' as const },
  { src: "https://www.youtube.com/embed/tKicQIvFElM", alt: "Hebil_Blue_Video_1", variant: 'wide' as const },
  { src: "https://www.youtube.com/embed/WV8Mgz7qC8U", alt: "Hebil_Blue_Video_2", variant: 'wide' as const },
];

export default function HomeClient({ params }: { params: { lang: string } }) {

  const { t, i18n } = useTranslation();
  const { selectedItem, setSelectedItem } = useSelectedItem();

  const locations = [
    { name: t('locations.turkbuku'), distance: 3 },
    { name: t('locations.gundogan'), distance: 5 },
    { name: t('locations.cennet_koyu'), distance: 8.4 },
    { name: t('locations.yalikavak'), distance: 8 },
    { name: t('locations.airport'), distance: 40 },
  ]

  useEffect(() => {
    if (params.lang && i18n.language !== params.lang) {
      i18n.changeLanguage(params.lang);
    }
  }, [
    params.lang,
    i18n
  ]);

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
  }, [selectedItem, setSelectedItem]);

  const PhotoModal = () => {
    if (!selectedItem) return null;

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

  const onClick = useCallback((index: number, sources: ItemType[]) => {
    setSelectedItem(sources[index]);
  }, [setSelectedItem])

  return (
    <>
      <PhotoModal />
      <div className="w-full bg-white" style={{ WebkitTransform: 'translateZ(0)' }}>
        <div className="w-full " id="hebilblue" >
            <div className="overflow-hidden">
            <Carousel onClick={(idx: number) => onClick(idx, heroCarouselSources)} slides={heroCarouselImages} height="h-[300px] md:h-[600px]" />
            </div>
          <HeroSection>
            <h1 lang={params.lang} className={textStyles.heroTitle}>{t('hero.title')}</h1>
            <p lang={params.lang} className={textStyles.heroDescription}>{t('hero.description')}</p>
            {/* <p className={textStyles.heroDescriptionShort}>{t('hero.description_short')}</p> */}
          </HeroSection>
          <button
            id="hotel"
            onClick={() => setSelectedItem({ src: otelNew, alt: "BANNER_HOTEL", variant: "normal" as const })}
            className="overflow-hidden w-full h-[300px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] cursor-pointer"
          >
            <Image src={otelNew} alt="BANNER_HOTEL" className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110" />
          </button>
          <HeroSection id="proje">
            <div>
              <p lang={params.lang} className={`${textStyles.heroDescription}`}>{t('banner.description_first_line')}</p>
              <p lang={params.lang} className={`${textStyles.heroDescription}`}>{t('banner.description_second_line')}</p>
            </div>
          </HeroSection>
          <div className="px-4 md:px-[96px] bg-white">
            <CarouselSection
              onClick={(idx: number) => onClick(idx, slider1Sources)}
              carouselPlacement="right"
              data={slider_images_1}
              className="pt-0 pb-0"
            >
              <p lang={params.lang} className={textStyles.sectionTitle}>{t('verandalar')}</p>
              <p lang={params.lang} className={textStyles.sectionDescription}>{t('verandalar_description')}</p>
            </CarouselSection>
            <CarouselSection
              carouselPlacement="left"
              data={slider_images_2}
              onClick={(idx: number) => onClick(idx, slider2Sources)}
              className="flex-col gap-2 md:pb-0 pb-8 pt-0 md:py-8"
            >
              <p lang={params.lang} className={textStyles.sectionTitle}>
                {t('timeless_architecture')}
              </p>
              <p lang={params.lang} className={textStyles.sectionDescription}>
                {t('zamansiz_mimari_description')}
              </p>
            </CarouselSection>
            <div className="flex flex-col-reverse md:flex-col gap-4 md:gap-0" id="vaziyet-plani">
              <div className="p-0 md:p-[24px] flex flex-wrap flex-row md:flex-row gap-[24px] w-full bg-white">
                <StatItem lang={params.lang} title={t('stats.modern_buildings')} value={80} suffix={t('stats.units')} />
                <StatItem lang={params.lang} title={t('stats.project_area')} value={30000} suffix={t('stats.square_meters')} />
                <StatItem lang={params.lang} title={t('stats.pier')} value={1400} suffix={t('stats.square_meters')} />
              </div>
            </div>
            <div className="py-[12px] md:py-[24px] flex flex-col md:flex-row gap-[8px] items-center justify-between w-full">
              <div className="flex flex-col gap-[8px]">
                <p lang={params.lang} className={textStyles.sectionTitle}>
                  {t('lifestyle_areas')}
                </p>
                <p lang={params.lang} className={textStyles.sectionDescription}>
                  {t('kullanim_alani_description_1')} <strong>{t('kullanim_alani_description_2')}</strong>{" "}{t('kullanim_alani_description_3')}
                </p>
              </div>
              <button onClick={() => setSelectedItem({ src: vaziyetPlan, alt: "vaziyet planı", variant: "normal" })} className="cursor-pointer overflow-hidden w-full min-w-[50%] md:w-[600px] h-[300px] md:h-[400px]">
                <Image src={vaziyetPlan} alt="vaziyet planı" className="w-full h-full object-cover mb-[16px] bg-position-start md:mb-0 transition-transform duration-700 ease-in-out hover:scale-110 object-top" />
              </button>
            </div>
            <div className="py-[24px] flex flex-col md:flex-row gap-[8px] items-center justify-between w-full">
              <button onClick={() => setSelectedItem({ src: doga, alt: "doga", variant: "normal" })} className="overflow-hidden w-full min-w-[50%] md:w-[600px] h-[300px] md:h-[400px] cursor-pointer">
                <Image src={doga} alt="doga" className="w-full h-full object-cover mb-[16px] md:mb-0 transition-transform duration-700 ease-in-out hover:scale-110 object-bottom" />
              </button> 
              <div className="flex flex-col gap-[8px]">
                <p lang={params.lang} className={textStyles.sectionTitle}>
                  {t('comfort_nature')}
                </p>
                <p lang={params.lang} className={textStyles.sectionDescription}>
                  {t('doga_description_1')}
                </p>
                <p lang={params.lang} className={textStyles.sectionDescription}>
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
                          alt={item.name[params.lang as keyof typeof item.name]}
                        />
                      )}
                      <p lang={params.lang} className={textStyles.serviceLabel}>{item.name[params.lang as keyof typeof item.name]}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="bg-[#242953] py-5">
            <p lang={params.lang} className={textStyles.bannerTitle}>
              {t('city_dynamics')}
            </p>
          </div>

          {/* Photo Grid Example */}
          <div className="bg-white px-4 md:px-[96px] py-[24px] md:py-[48px]" id="galeri">
            <h2 lang={params.lang} className={`${textStyles.sectionTitle} mb-8`}>
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
              <p lang={params.lang} className={textStyles.sectionTitle}>
                <strong>{t('location.title')}</strong>
              </p>
              <p lang={params.lang} className={textStyles.sectionDescription}>
                {t('location.description')}
              </p>
            </div>
            <button onClick={() => setSelectedItem({ src: kusbakisi2, alt: "kusbakisi2", variant: "normal" })} className="w-full min-w-[50%] md:w-[600px] h-[300px] md:h-[400px] object-cover order-1 md:order-2 cursor-pointer">
              <Image src={kusbakisi2} alt="kusbakisi2" className="w-full h-full object-cover object-right" />
            </button>
          </div>
          <div className="bg-white px-8 md:px-[96px] pb-[48px] flex flex-row flex-wrap md:flex-row gap-[32px] md:gap-[8px] items-center justify-around">
            {
              locations.map((location, index) => (
                <div key={index} className="flex flex-col gap-[4px]">
                  <p lang={params.lang} className={`${textStyles.statsMedium} uppercase`}>
                    {location.name}
                  </p>
                  <p lang={params.lang} className={`${textStyles.statsMedium} uppercase`}>
                    {location.distance} km
                  </p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="bg-white flex flex-row gap-[8px] items-center justify-between w-full" >
          <MapComponent />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full bg-[#242953]">
          <div className="relative w-full md:w-[50%] h-[300px] md:h-[400px] bg-[#242953]">
            <Image src={google_earth_location} alt="google_earth_location" className="w-full h-full object-cover" />
            <div className="bg-[#FFFFFF] w-full h-full absolute left-0 top-0 opacity-20" />
          </div>
          <div className="relative w-full md:w-[50%] flex flex-col justify-center items-center h-full bg-[#242953] p-[24px]" id="iletisim">
            <p lang={params.lang} className={textStyles.contactTitle}>{t('contact.title')}</p>
            <p lang={params.lang} className={`${textStyles.contactDescription} mt-[12px]`}>{t('contact.description')}</p>
            <div className="flex flex-col md:flex-row gap-[8px] mt-[12px] w-full">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="bg-white pb-[48px] flex flex-col gap-[8px] items-center justify-center py-[48px] px-4 md:px-0">
          <p lang={params.lang} className={textStyles.footerText}>
            {t('footer.copyright')}
          </p>
          <p lang={params.lang} className={textStyles.footerText}>
            {t('footer.office')}<br />{t('footer.address')}
          </p>
          <p lang={params.lang} className={textStyles.footerText}>
            {t('footer.phone')} - <a href={`mailto:${t('footer.email')}`} className="text-[#242953] underline">{t('footer.email')}</a>
          </p>
        </div>
        <div className="bg-[#242953] flex flex-row items-center justify-between w-full h-[40px]">
        </div>
      </div>

      {/* KVKK Alert */}
      <KVKKAlert lang={params.lang} />
    </>
  )
}; 
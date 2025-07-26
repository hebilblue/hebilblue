"use client"
import Image from "next/image"
import doga from "./assets/doga.png"
import banner from "./assets/hebilblue-hero-2.png"
import heroImage from "./assets/hebilblue-hero-bg.png"
import kusbakisi from "./assets/kusbakisi.png"
import kusbakisi2 from "./assets/kusbakisi_2.png"
import kusbakisi3 from "./assets/kusbakisi_3.png"
import modern from "./assets/window-banner.png"
import { PhotoGrid } from "./component"
import { MapComponent } from "./component/map"
import content from "./content.json"
import { CarouselSection, HeroSection, PageLayout } from "./layout/index"
import { textStyles } from "./styles/typography"
import { serviceItems, svgFiles } from "./utils"

import slider1_1 from "./assets/slider1_1.png"
import slider1_2 from "./assets/slider1_2.png"
import slider1_3 from "./assets/slider1_3.png"
import slider1_4 from "./assets/slider1_4.png"
import slider2_1 from "./assets/slider2_1.jpg"
import slider2_2 from "./assets/slider2_2.jpg"
import slider2_3 from "./assets/slider2_3.jpg"
import slider2_4 from "./assets/slider2_4.jpg"
import ContactForm from "./component/ContactForm/ContactForm"
import StatItem from "./component/StatItem"

export default function Home() {
  // Removed unused screenWidth state

  const slider_images_1 = [
    <Image src={slider1_1} alt="Slider 1" key="slider1_1" className="w-full md:w-[600px] h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
    <Image src={slider1_2} alt="Slider 2" key="slider1_2" className="w-full md:w-[600px] h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
    <Image src={slider1_3} alt="Slider 3" key="slider1_3" className="w-full md:w-[600px] h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
    <Image src={slider1_4} alt="Slider 4" key="slider1_4" className="w-full md:w-[600px] h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
  ]

  const slider_images_2 = [
    <Image src={slider2_1} alt="Slider 1" key="slider2_1" className="w-full md:w-[600px] h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
    <Image src={slider2_2} alt="Slider 2" key="slider2_2" className="w-full md:w-[600px] h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
    <Image src={slider2_3} alt="Slider 3" key="slider2_3" className="w-full md:w-[600px] h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
    <Image src={slider2_4} alt="Slider 4" key="slider2_4" className="w-full md:w-[600px] h-[300px] md:h-[400px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />,
  ]

  // Example photo grid data with wide variant
  const photoGridImages = [
    { src: heroImage, alt: "Hero Image" },
    { src: banner, alt: "Banner Hotel" },
    { src: kusbakisi, alt: "Bird's Eye View" },
    { src: doga, alt: "Nature" },
    { src: heroImage, alt: "Hero Image 2" },
    { src: kusbakisi, alt: "Bird's Eye View" },
    { src: banner, alt: "Banner Hotel" },
    { src: doga, alt: "Nature" },
    { src: modern, alt: "Modern Architecture", variant: 'wide' as const },
    { src: "https://www.youtube.com/embed/tKicQIvFElM", alt: "Hebil Blue Video", variant: 'wide' as const },
  ];

  const locations = [
    { name: "türkbükü", distance: 3 },
    { name: "gündoğan", distance: 5 },
    { name: "cennet koyu", distance: 8.4 },
    { name: "yalıkavak", distance: 8 },
    { name: "havaalani", distance: 40 },
  ]

  return (
    <PageLayout>
      <div className="w-full" id="hebilblue">
        <div className="overflow-hidden">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="w-full h-[300px] md:h-[600px] object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          />
        </div>
        <HeroSection>
          <h1 className={textStyles.heroTitle}>{content.hero.title}</h1>
          <p className={textStyles.heroDescription}>{content.hero.description}</p>
          {/* <p className={textStyles.heroDescriptionShort}>{content.hero.description_short}</p> */}
        </HeroSection>
        <div className="overflow-hidden">
          <Image src={banner} alt="BANNER_HOTEL" className="w-full h-[300px] md:h-[600px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />
        </div>
        <HeroSection id="proje">
          <h1 className={textStyles.heroTitle}>{content.banner.title}</h1>
          <p className={textStyles.heroDescription}>{content.banner.description}</p>
        </HeroSection>
        <div className="px-4 md:px-[96px] bg-white">
          <CarouselSection
            carouselPlacement="right"
            data={slider_images_1}
            className="pt-0 pb-0"
          >
            <p className={textStyles.sectionTitle}>{content["verandalar..."]}</p>
            <p className={textStyles.sectionDescription}>{content["verandalar_description"]}</p>
          </CarouselSection>
          <CarouselSection
            carouselPlacement="left"
            data={slider_images_2}
            className="flex-col gap-2 pb-0 md:pb-8"
          >
            <p className={textStyles.sectionTitle}>
              Zamansız Mİmarİ, <br />eşsİz yaşam alanları
            </p>
          </CarouselSection>
          <div className="flex flex-col-reverse md:flex-col gap-4 md:gap-0">
            <div className="p-0 md:p-[24px] pb-[18px] md:pb-[56px]">
              <p className={textStyles.sectionDescription}>
                {content["zamansiz_mimari_description"]}
              </p>
            </div>
            <div className="p-0 md:p-[24px] flex flex-wrap flex-row md:flex-row gap-[24px] w-full bg-white" id="vaziyet planı">
              <StatItem title="MODERN YAPI" value={80} suffix="adet" />
              <StatItem title="PROJE ALANI" value={30000} suffix="m²" />
              <StatItem title="İSKELE" value={1400} suffix="m²" />
            </div>
          </div>
          <div className="py-[12px] md:py-[24px] flex flex-col md:flex-row gap-[8px] items-center justify-between w-full">
            <div className="flex flex-col gap-[8px]">
              <p className={textStyles.sectionTitle}>
                İHTİYAÇLARINIZA<br />
                UYGUN YAŞAM ALANLARI
              </p>
              <p className={textStyles.sectionDescription}>
                {content["kullanim_alani_description_1"]} <strong>{content["kullanim_alani_description_2"]}</strong>{" "}{content["kullanim_alani_description_3"]}
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
                Hayatın her anına konfor,<br />
                doğayla iç içe ayrıcalık…
              </p>
              <p className={textStyles.sectionDescription}>
                {content["doga_description_1"]}
              </p>
              <p className={textStyles.sectionDescription}>
                {content["doga_description_2"]}
              </p>
            </div>
          </div>
          <div className="p-[24px] md:py-[48px] flex items-center justify-center" id="olanaklar">
            <div className="flex flex-wrap flex-row gap-[8px] justify-center w-full md:w-[60%]">
              {
                serviceItems.map((item, index) => (
                  <div key={index} className="h-fit w-[120px] md:w-[150px] flex flex-col gap-[8px] items-center justify-center">
                    {svgFiles[item] && (
                      <Image 
                        width={32}
                        height={32}
                        src={svgFiles[item]}
                        alt={item}
                      />
                    )}
                    <p className={textStyles.serviceLabel}>{item.split("-").join(" ")}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="bg-[#242953] py-5">
          <p className={textStyles.bannerTitle}>
            ŞEHRİN DİNAMİĞİNE YAKIN, DOĞANIN KALBİNDE.
          </p>
        </div>

        {/* Photo Grid Example */}
        <div className="bg-white px-4 md:px-[96px] py-[24px] md:py-[48px]" id="galeri">
          <h2 className={`${textStyles.sectionTitle} mb-8`}>
            Proje Görselleri
          </h2>
          <PhotoGrid
            images={photoGridImages}
            columns={4}
            gap={"3"}
            className="mb-12"
            onClick={(index) => console.log(`Clicked image ${index}`)}
          />
        </div>
        <div className="bg-white mt-[-24px] md:mt-0 md:pt-0 px-4 md:px-[96px] pb-[48px] flex flex-col md:flex-row gap-[24px] md:gap-[8px] items-center justify-between w-full" id="hotel">
          <div className="flex flex-col gap-[16px] md:gap-[8px] order-2 md:order-1">
            <p className={textStyles.sectionTitle}>
              <strong>LOKASYON</strong><br />Hebİl Koyu / Türkbükü
            </p>
            <p className={textStyles.sectionDescription}>
              Hem Sakinliğe Yakın, Hem Hayatın İçinde!<br />
              Doğayla iç içe, huzurlu bir atmosferde yer alırken; Bodrum&apos;un en gözde noktalarına sadece dakikalar mesafedesiniz.<strong> Günün dilediğiniz saatinde sahile inin, Yalıkavak Marina&apos;da alışverişe çıkın… </strong><br />Hepsi sadece bir yol kadar yakın!
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
          <p className={textStyles.contactTitle}>Sizi Arayalım</p>
          <p className={`${textStyles.contactDescription} mt-[12px]`}>Hayalinizdeki evi yerinde keşfetmek ve projeye özel ayrıcalıkları öğrenmek için formu doldurun;
            yaşam danışmanlarımız sizi arasın. Dilerseniz satış ofisimizde sizi ağırlamaktan memnuniyet duyarız.</p>
          <div className="flex flex-col md:flex-row gap-[8px] mt-[12px] w-full">
            <ContactForm />

          </div>
        </div>
      </div>
      <div className="bg-white pb-[48px] flex flex-col gap-[8px] items-center justify-center py-[48px] px-4 md:px-0">
        <p className={textStyles.footerText}>
          Copyright © 2025 hebilblue All rights reserved.
        </p>
        <p className={textStyles.footerText}>
          Hebil Blue Satış Ofisi<br />Türkbükü Mah. Hebil Cad. 156 Sk. Bodrum/MUĞLA
        </p>
        <p className={textStyles.footerText}>
          +90 532 635 56 62
        </p>
      </div>
      <div className="bg-[#242953] flex flex-row items-center justify-between w-full h-[40px]">
      </div>
    </PageLayout>
  )
};
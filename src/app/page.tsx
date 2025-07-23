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

export default function Home() {
  // Removed unused screenWidth state

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
    { src: kusbakisi, alt: "Bird's Eye View", variant: 'wide' as const },
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
        <Image src={heroImage} alt="Hero Image" className="w-full" />
        <HeroSection>
          <h1 className={textStyles.heroTitle}>{content.hero.title}</h1>
          <p className={textStyles.heroDescription}>{content.hero.description}</p>
          {/* <p className={textStyles.heroDescriptionShort}>{content.hero.description_short}</p> */}
        </HeroSection>
        <Image src={banner} alt="BANNER_HOTEL" className="w-full" />
        <HeroSection id="proje">
          <h1 className={textStyles.heroTitle}>{content.banner.title}</h1>
          <p className={textStyles.heroDescription}>{content.banner.description}</p>
        </HeroSection>
        <div className="px-4 md:px-[96px] bg-white">
          <CarouselSection
            carouselPlacement="right"
            data={[
              <Image src={heroImage} alt="verandalar1" key="verandalar1" className="w-full md:w-[600px] h-[300px] md:h-[400px] object-cover" />,
              <Image src={banner} alt="verandalar2" key="verandalar2" className="w-full md:w-[600px] h-[300px] md:h-[400px] object-cover" />,
            ]}
          >
            <p className={textStyles.sectionTitle}>{content["verandalar..."]}</p>
            <p className={textStyles.sectionDescription}>{content["verandalar_description"]}</p>
          </CarouselSection>
          <CarouselSection
            carouselPlacement="left"
            data={[
              <Image src={modern} alt="verandalar1" key="verandalar1" className="w-full md:w-[600px] h-[300px] md:h-[400px] object-cover" />,
            ]}
          >
            <p className={textStyles.sectionTitle}>{content["zamansiz_mimari"]}</p>
          </CarouselSection>
          <div className="p-0 md:p-[24px] pb-[24px] md:pb-[56px]">
            <p className={textStyles.sectionDescription}>
              {content["zamansiz_mimari_description"]}
            </p>
          </div>
          <div className="p-0 md:p-[24px] flex flex-col md:flex-row gap-[8px]" id="vaziyet planı">
            <p className={textStyles.statsLarge}>
              MODERN YAPI<br />80 ADET
            </p>
            <p className={textStyles.statsLarge}>
              PROJE ALANI<br />30.000 m2
            </p>
            <p className={textStyles.statsLarge}>
              İSKELE<br />1400 m2
            </p>
          </div>
          <div className="py-[12px] md:py-[24px] flex flex-col md:flex-row gap-[8px] items-center justify-between w-full">
            <div className="flex flex-col gap-[8px] order-2 md:order-1">
              <p className={textStyles.sectionTitle}>
                İHTİYAÇLARINIZA<br />
                UYGUN YAŞAM ALANLARI
              </p>
              <p className={textStyles.sectionDescription}>
                {content["kullanim_alani_description_1"]}
              </p>
              <p className={textStyles.sectionDescription}>
                {content["kullanim_alani_description_2"]}
              </p>
              <p className={textStyles.sectionDescription}>
                {content["kullanim_alani_description_3"]}
              </p>
            </div>
            <Image src={kusbakisi} alt="kusbakisi" className="w-full my-[16px] md:py-0 md:w-[600px] h-[300px] md:h-[400px] object-cover order-1 md:order-2" />
          </div>
          <div className="py-[24px] flex flex-col md:flex-row gap-[8px] items-center justify-between w-full">
            <Image src={doga} alt="doga" className="w-full md:w-[600px] h-[300px] md:h-[400px] object-cover mb-[16px] md:mb-0" />
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
        <div className="bg-white px-4 md:px-[96px] pb-[48px] flex flex-col md:flex-row gap-[8px] items-center justify-between w-full" id="hotel">
          <div className="flex flex-col gap-[8px] order-2 md:order-1">
            <p className={textStyles.sectionTitle}>
              LOKASYON<br />Hebİl Koyu / Türkbükü
            </p>
            <p className={textStyles.sectionDescription}>
              Hem Sakinliğe Yakın, Hem Hayatın İçinde!<br />
              Doğayla iç içe, huzurlu bir atmosferde yer alırken; Bodrum&apos;un en gözde noktalarına sadece dakikalar mesafedesiniz.<br />
              Günün dilediğiniz saatinde sahile inin, Yalıkavak Marina&apos;da alışverişe çıkın… <br />
              Hepsi sadece bir yol kadar yakın!
            </p>
          </div>
          <Image src={kusbakisi2} alt="kusbakisi2" className="w-full md:w-[600px] h-[300px] md:h-[400px] object-cover order-1 md:order-2" />
        </div>
        <div className="bg-white px-4 md:px-[96px] pb-[48px] flex flex-col md:flex-row gap-[8px] items-center justify-between w-full">
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
            <div className="flex flex-col gap-[8px] w-full md:w-[50%]">
              <input type="text" placeholder="Adınız" className="w-full h-[40px] bg-[#FFFFFF] rounded-[8px] p-[12px] font-roboto font-regular text-[14px] text-[#393C41]" />
              <input type="text" placeholder="Soyadınız" className="w-full h-[40px] bg-[#FFFFFF] rounded-[8px] p-[12px] font-roboto font-regular text-[14px] text-[#393C41]" />
              <input type="text" placeholder="E-posta" className="w-full h-[40px] bg-[#FFFFFF] rounded-[8px] p-[12px] font-roboto font-regular text-[14px] text-[#393C41]" />
            </div>
            <div className="w-full md:w-[50%]">
              <textarea placeholder="Mesajınız" className="h-[120px] md:h-full w-full bg-[#FFFFFF] rounded-[8px] p-[12px] font-roboto font-regular text-[14px] text-[#393C41] resize-none" />
            </div>
          </div>
          <button className="w-full h-[40px] bg-[#C9B18B] rounded-[8px] p-[12px] mt-[12px] items-center justify-center flex">
            <p className={textStyles.contactButton}>Gönder</p>
          </button>
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
          +90 252 000 00 00
        </p>
      </div>
      <div className="bg-[#242953] flex flex-row items-center justify-between w-full h-[40px]">
      </div>
    </PageLayout>
  )
};
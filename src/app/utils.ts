// Import SVG files
import otelSvg from "./assets/svg/otel.svg"
import konsiyerjSvg from "./assets/svg/konsiyerj.svg"
import buggyHizmetiSvg from "./assets/svg/buggy-hizmeti.svg"
import destekHizmetleriSvg from "./assets/svg/destek-hizmetleri.svg"
import desalinasyonSistemiSvg from "./assets/svg/desalinasyon-sistemi.svg"
import fitnessVeSpaSvg from "./assets/svg/fitness-ve-spa.svg"
import yuruyusVeOyunAlanlariSvg from "./assets/svg/yuruyus-ve-oyun-alanlari.svg"
import ozelIskeleSvg from "./assets/svg/ozel-iskele.svg"
import ozelHavuzSvg from "./assets/svg/ozel-havuz.svg"
import sarjIstasyonuSvg from "./assets/svg/sarj-istasyonu.svg"

// Create a mapping object for SVG files
export const svgFiles: Record<string, string> = {
  "otel": otelSvg,
  "konsiyerj": konsiyerjSvg,
  "buggy-hizmeti": buggyHizmetiSvg,
  "destek-hizmetleri": destekHizmetleriSvg,
  "desalinasyon-sistemi": desalinasyonSistemiSvg,
  "fitness-ve-spa": fitnessVeSpaSvg,
  "yuruyus-ve-oyun-alanlari": yuruyusVeOyunAlanlariSvg,
  "ozel-iskele": ozelIskeleSvg,
  "ozel-havuz": ozelHavuzSvg,
  "sarj-istasyonu": sarjIstasyonuSvg,
}

// Array of service items
export const serviceItems = [
  "otel",
  "konsiyerj",
  "buggy-hizmeti",
  "destek-hizmetleri",
  "desalinasyon-sistemi",
  "fitness-ve-spa",
  "yuruyus-ve-oyun-alanlari",
  "ozel-iskele",
  "ozel-havuz",
  "sarj-istasyonu",
] 
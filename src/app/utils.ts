// Import SVG files
import buggyHizmetiSvg from './assets/svg/buggy-hizmeti.svg';
import desalinasyonSistemiSvg from './assets/svg/desalinasyon-sistemi.svg';
import destekHizmetleriSvg from './assets/svg/destek-hizmetleri.svg';
import fitnessVeSpaSvg from './assets/svg/fitness-ve-spa.svg';
import konsiyerjSvg from './assets/svg/konsiyerj.svg';
import otelSvg from './assets/svg/otel.svg';
import ozelHavuzSvg from './assets/svg/ozel-havuz.svg';
import ozelIskeleSvg from './assets/svg/ozel-iskele.svg';
import sarjIstasyonuSvg from './assets/svg/sarj-istasyonu.svg';
import yuruyusVeOyunAlanlariSvg from './assets/svg/yuruyus-ve-oyun-alanlari.svg';

// Create a mapping object for SVG files
export const svgFiles: Record<string, string> = {
  otel: otelSvg,
  konsiyerj: konsiyerjSvg,
  'buggy-hizmeti': buggyHizmetiSvg,
  'destek-hizmetleri': destekHizmetleriSvg,
  'desalinasyon-sistemi': desalinasyonSistemiSvg,
  'fitness-ve-spa': fitnessVeSpaSvg,
  'yuruyus-ve-oyun-alanlari': yuruyusVeOyunAlanlariSvg,
  'ozel-iskele': ozelIskeleSvg,
  'ozel-havuz': ozelHavuzSvg,
  'sarj-istasyonu': sarjIstasyonuSvg,
};

// Array of service items
export const serviceItems = [
  // { slug: 'otel', name: 'Otel' },
  { slug: 'konsiyerj', name: 'Konsiyerj' },
  { slug: 'buggy-hizmeti', name: 'Buggy Hizmeti' },
  { slug: 'destek-hizmetleri', name: 'Destek Hizmetleri' },
  { slug: 'desalinasyon-sistemi', name: 'Desalinasyon Sistemi' },
  { slug: 'fitness-ve-spa', name: 'Fitness ve SPA' },
  { slug: 'yuruyus-ve-oyun-alanlari', name: 'Yürüyüş ve Oyun Alanları' },
  { slug: 'ozel-iskele', name: 'Özel İskele' },
  { slug: 'ozel-havuz', name: 'Özel Havuz' },
  { slug: 'sarj-istasyonu', name: 'Sarj İstasyonu' },
];

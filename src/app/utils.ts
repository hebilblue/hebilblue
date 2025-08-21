// Import SVG files
import buggyHizmetiSvg from './assets/svg/buggy-hizmeti.svg';
import desalinasyonSistemiSvg from './assets/svg/desalinasyon-sistemi.svg';
import destekHizmetleriSvg from './assets/svg/destek-hizmetleri.svg';
import fitnessVeSpaSvg from './assets/svg/fitness-ve-spa.svg';
import guvenlikSvg from './assets/svg/guvenlik.svg';
import konsiyerjSvg from './assets/svg/konsiyerj.svg';
import otelSvg from './assets/svg/otel.svg';
import otoparkSvg from './assets/svg/otopark.svg';
import ozelHavuzSvg from './assets/svg/ozel-havuz.svg';
import ozelIskeleSvg from './assets/svg/ozel-iskele.svg';
import restoranVeSnackBarSvg from './assets/svg/restoran-ve-snack-bar.svg';
import sarjIstasyonuSvg from './assets/svg/sarj-istasyonu.svg';
import sporAlanlariSvg from './assets/svg/spor-alanlari.svg';
import yuruyusVeOyunAlanlariSvg from './assets/svg/yuruyus-ve-oyun-alanlari.svg';

// Create a mapping object for SVG files
export const svgFiles: Record<string, string> = {
  otel: otelSvg,
  konsiyerj: konsiyerjSvg,
  otopark: otoparkSvg,
  'buggy-hizmeti': buggyHizmetiSvg,
  'destek-hizmetleri': destekHizmetleriSvg,
  'desalinasyon-sistemi': desalinasyonSistemiSvg,
  'fitness-ve-spa': fitnessVeSpaSvg,
  'yuruyus-ve-oyun-alanlari': yuruyusVeOyunAlanlariSvg,
  'ozel-iskele': ozelIskeleSvg,
  'ozel-havuz': ozelHavuzSvg,
  'sarj-istasyonu': sarjIstasyonuSvg,
  guvenlik: guvenlikSvg,
  'restoran-ve-snack-bar': restoranVeSnackBarSvg,
  'spor-alanlari': sporAlanlariSvg,
};

// Array of service items
export const serviceItems = [
  // { slug: 'otel', name: 'Otel' },
  { slug: 'konsiyerj', name: { tr: 'Konsiyerj', en: 'Concierge' } },
  { slug: 'buggy-hizmeti', name: { tr: 'Buggy Hizmeti', en: 'Buggy Service' } },
  { slug: 'destek-hizmetleri', name: { tr: 'Destek Hizmetleri', en: 'Support Services' } },
  { slug: 'otopark', name: { tr: 'Otopark', en: 'Parking' } },
  { slug: 'desalinasyon-sistemi', name: { tr: 'Desalinasyon Sistemi', en: 'Desalination System' } },
  {
    slug: 'restoran-ve-snack-bar',
    name: { tr: 'Restoran ve Snack Bar', en: 'Restaurant and Snack Bar' },
  },
  { slug: 'spor-alanlari', name: { tr: 'Spor Alanları', en: 'Sports Areas' } },
  {
    slug: 'yuruyus-ve-oyun-alanlari',
    name: { tr: 'Yürüyüş ve Oyun Alanları', en: 'Walking and Play Areas' },
  },
  { slug: 'ozel-iskele', name: { tr: 'Özel İskele', en: 'Private Dock' } },
  { slug: 'ozel-havuz', name: { tr: 'Özel Havuz', en: 'Private Pool' } },
  { slug: 'guvenlik', name: { tr: 'Güvenlik', en: 'Security' } },
  { slug: 'sarj-istasyonu', name: { tr: 'Sarj İstasyonu', en: 'Charging Station' } },
  { slug: 'fitness-ve-spa', name: { tr: 'Fitness ve SPA', en: 'Fitness and SPA' } },
];


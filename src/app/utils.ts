// Import SVG files
import buggyHizmetiSvg from './assets/svg/buggy-hizmeti.svg';
import denizTaksiSvg from './assets/svg/deniz-taksi.svg';
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
  'deniz-taksi': denizTaksiSvg,
};

// Array of service items
export const serviceItems = [
  // { slug: 'otel', name: 'Otel' },
  { slug: 'konsiyerj', name: { tr: 'Konsiyerj', en: 'Concierge', ru: 'Консьерж' } },
  { slug: 'buggy-hizmeti', name: { tr: 'Buggy Hizmeti', en: 'Buggy Service', ru: 'Сервис багги' } },
  {
    slug: 'destek-hizmetleri',
    name: { tr: 'Destek Hizmetleri', en: 'Support Services', ru: 'Сервис поддержки' },
  },
  { slug: 'otopark', name: { tr: 'Otopark', en: 'Parking', ru: 'Парковка' } },
  {
    slug: 'desalinasyon-sistemi',
    name: { tr: 'Desalinasyon Sistemi', en: 'Desalination System', ru: 'Система дезалин' },
  },
  {
    slug: 'restoran-ve-snack-bar',
    name: { tr: 'Restoran ve Snack Bar', en: 'Restaurant and Snack Bar', ru: 'Ресторан и бар' },
  },
  { slug: 'spor-alanlari', name: { tr: 'Spor Alanları', en: 'Sports Areas', ru: 'Спорт-зона' } },
  {
    slug: 'yuruyus-ve-oyun-alanlari',
    name: { tr: 'Yürüyüş ve Oyun Alanları', en: 'Walking and Play Areas', ru: 'Пешеходная зона' },
  },
  { slug: 'ozel-iskele', name: { tr: 'Özel İskele', en: 'Private Dock', ru: 'Приватный док' } },
  { slug: 'ozel-havuz', name: { tr: 'Özel Havuz', en: 'Private Pool', ru: 'Приватный бассейн' } },
  { slug: 'guvenlik', name: { tr: 'Güvenlik', en: 'Security', ru: 'Безопасность' } },
  {
    slug: 'sarj-istasyonu',
    name: { tr: 'Sarj İstasyonu', en: 'Charging Station', ru: 'Зарядная станция' },
  },
  {
    slug: 'fitness-ve-spa',
    name: { tr: 'Fitness ve SPA', en: 'Fitness and SPA', ru: 'Фитнес и SPA' },
  },
  { slug: 'deniz-taksi', name: { tr: 'Deniz Taksi', en: 'Sea Taxi', ru: 'Транспорт по воде' } },
];


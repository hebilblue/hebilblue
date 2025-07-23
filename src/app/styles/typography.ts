// Typography system for HebilBlue
// This file contains all reusable text classes

export const typography = {
  // Hero and main headings
  hero: {
    title:
      'text-[#08162E] font-roboto font-light text-[14px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase text-center leading-[12px] md:leading-[18px]',
    description:
      'text-[#08162E] font-roboto font-light text-[12px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-center max-w-10/12 mx-auto leading-[14px] md:leading-[24px] md:mt-4',
    description_short:
      'text-[#08162E] font-roboto font-light text-[12px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-center max-w-10/12 mx-auto leading-[14px] md:leading-[24px] md:mt-4 block md:hidden',
  },

  // Section headings
  section: {
    title:
      'text-[#08162E] font-roboto font-light text-[20px] sm:text-[22px] md:text-[25px] lg:text-[28px] uppercase text-center',
    subtitle:
      'text-[#08162E] font-roboto font-light text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] uppercase text-center',
  },

  // Body text
  body: {
    regular:
      'text-[#08162E] font-roboto font-light text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-center max-w-10/12 mx-auto',
    small:
      'text-[#08162E] font-roboto font-light text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-center',
    large:
      'text-[#08162E] font-roboto font-light text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-center max-w-10/12 mx-auto',
  },

  // Statistics and numbers
  stats: {
    large:
      'text-[#08162E] font-roboto font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-center max-w-10/12 mx-auto',
    medium:
      'text-[#08162E] font-roboto font-bold text-[18px] sm:text-[19px] md:text-[20px] lg:text-[22px] text-center',
  },

  // Service items
  service: {
    label:
      'text-[#08162E] font-roboto font-light text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] uppercase text-center',
  },

  // Banner text
  banner: {
    title:
      'text-[#FFFFFF] font-roboto font-light text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] uppercase text-center',
  },

  // Contact form
  contact: {
    title:
      'font-roboto font-bold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] uppercase text-[#C9B18B]',
    description:
      'font-roboto font-regular text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-[#FFFFFF]',
    button:
      'font-roboto font-bold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] uppercase text-[#08162E]',
  },

  // Footer
  footer: {
    text: 'text-[#08162E] font-roboto font-regular text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-center',
  },

  // Utility classes
  utility: {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    maxWidth: 'max-w-10/12 mx-auto',
    padding: 'px-4 md:px-0',
  },
} as const;

// Helper function to combine typography classes
export const combineClasses = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Predefined combinations for common use cases
export const textStyles = {
  heroTitle: combineClasses(typography.hero.title, typography.utility.padding),
  heroDescription: combineClasses(typography.hero.description, typography.utility.padding),
  heroDescriptionShort: combineClasses(
    typography.hero.description_short,
    typography.utility.padding
  ),
  sectionTitle: typography.section.title,
  sectionDescription: typography.body.regular,
  statsLarge: typography.stats.large,
  statsMedium: typography.stats.medium,
  serviceLabel: typography.service.label,
  bannerTitle: combineClasses(typography.banner.title, typography.utility.padding),
  contactTitle: typography.contact.title,
  contactDescription: typography.contact.description,
  contactButton: typography.contact.button,
  footerText: typography.footer.text,
} as const; 
"use client"
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState('tr');

  useEffect(() => {
    // Extract language from pathname
    if (pathname) {
      const pathLang = pathname.split('/')[1];
      if (pathLang === 'en' || pathLang === 'tr') {
        setCurrentLang(pathLang);
      } else {
        setCurrentLang(i18n.language);
      }
    } else {
      setCurrentLang(i18n.language);
    }
  }, [pathname, i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
    
    // For static export, we need to handle navigation differently
    const currentPath = pathname || '/';
    const pathWithoutLang = currentPath.replace(/^\/(tr|en)/, '') || '/';
    const newPath = `/${lng}${pathWithoutLang}`;
    
    // Use window.location for static export
    if (typeof window !== 'undefined') {
      // Ensure proper path construction for static export
      const baseUrl = window.location.origin;
      const fullPath = `${baseUrl}${newPath}`;
      window.location.href = fullPath;
    } else {
      router.push(newPath);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('tr')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 font-roboto cursor-pointer ${
          currentLang === 'tr'
            ? 'bg-[#C9B18B] text-[#08162E]'
            : 'bg-transparent text-white hover:bg-white/10'
        }`}
      >
        TR
      </button>
      <div className="w-px h-4 bg-[#C9B18B]/50"></div>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 font-roboto cursor-pointer ${
          currentLang === 'en'
            ? 'bg-[#C9B18B] text-[#08162E]'
            : 'bg-transparent text-white hover:bg-white/10'
        }`}
        style={{ fontVariant: 'normal', textTransform: 'uppercase' }}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher; 
"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import logo from './assets/logo.webp';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect user's preferred language
    const userLang = navigator.language || navigator.languages?.[0] || 'tr';
    let targetLang = 'tr'; // default to Turkish
    
    if (userLang.startsWith('ru')) {
      targetLang = 'ru';
    } else if (userLang.startsWith('en')) {
      targetLang = 'en';
    }
    
    router.replace(`/${targetLang}`);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#08162E] to-[#13356e]">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300 animate-fade-in">
          <Image
            src={logo}
            alt="HebilBlue"
            width={200}
            height={133}
            className="drop-shadow-lg"
            priority
          />
        </div>

        <p className="text-lg text-white font-medium animate-pulse mb-4">
          Yönlendiriliyor...
        </p>


        {/* Loading Spinner */}
        <div className="flex justify-center mb-6 animate-fade-in-delayed">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-[#08162E] rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-[#13356e] rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
          </div>
        </div>

      </div>
    </div>
  );
}
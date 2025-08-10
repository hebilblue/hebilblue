"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface KVKKAlertProps {
  lang: string
}

export default function KVKKAlert({ lang }: KVKKAlertProps) {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const kvkkAccepted = localStorage.getItem('kvkk-accepted')
    if (!kvkkAccepted) {
        setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('kvkk-accepted', 'true')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('kvkk-accepted', 'false')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-[#C9B18B] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p lang={lang} className="text-sm text-gray-700 leading-relaxed">
              {lang === 'tr' ? (
                <>
                  Bu web sitesinde, deneyiminizi iyileştirmek ve KVKK kapsamında belirtilen amaçlarla kişisel verileriniz işlenmektedir. 
                  Detaylı bilgi için{' '}
                  <Link href={`/${lang}/kvkk`} className="text-[#C9B18B] underline font-medium cursor-pointer">
                    Aydınlatma Metnimizi
                  </Link>{' '}
                  inceleyebilirsiniz.
                </>
              ) : (
                <>
                  On this website, your personal data is processed to improve your experience and for the purposes specified within the scope of KVKK. 
                  For detailed information, you can review our{' '}
                  <Link href={`/${lang}/kvkk`} className="text-[#C9B18B] underline font-medium">
                    Privacy Notice
                  </Link>.
                </>
              )}
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              {lang === 'tr' ? 'Reddet' : 'Decline'}
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-[#C9B18B] hover:bg-[#C9B18B]/80 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              {lang === 'tr' ? 'Kabul Et' : 'Accept'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

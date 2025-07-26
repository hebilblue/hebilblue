import React from 'react'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-white absolute top-[-64px] md:top-[-140px] " style={{ WebkitTransform: 'translateZ(0)' }}>
      {children}
    </div>
  )
}

export default PageLayout

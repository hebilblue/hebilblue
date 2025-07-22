import React from 'react'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-white">
      {children}
    </div>
  )
}

export default PageLayout

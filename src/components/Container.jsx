import React from 'react'

const Container = ({ className, children }) => {
   return (
      <div className={`max-w-[600px] bg-white m-auto ${className}`}>{children}</div>
   )
}

export default Container
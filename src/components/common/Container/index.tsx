import React from 'react'
type ContainerProps = {
  children: React.ReactNode
  className?: string
}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`max-w-6xl px-9 md:px-[80px] mx-auto 2xl:px-0 ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  )
}

export default Container

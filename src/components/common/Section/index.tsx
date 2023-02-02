import React from 'react'
type SectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
}
const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <section
      id={id ? id : ''}
      className={`${className ? className : ''} overflow-x-hidden`}
    >
      {children}
    </section>
  )
}

export default Section

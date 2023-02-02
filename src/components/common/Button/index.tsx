import React from 'react'

// Type
export type BtnProps = {
  children?: React.ReactNode
  className?: string
  variant?: 'light' | 'dark'
  style?: React.CSSProperties
  onClick?: () => void
}

const Button: React.FC<BtnProps> = ({
  children,
  className,
  variant = 'light',
  style,
  onClick,
}) => {
  return (
    <>
      {variant === 'light' ? (
        <button
          className={`rounded-[15px] text-[20px] font-bold leading-[27px] capitalize max-w-[300px] w-full h-[70px] bg-yellowLight flex justify-center items-center ${
            className ? className : ''
          }`}
          style={style && style}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button
          className={`btn-dark duration-300 rounded-[15px] text-[20px] font-bold leading-[27px] capitalize max-w-[300px] w-full text-white h-[70px] bg-black flex justify-center items-center ${
            className ? className : ''
          }`}
          style={style && style}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  )
}

export default Button

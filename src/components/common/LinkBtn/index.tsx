import React from 'react'

// Component & its Type
import Button, { BtnProps } from '../Button'

// Global Type
import { ContentfulButtonType } from '../../../config/types'

type LinkBtnProps = ContentfulButtonType &
  BtnProps & {
    linkClass?: string
  }

const CommonButton: React.FC<BtnProps> = ({
  children,
  className,
  style,
  variant,
  onClick,
}) => (
  <Button
    className={className ? className : ''}
    variant={variant}
    style={style}
    onClick={onClick}
  >
    {children}
  </Button>
)

const LinkBtn: React.FC<LinkBtnProps> = ({
  className,
  style,
  variant,
  link,
  children,
  linkClass,
  onClick,
}) => {
  return (
    <>
      {link ? (
        <a
          className={`${linkClass ? linkClass : ''} w-full max-w-[300px] block`}
          href={link}
        >
          {
            <CommonButton className={className} style={style} variant={variant}>
              {children}
            </CommonButton>
          }
        </a>
      ) : (
        <CommonButton
          className={className}
          style={style}
          variant={variant}
          onClick={onClick}
        >
          {children}
        </CommonButton>
      )}
    </>
  )
}

export default LinkBtn

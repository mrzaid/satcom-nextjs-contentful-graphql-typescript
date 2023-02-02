import React from 'react'
import Link from 'next/link'
//
import SVG from 'react-inlinesvg'

type SvgButtonWrapperProps = {
  src: string
  slug?: string
  externalInternal?: 'External' | 'Internal'
  onClick?: () => void
  children: React.ReactNode
}
const SvgButton: React.FC<SvgButtonWrapperProps> = ({
  src,
  slug,
  externalInternal = 'Internal',
  children,
  onClick,
}) => {
  return (
    <React.Fragment>
      {slug ? (
        externalInternal === 'External' ? (
          <Link href={slug}>
            <a target={'_blank'}>
              <SVG src={src} className="w-full">
                {children}
              </SVG>
            </a>
          </Link>
        ) : (
          <Link href={slug}>
            <a href={slug}>
              <SVG src={src} className="w-full">
                {children}
              </SVG>
            </a>
          </Link>
        )
      ) : (
        <SVG src={src} className="w-full" onClick={onClick}>
          {children}
        </SVG>
      )}
    </React.Fragment>
  )
}

export default SvgButton

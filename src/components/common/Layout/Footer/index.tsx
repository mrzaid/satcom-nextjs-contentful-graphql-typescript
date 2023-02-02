import React from 'react'

// Next Components
import Link from 'next/link'
import Image from 'next/image'

// Components
import Button from '../../Button'
import Container from '../../Container'
import FooterOverlay from './FooterOverlay'
import RichTextRenderer from '../../RichTextRenderer'
import LinkBtn from '../../LinkBtn'

// Icons
import { FbIcon, LnkdIcon, YtIcon } from '../../Icons'

// Types
import {
  ContentfulButtonType,
  ContentfulRichTextType,
} from '../../../../config/types'
import SvgButton from '../../InlineSvgBtn'

export type OverlayProps = {
  text?: ContentfulRichTextType
  button?: ContentfulButtonType
}
type FooterProps = {
  footerData: {
    bg?: {
      url?: string
      title?: string
    }
    logo?: {
      url?: string
      title?: string
    }
    address?: ContentfulRichTextType
    contact?: {
      icon?: React.ReactNode
      title?: string
      type?: string
    }[]
    links?: {
      text?: string
      link?: string
    }[]
    formLabel?: string
    placeholder?: string
    btn?: ContentfulButtonType
    socials?: {
      text?: string
      socialIcons?: {
        link?: string
        text?: string
      }[]
    }
    bottomBarData?: React.ReactNode
    overlay?: {
      text?: ContentfulRichTextType
      btnText?: {
        text?: string
        link?: string
      }
    }
  }
}
const Footer: React.FC<FooterProps> = ({
  footerData: {
    address,
    bg,
    overlay,
    btn,
    contact,
    formLabel,
    links,
    logo,
    placeholder,
    socials,
    bottomBarData,
  },
}) => {
  const footerBtn = '/images/Common/submit.svg'
  return (
    <footer className="relative bg-gray">
      {overlay && (
        <FooterOverlay button={overlay?.btnText} text={overlay?.text} />
      )}
      <div className="absolute z-0 xl:top-0 top-[35%] sm:top-[50%] translate-y-[-50%] xl:translate-y-0 left-0 max-w-[686px] h-[465px] xl:max-w-[530px] sm:h-[847px] w-full xl:h-full">
        {bg?.url && (
          <Image
            src={bg?.url}
            alt={bg?.title}
            layout="fill"
            loading="eager"
            className="w-full h-full"
          />
        )}
      </div>
      <Container>
        <div className="pt-[170px] md:pt-[270px] xl:pt-[200px] relative flex flex-col justify-center xl:flex-row items-start xl:justify-center">
          <div className="flex flex-col items-start justify-center w-full md:flex-row xl:w-fit">
            <div className="flex h-full w-full flex-col items-start justify-start pr-4 md:pr-[50px]">
              <div className="w-[245px] h-[85px] relative">
                {logo?.url && (
                  <Image
                    src={logo?.url}
                    alt={logo?.title}
                    layout="fill"
                    loading="eager"
                    className="w-full h-full"
                  />
                )}
              </div>
              <div className="mt-5 max-w-[298px]">
                {address && (
                  <RichTextRenderer json={address?.json} options={address} />
                )}
              </div>
              <div className="flex flex-col items-start mt-5 max-w-[298px] justify-start gap-[10px]">
                {contact?.map(({ icon, title, type }, i) => (
                  <>
                    {type ? (
                      <a
                        key={i}
                        href={
                          type === 'email'
                            ? `mailto:${title}`
                            : type === 'number'
                            ? `tel:${title}`
                            : ''
                        }
                      >
                        <div className="flex max-w-[298px] flex-row items-center justify-start">
                          <i className="mr-[10px]">{icon}</i>
                          {title && <p>{title}</p>}
                        </div>
                      </a>
                    ) : (
                      <div
                        key={i}
                        className="flex max-w-[298px] flex-row items-center justify-start"
                      >
                        <i className="mr-[10px]">{icon}</i>
                        {title && <p>{title}</p>}
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>

            <div className="md:px-[50px] pl-4 h-full w-full py-7 md:border-l-[1px] xl:border-r-[1px] border-[#adadae]">
              <ul className="flex flex-col items-center justify-center gap-5 md:items-start">
                {links?.map(({ text, link }, i) => (
                  <li key={i}>
                    {link && (
                      <Link href={link === '/' ? link : `/${link}`}>
                        <p className="cursor-pointer border-b-yellowLight duration-75 hover:border-b-[3px] text-[18px] leading-[24px] xl:text-[22px] xl:leading-[32px] font-bold capitalize">
                          {text}
                        </p>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex xl:pl-[50px] xl:w-fit w-full mt-5 md:mt-[50px] xl:mt-0 h-full flex-col items-end justify-start">
            <div className="flex flex-col items-center justify-start w-full">
              {formLabel && (
                <p className="font-bold text-[22px] leading-[27px]">
                  {formLabel}
                </p>
              )}
              <input
                type={'email'}
                required
                placeholder={placeholder ? placeholder : ''}
                className="mt-5 max-w-[400px] w-full border-[1px] border-solid border-[#707070] px-5 py-4"
              />
              {btn && (
                <button className="relative h-[70px] xl:mt-[30px] mt-5 max-w-[300px] w-full">
                  <SvgButton src={footerBtn}>
                    <Image
                      src={footerBtn}
                      alt={'submit'}
                      objectFit="contain"
                      loading="eager"
                      layout="fill"
                      className="w-full h-full"
                    />
                  </SvgButton>
                </button>
              )}
            </div>
            <div className="flex items-center flex-wrap justify-between flex-row xl:w-fit w-full md:justify-center xl:justify-start md:items-start mt-6 md:mt-[50px] gap-5">
              <h2 className="uppercase xl:max-w-[154px] font-bold text-[35px] leading-[40px]">
                {socials?.text}
              </h2>
              <div className="flex flex-row justify-start items-center gap-[30px]">
                {socials?.socialIcons &&
                  socials?.socialIcons.map(
                    ({ text, link }, i) =>
                      link && (
                        <a target="_blank" rel="noreferrer" href={link} key={i}>
                          <i className="cursor-pointer">
                            {text?.toLowerCase() === 'facebook' ? (
                              <FbIcon />
                            ) : text?.toLowerCase() === 'linkedin' ? (
                              <LnkdIcon />
                            ) : text?.toLowerCase() === 'youtube' ? (
                              <YtIcon />
                            ) : null}
                          </i>
                        </a>
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pb-[23px] xl:pb-[27px] pt-[50px] md:pt-[100px] xl:pt-[71px]">
          {bottomBarData && (
            <div className="mx-auto text-center w-fit">{bottomBarData}</div>
          )}
        </div>
      </Container>
    </footer>
  )
}

export default Footer

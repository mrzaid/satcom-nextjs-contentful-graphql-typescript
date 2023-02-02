import React from 'react'

// Components
import Image from 'next/image'
import Button from '../Button'
import LinkBtn from '../LinkBtn'
import RichTextRenderer from '../RichTextRenderer'

// Richtext Options
import { getOptions } from '../../../utils/options'

// Type
import { ContentfulContentBlockType } from '../../../config/types'
import Link from 'next/link'
import SvgButton from '../InlineSvgBtn'

const defaultData = {
  type: 'Left Aligned',
  title: '',
  image: {
    url: '',
    title: '',
  },
  content: {
    json: undefined,
  },
  backgroundColor: '',
  backgroundWatermark: {
    url: '',
    title: '',
  },
  description: '',
  varaint: 'Image on Back',
  button: {
    text: '',
    link: '',
  },
}

type ContentProps = ContentfulContentBlockType & {
  variant?: 'Image on Back' | 'Image on Front'
  contentBg?: string
  contentColor?: string
}
const ContentWithImg: React.FC<ContentProps> = ({
  data = defaultData,
  variant,
  contentBg,
  contentColor,
}) => {
  const learnBtn = '/images/Common/learn-more.svg'
  return (
    <>
      {variant && variant === 'Image on Back' ? (
        <div
          className={`relative w-full flex flex-col 2xl:flex-row items-center ${
            data?.type === 'Left Aligned' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`relative z-[1] 2xl:z-[0] max-w-[95%] md:max-w-[90%] translate-y-[15%] md:translate-y-[10%] 2xl:translate-y-[0] h-[285px] md:h-[534px] 2xl:h-[700px] w-full 2xl:max-w-[912px] ${
              data?.type === 'Left Aligned'
                ? 'mr-auto 2xl:mr-[initial]'
                : 'ml-auto 2xl:ml-[initial]'
            }`}
          >
            {data?.image?.url && (
              <Image
                src={data.image.url}
                alt={data.image.title}
                layout="fill"
                objectFit="cover"
                loading="eager"
                className={`h-full w-full 
            ${
              data?.type === 'Left Aligned'
                ? 'xl:rounded-r-[0px] rounded-l-[50px] rounded-br-[50px]'
                : 'xl:rounded-l-[0px] rounded-r-[50px] rounded-bl-[50px]'
            }
            `}
              />
            )}
          </div>
          <div
            style={{ color: contentColor, backgroundColor: contentBg }}
            className={`relative 2xl:absolute z-[0] 2xl:translate-y-[5%] content ${
              data?.type === 'Left Aligned'
                ? 'bg-[#444] left-0  text-white'
                : 'right-0 bg-[#fff] text-black'
            } pt-[80px] px-5 pb-[30px] md:px-[50px] md:pb-[50px] md:pt-[100px] 2xl:px-[43px] 2xl:py-[46px] max-w-[100%] 2xl:max-w-[760px] w-full rounded-[50px] ${
              data?.type === 'Left Aligned'
                ? 'rounded-l-[0] 2xl:rounded-tr-[0] 2xl:rounded-l-[50px]'
                : 'rounded-r-[0] 2xl:rounded-tl-[0] 2xl:rounded-r-[50px]'
            }`}
          >
            {data?.content && (
              <RichTextRenderer
                json={data.content.json}
                options={getOptions(data.content)}
              />
            )}
            {data?.button && data?.button?.text && (
              <LinkBtn
                link={data.button.link}
                className="mx-auto duration-300 hover:bg-black hover:text-white mt-[30px] md:mt-10 text-black md:mx-[initial]"
              >
                {data.button.text}
              </LinkBtn>
            )}
          </div>
        </div>
      ) : (
        // Second Version
        <>
          {/* Desktop View */}
          <div
            className={`hidden 2xl:flex relative w-full flex-col mt-[117px] xl:flex-row items-center ${
              data?.type === 'Left Aligned' ? 'justify-start' : 'justify-end'
            }`}
          >
            <div
              className={`absolute z-[1] xl:z-[1] max-w-[534px] translate-y-[-10%] h-[534px] w-full ${
                data?.type === 'Left Aligned'
                  ? 'mr-auto 2xl:mr-[initial] right-0'
                  : 'ml-auto 2xl:ml-[initial] left-0'
              }`}
            >
              {data?.image?.url && (
                <Image
                  src={data.image.url}
                  alt={data.image.title}
                  layout="fill"
                  objectFit="cover"
                  loading="eager"
                  className={`h-full w-full 
          ${
            data?.type === 'Left Aligned'
              ? 'xl:rounded-tr-[0px] rounded-l-[50px] rounded-br-[50px]'
              : 'xl:rounded-tl-[0px] rounded-r-[50px] rounded-bl-[50px]'
          }
          `}
                />
              )}
            </div>
            <div
              className={`relative z-[0] 2xl:translate-y-[5%] text-black product-content ${
                data?.type === 'Left Aligned' ? 'bg-[#444] left-0' : 'right-0'
              }  max-w-[65%] w-full rounded-[50px] pt-[100px] pb-[120px] ${
                data?.type === 'Left Aligned'
                  ? 'rounded-l-[0] 2xl:rounded-tr-[0] 2xl:rounded-br-[0] 2xl:rounded-l-[50px] pr-[150px] pl-[100px]'
                  : 'rounded-r-[0] 2xl:rounded-tl-[0] 2xl:rounded-bl-[0] 2xl:rounded-r-[50px] pl-[150px] pr-[100px]'
              }`}
            >
              {data?.content && (
                <RichTextRenderer
                  json={data.content?.json}
                  options={getOptions(data.content)}
                />
              )}
              {data?.button && (
                <button className="mt-6 max-w-[260px] md:max-w-[300px]">
                  <SvgButton
                    src={learnBtn}
                    slug={data.button.link}
                    externalInternal="Internal"
                  >
                    <Image
                      src={learnBtn}
                      alt="button"
                      layout="fill"
                      className="w-full h-full"
                    />
                  </SvgButton>
                </button>
              )}
            </div>
          </div>
          {/* Responsive View */}
          <div
            className={`2xl:hidden relative w-full flex flex-col 2xl:flex-row items-center ${
              data?.type === 'Left Aligned' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`relative z-[1] 2xl:z-[0] max-w-[95%] md:max-w-[90%] translate-y-[15%] md:translate-y-[10%] 2xl:translate-y-[0] h-[285px] md:h-[534px] 2xl:h-[700px] w-full 2xl:max-w-[1050px] ${
                data?.type === 'Left Aligned'
                  ? '2xl:translate-x-[10%] mr-auto 2xl:mr-[initial]'
                  : '2xl:translate-x-[-10%] ml-auto 2xl:ml-[initial]'
              }`}
            >
              {data?.image?.url && (
                <Image
                  src={data.image.url}
                  alt={data.image.title}
                  layout="fill"
                  loading="eager"
                  objectFit="cover"
                  className={`h-full w-full 
            ${
              data?.type === 'Left Aligned'
                ? 'xl:rounded-r-[0px] rounded-l-[50px] rounded-br-[50px]'
                : 'rounded-l-[0px] rounded-r-[50px] rounded-bl-[50px]'
            }
            `}
                />
              )}
            </div>
            <div
              className={`relative 2xl:absolute text-black z-[0] 2xl:translate-y-[5%] product-content ${
                data?.type === 'Left Aligned' ? 'bg-[#444] left-0  ' : 'right-0'
              } pt-[80px] px-5 pb-[30px] md:px-[50px] md:pb-[50px] md:pt-[100px] 2xl:px-[43px] 2xl:py-[46px] max-w-[100%] 2xl:max-w-[760px] w-full rounded-[50px] ${
                data?.type === 'Left Aligned'
                  ? 'rounded-l-[0] 2xl:rounded-tr-[0] 2xl:rounded-l-[50px]'
                  : 'rounded-r-[0] 2xl:rounded-tl-[0] 2xl:rounded-r-[50px]'
              }`}
            >
              {data?.content && (
                <RichTextRenderer
                  json={data.content?.json}
                  options={getOptions(data.content)}
                />
              )}
              {data?.button && (
                <button className="mt-6 max-w-[260px] md:max-w-[300px]">
                  <SvgButton
                    src={learnBtn}
                    slug={data.button.link}
                    externalInternal="Internal"
                  >
                    <Image
                      src={learnBtn}
                      alt="button"
                      layout="fill"
                      className="w-full h-full"
                    />
                  </SvgButton>
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ContentWithImg

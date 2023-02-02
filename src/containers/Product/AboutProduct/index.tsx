import React from 'react'

// Components
import Image from 'next/image'
import {
  Container,
  RichTextRenderer,
  Section,
  TitleContent,
} from '../../../components/common'

// Richtext Options
import { getOptions } from '../../../utils/options'

// Type
import {
  ContentfulImageType,
  ContentfulRichTextType,
} from '../../../config/types'

type Props = {
  title?: string
  data?: {
    cardContent?: ContentfulRichTextType
    image?: ContentfulImageType
  }[]
}

const AboutProduct: React.FC<Props> = ({ data, title }) => {
  return (
    <Section className="relative about-product-section pt-[50px] pb-[221px] md:pb-[272px] md:pt-[100px] xl:pt-[150px] xl:pb-[300px]">
      <div className="absolute max-w-[1244px] w-full top-0 right-0 max-h-[330px] md:max-h-[668px] xl:max-h-[1080px] h-[100%]">
        <Image
          src={'/images/Product/AboutProduct/product-img.svg'}
          alt={'falcon'}
          layout="fill"
          className="w-full h-full"
          loading="eager"
        />
      </div>
      <Container className="relative">
        {title && <TitleContent iconColor="var(--white)" title={title} />}
        <div className="mt-[30px] md:mt-[50px] xl:mt-[90px] grid grid-cols-1 xl:grid-cols-2 gap-[30px] md:gap-[50px]">
          {data &&
            data.map(({ image, cardContent }, i) => (
              <div key={i}>
                <div className=" product-card flex flex-row justify-start items-start 2xl:bg-white md:items-center gap-5 xl:gap-[30px] p-5 md:px-[25px] md:pt-[27px] md:pb-9 xl:pr-[52px] bg-white rounded-[100px] rounded-tr-[0] rounded-bl-[0]">
                  <div className="mt-6 md:mt-0 card-icon relative max-w-[52px] w-full h-[52px] md:max-w-[64px] md:h-[64px]">
                    {image?.url && (
                      <Image
                        className="w-full h-full"
                        src={image.url}
                        alt={image.title}
                        layout="fill"
                        loading="eager"
                      />
                    )}
                  </div>
                  {cardContent && (
                    <div className="">
                      {cardContent && (
                        <RichTextRenderer
                          json={cardContent.json}
                          options={getOptions(cardContent)}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </Container>
    </Section>
  )
}

export default AboutProduct

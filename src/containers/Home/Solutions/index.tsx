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

// Types
import {
  ContentfulImageType,
  ContentfulRichTextType,
} from '../../../config/types'

type SectionProps = {
  data?: {
    items?: {
      cardContent?: ContentfulRichTextType
      image?: ContentfulImageType
    }[]
  }
  title?: string
}

const Solutions: React.FC<SectionProps> = ({ data, title }) => {
  return (
    <Section className="pt-[50px] pb-[221px] md:pt-[100px] md:pb-[274px] xl:pt-[150px] xl:pb-[200px] sols-section">
      <Container>
        {title && <TitleContent iconColor="#fff" title={title} />}
        <div className="mt-[50px] md:mt-[90px] grid grid-cols-1 xl:grid-cols-2  gap-[50px] 2xl:gap-[144px] row">
          {data?.items &&
            data.items.map((item: any, i: number) => (
              <div
                className="flex flex-col md:flex-row justify-start items-start gap-5 md:gap-[50px]"
                key={i}
              >
                <div className="max-w-[186px] mx-auto md:mr-auto w-full h-[240px] rounded-[30px] overflow-hidden rounded-tr-[0] relative">
                  {item.image.url && (
                    <Image
                      src={item.image.url}
                      alt={item.image.title}
                      layout="fill"
                      loading="eager"
                      className="w-full h-full"
                      objectFit="cover"
                    />
                  )}
                </div>
                <div className="w-full open-sans xl:max-w-[300px] 2xl:max-w-[374px]">
                  {item.cardContent && (
                    <RichTextRenderer
                      json={item.cardContent.json}
                      options={getOptions(item.content)}
                    />
                  )}
                </div>
              </div>
            ))}
        </div>
      </Container>
    </Section>
  )
}

export default Solutions

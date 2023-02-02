import React from 'react'

// Components
import Image from 'next/image'
import { RichTextRenderer } from '../common'

// Icons
import { Circle, LineHorizontal, LineVertical } from '../common/Icons'

// Richtext Options
import { getOptions } from '../../utils/options'

// Types
import { ContentfulImageType, ContentfulRichTextType } from '../../config/types'

type CardProps = {
  data?: {
    cardContent?: ContentfulRichTextType
    image?: ContentfulImageType
  }
  index?: number
}
const ProductFeatureCard: React.FC<CardProps> = ({ data, index = 0 }) => {
  let alignmentGenerator = () => {
    if ((index + 1) % 4 === 1) {
      return 'left'
    }
    if ((index + 1) % 4 === 2) {
      return 'right'
    }
    if ((index + 1) % 4 === 3) {
      return 'left'
    }
    if ((index + 1) % 4 === 0) {
      return 'right'
    } else return 'left'
  }
  let borderGenerator = () => {
    if ((index + 1) % 4 === 1) {
      return 'border-tl'
    }
    if ((index + 1) % 4 === 2) {
      return 'border-tr'
    }
    if ((index + 1) % 4 === 3) {
      return 'border-bl'
    }
    if ((index + 1) % 4 === 0) {
      return 'border-br'
    } else return 'border-tl'
  }

  let alignment = alignmentGenerator()
  return (
    <div className="flex relative flex-col md:flex-row md:justify-between md:items-start gap-[30px] md:gap-[50px] xl:gap-[72px]">
      <div
        className={`flex flex-col justify-start items-start text-white order-1 ${
          alignment === 'right' ? 'md:order-2' : ''
        }`}
      >
        {data?.cardContent && (
          <RichTextRenderer
            json={data.cardContent.json}
            options={getOptions(data.cardContent)}
          />
        )}
      </div>
      <div
        className={`max-w-[186px] overflow-hidden mx-auto min-w-[186px] ${borderGenerator()} border-yellowDark rounded-[30px] border-[3px] flex-grow relative min-h-[240px] h-full order-2 ${
          alignment === 'right' ? 'md:order-1' : ''
        }`}
      >
        {data?.image?.url && (
          <Image
            src={data.image.url}
            alt={data.image.title}
            layout="fill"
            loading="eager"
            objectFit="cover"
            className="w-full h-full"
          />
        )}
      </div>
      {/* SVGs */}
      {(index + 1) % 4 === 1 || (index + 1) % 4 === 3 ? (
        <i
          className={`hidden xl:block absolute right-[-52px] ${
            (index + 1) % 4 === 1 ? 'bottom-0' : 'top-0'
          }`}
        >
          <LineVertical />
        </i>
      ) : null}
      {(index + 1) % 4 === 1 ? (
        <i className="hidden xl:block absolute bottom-[-50px] right-[-50px] translate-x-[50%] translate-y-[50%]">
          <Circle />
        </i>
      ) : null}
      {(index + 1) % 4 === 3 || (index + 1) % 4 === 0 ? (
        <i
          className={`hidden xl:block absolute top-[-52px] ${
            (index + 1) % 4 === 3 ? 'right-0' : 'left-0'
          }`}
        >
          <LineHorizontal />
        </i>
      ) : null}
    </div>
  )
}

export default ProductFeatureCard

import React from 'react'

// Components
import { Container, Section, TitleContent } from '../../../components/common'
import ProductFeatureCard from '../../../components/ProductFeatureCard'

// Types
import { ContentfulImageType, ContentfulRichTextType } from '../../../config/types'

type SectionProps = {
  data? : {
    items? :{
      cardContent? : ContentfulRichTextType,
      image?: ContentfulImageType
    }[]
  }
  title? : string
}

const ProductFeatures: React.FC<SectionProps> = ({title,data}) => {
  return (
    <Section className="py-[50px] md:py-[100px] xl:pt-[150px] xl:pb-[200px] features-section">
      <Container>
        {title && <TitleContent
          iconColor="var(--yellow-light)"
          title={title}
          className="text-white"
        />}
        <div className="mt-[50px] xl:mt-[125px] grid grid-cols-1 xl:grid-cols-2 gap-[30px] md:gap-[50px] xl:gap-[100px]">
          {data?.items &&
            data.items.map((data, i) => (
              <ProductFeatureCard
               data={data}
               index={i}
               key={i}
              />
            ))}
        </div>
      </Container>
    </Section>
  )
}

export default ProductFeatures

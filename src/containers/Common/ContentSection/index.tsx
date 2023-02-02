import React from 'react'

// Components
import Image from 'next/image'
import {
  Container,
  ContentWithImg,
  Section,
  TitleContent,
} from '../../../components/common'




const ContentSection: React.FC<any> = ({data}) => {
  return (
    <Section
      id={`${data.sectionId || ''}`}
      className={`py-[50px] md:py-[100px] xl:pt-[150px] xl:pb-[200px] relative ${data?.backgroundColor === 'Yellow' ? 'yellow-gradient-bg' : data?.backgroundColor === 'Grey' ? 'grey-bg':'bg-white' }`}
    >
      <Container>
        <div className={`max-w-[470px] w-full h-full absolute top-3 ${data?.type === 'Left Aligned'?'max-h-[340px] xl:max-w-[680px]  xl:max-h-[491px] right-0 xl:left-0':'max-h-[410px] xl:max-w-[680px] xl:max-h-[591px] right-0'}`}>
          {data?.backgroundWatermark?.url && <Image
            src={data.backgroundWatermark.url}
            alt={data.backgroundWatermark.title}
            layout="fill"
            className="w-full h-full"
          />}
        </div>
        {data?.title && <TitleContent iconColor={`${data?.backgroundColor === 'Yellow' ? '#fff':'var(--yellow-light)'}`} text={data.description} title={data.title} className="mb-[30px] md:mb-[50px] xl:mb-[33px]" />}
        <ContentWithImg data={data} variant={data.variant} />
      </Container>
    </Section>
  )
}

export default ContentSection

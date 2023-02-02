import React from 'react'
import { ContentfulHeroType } from '../../../config/types'

// Containers
import Hero from '../../Common/Hero'

const ContentHero: React.FC<ContentfulHeroType> = ({data}) => {
  return (
    <Hero
      data={data}
      className="support-hero-section bg-gray pt-[50px] pb-[100px] md:py-[50px] xl:py-[200px]"
      variant='secondary'
    />
  )
}

export default ContentHero

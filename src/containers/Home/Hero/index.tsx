import React from 'react'

// Containers
import Hero from '../../Common/Hero/index'

// Types
import { ContentfulHeroType } from '../../../config/types'

const HomeHero: React.FC<ContentfulHeroType> = (props) => {
  const { data } = props

  return (
    <Hero
      data={data}
      className="pt-[25px] pb-[350px] md:pt-[50px] md:pb-[520px] xl:py-[300px]"
    />
  )
}

export default HomeHero

import React from 'react'

// Container
import Hero from '../../Common/Hero'


// Types
import { ContentfulHeroType } from '../../../config/types'

const ProductHero: React.FC<ContentfulHeroType> = ({data}) => {
  return (
    <Hero
      data={data}
      className="pt-[25px] pb-[350px] md:pt-[50px] md:pb-[520px] xl:py-[300px]"
      variant='primary'
    />
  )
}

export default ProductHero

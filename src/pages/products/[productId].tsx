import React from 'react'

// Containers
import ProductHero from '../../containers/Product/Hero'
import Products from '../../containers/Product/Products'
import ProductFeatures from '../../containers/Product/ProductFeatures'
import AboutProduct from '../../containers/Product/AboutProduct'

// Components
import SEO from '../../components/common/Seo'

// Data Fetching Function
import { fetchContent } from '../../handlers'

// Query
import { ProductPageQuery, WebsiteDetailsQuery } from '../../query'

// Global Types
import { PageProps } from '../../config/types'

const Product: React.FC<PageProps> = ({data}) => {
  const {metaTitle,metaImage,metaDescription,hero,contentBlocksCollection,businessProductTitle,businessProductCardsCollection,keyProductTitle,keyProductCardsCollection} = data

  return (
    <>
      <SEO description={metaDescription} title={metaTitle} image={metaImage} />
      <ProductHero data={hero} />
      <Products items={contentBlocksCollection} />
      <ProductFeatures data={keyProductCardsCollection} title={keyProductTitle} />
      <AboutProduct data={businessProductCardsCollection.items} title={businessProductTitle} />
    </>
  )
}

export async function getStaticPaths() {
  const fetchedContent = await fetchContent(ProductPageQuery)
  let paths = fetchedContent?.data?.productPageCollection?.items.map(
    (page: any) => ({
      params: { productId: page.slug },
    })
    )
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  }
}


export async function getStaticProps(context: any) {
  const { params } = context
  const websiteDetails = await fetchContent(WebsiteDetailsQuery)
  const fetchedContent = await fetchContent(ProductPageQuery)
  const mainData =
    fetchedContent?.data?.productPageCollection?.items?.find(
      (item: any) => item.slug === params.productId
    ) || {}

  return {
    props: {
      data: mainData,
      websiteDetails: websiteDetails?.data?.websiteDetailsCollection?.items[0],
    },
  }
}

export default Product

import React from 'react'

// Containers
import Hero from '../containers/Content/Hero'
import AboutPackage from '../containers/Content/AboutPackage'
import DataPlans from '../containers/Content/DataPlans'
import Help from '../containers/Content/Help'
import LegalDocs from '../containers/Content/LegalDocs'

// Components
import SEO from '../components/common/Seo'

// Data Fetching Function
import { fetchContent } from '../handlers'

// GraphQl query for Content Page
import { ContentPageQuery, WebsiteDetailsQuery } from '../query'

// Types
import { PageProps } from '../config/types'

const Support: React.FC<PageProps> = ({data}) => {
  
  const {metaTitle,metaDescription,metaImage,hero,contentText,contentTitle,dataPlans,helpContent,helpTitle,legalDocsTitle,legalDocsDescription,legalDocsCardsCollection} = data

  return (
    <>
      <SEO description={metaDescription} title={metaTitle} image={metaImage} />
      <Hero data={hero} />
      <AboutPackage title={contentTitle} content={contentText} />
      <DataPlans data={dataPlans} />
      <Help details={helpContent} title={helpTitle} />
      <LegalDocs data={legalDocsCardsCollection.items} description={legalDocsDescription} title={legalDocsTitle} />
    </>
  )
}

export async function getStaticPaths() {
  const fetchedContent = await fetchContent(ContentPageQuery)
  let paths = fetchedContent?.data?.contentPageCollection?.items.map(
    (page: any) => ({
      params: { id: page.slug },
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
  const fetchedContent = await fetchContent(ContentPageQuery)
  const mainData =
    fetchedContent?.data?.contentPageCollection?.items?.find(
      (item: any) => item.slug === params.id
    ) || {}

  return {
    props: {
      data: mainData,
      websiteDetails: websiteDetails?.data?.websiteDetailsCollection?.items[0],
    },
  }
}

export default Support

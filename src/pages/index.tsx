// Homepage Containers
import DataPlans from '../containers/Home/DataPlans'
import HomeHero from '../containers/Home/Hero'
import HomeContentSection from '../containers/Home/HomeContentSection'
import Solutions from '../containers/Home/Solutions'

// Components
import SEO from '../components/common/Seo'

// Global Types
import { PageProps } from '../config/types'

// Data Fetching Function
import { fetchContent } from '../handlers'

// Query
import { HomePageQuery, WebsiteDetailsQuery } from '../query'

// Type 

type SendSectionID = any

const Home: React.FC<PageProps & SendSectionID> = ({data,websiteDetails : {header}}) => {
  const { metaTitle,hero,metaImage,metaDescription,contentBlocksCollection,dataPlans,solutionsTitle,solutionsCardsCollection } = data 
  const links = header?.linksCollection?.items
  return (
    <>
      <SEO description={metaDescription} title={metaTitle} image={metaImage} />
      <HomeHero data={hero} />
      <HomeContentSection items={contentBlocksCollection} />
      <DataPlans data={dataPlans} />
      <Solutions data={solutionsCardsCollection} title={solutionsTitle} />
    </>
  )
}


export async function getStaticProps() {
  const fetchedContent = await fetchContent(HomePageQuery)
  const websiteDetails = await fetchContent(WebsiteDetailsQuery)
  return {
    props: {
      websiteDetails: websiteDetails?.data?.websiteDetailsCollection?.items[0],
      data: fetchedContent?.data?.homePageCollection?.items[0]
    },
  }
}


export default Home

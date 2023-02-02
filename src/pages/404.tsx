import React from 'react'
import { fetchContent } from '../handlers'
import { WebsiteDetailsQuery } from '../query'

const NotFound = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center'><h2>Page Not found</h2></div>
  )
}
export async function getStaticProps() {
    const websiteDetails = await fetchContent(WebsiteDetailsQuery)
    return {
      props: {
        websiteDetails: websiteDetails?.data?.websiteDetailsCollection?.items[0],
        // data: fetchedContent?.data?.homePageCollection?.items[0]
      },
    }
  }
  
export default NotFound
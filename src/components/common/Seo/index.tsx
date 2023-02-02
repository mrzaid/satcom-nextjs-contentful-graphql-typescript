import Head from 'next/head'

// Type
import { ContentfulImageType } from '../../../config/types'
type Props = {
  title?: string
  description?: string
  image?: ContentfulImageType
}
const SEO: React.FC<Props> = ({ title, description, image }) => {
  return (
    <Head>
      {/* title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="twitter::title" content={title} />
      {/* description */}
      {description && <meta name="description" content={description} />}
      {description && <meta name="og:description" content={description} />}
      {description && <meta name="twitter::description" content={title} />}
      {/* image */}
      {image && <meta name="og:image" content={image.url} />}
    </Head>
  )
}

export default SEO
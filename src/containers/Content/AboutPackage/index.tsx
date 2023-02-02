import React from 'react'

// Components
import {
  Container,
  RichTextRenderer,
  Section,
  TitleContent,
} from '../../../components/common'

// Contentful RichText Options
import { getOptions } from '../../../utils/options'

// Contentful type
import { ContentfulRichTextType } from '../../../config/types'

type AboutPkgProps = {
  title?: string
  content?: ContentfulRichTextType
}

const AboutPackage: React.FC<AboutPkgProps> = ({ title, content }) => {
  return (
    <Section className="py-[50px] md:py-[100px] xl:py-[150px]">
      <Container>
        <div>
          {title && <TitleContent title={title} />}
          {content && (
            <div className="mt-[50px]">
              <RichTextRenderer json={content?.json} options={getOptions(content)} />
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

export default AboutPackage

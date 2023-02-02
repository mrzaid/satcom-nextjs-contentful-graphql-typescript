import React from 'react'

// Components
import {
  Container,
  LinkBtn,
  RichTextRenderer,
  Section,
  TitleContent,
} from '../../../components/common'

// Richtext Options
import { getOptions } from '../../../utils/options'

// Types
import { ContentfulButtonType, ContentfulRichTextType } from '../../../config/types'
type LegalProps = {
  title? :string,
  description? : ContentfulRichTextType
  data? : {
    button? : ContentfulButtonType,
    content? : ContentfulRichTextType
  }[]
}

const LegalDocs: React.FC<LegalProps> = ({data,description,title}) => {

  return (
    <Section className="legalDocs-section pt-[50px] pb-[231px] md:pt-[100px] md:pb-[274px] xl:pt-[150px] xl:pb-[219px]">
      <Container>
       {title && <TitleContent title={title} iconColor="var(--white)" />}
        {description && <div className="mt-5">
          <RichTextRenderer json={description.json} options={getOptions(description)} />
        </div>}
        <div className="card-container mt-[50px] gap-[50px] xl:gap-[100px]  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 rounded-[50px] rounded-tr-[0] rounded-bl-[0] py-[30px] px-[40px] md:p-[50px] xl:px-[142px] xl:py-[105px]">
          {data && data.map(({ button, content }, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-end gap-5 md:items-start"
            >
             {content && <div className="open-sans text-[22px]">
              <RichTextRenderer json={content.json} options={getOptions(content)} />
              </div>}
              {button && <LinkBtn link={button.link} variant="dark" className="h-[52px] max-w-[222px]">
                {button.text}
              </LinkBtn>}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default LegalDocs

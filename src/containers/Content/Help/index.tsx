import React from 'react'

// Components
import {
  Container,
  LinkBtn,
  RichTextRenderer,
  Section,
  TitleContent,
} from '../../../components/common'

// RichText Options
import { getOptions } from '../../../utils/options'

// Types
import {
  ContentfulButtonType,
  ContentfulRichTextType,
} from '../../../config/types'
import Link from 'next/link'
import Image from 'next/image'
import SvgButton from '../../../components/common/InlineSvgBtn'

type HelpProps = {
  title?: string
  details?: {
    content?: ContentfulRichTextType
    button?: ContentfulButtonType
  }
}

const Help: React.FC<HelpProps> = ({ details, title }) => {
  const helpBtn = '/images/Content/Help/start-talking.svg'
  return (
    <Section className="help-section bg-dark py-[50px] md:py-[100px] xl:pt-[150px] xl:pb-[200px]">
      <Container>
        {title && (
          <TitleContent
            iconColor="var(--yellow-light)"
            className="text-white"
            title={title}
          />
        )}
        <div className="mt-[30px] max-w-[674px] mb-[50px]">
          {details?.content && (
            <div className="text-white">
              <RichTextRenderer
                json={details.content.json}
                options={getOptions(details.content)}
              />
            </div>
          )}
        </div>
        {details?.button && (
          <div className="">
            <button>
              <SvgButton
                src={helpBtn}
                externalInternal="External"
                slug={details.button.link}
              >
                <Image
                  src={helpBtn}
                  alt="button"
                  layout="fill"
                  className="w-full h-full"
                />
              </SvgButton>
            </button>
          </div>
        )}
      </Container>
    </Section>
  )
}

export default Help

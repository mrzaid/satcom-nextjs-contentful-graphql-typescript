import React, { useState } from 'react'

// Components
import Image from 'next/image'
import {
  Container,
  Section,
  RichTextRenderer,
} from '../../../components/common'
import SvgButton from '../../../components/common/InlineSvgBtn'

// Icons
import { TitleIcon } from '../../../components/common/Icons'

// Richtext Options
import { getOptions } from '../../../utils/options'

// Types
import { ContentfulHeroType } from '../../../config/types'
import Modal from '../../../components/common/Modal'
import Form from '../../../components/common/ModalForm'

type HeroProps = {
  className?: string
  variant?: 'primary' | 'secondary'
}
const Hero: React.FC<ContentfulHeroType & HeroProps> = ({
  className,
  variant = 'primary',
  data,
}) => {
  const [modal, setModal] = useState<boolean>(false)

  const contactBtn = '/images/Common/contact.svg'
  const learnBtn = '/images/Common/learn-more.svg'
  const bg = '/images/Common/Hero/bg.png'
  const img = '/images/Content/Hero/hero-img.png'

  const closeModal = () => {
    setModal(false)
  }
  const openModal = () => {
    setModal(true)
  }
  return (
    <>
      <Section className={`relative bg-gray `}>
        <Container
          className={`${variant === 'primary' ? 'xl:relative' : ''} ${
            className ? className : ''
          }`}
        >
          <div className="flex flex-col gap-[50px] items-center justify-between xl:flex-row">
            <div className="relative z-[2] xl:max-w-[597px]">
              {data?.title && (
                <h1 className="mb-[10px] md:mb-4">{data.title}</h1>
              )}

              <i>
                <TitleIcon color="var(--yellow-light)" />
              </i>

              {data?.description && (
                <div className="mt-5">
                  <RichTextRenderer
                    json={data.description?.json}
                    options={getOptions(data.description)}
                  />
                </div>
              )}
              {data?.button && (
                <button className="mt-2 md:mt-1" onClick={openModal}>
                  {data.button.text?.toLowerCase() === 'learn more' ? (
                    <SvgButton
                      src={learnBtn}
                      // externalInternal="External"
                      // slug={data.button.link}
                    >
                      <Image
                        src={learnBtn}
                        alt="header button"
                        layout="fill"
                        className="w-full h-full"
                      />
                    </SvgButton>
                  ) : (
                    <SvgButton
                      src={contactBtn}

                      // externalInternal="External"
                      // slug={data.button.link}
                    >
                      <Image
                        src={contactBtn}
                        alt="header button"
                        layout="fill"
                        className="w-full h-full"
                      />
                    </SvgButton>
                  )}
                </button>
              )}
            </div>
            {variant === 'primary' ? (
              <>
                <div className="bg absolute bottom-[0%] xl:right-[80px] 2xl:right-0 max-w-[270px] h-[250px] md:max-w-[400px] md:h-[350px] xl:max-w-[500px] xl:h-[665px] 2xl:max-w-[550px] 2xl:h-[665px] w-full">
                  <Image
                    src={bg}
                    alt={'bg'}
                    layout="fill"
                    className="w-full h-full"
                    loading="eager"
                  />
                </div>
                {data?.image?.url ? (
                  <div className="image absolute bottom-[0%] xl:bottom-[unset] 2xl:right-[-5%] xl:right-[3%] md:max-w-[500px] md:h-[500px] max-w-[380px] h-[350px] xl:max-w-[640px] xl:h-[640px] 2xl:max-w-[730px] 2xl:h-[685px] w-full">
                    {data.image.url && (
                      <Image
                        src={data.image.url}
                        alt={data.image.title}
                        layout="fill"
                        className="w-full h-full"
                        loading="eager"
                      />
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </>
            ) : data?.image?.url ? (
              <div className="relative max-w-[300px] h-[280px]  md:max-w-[509px] md:h-[465px] w-full">
                {data.image.url && (
                  <Image
                    src={data.image.url}
                    alt={data.image.title}
                    layout="fill"
                    className="w-full h-full"
                    loading="eager"
                  />
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </Container>
      </Section>
      {modal && (
        <Modal onClose={closeModal}>
          <Form />
        </Modal>
      )}
    </>
  )
}

export default Hero

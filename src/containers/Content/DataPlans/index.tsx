import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

// Components
import {
  Container,
  Section,
  TitleContent,
  Card,
  RichTextRenderer,
  LinkBtn,
} from '../../../components/common'
import SvgButton from '../../../components/common/InlineSvgBtn'
import Modal from '../../../components/common/Modal'
import Form from '../../../components/common/ModalForm'

// type
type SectionProps = {
  data?: any
}

const DataPlans: React.FC<SectionProps> = ({ data }) => {
  const [modal, setModal] = useState<boolean>(false)
  const closeModal = () => {
    setModal(false)
  }
  const openModal = () => {
    setModal(true)
  }
  const learnBtn = '/images/Common/learn-more.svg'
  const planBtn = '/images/Common/see-plans.svg'
  return (
    <Section className="py-[50px] md:py-[100px] xl:py-[150px] bg-gray">
      <Container>
        {data?.title && (
          <TitleContent iconColor="var(--yellow-light)" title={data.title} />
        )}
        {data?.description && (
          <div className="w-full text-white eurostile px-[30px] py-4 text-center bg-dark rounded-[30px] rounded-tr-[0] rounded-bl-[0] mt-[50px]">
            <RichTextRenderer json={data.description.json} />
          </div>
        )}
        <div className="mt-[50px]">
          {data?.featuredTitle && (
            <div className="mb-[50px]">
              <RichTextRenderer json={data.featuredTitle.json} />
            </div>
          )}
          <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-7 2xl:gap-[85px]">
            {data?.featuredCardsCollection &&
              data.featuredCardsCollection.items.map((item: any, i: number) => (
                <Card
                  cardData={item}
                  key={i}
                  showBtn="yes"
                  style={{ maxWidth: '100%' }}
                  openModal={true}
                  onClick={openModal}
                />
              ))}
          </div>
          {data?.featuredButton && (
            <div className="w-full flex flex-row justify-center mt-[50px] md:hidden">
              <button>
                <SvgButton src={planBtn} slug={data.featuredButton.link}>
                  <Image
                    src={planBtn}
                    alt="button"
                    layout="fill"
                    className="w-full h-full"
                  />
                </SvgButton>
              </button>
            </div>
          )}
          {data?.businessTitle && (
            <div className="mb-[50px] mt-[50px]">
              <RichTextRenderer json={data.businessTitle.json} />
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] xl:gap-[85px]">
            {data?.businessCardsCollection?.items &&
              data.businessCardsCollection?.items.map(
                (item: any, i: number) => (
                  <Card cardData={item} key={i} style={{ maxWidth: '100%' }} />
                )
              )}
          </div>
          {data?.businessButton && (
            <div className="w-full flex flex-row justify-center mt-[50px] md:hidden">
              <button>
                <SvgButton src={planBtn} slug={data.businessButton.link}>
                  <Image
                    src={planBtn}
                    alt="button"
                    layout="fill"
                    className="w-full h-full"
                  />
                </SvgButton>
              </button>
            </div>
          )}
        </div>
      </Container>
      {modal && (
        <Modal onClose={closeModal}>
          <Form />
        </Modal>
      )}
    </Section>
  )
}

export default DataPlans

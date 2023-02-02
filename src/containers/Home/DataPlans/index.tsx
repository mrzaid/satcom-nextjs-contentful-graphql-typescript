import React, { useEffect, useRef, useState } from 'react'

// Components
import {
  Container,
  Section,
  TitleContent,
  Card,
  RichTextRenderer,
  LinkBtn,
} from '../../../components/common'
import Link from 'next/link'
import Image from 'next/image'
import Modal from '../../../components/common/Modal'
import Form from '../../../components/common/ModalForm'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Icons
import { ArrowLeft } from '../../../components/common/Icons'

// Richtext Options
import { getOptions } from '../../../utils/options'
import SvgButton from '../../../components/common/InlineSvgBtn'

// Type
type SectionProps = {
  data?: any
}

const DataPlans: React.FC<SectionProps> = ({ data }) => {
  const learnBtn = '/images/Common/learn-more.svg'
  const planBtn = '/images/Common/see-plans.svg'
  const mySwiper = useRef<any>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isEnd, setIsEnd] = useState(false)
  const [isBeginnig, setIsBeginning] = useState(false)

  const mySwiper2 = useRef<any>(null)
  const [currentSlide2, setCurrentSlide2] = useState(0)
  const [isEnd2, setIsEnd2] = useState(false)
  const [isBeginnig2, setIsBeginning2] = useState(false)
  const [modal, setModal] = useState<boolean>(false)

  const swipePrev = () => {
    mySwiper.current.slidePrev?.()
  }
  const swipeNext = () => {
    mySwiper.current?.slideNext?.()
  }

  const swipePrev2 = () => {
    mySwiper2.current.slidePrev?.()
  }
  const swipeNext2 = () => {
    mySwiper2.current?.slideNext?.()
  }

  const closeModal = () => {
    setModal(false)
  }
  const openModal = () => {
    setModal(true)
  }

  useEffect(() => {
    if (modal) {
      window.document.body.style.height = '100vh'
      window.document.body.style.overflow = 'hidden'
    } else {
      window.document.body.style.height = 'fit-content'
      window.document.body.style.overflow = 'auto'
    }
  }, [modal])
  return (
    <>
      <Section
        id={`${data.sectionId || ''}`}
        className="py-[50px] md:py-[100px] xl:pt-[150px]  xl:pb-[200px]"
      >
        <Container>
          {data?.title && <TitleContent title={data.title} />}
          <div className="uppercase mt-[30px] md:mt-[50px] block xl:hidden">
            {data?.featuredTitle && (
              <RichTextRenderer
                json={data.featuredTitle.json}
                options={getOptions(data.featuredTitle)}
              />
            )}
          </div>
          <div className="relative mt-[30px] md:mt-[50px] xl:mt-[150px]">
            <Swiper
              style={{ height: '100%' }}
              modules={[Pagination]}
              breakpoints={{
                1280: {
                  spaceBetween: 85,
                  slidesPerGroup: 3,
                  slidesPerView: 3,
                },
                768: {
                  spaceBetween: 25,
                  slidesPerGroup: 2,
                  slidesPerView: 2,
                },
              }}
              slidesPerView={'auto'}
              spaceBetween={10}
              pagination={{ clickable: true }}
              loop={true}
              slidesPerGroup={1}
              onSlideChange={(e) => {
                setIsEnd(e.isEnd)
                setIsBeginning(e.isBeginning)
                setCurrentSlide(e.realIndex)
              }}
              onInit={(ev) => {
                setIsBeginning(ev.isBeginning)

                mySwiper.current = ev
              }}
            >
              {data?.featuredCardsCollection &&
                data.featuredCardsCollection.items.map(
                  (item: any, i: number) => (
                    <SwiperSlide key={i} style={{ height: '100%' }}>
                      <Card
                        cardData={item}
                        openModal={true}
                        onClick={openModal}
                      />
                    </SwiperSlide>
                  )
                )}
            </Swiper>
            <button
              onClick={swipePrev}
              className="absolute h-fit lg:top-[40%] translate-y-[-100%] left-0 md:left-[-16px] z-10 translate-x-[-100%] bottom-[55%]"
            >
              <i className="slider-arrow">
                <ArrowLeft />
              </i>
            </button>
            <button
              onClick={swipeNext}
              className="absolute h-fit lg:top-[40%]  right-0 md:right-[-16px] translate-y-[-100%] translate-x-[100%] bottom-[55%] z-10 rotate-180"
            >
              <i className="slider-arrow">
                <ArrowLeft />
              </i>
            </button>
            {data?.featuredButton && (
              <div className="w-full flex flex-row justify-center mt-[50px] xl:z-[1] xl:absolute xl:translate-y-[35%] xl:m-0 xl:w-fit xl:right-0 xl:bottom-0">
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
          </div>
          <div className="mt-[50px] xl:mt-[72px]">
            {/* Desktop View */}
            <div className="hidden grid-cols-2 gap-[86px] xl:grid">
              {data?.businessCardsCollection &&
                data.businessCardsCollection.items.map(
                  (item: any, i: number) => <Card cardData={item} key={i} openModal={true} onClick={()=>openModal()} />
                )}
            </div>
            <div className="uppercase mt-[50px] block xl:hidden">
              {data?.businessTitle && (
                <RichTextRenderer
                  json={data?.businessTitle.json}
                  options={getOptions(data.businessTitle)}
                />
              )}
            </div>
            {/* Responsive View of Cards */}
            <div className="relative block xl:hidden mt-[30px] md:mt-[50px]">
              <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={50}
                pagination={{ clickable: true }}
                loop={true}
                slidesPerGroup={1}
                onSlideChange={(e) => {
                  setIsEnd2(e.isEnd)
                  setIsBeginning2(e.isBeginning)
                  setCurrentSlide2(e.realIndex)
                }}
                onInit={(ev) => {
                  setIsBeginning2(ev.isBeginning)
                  mySwiper2.current = ev
                }}
              >
                {data?.businessCardsCollection &&
                  data.businessCardsCollection.items.map(
                    (item: any, i: number) => (
                      <SwiperSlide key={i}>
                        <Card cardData={item} openModal={true} onClick={()=>openModal()} />
                      </SwiperSlide>
                    )
                  )}
              </Swiper>
              <button
                onClick={swipePrev2}
                className="absolute h-fit lg:top-[40%] translate-y-[-100%] left-0 md:left-[-16px] z-10 translate-x-[-100%] bottom-[55%]"
              >
                <i className="slider-arrow">
                  <ArrowLeft />
                </i>
              </button>
              <button
                onClick={swipeNext2}
                className="absolute h-fit lg:top-[40%] right-0 md:right-[-16px] translate-y-[-100%] translate-x-[100%] bottom-[55%] z-10 rotate-180"
              >
                <i className="slider-arrow">
                  <ArrowLeft />
                </i>
              </button>

              {data.businessButton.text && (
                <div className="w-full flex flex-row justify-center mt-[50px] xl:hidden">
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
          </div>
        </Container>
      </Section>
      {modal && (
        <Modal onClose={closeModal}>
          <Form closeModal={closeModal} />
        </Modal>
      )}
    </>
  )
}

export default DataPlans

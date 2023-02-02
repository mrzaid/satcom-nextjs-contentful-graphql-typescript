import React from 'react'

// Components
import LinkBtn from '../LinkBtn'

// Types
import { ContentfulPlanCardType } from '../../../config/types'
import SvgButton from '../InlineSvgBtn'
import Button from '../Button'

type CardProps = {
  showBtn?: 'no' | 'yes' | 'default'
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  openModal?: boolean
}
const Card: React.FC<CardProps & ContentfulPlanCardType> = ({
  cardData,
  showBtn = 'default',
  className,
  style,
  onClick,
  openModal,
}) => {
  return (
    <>
      {cardData?.type === 'Simple' ? (
        <div
          className={`card rounded-[30px] mx-auto max-h-full h-full max-w-[90%] md:max-w-[100%] w-full px-5 py-[30px] md:p-[36px] xl:p-[50px] text-white rounded-bl-[0] rounded-tr-[0] bg-dark ${
            className ? className : ''
          }`}
          style={style}
        >
          {cardData?.title && (
            <h2 className="mb-5 xl:mb-10 text-[20px] leading-[27px] md:text-[35px] md:leading-[40px]">
              {cardData.title}
            </h2>
          )}
          <p className="text-white text-[22px] leading-[27px] font-bold mb-[10px]">
            Data
          </p>
          {cardData?.bandwidth && (
            <h4 className="mt-5 font-bold text-[50px] leading-[54px] md:text-[70px] md:leading-[76px] text-center text-yellowLight">
              {cardData.bandwidth}
            </h4>
          )}
          {cardData?.button?.text && (
            <Button
              // onClick={}
              className={`${
                showBtn === 'default'
                  ? 'xl:hidden'
                  : showBtn === 'no'
                  ? 'hidden'
                  : ''
              } mx-auto max-w-[198px] md:max-w-[218px] h-[51px] text-black mt-[22px] block `}
            >
              {cardData.button.text}
            </Button>
          )}
        </div>
      ) : (
        <div
          className={`${
            className ? className : ''
          } card rounded-[30px]  mx-auto max-w-[90%] xl:max-w-[100%] max-h-full h-full w-full px-5 py-[30px] md:p-[50px] text-white rounded-bl-[0] rounded-tr-[0] bg-dark`}
          style={style}
        >
          {cardData?.title && (
            <h2 className="mb-5 xl:mb-10 text-[20px] leading-[27px] md:text-[35px] md:leading-[40px]">
              {cardData.title}
            </h2>
          )}
          <p className="text-white pl-0 md:pl-[20%] lg:pl-[30%] xl:pl-[15%] 2xl:pl-[20%] text-[22px] leading-[27px] font-bold mb-[10px]">
            Data
          </p>
          <div className="text-center">
            {cardData?.bandwidth && (
              <h4 className="mt-5 mb-[30px] text-center text-yellowLight font-bold text-[50px] leading-[54px] md:text-[70px] md:leading-[76px] ">
                {cardData.bandwidth}
              </h4>
            )}
            {cardData?.benefits && (
              <div className="flex flex-col justify-start gap-[30px] items-center mb-[30px] md:mb-[50px] ">
                {cardData.benefits.map((item, i) => (
                  <p
                    key={i}
                    className="text-[22px] leading-[27px] text-white text-center "
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
            {cardData?.button?.text && (
              <Button
                // link={cardData?.button?.link}
                className="mx-auto text-black text-[20px] max-w-[198px]  h-[51px] md:max-w-[219px] xl:max-w-[300px] xl:h-[70px] leading-[27px]"
                onClick={openModal ? onClick : () => {}}
              >
                {cardData.button.text}
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Card

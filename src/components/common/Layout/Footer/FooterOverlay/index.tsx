import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { OverlayProps } from '..'
import Button from '../../../Button'
import Container from '../../../Container'
import SvgButton from '../../../InlineSvgBtn'
import LinkBtn from '../../../LinkBtn'
import Modal from '../../../Modal'
import Form from '../../../ModalForm'
import RichTextRenderer from '../../../RichTextRenderer'

const FooterOverlay: React.FC<OverlayProps> = ({ button, text }) => {
  const overlayBtn = '/images/Common/overlay-btn.svg'
  const [modal, setModal] = useState(false)
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)

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
      <div className="translate-y-[-50%] z-[1] max-w-[1364px] w-full absolute left-[50%] translate-x-[-50%]">
        <Container className="p-0">
          <div className="w-full rounded-[50px] rounded-tl-[0px] rounded-br-[0px] bg-black px-6 py-[30px] md:p-[50px] 2xl:px-[138px] 2xl:py-[58px] flex flex-col gap-5 md:gap-[50px] xl:gap-0 xl:flex-row justify-between items-center">
            <div className="max-w-[674px] text-white overlay-text">
              {text && <RichTextRenderer json={text?.json} />}
            </div>
            {button && (
              <button
                className="max-w-[260px] md:max-w-[initial]"
                onClick={() => openModal()}
              >
                <SvgButton src={overlayBtn}>
                  <Image
                    src={overlayBtn}
                    alt="button"
                    layout="fill"
                    className="w-full h-full"
                  />
                </SvgButton>
              </button>
            )}
          </div>
        </Container>
      </div>
      {modal && (
        <Modal onClose={closeModal}>
          <Form closeModal={closeModal}/>
        </Modal>
      )}
    </>
  )
}

export default FooterOverlay

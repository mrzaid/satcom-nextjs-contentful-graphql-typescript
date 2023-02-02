import React, { useEffect, useState } from 'react'

// Components
import SvgButton from '../../InlineSvgBtn'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '../../Modal'
import Form from '../../ModalForm'

// Icons
import { CrossIcon, Hamburger } from '../../Icons'
import { useRouter } from 'next/router'

type HeaderProps = {
  headerData: {
    logo?: {
      url?: string
      title?: string
    }
    links?: {
      link?: string
      text?: string
    }[]
  }
}
const Header: React.FC<HeaderProps> = ({ headerData }) => {
  const [modal, setModal] = useState(false)
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)
  const qouteSvg = '/images/Common/header-btn.svg'
  const [resNav, setResNav] = useState(false)
  const handleClick = () => {
    setResNav(!resNav)
  }
  useEffect(() => {
    if (resNav) {
      window.document.body.style.height = '100vh'
      window.document.body.style.overflow = 'hidden'
    } else {
      window.document.body.style.height = 'fit-content'
      window.document.body.style.overflow = 'auto'
    }
  }, [resNav])
  useEffect(() => {
    if (modal) {
      window.document.body.style.height = '100vh'
      window.document.body.style.overflow = 'hidden'
    } else {
      window.document.body.style.height = 'fit-content'
      window.document.body.style.overflow = 'auto'
    }
  }, [modal])
  const [showNav, setShowNav] = useState(false)

  const NavEnablerDisablerFunc = () => {
    setShowNav(false)
  }
  const router = useRouter()
  const pageName = router.asPath

  return (
    <>
      <header className="sticky z-[10] top-0 px-[36px] py-[7px] lg:py-[7px] md:px-[5vw] bg-black flex flex-row justify-between items-center">
        <Link href={'/'}>
          <div className="relative max-w-[172px] z-[3] h-[65px] header-logo w-full md:h-[100px] cursor-pointer">
            {headerData.logo &&
              headerData.logo.url &&
              headerData.logo.title && (
                <Image
                  src={headerData.logo.url}
                  alt={headerData.logo.title}
                  layout="fill"
                  loading="eager"
                  className="w-full h-full"
                />
              )}
          </div>
        </Link>
        <nav className="flex flex-row relative z-[3] items-center justify-end w-full h-full gap-5 2xl:gap-[50px]">
          <ul className="flex-row items-center justify-end hidden gap-5 2xl:gap-[50px] xl:flex eurostile">
            {headerData.links &&
              headerData.links.map(({ text, link }, i) => (
                <li
                  className="text-white uppercase text-[24px] leading-[26px]"
                  key={i}
                >
                  {link && (
                    <span className={`${pageName === '/'+link ? 'active' : '' } cursor-pointer hover:border-b-[3px] border-b-yellowLight duration-75`}>
                      <Link href={'/' + link}>{text}</Link>
                    </span>
                  )}
                </li>
              ))}
          </ul>

          <div className="relative hidden xl:block">
            <button
              className="relative max-w-[220px] h-[50px] z-[4] "
              onClick={() => openModal()}
            >
              <SvgButton src={qouteSvg}>
                <Image
                  src={qouteSvg}
                  alt={'request qoute'}
                  objectFit="contain"
                  loading="eager"
                  layout="fill"
                />
              </SvgButton>
            </button>
          </div>

          <div
            className="cursor-pointer hamburger xl:hidden"
            onClick={handleClick}
          >
            {!resNav && <Hamburger />}
            {resNav && <CrossIcon />}
          </div>
        </nav>
        {/* Responsive Header */}
        <div
          className={`px-[5vw] xl:hidden left-0 top-0 absolute z-[2] overflow-hidden duration-300 ${
            resNav ? 'h-[100vh]' : 'h-0'
          } w-[100vw] bg-black`}
        >
          <ul className="flex flex-col items-start justify-center gap-10 pt-28 md:pt-36 res-nav">
            {headerData &&
              headerData.links?.map(({ link, text }, index: number) => {
                return (
                  <li
                    key={index}
                    className="w-full text-white text-[24px] leading-[26px] uppercase"
                    onClick={handleClick}
                  >
                    <Link href={`/${link}`} className="nav-link">
                      <span className="cursor-pointer">{text}</span>
                    </Link>
                  </li>
                )
              })}
          </ul>

          <div className="relative block mt-10 xl:hidden">
            <button className="max-w-[220px]" onClick={() => openModal()}>
              <SvgButton src={qouteSvg}>
                <Image
                  src={qouteSvg}
                  alt={'request qoute'}
                  objectFit="contain"
                  loading="eager"
                  layout="fill"
                />
              </SvgButton>
            </button>
          </div>
        </div>
      </header>
      {modal && (
        <Modal onClose={closeModal}>
          <Form closeModal={closeModal}/>
        </Modal>
      )}
    </>
  )
}

export default Header

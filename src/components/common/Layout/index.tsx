import React from 'react'

// Components
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

// Icons
import { EmailIcon, PhoneIcon } from '../Icons'

// Type
type LayoutProps = {
  children: React.ReactNode
  layoutData?: any
}
const Layout: React.FC<LayoutProps> = ({ children, layoutData }) => {
  if (!layoutData?.websiteDetails) {
    return null
  }
  const footer = layoutData?.websiteDetails?.footer
  const header = layoutData?.websiteDetails?.header
  let year = new Date()?.getFullYear()
  console.log('____icons', footer?.socialsCollection?.items)
  const data = {
    headerData: {
      logo: {
        url: header?.logo?.url,
        title: header?.logo?.title,
      },
      links: header?.linksCollection?.items,
    },
    footerData: {
      bg: {
        url: footer?.backgroundImage?.url,
        title: footer?.backgroundImage?.title,
      },
      logo: {
        url: footer?.logo?.url,
        title: footer?.logo?.title,
      },
      address: footer?.address,
      contact: [
        {
          title: footer?.contactNumber,
          type: 'number',
          icon: <PhoneIcon />,
        },
        {
          title: footer?.contactEmail,
          type: 'email',
          icon: <EmailIcon />,
        },
      ],
      links: footer?.linksCollection?.items,
      formLabel: footer?.newsletterTitle,
      btn: footer?.newsletterButton,
      socials: {
        text: 'follow us:',
        socialIcons: footer?.socialsCollection?.items,
      },
      bottomBarData: (
        <p>
          Copyright © {year} Pelsue.{' '}
          <span className="underline capitalize hover:text-yellowLight">
            <Link href={footer?.privacyPolicy?.link}>
              {footer?.privacyPolicy?.text}
            </Link>
          </span>{' '}
          Web Design by{' '}
          <span className="underline hover:text-yellowLight">
            <Link href="#">Kokopelli</Link>
          </span>
        </p>
      ),
      overlay: {
        text: footer?.overlayText,
        btnText: footer?.overlayButton,
      },
    },
  }
  return (
    <>
      <Header headerData={data?.headerData} />
      <main>{children}</main>
      <Footer footerData={data?.footerData} />
    </>
  )
}

export default Layout

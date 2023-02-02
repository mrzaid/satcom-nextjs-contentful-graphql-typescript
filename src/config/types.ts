import { Document } from '@contentful/rich-text-types'

export type PageProps = {
  data?: any
}

export type ContentfulRichTextType = {
  json?: Document,
  options?: any
}

export type ContentfulImageType = {
  url?: string
  title?: string
}

export type ContentfulButtonType = {
  text?: string
  link?: string
}

// Type for common Hero sections

export type ContentfulHeroType = {
  data?: {
    title?: string
    description?: ContentfulRichTextType
    button?: ContentfulButtonType
    image?: ContentfulImageType
    bgImage?:ContentfulImageType
  }
}


export type Alignment = {
  type?: 'Left Aligned' | 'Right Aligned'
}


// Type for common ContentBlock or ContentWithImg component

export type ContentfulContentBlockType = {
  data?: {
    type?: Alignment
    content?: ContentfulRichTextType
    variant?: 'Image on Front' | 'Image on Back'
    button?: ContentfulButtonType
    image?: ContentfulImageType
  }
}


export type ContentfulPlanCardType = {
  cardData? : {
    title? : string,
    type? : 'Simple' | 'Detailed',
    bandwidth? : string,
    benefits? : string[],
    button? : ContentfulButtonType,
  }
}
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import React from 'react'
import { ContentfulRichTextType } from '../../../config/types'

const RichTextRenderer:React.FC<ContentfulRichTextType> = ({json,options}) => {
  return (
    <>
    {json && documentToReactComponents(json,options)}
    </>
  )
}

export default RichTextRenderer

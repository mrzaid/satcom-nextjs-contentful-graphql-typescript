import React from 'react'

// Icons
import { TitleIcon } from '../Icons'

// Components
import RichTextRenderer from '../RichTextRenderer'

// RichText Options
import { getOptions } from '../../../utils/options'

// Types
import { ContentfulRichTextType } from '../../../config/types'


type TitleProps = {
  title?: string
  text?: ContentfulRichTextType
  className?: string
  iconColor?: string
}
const TitleContent: React.FC<TitleProps> = ({
  text,
  title,
  className,
  iconColor,
}) => {
  return (
    <div
      className={`max-w-[674px] relative flex flex-col justify-start items-start mb-[10px] ${
        className ? className : ''
      }`}
    >
      {title && <h2 className="mb-4 uppercase">{title}</h2>}
      <i className='mb-[10px]'>
        <TitleIcon color={iconColor ? iconColor : 'var(--yellow-light)'} />
      </i>
      {text && (
        <RichTextRenderer json={text.json}  options={getOptions(text)}/>
      )}
    </div>
  )
}

export default TitleContent

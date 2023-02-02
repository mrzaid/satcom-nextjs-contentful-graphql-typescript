import React from 'react'

// Containers
import ContentSection from '../../Common/ContentSection'

// Types
type ContentSectionProps = {
  items?: {
    items?: any[]
  }
}

const Products: React.FC<ContentSectionProps> = ({items}) => {
  const allSections = items && items.items
  return (
    <>
        {allSections && allSections.map((item,i)=>{
            return(
                
                <ContentSection data={item} key={i} />
                
            )
        }
        )}
    </>
  )
}

export default Products

import React from 'react'

// Container 
import ContentSection from '../../Common/ContentSection'

// Type
type ContentSectionsProps = {
    items? : {
        items:any[]
    }
} 

const HomeContentSection:React.FC<ContentSectionsProps> = ({items}) => {
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

export default HomeContentSection

import React from 'react'

// Contentful types
import { BLOCKS , INLINES , MARKS } from '@contentful/rich-text-types'

export const getOptions = (json : any) => {
    const options = {
        renderNode : {
            [BLOCKS.HEADING_1]: (node: any, children: any) => (
                <h1 className="my-12 first:mt-0">{children}</h1>
              ),
              [BLOCKS.HEADING_2]: (node: any, children: any) => (
                <h2 className="my-12 first:mt-0">{children}</h2>
              ),
              [BLOCKS.HEADING_3]: (node: any, children: any) => (
                <h3 className="mb-4 first:mt-0">{children}</h3>
              ),
              [BLOCKS.HEADING_4]: (node: any, children: any) => (
                <h4 className="mb-4 first:mt-0">{children}</h4>
              ),
              [BLOCKS.HEADING_5]: (node: any, children: any) => (
                <h5 className="mb-4 first:mt-0">{children}</h5>
              ),
              [BLOCKS.HEADING_6]: (node: any, children: any) => (
                <h6 className="mb-4 first:mt-0">{children}</h6>
              ),
              [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
                <p className="mb-4 ">{children}</p>
              )
        }
    }
    return options
}



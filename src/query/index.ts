export const HomePageQuery = `
query {
  homePageCollection(limit: 0) {
    items {
      metaTitle
      metaDescription
      metaImage{
        url
        title
      }
      hero {
        ...hero
      }
      contentBlocksCollection {
        items {
          sectionId
          title
          description {
            json
          }
          image {
            title
            url
          }
          type
          variant
          backgroundColor
          backgroundWatermark {
            url
            title
          }
          content {
            json
          }
          button {
            ...btn
          }
        }
      }
      dataPlans{
        ...plan
      }
      solutionsTitle
      solutionsCardsCollection{
        items{
          title
          image{
            url
            title
          }
          cardContent{
            json
          }
        }
      }
    }
  }
}

fragment hero on Hero {
  title
  description {
    json
  }
  button {
    ...btn
  }
  image {
    title
    url
  }
}

fragment plan on DataPlans{
  sectionId
  title
  description{
    json
  }
  featuredTitle{
    json
  }
  featuredCardsCollection{
     	...planCards
  }
  featuredButton{
    ...btn
  }
  businessTitle{
    json
  }
  businessCardsCollection{
    ...businessCards
  }
  businessButton{
    ...btn
  }
  
}

fragment btn on Button {
  text
  link
}

fragment planCards on DataPlansFeaturedCardsCollection{
  items{
    type
    title
    bandwidth
    benefits
    button{
      ... btn
    }
  }
}
fragment businessCards on DataPlansBusinessCardsCollection{
  items{
    type
    title
    bandwidth
    benefits
    button{
      ... btn
    }
  }
}
`

export const ContentPageQuery = `
query {
  contentPageCollection(limit: 0) {
    items {
      metaTitle
      metaDescription
      metaImage{
        url
        title
      }
      slug
      hero {
        ...hero
      }
      contentTitle
      contentText {
        json
      }
      dataPlans {
        ...plan
      }
      helpTitle
      helpContent {
        content {
          json
        }
        button {
          ...btn
        }
      }
      legalDocsTitle
      legalDocsDescription {
        json
      }
      legalDocsCardsCollection {
        items {
          content {
            json
          }
          button {
            ...btn
          }
        }
      }
    }
  }
}

fragment hero on Hero {
  title
  description {
    json
  }
  button {
    ...btn
  }
  image {
    title
    url
  }
}

fragment plan on DataPlans {
  title
  description {
    json
  }
  featuredTitle {
    json
  }
  featuredCardsCollection {
    ...planCards
  }
  featuredButton {
    ...btn
  }
  businessTitle {
    json
  }
  businessCardsCollection {
    ...businessCards
  }
  businessButton {
    ...btn
  }
}

fragment btn on Button {
  text
  link
}

fragment planCards on DataPlansFeaturedCardsCollection {
  items {
    type
    title
    bandwidth
    benefits
    button {
      ...btn
    }
  }
}
fragment businessCards on DataPlansBusinessCardsCollection {
  items {
    type
    title
    bandwidth
    benefits
    button {
      ...btn
    }
  }
}
`


export const ProductPageQuery = `
query {
  productPageCollection(limit: 0) {
    items {
      metaTitle
      metaDescription
      metaImage{
        url
        title
      }
      slug
      hero {
        ...hero
      }
      contentBlocksCollection {
        items {
          title
          image {
            title
            url
          }
          type
          variant
          content {
            json
          }
          
        }
      }
      keyProductTitle
      keyProductCardsCollection{
        items{
          cardContent{
            json
          }
          image{
            url
            title
          }
        }
      }
      businessProductTitle
      businessProductCardsCollection{
        items{
          cardContent{
            json
          }
          image{
            title
            url
          }
        }
      }
    }
  }
}

fragment hero on Hero {
  title
  description {
    json
  }
  button {
    ...btn
  }
  image {
    title
    url
  }
}

fragment btn on Button {
  text
  link
}


`

export const WebsiteDetailsQuery = `
query {
  websiteDetailsCollection(limit:0){
   items{
     header{
       logo{
         url
         title
       }
       linksCollection{
         items{
           link
           text
         }
       }
     }
     footer{
       overlayText{
         json
       }
       overlayButton{
         text
         link
       }
       backgroundImage{
         url
         title
       }
       logo{
         url
         title
       }
       address{
         json
       }
       contactEmail
       contactNumber
       linksCollection{
         items{
           link
           text
         }
       }
       newsletterTitle
       newsletterButton{
         text
         link
       }
       socialsCollection{
         items{
           text
           link
         }
       }
       privacyPolicy{
         text
         link
       }
     }
   }
 }
}
`
import Paths from '../config/path'
export const fetchContent = async (query: string) => {
  try {
    const res = await fetch(Paths.CONTENTFUL_URI, {
      method: 'POST',
      body: JSON.stringify({ query: query }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    })

    const fetchedContent = await res.json()

    return fetchedContent
  } catch (error) {
    // add a descriptive error message first,
    // so we know which GraphQL query caused the issue

    console.error(error)
  }
}
const domain = process.env.SHOPIFY_STORE_DOMAIN
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

const storefrontFetch = async (query: string) => {
  if (!domain || !token) {
    throw new Error("Missing Shopify environment variables")
  }

  const res = await fetch(`https://${domain}/api/2023-10/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query }),
  })

  if (!res.ok) {
    throw new Error(`Shopify API error: ${res.status}`)
  }

  const json = await res.json()
  return json.data
}

const getProducts = async (limit = 20) => {
  const query = `
  {
    products(first: ${limit}) {
      edges {
        node {
          id
          title
          description
          handle
          featuredImage {
            url
            altText
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
  `
  const data = await storefrontFetch(query)
  return data.products.edges.map((edge: any) => edge.node)
}

const getCollections = async (limit = 20) => {
  const query = `
  {
    collections(first: ${limit}) {
      edges {
        node {
          id
          title
          handle
          products(first: 10) {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      }
    }
  }
  `
  const data = await storefrontFetch(query)
  return data.collections.edges.map((edge: any) => edge.node)
}

// თუ გინდა სხვა ფუნქციები, აქ შეგიძლია დაამატო.

export default {
  getProducts,
  getCollections,
}

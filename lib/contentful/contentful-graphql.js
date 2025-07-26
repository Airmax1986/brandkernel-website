// GraphQL-basierte Contentful API (empfohlen von Vercel)
async function fetchGraphQL(query, preview = false) {
  const token = preview 
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN 
    : process.env.CONTENTFUL_ACCESS_TOKEN
  
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

// GraphQL Queries
const GET_ALL_POSTS = `
  query GetAllPosts($preview: Boolean!) {
    blogPostCollection(preview: $preview, order: sys_firstPublishedAt_DESC) {
      items {
        sys {
          id
          firstPublishedAt
        }
        slug
        title
        summary
        description
        headerImage {
          url
          title
        }
        heroImage {
          url
          title
        }
        date
        tags
        author {
          name
        }
      }
    }
  }
`

const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: String!, $preview: Boolean!) {
    blogPostCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
      items {
        sys {
          id
          firstPublishedAt
        }
        slug
        title
        summary
        description
        content
        headerImage {
          url
          title
        }
        heroImage {
          url
          title
        }
        date
        tags
        author {
          name
        }
      }
    }
  }
`

const GET_ALL_SLUGS = `
  query GetAllSlugs {
    blogPostCollection {
      items {
        slug
      }
    }
  }
`

// GraphQL-basierte Funktionen
export async function getAllPostsGraphQL(isDraftMode = false) {
  try {
    console.log(`🔍 Fetching posts via GraphQL (draft mode: ${isDraftMode})...`)
    
    const response = await fetchGraphQL(GET_ALL_POSTS, isDraftMode)
    
    if (response.errors) {
      console.error('GraphQL errors:', response.errors)
      throw new Error('Failed to fetch posts')
    }

    const posts = response.data?.blogPostCollection?.items || []
    console.log(`✅ Found ${posts.length} posts via GraphQL`)

    return posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date || post.sys.firstPublishedAt,
      summary: post.summary,
      description: post.description,
      headerImage: post.headerImage?.url,
      heroImage: post.heroImage?.url,
      tags: post.tags,
      author: post.author ? {
        name: post.author.name,
      } : null,
    }))
  } catch (error) {
    console.error('❌ Error fetching posts via GraphQL:', error)
    if (process.env.NODE_ENV === 'production') {
      return []
    }
    throw error
  }
}

export async function getPostGraphQL(slug, isDraftMode = false) {
  try {
    console.log(`🔍 Fetching post via GraphQL: ${slug} (draft mode: ${isDraftMode})`)
    
    const response = await fetchGraphQL(GET_POST_BY_SLUG, isDraftMode)
    
    if (response.errors) {
      console.error('GraphQL errors:', response.errors)
      return null
    }

    const posts = response.data?.blogPostCollection?.items || []
    if (posts.length === 0) {
      console.log(`❌ Post not found via GraphQL: ${slug}`)
      return null
    }

    const post = posts[0]
    console.log(`✅ Found post via GraphQL: ${post.title}`)

    return {
      slug: post.slug,
      title: post.title,
      date: post.date || post.sys.firstPublishedAt,
      content: post.content,
      summary: post.summary,
      description: post.description,
      headerImage: post.headerImage?.url,
      heroImage: post.heroImage?.url,
      tags: post.tags,
      author: post.author ? {
        name: post.author.name,
      } : null,
    }
  } catch (error) {
    console.error(`❌ Error fetching post via GraphQL ${slug}:`, error)
    return null
  }
}

export async function getAllPostSlugsGraphQL() {
  try {
    const response = await fetchGraphQL(GET_ALL_SLUGS)
    
    if (response.errors) {
      console.error('GraphQL errors:', response.errors)
      return []
    }

    const posts = response.data?.blogPostCollection?.items || []
    console.log(`✅ Found ${posts.length} slugs via GraphQL for static generation`)

    return posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    }))
  } catch (error) {
    console.error('❌ Error fetching slugs via GraphQL:', error)
    return []
  }
}

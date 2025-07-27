// GraphQL-basierte Contentful API (empfohlen von Vercel)
async function fetchGraphQL(query, preview = false) {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const token = preview 
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN 
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  // Verbessertes Logging, um die verwendeten Keys zu überprüfen
  console.log(`--- Contentful API Call ---`);
  console.log(`Space ID used: ${spaceId ? `...${spaceId.slice(-4)}` : 'NOT FOUND'}`);
  console.log(`Token used: ${token ? `Bearer ...${token.slice(-4)}` : 'NOT FOUND'}`);
  console.log(`Preview mode: ${preview}`);
  console.log(`-------------------------`);

  if (!spaceId || !token) {
    throw new Error('Missing Contentful Space ID or Access Token in environment variables.');
  }
  
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
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

// GraphQL Queries (keine Änderungen hier)
const GET_ALL_POSTS = `
  query GetAllPosts($preview: Boolean!) {
    blogPostCollection(preview: $preview, order: sys_firstPublishedAt_DESC) {
      items {
        sys { id, firstPublishedAt }, slug, title, summary, date, tags
        headerImage { url, title }
        author { name }
      }
    }
  }
`
const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: String!, $preview: Boolean!) {
    blogPostCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
      items {
        sys { id, firstPublishedAt }, slug, title, summary, content, date, tags
        headerImage { url, title }
        heroImage { url, title }
        author { name }
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
    const response = await fetchGraphQL(GET_ALL_POSTS, isDraftMode);
    
    if (response.errors) {
      console.error('GraphQL errors:', JSON.stringify(response.errors, null, 2));
      throw new Error('Failed to fetch posts due to GraphQL errors.');
    }
    const posts = response.data?.blogPostCollection?.items || [];
    console.log(`✅ Found ${posts.length} posts via GraphQL`);
    return posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date || post.sys.firstPublishedAt,
      summary: post.summary,
      headerImage: post.headerImage?.url,
      author: post.author ? { name: post.author.name } : null,
    }));
  } catch (error) {
    console.error('❌ Error in getAllPostsGraphQL:', error);
    return [];
  }
}

export async function getPostGraphQL(slug, isDraftMode = false) {
  try {
    const response = await fetchGraphQL(GET_POST_BY_SLUG, isDraftMode);
    if (response.errors) {
      console.error('GraphQL errors:', JSON.stringify(response.errors, null, 2));
      return null;
    }
    const post = response.data?.blogPostCollection?.items[0];
    if (!post) return null;
    console.log(`✅ Found post via GraphQL: ${post.title}`);
    return {
      slug: post.slug,
      title: post.title,
      date: post.date || post.sys.firstPublishedAt,
      content: post.content,
      summary: post.summary,
      headerImage: post.headerImage?.url,
      heroImage: post.heroImage?.url,
      tags: post.tags,
      author: post.author ? { name: post.author.name } : null,
    };
  } catch (error) {
    console.error(`❌ Error in getPostGraphQL for slug ${slug}:`, error);
    return null;
  }
}

export async function getAllPostSlugsGraphQL() {
  try {
    const response = await fetchGraphQL(GET_ALL_SLUGS);
    if (response.errors) {
      console.error('GraphQL errors:', JSON.stringify(response.errors, null, 2));
      return [];
    }
    const posts = response.data?.blogPostCollection?.items || [];
    console.log(`✅ Found ${posts.length} slugs for static generation`);
    // FIX: Gibt jetzt das korrekte Format für generateStaticParams zurück
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('❌ Error in getAllPostSlugsGraphQL:', error);
    return [];
  }
}
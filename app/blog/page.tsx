import { getAllPostsGraphQL } from "@/lib/contentful/contentful-graphql";
import BlogPost from "@/components/BlogPost";

export default async function Blog() {
  const posts = await getAllPostsGraphQL();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
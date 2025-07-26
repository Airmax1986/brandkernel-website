import { getPostGraphQL, getAllPostSlugsGraphQL } from "@/lib/contentful/contentful-graphql";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugsGraphQL();
  return slugs;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostGraphQL(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{new Date(post.date).toLocaleDateString()}</p>
      {post.heroImage && (
        <Image
          src={post.heroImage}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-auto object-cover rounded-lg mb-8"
        />
      )}
      <div className="prose max-w-none">{post.content}</div>
    </div>
  );
}
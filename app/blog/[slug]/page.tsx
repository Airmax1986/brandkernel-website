// app/blog/[slug]/page.tsx

import { getPostGraphQL, getAllPostSlugsGraphQL } from "@/lib/contentful/contentful-graphql";
import { Post as PostType } from "@/lib/types"; // Import the Post type we created
import Image from "next/image";
import { notFound } from "next/navigation"; // Import Next.js's notFound function

// Create a specific type for this page's props to fix the build error
type PageProps = {
  params: { slug: string };
};

// This function pre-builds all the blog post pages for speed
export async function generateStaticParams() {
  const slugs = await getAllPostSlugsGraphQL();
  return slugs;
}

// Apply the new PageProps type to the component
export default async function PostPage({ params }: PageProps) {
  // We tell TypeScript that 'post' will be of type Post or null
  const post: PostType | null = await getPostGraphQL(params.slug);

  // If no post is found, show a proper 404 page instead of an error
  if (!post) {
    notFound();
  }

  return (
    // Add a background to the post for better readability on top of the gradient
    <article className="container mx-auto px-6 py-8 md:px-12 md:py-12 my-8 bg-white text-gray-800 rounded-lg shadow-2xl">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{post.title}</h1>
      <div className="flex justify-between items-center text-gray-600 mb-8 border-b pb-4">
        <span>By {post.author?.name || 'BrandKernel Team'}</span>
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
      </div>

      {post.heroImage && (
        <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority // Tell Next.js to load this image first
            />
        </div>
      )}

      {/* This is where the main content of the blog post will go.
          For real markdown content, you would use a library like 'react-markdown' here. */}
      <div className="prose lg:prose-xl max-w-none">
        {post.content}
      </div>
    </article>
  );
}

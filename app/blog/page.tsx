

import Link from "next/link";

export default async function BlogPage() {
  // Fetch blog posts (SSG)
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-rose-700">Blog Posts</h1>
      <p className="text-lg">This page is generated statically (SSG).</p>

      <ul className="space-y-4">
        {posts.slice(0, 10).map((post: any) => (
          <li key={post.id} className="p-4 border rounded shadow hover:bg-rose-50 transition">
            <Link href={`/blog/${post.id}`} className="text-xl font-semibold hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-600 mt-1">{post.body.substring(0, 60)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

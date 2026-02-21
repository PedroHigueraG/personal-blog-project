import Link from "next/link";
import { getAllPosts } from "@/app/lib/post";

export default function PostsPage() {

    const posts = getAllPosts().filter(post => post.published);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            Published Posts
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600">
            There are the current published posts on this blog:
          </p>
          <ol className="list-decimal list-inside">
            {
                posts.map(post => (
                    <li className="flex justify-between my-8 text-zinc-600 border-b border-zinc-600 border-dashed"  key={post.postname}>
                        <Link className="" href={`/posts/${post.postname}`}>
                            {post.title}
                        </Link>
                        <p className="pl-20">{post.createdAt}</p>
                    </li>
                ))
            }
          </ol>
        </div>

      </main>
    </div>
  );
}

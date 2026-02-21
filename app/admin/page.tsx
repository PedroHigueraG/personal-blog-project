import Link from "next/link";
import { getAllPosts } from "@/app/lib/post";

export default function PostsPage() {

    const posts = getAllPosts();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="flex justify-between w-full">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            Admin View
          </h1>
          <Link href="/admin/new" className="bg-zinc-800 text-white px-4 py-2 rounded-md hover:bg-zinc-700 transition-colors">+ Add</Link>
          </div>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 text-justify">
            You cand see all the posts here, including the unpublished ones. You can also edit or delete them from this page.
          </p>
          
          <ol className="list-decimal list-inside w-full">
            {
                posts.map(post => (
                    <li className="flex justify-between my-8 text-zinc-600 border-b border-zinc-600 border-dashed w-full"  key={post.postname}>
                        <Link className="" href={`/posts/${post.postname}`}>
                            {post.title}
                        </Link>
                        <div className="flex">
                            <Link href={`/admin/edit/${post.postname}`} className="ml-4" >Edit</Link>
                            <Link href={`/admin/delete/${post.postname}`} className="ml-4">Delete</Link>
                        </div>
                    </li>
                ))
            }
          </ol>
        </div>

      </main>
    </div>
  );
}

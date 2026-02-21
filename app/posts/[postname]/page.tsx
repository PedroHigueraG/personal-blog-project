import { getAllPosts, getPostByPostname } from "@/app/lib/post";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        postname: string;
    }>
};

export async function generateStaticParams() {

    const posts = getAllPosts();

    return posts.map(post => ({
        postname: post.postname
    }))

}

export default async function PostPage({params}: PageProps) {

    const { postname } = await params
    
    const post = await getPostByPostname(postname);

    //If the post doesn't exist, return a 404 page
    if (!post) {
        notFound();
    }

    // console.log(post?.content);

    return (
        <article className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
            <div className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">{post?.title}</h1>
                    <div className="blog-content text-justify" dangerouslySetInnerHTML={{ __html: post?.content || '' }} />
                </div>
            </div>
        </article>
    )

};
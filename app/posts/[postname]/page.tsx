import { getPostByPostname } from "@/app/lib/post";

interface PageProps {
    params: Promise<{
        postname: string;
    }>
};

export default async function PostPage({params}: PageProps) {

    const { postname } = await params
    
    const post = await getPostByPostname(postname);

    return (
        <article>
            <h1>{post?.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post?.content || '' }} />
        </article>
    )

};
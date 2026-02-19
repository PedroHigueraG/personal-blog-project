import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

// Define the posts structure
import type { Post } from '@/app/types/post';

const postsDirectory = path.join(process.cwd(), 'app/content/posts');

// Create function to get a post from postname
export async function getPostByPostname(postname: string): Promise<Post | null> {
    
    const fullPath = path.join(postsDirectory, `${postname}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(remarkGfm).use(html).process(content);
    
    return {
        title: data.title,
        postname: data.postname,
        content: processedContent.toString(),
        excerpt: data.excerpt,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        published: data.published
    }

}
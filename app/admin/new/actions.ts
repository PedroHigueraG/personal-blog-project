"use server";

import fs from 'fs';
import path from 'path';
import { redirect } from 'next/navigation';

function formatPostname(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

export async function createPost(formData: FormData) {

    const title = formData.get("title") as string
    const content = formData.get("content") as string

    if (!title || !content) {
        throw new Error("Title and content are required")
    }

    const postname = formatPostname(title)

    const postsDirectory = path.join(process.cwd(), "content/posts")

    const filePath = path.join(postsDirectory, `${postname}.md`)

    const markdownContent = 
        `---
        title: ${title}
        postname: ${postname}
        excerpt: ${content.substring(0, 150)}...
        createdAt: ${new Date().toISOString()}
        updatedAt: ${new Date().toISOString()}
        published: true
        ---
        
        ${content}
        `
    
    fs.writeFileSync(filePath, markdownContent)

    redirect(`/posts/${postname}`)       
    
}
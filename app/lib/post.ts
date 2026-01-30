import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define the posts structure
import type { Post } from '@/app/types/post';

const postsDirectory = path.join(process.cwd(), 'content/posts');
export interface Post {
    postname: string;
    title: string;
    content: string;
    excerpt?: string;
    createdAt: Date;
    updatedAt: Date;
    published: boolean;
};

export type PostInput = Omit<Post, 'createdAt' | 'updatedAt'>;
import type { Post } from "@prisma/client";
import {db} from "@/db";

export type PostListData = Post & {
    topic: { slug: string },
    user: {name: string | null}
    _count: {comments: number},
}

const include =  {
    user: { select: { name: true, image: true } },
    topic: { select: { slug: true } },
    _count: { select: { comments: true } },
}

export function fetchPostsByTopicSlug(slug: string): Promise<PostListData[]> { 
    return db.post.findMany(({
        where: { topic: { slug } },
        include,
    }))
}

export function fetchTopPosts(): Promise<PostListData[]> { 
    return db.post.findMany({
        take: 5, 
        orderBy: { comments: { _count: 'desc' } },
        include,
    })
}

export function searchPosts(term: string): Promise<PostListData[]> { 
    return db.post.findMany({
        where: {
            OR: [
                { title: { contains: term, mode: 'insensitive' } },
                { content: { contains: term, mode: 'insensitive' } },
            ]
        },
        include,
    });
}

import type { Comment } from "@prisma/client";
import { db } from "@/db";
import { cache } from "react";

export type CommentWithAuthor = Comment & {
    user: {name: string | null, image: string | null}
}

/**
 * The fetchCommentsByPostId is called to each CommentShow component instance.
 * To avoid multiple database calls, we cache the results.
 * The cache function will not make a new db query if the function and the arguments are the same. 
 */
export const fetchCommentsByPostId = cache((postId: string): Promise<CommentWithAuthor[]> => {
    return db.comment.findMany({
        where: { postId },
        include: { user: { select: { name: true, image: true } } },
        orderBy: { createdAt: 'desc' },
    })
})
import { db } from "@/db";
import { notFound } from "next/navigation";

interface Props {
    postId: string;

}

export default async function PostShow({ postId }: Props) { 
    const post = await db.post.findFirst({
        where: { id: postId },
    });

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}
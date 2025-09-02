import CommentCreateForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";
import PostShow from "@/components/posts/post-show";
import paths from "@/paths";
import Link from "next/link";

interface PostShowPageProps { 
    params: { slug: string; postId: string };
}

export default function PostShowPage({ params }: PostShowPageProps) {
    const { postId, slug } = params;
    return (
        <div>
            <Link href={paths.topicShow(slug)}>
                back
            </Link>
            <PostShow postId={postId} />
            <CommentCreateForm postId={postId} />
            <CommentList postId={postId} />
        </div>
    )
}
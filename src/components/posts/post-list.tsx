import { PostListData } from "@/db/queries/posts";
import paths from "@/paths";
import Link from "next/link";


interface Props {
    fetchData: () => Promise<PostListData[]>;
}

export default async function PostList({ fetchData }: Props) {
    
    const posts = await fetchData();
    
    const renderedPosts = posts.map(post => {
        const topicSlug = post.topic.slug;
        if (!topicSlug) {
            throw new Error('Topic slug is missing');
        }

        return (
            <div key={post.id} className="border rounded p-2">
                <Link href={paths.postShow(topicSlug, post.id)}
                >
                    <h3 className="text-lg font-bold">{post.title}</h3>
                    <p className="text-sm text-gray-500">By {post.user.name ?? 'Unknown'}</p>
                    <p className="text-sm text-gray-500">{post._count.comments} comments</p>
                </Link>
            </div>
        )
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderedPosts}
        </div>
    )
}
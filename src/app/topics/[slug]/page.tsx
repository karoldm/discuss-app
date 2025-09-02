
import PostList from "@/components/posts/post-list";
import { fetchPostsByTopicSlug } from "@/db/queries/posts";
// PostCreateForm
interface Props {
    params: {
        slug: string;
    }
}

export default function TopicShowPage({ params }: Props) {
    const { slug } = params;


    return (
        <div>
            <div>
                <h1>{slug}</h1>
                <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
            </div>
            <div>
                {/*PostCreateForm*/}
            </div>
        </div>
    )
}
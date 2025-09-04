import TopicCreateForm from "@/components/topics/topic-create-form";
import PostList from "@/components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/posts";

export default async function Home() {

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m2">
          top posts
        </h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div>
        <TopicCreateForm />
      </div>
    </div>
  );
}

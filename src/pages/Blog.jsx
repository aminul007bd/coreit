import Card from "../components/common/Card";
import { useQuery } from "react-query";

const fetchBlogPosts = async () => {
  const response = await fetch(`http://localhost:3000/blogs`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function Blog() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery("blogPosts", fetchBlogPosts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blog posts</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id}>
            <h2 className="text-lg font-medium text-gray-900">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.content}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

import posts from "../posts";
import Link from "next/link";

const Blog: React.FC<{}> = () => {
  return (
    <div>
      {posts.map((post, idx) => {
        return (
          <div key={post.title}>
            <Link href={post.urlPath} prefetch={idx < 3}>
              <a>{post.title}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;

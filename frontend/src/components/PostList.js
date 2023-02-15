import { Post } from "./Posts";

export const PostList = ({ posts }) => {
  return posts.length ? (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  ) : (
    <p>Aún no hay Post que cargar...</p>
  );
};

import usePosts from "../hooks/usePosts";
import { PostList } from "./PostList";
import { ErrorMessage } from "./ErrorMessage";
import { Post } from "./Post";

export const UserPosts = ({ id }) => {
  const { posts, loading, error, removePost } = usePosts(id);

  if (loading) return <p>Cargando tus publicaciones...</p>;
  if (error) return <ErrorMessage message={error} />;

  console.log(posts);

  return posts.length > 0 ? (
    posts.map((post) => (
      <Post key={post.id} post={post} removePost={removePost} />
    ))
  ) : (
    <p>"No tienes publicaciones todavía"</p>
  );
};

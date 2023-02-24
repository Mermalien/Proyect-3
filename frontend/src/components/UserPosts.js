import usePosts from "../hooks/usePosts";
import { PostList } from "./PostList";
import { ErrorMessage } from "./ErrorMessage";

export const UserPosts = ({ id }) => {
  const { posts, loading, error, removePost } = usePosts(id);

  if (loading) return <p>Cargando tus publicaciones...</p>;
  if (error) return <ErrorMessage message={error} />;

  return <PostList posts={posts} removePost={removePost} />;
};

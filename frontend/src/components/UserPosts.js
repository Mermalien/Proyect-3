import usePosts from "../hooks/usePosts";
import { PostList } from "./PostList";
import { ErrorMessage } from "./ErrorMessage";
import { useUser } from "../hooks/useUser";

export const UserPosts = (id) => {
  const { user } = useUser(id);
  const { posts, loading, error, removePost } = usePosts(id);

  if (loading) return <p>Cargando tus publicaciones...</p>;
  if (error) return <ErrorMessage message={error} />;

  return user ? (
    <PostList posts={posts.id} removePost={removePost} />
  ) : (
    "No tienes publicaciones todavía"
  );
};

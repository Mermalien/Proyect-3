import "../styles/posts-page.css";

import { Link } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { PostList } from "../components/PostList";
import usePosts from "../hooks/usePosts";

import { Searcher } from "../components/Searcher";

export const HomePostsPage = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return <p>Cargando publicaciones...</p>;
  if (error) return <ErrorMessage message={error} />;

  console.log(posts.data);

  return (
    <section className="allPosts">
      <Link to="/posts">
        <h1 className="homeTitle">Sección de publicaciones</h1>
      </Link>
      <Searcher />

      <PostList posts={posts} />
      <Link to={"/"}>
        <p>Volver al inicio</p>
      </Link>
    </section>
  );
};

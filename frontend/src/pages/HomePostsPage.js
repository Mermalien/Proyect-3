import "../styles/posts-page.css";
import usePosts from "../hooks/usePosts";
import { Link } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { PostList } from "../components/PostList";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

export const HomePostsPage = () => {
  const { posts, loading, error, addPost, removePost, setPosts } = usePosts();

  const { user } = useContext(AuthContext);

  if (loading) return <p>Cargando publicaciones...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="allPosts">
      {/* <Searcher initialValue="" onSearch={() => console.log("Buscando...")} /> */}

      <h1 className="homeTitle">Sección de publicaciones</h1>

      <PostList
        listPost={posts}
        addPost={addPost}
        removePost={removePost}
        setPosts={setPosts}
      />
      <Link to={"/posts"}>
        <p>Volver al inicio</p>
      </Link>
    </section>
  );
};

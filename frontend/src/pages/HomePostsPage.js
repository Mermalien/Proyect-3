import "../styles/posts-page.css";

import { Link } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { PostList } from "../components/PostList";
import usePosts from "../hooks/usePosts";
<<<<<<< HEAD
import { Searcher } from "../components/Searcher";
=======
import { Searcher } from '../components/Searcher';

>>>>>>> ecac794a8a6ad33cad61c4f6caef07bf64b10094

export const HomePostsPage = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return <p>Cargando publicaciones...</p>;
  if (error) return <ErrorMessage message={error} />;

  console.log(posts.data);

  return (
<<<<<<< HEAD
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
=======
    <section className='allPosts'>
    <Link to="/posts">
    <h1 className='homeTitle'>Sección de publicaciones</h1>
    </Link>
    <Searcher/>
    <PostList posts={posts} />
    <Link to={'/'}><p>Volver al inicio</p></Link>
  </section>
>>>>>>> ecac794a8a6ad33cad61c4f6caef07bf64b10094
  );
};

import { Link } from 'react-router-dom';
import {ErrorMessage} from '../components/ErrorMessage';
import { PostList } from "../components/PostList";
import usePosts from "../hooks/usePosts";


export const HomePostsPage = () => {
  const { posts, loading, error } = usePosts();


  if (loading) return <p>Cargando publicaciones...</p>;
  if (error) return <ErrorMessage message={error}/>;

  console.log(posts.data);

  return (
    <section>
    <Link to="/posts">
    <h1>Sección de publicaciones</h1>
    </Link>

    <PostList posts={posts} />
    <Link to={'/'}><p>Volver al inicio</p></Link>
  </section>
  );
};

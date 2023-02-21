import { Post } from './Post';
import usePosts from "../hooks/usePosts";
import { Link } from 'react-router-dom';


export const PostList = () => {

  <Link to={'/'}><p>Volver al inicio</p></Link>

  const {posts, loading, error} = usePosts();

    if(loading) return <p>Cargando post...</p>;
    if(error) return <p>{error}</p>;
    console.log(posts);
    
  return posts.length ? (
    <ul>
      {posts.map((post) => {

        return(
          <li key={post.id}>
          <Post post={post} />
        </li>
        )
      })}
    </ul>
  ) : (
    <p>Aún no hay publicaciones...</p>
  );

};

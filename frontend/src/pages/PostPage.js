import { Post } from '../components/Post';
import usePost from "../hooks/usePost";
import {ErrorMessage} from '../components/ErrorMessage';
import { useParams } from 'react-router-dom';


export const PostPage = () => {
  const {id} = useParams();
  const { post, loading, error } = usePost(id);


  if (loading) return <p>Cargando publicación...</p>;
  if (error) return <ErrorMessage message={error}/>;

  return (
    <section>
      <h1>Publicación</h1>
      <Post post={post}/>
  </section>
  );
};

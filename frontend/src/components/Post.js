import { Link } from "react-router-dom";

export const Post = ({ post }) => {

  
  return (
    <article className='post'>
      <h1>{post.title}</h1>
      <p>{post.data}</p>
      <p>
        <Link to='/post/:id'>Leer más...</Link>
      </p>
    </article>
  );
};
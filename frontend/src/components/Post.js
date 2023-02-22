import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  return (
    <article className="post">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>
        <Link to={`/posts/${post.id}`}>Leer más...</Link>
      </p>
    </article>
  );
};

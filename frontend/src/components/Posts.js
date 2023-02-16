import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  return (
    <article>
      <p>{post.description}</p>
      <p>
        <Link to='/posts'>Ver más</Link>
      </p>
    </article>
  );
};

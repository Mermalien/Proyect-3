import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deletePostService } from "../services";

export const Post = ({ post, removePost }) => {
  const navigate = useNavigate();
  const { token, user } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deletePost = async (id) => {
    try {
      await deletePostService({ id, token });

      if (removePost) {
        removePost(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article className="post">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>
        <Link to={`/posts/${post.id}`}>Leer más...</Link>
      </p>
      <button
        style={{
          backgroundColor: "#C39BD3",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => deletePost(post.id)}
      >
        Eliminar Post
      </button>
    </article>
  );
};

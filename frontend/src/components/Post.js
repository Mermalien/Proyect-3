import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deletePostService } from "../services";
import { ErrorMessage } from "./ErrorMessage";
import "../styles/posts-page.css";

export const Post = ({ post, removePost }) => {
  const navigate = useNavigate();
  const { token, user } = useContext(AuthContext);
  const [error, setError] = useState("");

  if (!user) return <p>Cargando...</p>;

  if (error) return <ErrorMessage message={error} />;
  const deletePost = async (id) => {
    try {
      await deletePostService({ id, token });

      if (user) {
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
      <p className="url">
        <a href={`${post.url}`} target="_blank" rel="noreferrer">
          Click para ir al enlace
        </a>
      </p>
      <p>
        Publicado por el usuario con ID {post.userId} el {post.date_creation}{" "}
      </p>
      <p>
        <Link to={`/posts/${post.id}`}>Leer más...</Link>
      </p>
      {user.id === post.userId ? (
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            if (window.confirm("Estás segura?")) deletePost(post.id);
          }}
        >
          Eliminar Post
        </button>
      ) : null}
    </article>
  );
};

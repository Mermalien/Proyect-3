import React, { useState, useContext } from "react";
import { Post } from "./Post";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export const PostList = ({ listPost }) => {
  const { token } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al publicar");
      }

      setTitle("");
      setDescription("");
      setUrl("");
      setLoading(false);
      alert("Publicación exitosa");
    } catch (error) {
      setError(error.message);
      setLoading(false);
      alert("Hubo un error al publicar. Intente nuevamente más tarde.");
    }
  };

  return (
    <div>
      <h2>Publicaciones</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Descripción:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Publicando..." : "Publicar"}
        </button>
      </form>
      {error && <p>{error}</p>}
      <ul>
        {listPost.map((post) => {
          return (
            <li className="singlePost" key={post.id}>
              <Post post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

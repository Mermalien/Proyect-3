import React, { useState, useContext } from "react";
import { Post } from "./Post";
import { AuthContext } from "../context/AuthContext";
import "../styles/posts-page.css";

export const PostList = ({ listPost, addPost, removePost, setPosts }) => {
  const { token } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleLike = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/like/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error al dar like");
      }

      const { data } = await response.json();

      const updatedPosts = listPost.map((post) => {
        if (post.id === id) {
          return { ...post, likes: data.total };
        }
        return post;
      });
      setPosts(updatedPosts);
    } catch (error) {
      setError(error.message);
      alert("Hubo un error al dar like. Intente nuevamente más tarde.");
    }
    setLiked(!liked);
  };

  const handleReset = () => {
    setTitle("");
    setDescription("");
    setUrl("");
    setError("");
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          url,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al publicar");
      }

      const { data } = await response.json();

      addPost(data);

      handleReset();
    } catch (error) {
      setError(error.message);
      setLoading(false);
      alert("Hubo un error al publicar. Intente nuevamente más tarde.");
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "1.5rem" }}>Publicaciones</h2>
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
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
          type="submit"
          disabled={loading}
        >
          {loading ? "Publicando..." : "Publicar"}
        </button>
      </form>
      {error && <p>{error}</p>}
      <ul>
        {listPost.map((post) => {
          return (
            <li className="singlePost" key={post.id}>
              <Post post={post} removePost={removePost} />
              <button
                className={`likeButton ${liked ? "liked" : ""}`}
                onClick={() => handleLike(post.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80px"
                  height="80px"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <path d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z" />
                  </g>
                </svg>
              </button>
              {post.likes}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

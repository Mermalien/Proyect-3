import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { PostPostService } from "../services";

export const PostComponent = ({ addPost }) => {
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const nuevoPost = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData(e.target);
      const post = await PostPostService({ data, token });
      addPost(post);
      e.target.reset();
      setImage(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    return (
      <>
        <h1>Añade un enlace</h1>

        <form className="nuevoPost " onSubmit={nuevoPost}>
          <fieldset>
            <label htmlFor="texto">Texto</label>
            <input type="text" name="texto" id="texto" required />
          </fieldset>
          <fieldset>
            <label htmlFor="imagen">Imagen</label>
            <input
              type="file"
              name="imagen"
              id="imagen"
              accept={"imagen/*"}
              onChange={(e) => setImage(e.target.files[0])}
            />
            {image ? (
              <figure>
                <img
                  src={URL.createObjectURL(image)}
                  style={{ width: "150px" }}
                  alt="ImagenPost"
                ></img>
              </figure>
            ) : null}
          </fieldset>
          <button>Enviar Post</button>
          {error ? <p>{error}</p> : null}
          {loading ? <p>Cargando Posts...</p> : null}
        </form>
      </>
    );
  };
};

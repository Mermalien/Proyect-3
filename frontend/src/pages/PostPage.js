import { Post } from "../components/Post";
import usePost from "../hooks/usePost";
import { ErrorMessage } from "../components/ErrorMessage";
import { Link, useParams } from "react-router-dom";
import { Searcher } from "../components/Searcher";
import { filter } from "react";
import { Navigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";

export const PostPage = () => {
  const { id } = useParams();

  const { post, loading, error } = usePost(id);

  if (loading) return <p>Cargando publicación...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <section>
        <Link to={"/posts"}>
          Haz click para volver a la página principal de publicaciones
        </Link>
        <h1>Publicación</h1>
        <Post post={post} />
      </section>

      <Searcher
        initialValue={filter}
        onSearch={({ search }) =>
          Navigate({
            pathname: "/products",
            search: createSearchParams({ search: search }).toString(),
          })
        }
      ></Searcher>
    </div>
  );
};

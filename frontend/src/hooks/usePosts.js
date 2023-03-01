import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getPostsService, getUserPostsService } from "../services";

export const usePosts = (id) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);

        const data = id
          ? await getUserPostsService(id)
          : await getPostsService(token);

        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, [id]);

  const addPost = (data) => {
    setPosts([data, ...posts]);
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return { posts, loading, error, addPost, removePost, setPosts };
};

export default usePosts;

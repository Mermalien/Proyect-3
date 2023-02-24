import { useEffect, useState } from "react";
import { getPostsService, getUserPostsService } from "../services";

export const usePosts = (id) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);

        const data = id
          ? await getUserPostsService(id)
          : await getPostsService();

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
    setPosts(posts.map((post) => post.id !== id));
  };

  return { posts, loading, error, addPost, removePost };
};

export default usePosts;

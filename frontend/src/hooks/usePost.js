import { useEffect, useState } from "react";
import { getSinglePostsService } from "../services";

const usePost = (id) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);

        const data = await getSinglePostsService(id);

        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [id]);
  return { post, loading, error };
};

export default usePost;

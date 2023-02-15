import { useEffect, useState } from "react";
import { getPostsService } from "../services";

const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getPosts = async () => {
            try {
                setLoading(true);

                const data = await getPostsService();

                setPosts(data);
                setLoading(false);

            } catch (error) {
                setError(error.message)
                
            } finally{
                setLoading(false);
            }
        }
        getPosts();

    }, []);
    return {posts, loading, error};
};

export default usePosts;
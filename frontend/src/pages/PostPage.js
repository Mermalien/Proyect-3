import { Link } from "react-router-dom";
import usePosts from "../hooks/usePosts";

export const PostPage = () => {
    const {posts, loading, error} = usePosts();

    if(loading) return <p>cargando posts...</p>;
    if(error) return <p>{error}</p>;

    console.log(posts);

    return(
        <section>
            <Link to='/posts'>
            <h1>Últimos posts publicados:</h1>
            </Link>
        </section>
    )
}
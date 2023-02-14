import { Link } from "react-router-dom";

export const NotFoundPage=() => {
    return(
        <section>
            <h1>Error 404 Not Found</h1>
            <Link to={'/'}>Volver al inicio</Link>
        </section>
    )
};
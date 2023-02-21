import { useParams } from "react-router-dom"
import { ErrorMessage } from "../components/ErrorMessage";
import { useUser } from "../hooks/useUser";

export const UserPage = () => {
    const {id} = useParams();
    const {user, loading, error} = useUser(id);

    if(loading) return <p>Cargando...</p>;
    if(error) return <ErrorMessage message={error}/>;

    return(
        <section>
            <h1>Usuario {user.email}</h1>
            <div>
                <p>Id del usuario: {user.id}</p>
            </div>
            
        </section>
    )
}
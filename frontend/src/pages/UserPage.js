import "../styles/user-page.css";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { UserPosts } from "../components/UserPosts";
import { ChangeProfile } from "../components/ChangeProfile";
import { ErrorMessage } from "../components/ErrorMessage";

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  if (loading) return <p>Cargando...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="my-profile">
      <h1>Mi información de usuario</h1>
      <div className="user-container">
        <div className="user-data">
          <p>Usuario: {user.email}</p>
          <p>Id del usuario: {user.id}</p>
        </div>
      </div>

      <div className="user-posts">
        <p>Estas son tus publicaciones:</p>
        {/* <UserPosts id={user.id} /> */}
      </div>

      <div className="update-user-data">
        <p>Cambia tu email o contraseña:</p>
        <ChangeProfile />
      </div>

      <Link to={"/"}>
        <p>Volver al inicio</p>
      </Link>
    </div>
  );
};

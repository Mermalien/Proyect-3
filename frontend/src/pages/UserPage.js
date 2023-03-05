import "../styles/user-page.css";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { UserPosts } from "../components/UserPosts";
import { ChangeProfile } from "../components/ChangeProfile";
import { ErrorMessage } from "../components/ErrorMessage";

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);
  const { posts } = UserPosts(id);

  if (loading) return <p>Cargando...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="my-profile">
      <h1>Hola {user.name}!</h1>

      <div className="user-container">
        <h2>Tu información de usuario</h2>

        <div className="user-data">
          <p>Tu email actual es: {user.email}</p>
          <p>Tu ID de usuario es: {user.id}</p>
        </div>
      </div>

      <div className="user-posts">
        <p>Estas son tus publicaciones:</p>
        <p>Posts:{posts}</p>

        {/* <UserPosts id={user.id} /> */}
      </div>

      <div className="update-user-data">
        <p>Cambia tu nombre o contraseña:</p>
        <ChangeProfile />
      </div>

      <Link to={"/"}>
        <p>Volver al inicio</p>
      </Link>
    </div>
  );
};

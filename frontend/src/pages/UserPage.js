import "../styles/user-page.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { useUser } from "../hooks/useUser";
import { getUserDataService } from "../services";
import { UserPosts } from "../components/UserPosts";
import { ChangeProfile } from "../components/ChangeProfile";

export const UserPage = () => {
  const { id } = useParams();
  const { user } = useUser(id);

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const data = await getUserDataService(id);

      if (data.ok) {
        navigate("/users");
      }
    } catch (error) {
      <ErrorMessage />;
    }
    return user.data;
  };

  return (
    <section className="my-profile">
      <h1>Mi información de usuario</h1>

      <div className="user-data">
        <p>Usuario: {`${user.email}`}</p>
        <p>Id del usuario: {`${user.id}`}</p>
      </div>

      <div className="userPosts">
        <p>Estas son tus publicaciones:</p>
        <UserPosts id={`${user.id}`} />
      </div>

      <div className="update-user-data">
        <p>Cambia tu email o contraseña:</p>
        <ChangeProfile />
      </div>

      <Link to={"/"}>
        <p>Volver al inicio</p>
      </Link>

      <form onSubmit={handleForm}>
        <button type="submit">Cerrar sesión</button>
      </form>
    </section>
  );
};

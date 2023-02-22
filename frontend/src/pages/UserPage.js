import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChangeProfile } from "../components/ChangeProfile";
import { ErrorMessage } from "../components/ErrorMessage";
import { useUser } from "../hooks/useUser";
import { getUserDataService } from "../services";

export const UserPage = () => {
  const { id } = useParams();
  const { user } = useUser(id);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const data = await getUserDataService(id);

      navigate("/users");
    } catch (error) {
      <ErrorMessage />;
    }
    return user.data;
  };

  return (
    <section className="my-profile">
      <h1>Mi información de usuario</h1>
      <div>
        <p>Usuario {user.name}</p>
        <p>Id del usuario: {user.id}</p>
      </div>
      <ChangeProfile />
      <Link to={"/"}>
        <p>Volver al inicio</p>
      </Link>
      <form onSubmit={handleForm}>
        <button type="submit">Cerrar sesión</button>
      </form>
    </section>
  );
};

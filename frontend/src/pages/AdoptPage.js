import { Link } from "react-router-dom";
import useProtectorasDeAnimales from "../hooks/useProtectorasDeAnimales";
import { ProtectorasList } from "../components/ProtectorasList";

export const AdoptPage = () => {
  const { protectoras, loading, error } = useProtectorasDeAnimales();

  if (loading) return <p>cargando protectoras...</p>;
  if (error) return <p>{error}</p>;

  console.log(protectoras);

  return (
    <section>
      <Link to="/adopta">
        <h1>¿Estás pensando en adoptar?</h1>
        <ProtectorasList protectoras={protectoras} />
      </Link>
    </section>
  );
};

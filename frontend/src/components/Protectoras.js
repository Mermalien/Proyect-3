import { Link } from "react-router-dom";

export const Protectoras = ({ protectoras }) => {
  return (
    <article>
      <p>{protectoras.ficha}</p>
      <p>
        <Link to="/adopta">Ver más</Link>
      </p>
    </article>
  );
};

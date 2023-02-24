import { Link } from "react-router-dom";
import "../styles/AdoptPage.css";

export const AdoptPage = () => {
  return (
    <div>
      <section>
        <Link to="/adopta">
          <h1>¿Estás pensando en adoptar?</h1>
        </Link>
        <Link to={"/"}>
          <p>Volver al inicio</p>
        </Link>
      </section>

      <ul>
        <li>
          <a
            href="https://www.addaong.org/es/informacion/listado-de-protectoras-de-animales/"
            className="protectoras"
            target="_blank"
            rel="noreferrer"
          >
            Protectoras de animales
          </a>
          <a
            href="https://www.protectoras.es/"
            className="otrasprotectoras"
            target="_blank"
            rel="noreferrer"
          >
            Otras protectoras
          </a>
        </li>
      </ul>
      <img
        src="/images/adopcion1.jpg"
        alt="Foto de letras adopt"
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

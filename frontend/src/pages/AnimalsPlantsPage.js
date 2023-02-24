import { Link } from "react-router-dom";
import "../styles/AnimalsPlantsPage.css";

export const AnimalsPlantsPage = () => {
  return (
    <main>
      <Link to="/plants">
        <h1>Tips para animales y plantas en la misma casa</h1>
      </Link>
      <Link to={"/"}>
        <p>Volver al inicio</p>
      </Link>
      <ul>
        <li>
          <a
            href="https://centroveterinarioneptuno.es/noticias/plantas-toxicas-para-perros-y-gatos-conoce-sus-peligros/"
            className="perrosygatos"
            target="_blank"
            rel="noreferrer"
          >
            Plantas tóxicas para perros y gatos
          </a>
          <a
            href="https://www.leonvet.es/noticias-animales/plantas-toxicas-para-perros.html"
            className="perros"
            target="_blank"
            rel="noreferrer"
          >
            Plantas tóxicas para perros
          </a>
          <a
            href="https://ecoinventos.com/plantas-toxicas-mascotas/"
            className="mascotas"
            target="_blank"
            rel="noreferrer"
          >
            Plantas tóxicas para mascotas
          </a>
          <a
            href="https://animalesexoticos24h.es/plantas-peligrosas-conejos/"
            className="conejos"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Plantas tóxicas para conejos
          </a>
          <a
            href="https://www.mundoanimalia.com/animales-consejos/plantas-toxicas-para-nuestras-mascotas.html"
            params="quehacer"
            target="_blank"
            rel="noreferrer"
          >
            Plantas tóxicas para mascotas y que hacer si se intoxica
          </a>
        </li>
      </ul>
      <img
        src="/images/aloevera.jpg"
        alt="¨Foto de aloevera"
        style={{ height: "200px", width: "200px" }}
      />
    </main>
  );
};

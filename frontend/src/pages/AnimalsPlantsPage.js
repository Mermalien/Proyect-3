import { Link } from "react-router-dom";
import "../styles/AnimalsPlantsPage.css";

export const AnimalsPlantsPage = () => {
  return (
    <main className="mainplants">
      <Link to="/plants">
        <h1>Muestra de alimentos y plantas tóxicos para las mascotas </h1>
      </Link>
      <Link to={"/"}>
        <p>Volver al inicio</p>
      </Link>
      <ul className="ulplants">
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
            className="quehacer"
            target="_blank"
            rel="noreferrer"
          >
            Plantas tóxicas para mascotas y que hacer si se intoxica
          </a>
          <a
            href="https://soyunperro.com/alimentos-toxicos-para-perros/"
            className="alimentostoxicosperros"
            target="_blank"
            rel="noreferrer"
          >
            Alimentos tóxicos para perros
          </a>
          <a
            href="https://www.royalcanin.com/es/cats/health-and-wellbeing/what-foods-are-toxic-for-my-cat"
            className="alimentostoxicosgatos"
            target="_blank"
            rel="noreferrer"
          >
            Alimentos y plantas tóxicas para gatos
          </a>
          <a
            href="https://www.petdarling.com/alimentos-toxicos-para-gatos/"
            className="alimentostoxicosgatos"
            target="_blank"
            rel="noreferrer"
          >
            Alimentos tóxicos para gatos
          </a>
          <a
            href="https://www.expertoanimal.com/alimentos-prohibidos-para-conejos-21771.html"
            className="alimentostoxicosconejos"
            target="_blank"
            rel="noreferrer"
          >
            Alimentos tóxicos para conejos
          </a>
        </li>
      </ul>
      <img
        className="imgplants"
        src="/images/aloevera.jpg"
        alt="¨Foto de aloevera"
        style={{ height: "200px", width: "200px" }}
      />
    </main>
  );
};

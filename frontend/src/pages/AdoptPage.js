import { Link } from "react-router-dom";
import "../styles/AdoptPage.css";

export const AdoptPage = () => {
  return (
    <body className="responsive-adopt">
      <div className="adopt-page">
        <section>
          <Link to="/adopta">
            <h1 className="title-adopt-page">¿Estás pensando en adoptar?</h1>
          </Link>
        </section>
        <div className="adopt-container">
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
            className="adopt-image"
            style={{ height: "300px", width: "300px" }}
          />
          <Link to={"/"}>
            <p className="return-home">Volver al inicio</p>
          </Link>
        </div>
      </div>
    </body>
  );
};

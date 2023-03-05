import { Link } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";
import Flor02 from "../images/Flor02.jpg";
import Andrea from "../images/Andrea.jpg";
import Patri02 from "../images/Patri02.jpg";
import "../styles/AboutUsPage.css";

export const AboutUsPage = () => {
  return (
    <body
      className="responsive-aboutUs"
      style={{ backgroundColor: "rgb(245,245,245)" }}
    >
      <main className="aboutUs-page">
        <h1>Quiénes Somos....</h1>
        <h2>
          Haz click en la foto para conocer a las integrantes de este magnífico
          equipo!
        </h2>
        <section className="img-comp-aboutUs">
          <div className="imagecomponent">
            <ImageComponent
              src={Andrea}
              alt={`Foto de Andrea Guisande Nieto`}
              message={
                <>
                  Soy Andrea, gallega, amante de la naturaleza pero con pánico a
                  las arañas. Tengo una perra mestiza tipo bull, Isis. Me
                  encanta el mar, leer, hacer amigurumis en mi tiempo libre y
                  siempre que puedo aprendo algo nuevo. Cuando empecé a
                  curiosear el mundillo de la programación me di cuenta de lo
                  mucho que me gusta esto y las ganas que tengo de seguir
                  aprendiendo y mejorando. Puedes ver mi perfil en
                  <a
                    href="https://www.linkedin.com/in/andrea-guisande-nieto/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </>
              }
            />
          </div>
          <div className="imagecomponent">
            <ImageComponent
              src={Patri02}
              alt={`Foto de Patricia Pecino`}
              message={
                <>
                  Soy Patricia, nací en Tarragona, pero llevo desde que tenía
                  tres años en Galicia, me encanta la música, leer, reírme, los
                  animales y la programación (algún día te alcanzaré Penélope
                  García XDXD). Antes de entrar en este mundo de la programación
                  estudié y trabajé de auxiliar de enfermería. Este es mi
                  trabajo con mis compañeras de Hack a Boss. Puedes ver mi
                  perfil en
                  <a
                    href="https://www.linkedin.com/in/patricia-pecino/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </>
              }
            />
          </div>
          <div className="imagecomponent">
            <ImageComponent
              src={Flor02}
              alt={`Foto de María Florencia Biscardi`}
              message={
                <>
                  Hola! soy Flor, soy argentina de nacimiento y andaluza de
                  adopción. He estudiado Magisterio en Educación Primaria,
                  actualmente soy Desarrolladora Web Fullstack y una apasionada
                  de la tecnología. Me encantan los animales (tengo una galga
                  hermosa que se llama Tuka), viajar y conocer gente (amo
                  socializar). Estoy en el inicio de mi carrera profesional como
                  desarrolladora por lo que estoy altamente motivada en aprender
                  cosas nuevas. Puedes ver mi perfil en{" "}
                  <a
                    href="https://www.linkedin.com/in/maria-florencia-biscardi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </>
              }
            />
          </div>
        </section>
        <div className="returnHome">
          <Link to={"/"}>
            <p>Volver al inicio</p>
          </Link>
        </div>
      </main>
    </body>
  );
};

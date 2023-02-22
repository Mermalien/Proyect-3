import "../styles/curiosities.css";
import { Link } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";
import gatosaltando from "../images/gatosaltando.jpg";
import conejozanahoria from "../images/conejozanahoria.jpg";
import olfatoperro from "../images/olfatoperro.jpg";
import pajaroLoro from "../images/pajaroLoro.jpg";
import peces from "../images/peces.jpg";

export const CuriositiesPage = () => {
  return (
    <main className="curiosities-page">
      <Link to="/curiosities">
        <h1>Curiosidades</h1>

        <section>
          <div className="imagecomponent">
            <ImageComponent
              src={conejozanahoria}
              alt={`Imágen de Conejo que come Zanahoria`}
              message={
                "Los conejos tienen dientes que crecen constantemente, por lo que necesitan masticar constantemente para mantenerlos limados. Además, los conejos pueden saltar muy alto y correr a una velocidad de hasta 50 kilómetros por hora."
              }
            />
          </div>
          <div className="imagecomponent">
            <ImageComponent
              src={olfatoperro}
              alt={`Imágen de Nariz de Perro`}
              message={
                "Los perros tienen un sentido del olfato increíblemente agudo y pueden detectar olores que los humanos no pueden percibir. De hecho, se ha demostrado que algunos perros pueden detectar ciertos tipos de cáncer y otros problemas médicos simplemente oliendo el aliento de una persona."
              }
            />
          </div>
          <div className="imagecomponent">
            <ImageComponent
              src={gatosaltando}
              alt={`Imágen de Gato Saltando`}
              message={
                "Los gatos son capaces de saltar hasta seis veces su longitud corporal y aterrizar de manera segura en sus pies. Esto se debe a una columna vertebral muy flexible y una habilidad para girar sus patas mientras están en el aire."
              }
            />
          </div>
          <div className="imagecomponent">
            <ImageComponent
              src={pajaroLoro}
              alt={`Imágen de un Loro desplegando su ala`}
              message={
                "Los pájaros son animales muy inteligentes y algunos, como los loros y los cuervos, son capaces de imitar el habla humana y realizar trucos. También tienen una vista muy aguda y son capaces de ver una amplia gama de colores que los humanos no pueden ver."
              }
            />
          </div>
          <div className="imagecomponent">
            <ImageComponent
              src={peces}
              alt={`Peces`}
              message={
                "Los peces son animales acuáticos fascinantes y algunos, como el pez globo, tienen la capacidad de inflarse para protegerse de los depredadores. Además, algunos peces pueden vivir hasta 100 años, como la carpa koi."
              }
            />
          </div>
        </section>
      </Link>
      <Link to={"/"}>
        <p>Volver al inicio</p>
      </Link>
    </main>
  );
};

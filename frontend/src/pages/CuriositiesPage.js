import { Link } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";

export const CuriositiesPage = () => {
  return (
    <main>
      <Link to="/curiosities">
        <h1>Curiosidades</h1>
        <ImageComponent
          src={`./images/conejozanahoria.jpg`}
          alt={`Conejito`}
          message={
            "Los conejos tienen dientes que crecen constantemente, por lo que necesitan masticar constantemente para mantenerlos limados. Además, los conejos pueden saltar muy alto y correr a una velocidad de hasta 50 kilómetros por hora."
          }
        />
        <ImageComponent
          src={`./images/olfatoperro.jpg`}
          alt={`Nariz Perro`}
          message={
            "Los perros tienen un sentido del olfato increíblemente agudo y pueden detectar olores que los humanos no pueden percibir. De hecho, se ha demostrado que algunos perros pueden detectar ciertos tipos de cáncer y otros problemas médicos simplemente oliendo el aliento de una persona."
          }
        />
        <ImageComponent
          src={`./images/gatosaltando.jpg`}
          alt={`Gato Saltando`}
          message={
            "Los gatos son capaces de saltar hasta seis veces su longitud corporal y aterrizar de manera segura en sus pies. Esto se debe a una columna vertebral muy flexible y una habilidad para girar sus patas mientras están en el aire."
          }
        />
        <ImageComponent
          src={`./images/pajaroLoro.jpg`}
          alt={`Loro`}
          message={
            "Los pájaros son animales muy inteligentes y algunos, como los loros y los cuervos, son capaces de imitar el habla humana y realizar trucos. También tienen una vista muy aguda y son capaces de ver una amplia gama de colores que los humanos no pueden ver."
          }
        />
        <ImageComponent
          src={`./images/peces.jpg`}
          alt={`Peces`}
          message={
            "Los peces son animales acuáticos fascinantes y algunos, como el pez globo, tienen la capacidad de inflarse para protegerse de los depredadores. Además, algunos peces pueden vivir hasta 100 años, como la carpa koi."
          }
        />
      </Link>
      <Link to={'/'}><p>Volver al inicio</p></Link>
    </main>
  );
};

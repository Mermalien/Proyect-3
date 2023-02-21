import { Link } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";

export const NormativePage = () => {
  return (
    <section>
      <Link to="/normativa">
        <h1>Normativa sobre animales de compañía</h1>
        <ImageComponent
          src={`./images/dniperro.jpg`}
          alt={`Dni perro`}
          message={
            "Identificación y registro: En España, es obligatorio que todos los perros, gatos y hurones estén identificados mediante microchip y registrados en el Registro de Animales de Compañía de su Comunidad Autónoma."
          }
        />
        <ImageComponent
          src={`./images/vacunaperro.jpg`}
          alt={`Vacuna perro`}
          message={
            "Vacunación: Los perros, gatos y hurones deben estar vacunados contra la rabia. Además, existen otras vacunas recomendadas por los veterinarios, como la vacuna contra la parvovirosis, la leptospirosis, entre otras."
          }
        />
        <ImageComponent
          src={`./images/paseoperro.jpg`}
          alt={`Perro Paseando`}
          message={
            "Paseos: En algunas comunidades autónomas, se exige que los perros estén sujetos con una correa en la vía pública y que los dueños recojan las deposiciones que dejen sus mascotas."
          }
        />
        <ImageComponent
          src={`./images/arnesperro.jpg`}
          alt={`Perro con Arnés`}
          message={
            "Transporte: Al viajar con mascotas, es obligatorio llevarlos en un transportín o sujeto con un arnés homologado. Los animales deben estar correctamente identificados y, en algunos casos, se requiere un certificado de buena salud."
          }
        />
        <ImageComponent
          src={`./images/TenenciaResponsable.jpg`}
          alt={`Galgo Stop Caza`}
          message={
            "Tenencia responsable: La Ley de Protección de los Animales de Compañía establece que los propietarios de mascotas deben asegurarse de que sus animales tengan acceso a agua y comida suficientes, así como de que reciban atención veterinaria cuando sea necesario. Además, deben evitar cualquier tipo de maltrato o abandono de sus mascotas."
          }
        />
      </Link>
      <Link to={'/'}><p>Volver al inicio</p></Link>
    </section>
  );
};

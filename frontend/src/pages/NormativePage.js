import "../styles/normativa.css";
import { Link } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";
import dniperro from "../images/dniperro.jpg";
import vacunaperro from "../images/vacunaperro.jpg";
import paseoperro from "../images/paseoperro.jpg";
import arnesperro from "../images/arnesperro.jpg";
import TenenciaResponsable from "../images/TenenciaResponsable.jpg";
import perrosalon from "../images/perrosalon.jpg";

export const NormativePage = () => {
  return (
    <main className="normativa-page">
      <div className="normativa-container">
        <h1>Tips para Animales de compañia</h1>
        <h2>
          Haz click en las fotos para conocer la Normativa que regula a nuestros
          peludos!
        </h2>

        <Link to="/normativa">
          <section>
            <div className="normacomponent">
              <ImageComponent
                src={dniperro}
                alt={`Imágen de Dni de un perro llamado Firulais`}
                message={
                  "Identificación y registro: En España, es obligatorio que todos los perros, gatos y hurones estén identificados mediante microchip y registrados en el Registro de Animales de Compañía de su Comunidad Autónoma."
                }
              />
            </div>
            <div className="normacomponent">
              <ImageComponent
                src={vacunaperro}
                alt={`Imágen de un perro vacunándose`}
                message={
                  "Vacunación: Los perros, gatos y hurones deben estar vacunados contra la rabia. Además, existen otras vacunas recomendadas por los veterinarios, como la vacuna contra la parvovirosis, la leptospirosis, entre otras."
                }
              />
            </div>
            <div className="normacomponent">
              <ImageComponent
                src={paseoperro}
                alt={`Imágen de perros paseando`}
                message={
                  "Paseos: En algunas comunidades autónomas, se exige que los perros estén sujetos con una correa en la vía pública y que los dueños recojan las deposiciones que dejen sus mascotas."
                }
              />
            </div>
            <div className="normacomponent">
              <ImageComponent
                src={arnesperro}
                alt={`Imágen de un Perro con Arnés viajando en coche`}
                message={
                  "Transporte: Al viajar con mascotas, es obligatorio llevarlos en un transportín o sujeto con un arnés homologado. Los animales deben estar correctamente identificados y, en algunos casos, se requiere un certificado de buena salud."
                }
              />
            </div>
            <div className="normacomponent">
              <ImageComponent
                src={TenenciaResponsable}
                alt={`Imágen manifestación "Galgo Stop Caza"`}
                message={
                  "Tenencia responsable: La Ley de Protección de los Animales de Compañía establece que los propietarios de mascotas deben asegurarse de que sus animales tengan acceso a agua y comida suficientes, así como de que reciban atención veterinaria cuando sea necesario. Además, deben evitar cualquier tipo de maltrato o abandono de sus mascotas."
                }
              />
            </div>
            <div className="normacomponent">
              <ImageComponent
                src={perrosalon}
                alt={`Imágen de un perro en el salón de una casa`}
                message={
                  <>
                    Conoce las leyes y regulaciones locales: Es importante
                    conocer las leyes y regulaciones de tu área sobre animales
                    de compañía. Puedes revisar el{" "}
                    <a
                      href="https://www.boe.es/biblioteca_juridica/codigos/codigo.php?id=210_Codigo_de_Animales_de_Compania&modo=2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Código de Animales de Compañía en España
                    </a>{" "}
                    para obtener más información.
                  </>
                }
              />
            </div>
          </section>
        </Link>
        <Link to={"/"}>
          <p>Volver al inicio</p>
        </Link>
      </div>
    </main>
  );
};

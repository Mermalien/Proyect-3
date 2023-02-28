import "../styles/petproducts.css";
import { Link } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";

import perrocomiendo from "../images/perrocomiendo.jpg";
import perrocama from "../images/perrocama.jpg";
import dogsToys from "../images/dogsToys.jpg";
import collarperro from "../images/collarperro.jpg";
import areneroCat from "../images/areneroCat.jpg";
import transportedog from "../images/transportedog.jpg";

export const PetProductsPage = () => {
  return (
    <main className="petproducts-page">
      <h1>Productos para Mascotas</h1>
      <Link to="/petproducts">
        <section>
          <div className="petproducts-container">
            <ImageComponent
              src={perrocomiendo}
              alt={`Imágen de Perro con un plato de comida`}
              message={
                "Comida y agua: Por supuesto, necesitarás un tazón o plato para la comida y otro para el agua de tu mascota. Asegúrate de mantenerlos limpios y rellenarlos con regularidad."
              }
            />
          </div>
          <div className="petproducts-container">
            <ImageComponent
              src={perrocama}
              alt={`Imágen de un Perro Durmiendo`}
              message={
                "Cama: La mayoría de las mascotas necesitan un lugar cómodo donde descansar y dormir. Elige una cama de tamaño adecuado para tu mascota y de acuerdo a su preferencia."
              }
            />
          </div>
          <div className="petproducts-container">
            <ImageComponent
              src={dogsToys}
              alt={`Imágen de un Perro Jugando`}
              message={
                "Juguetes: Los juguetes son importantes para el entretenimiento y el ejercicio de tu mascota. Selecciona juguetes adecuados al tamaño y edad de tu mascota, pero asegúrate que sean seguros y no puedan causar lesiones."
              }
            />
          </div>
          <div className="petproducts-container">
            <ImageComponent
              src={collarperro}
              alt={`Imágen de un Perro con collar`}
              message={
                "Collar y correa: Para perros y gatos, es importante contar con un collar con identificación y una correa para pasear y mantenerlos controlados. Elige un collar cómodo y seguro, y una correa resistente y duradera."
              }
            />
          </div>
          <div className="petproducts-container">
            <ImageComponent
              src={areneroCat}
              alt={`Imágen de un Gato en el Arenero`}
              message={
                "Arenero o caja de arena: Si tienes un gato, necesitarás una caja de arena y arena para gatos. Selecciona una caja de arena adecuada al tamaño de tu gato y un tipo de arena seguro para él."
              }
            />
          </div>
          <div className="petproducts-container">
            <ImageComponent
              src={transportedog}
              alt={`Imágen de un Perro en Bici`}
              message={
                "Transportador: Si planeas viajar con tu mascota, necesitarás un transportador para mantenerlo seguro y cómodo. Elige un transportador adecuado al tamaño y peso de tu mascota, y asegúrate de que tenga suficiente ventilación y espacio para moverse."
              }
            />
          </div>
        </section>
      </Link>
      <div className="petproducts-back-to-top">
        <Link to={"/"}>Volver al inicio</Link>
      </div>
    </main>
  );
};

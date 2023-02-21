import { Link } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";

export const PetProductsPage = () => {
  return (
    <section>
      <Link to="/petproducts">
        <h1>Productos para Mascotas</h1>
        <ImageComponent
          src={`./images/perrocomiendo.jpg`}
          alt={`Perro Comiendo`}
          message={
            "Comida y agua: Por supuesto, necesitarás un tazón o plato para la comida y otro para el agua de tu mascota. Asegúrate de mantenerlos limpios y rellenarlos con regularidad."
          }
        />
        <ImageComponent
          src={`./images/perrocama.jpg`}
          alt={`Perro Durmiendo`}
          message={
            "Cama: La mayoría de las mascotas necesitan un lugar cómodo donde descansar y dormir. Elige una cama de tamaño adecuado para tu mascota y de acuerdo a su preferencia."
          }
        />
        <ImageComponent
          src={`./images/dogsToys.jpg`}
          alt={`Perro Jugando`}
          message={
            "Juguetes: Los juguetes son importantes para el entretenimiento y el ejercicio de tu mascota. Selecciona juguetes adecuados al tamaño y edad de tu mascota, pero asegúrate que sean seguros y no puedan causar lesiones."
          }
        />
        <ImageComponent
          src={`./images/collarperro.jpg`}
          alt={`Perro con collar`}
          message={
            "Collar y correa: Para perros y gatos, es importante contar con un collar con identificación y una correa para pasear y mantenerlos controlados. Elige un collar cómodo y seguro, y una correa resistente y duradera."
          }
        />
        <ImageComponent
          src={`./images/areneroCat.jpg`}
          alt={`Gato Arenero`}
          message={
            "Arenero o caja de arena: Si tienes un gato, necesitarás una caja de arena y arena para gatos. Selecciona una caja de arena adecuada al tamaño de tu gato y un tipo de arena seguro para él."
          }
        />
        <ImageComponent
          src={`./images/transportedog.jpg`}
          alt={`Perro en Bici`}
          message={
            "Transportador: Si planeas viajar con tu mascota, necesitarás un transportador para mantenerlo seguro y cómodo. Elige un transportador adecuado al tamaño y peso de tu mascota, y asegúrate de que tenga suficiente ventilación y espacio para moverse."
          }
        />
      </Link>
      <Link to={'/'}><p>Volver al inicio</p></Link>
    </section>
  );
};

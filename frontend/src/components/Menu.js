import adopt from "../images/adopt.jpg";
import dogPlant from "../images/dogPlant.jpg";
import fish from "../images/fish.jpg";
import cat from "../images/cat.jpg";
import braveCat from "../images/braveCat.jpg";
import dog from "../images/dog.jpg";

import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <section className="principalMenu">
      <div style={{ backgroundImage: `url(${adopt})` }}>
        <Link to="/adopta">Adopciones</Link>
      </div>

      <div style={{ backgroundImage: `url(${dog})` }}>
        <Link to="/posts">Posts</Link>
      </div>

      <div style={{ backgroundImage: `url(${cat})` }}>
        <Link to="/curiosities">Curiosidades</Link>
      </div>

      <div style={{ backgroundImage: `url(${fish})` }}>
        <Link to="/normative">Normativa</Link>
      </div>

      <div style={{ backgroundImage: `url(${braveCat})` }}>
        <Link to="/petproducts">Productos para mascotas</Link>
      </div>

      <div style={{ backgroundImage: `url(${dogPlant})` }}>
        <Link to="/plants">Animales y plantas en la misma casa</Link>
      </div>
    </section>
  );
};

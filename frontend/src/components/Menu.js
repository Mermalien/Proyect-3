import { Link } from "react-router-dom";
import adopt from "../images/adopt.jpg";
import dog from "../images/dog.jpg";
import cat from "../images/cat.jpg";
import fish from "../images/fish.jpg";
import braveCat from "../images/braveCat.jpg";
import dogPlant from "../images/dogPlant.jpg";

export const Menu = () => {
  return (
    <div className="menuContainer">
      <section className="principalMenu">
        <div style={{ backgroundImage: `url(${adopt})` }}>
          <div className="menuTitle">Adopciones</div>
          <div className="menuLink">
            <Link to="/adopta" className="vermas btn-hover">
              Ver más
            </Link>
          </div>
        </div>

        <div style={{ backgroundImage: `url(${dog})` }}>
          <div className="menuTitle">Publicaciones</div>
          <div className="menuLink">
            <Link to="/posts" className="vermas btn-hover">
              Ver más
            </Link>
          </div>
        </div>

        <div style={{ backgroundImage: `url(${cat})` }}>
          <div className="menuTitle">Curiosidades</div>
          <div className="menuLink">
            <Link to="/curiosities" className="vermas btn-hover">
              Ver más
            </Link>
          </div>
        </div>

        <div style={{ backgroundImage: `url(${fish})` }}>
          <div className="menuTitle">Normativa</div>
          <div className="menuLink">
            <Link to="/normativa" className="vermas btn-hover">
              Ver más
            </Link>
          </div>
        </div>

        <div style={{ backgroundImage: `url(${braveCat})` }}>
          <div className="menuTitle">Productos</div>
          <div className="menuLink">
            <Link to="/petproducts" className="vermas btn-hover">
              Ver más
            </Link>
          </div>
        </div>

        <div style={{ backgroundImage: `url(${dogPlant})` }}>
          <div className="menuTitle">Plantas</div>
          <div className="menuLink">
            <Link to="/plants" className="vermas btn-hover">
              Ver más
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

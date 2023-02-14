import adopt from '../images/adopt.jpg';
import dogPlant from '../images/dogPlant.jpg';
import fish from '../images/fish.jpg';
import cat from '../images/cat.jpg';
import braveCat from '../images/braveCat.jpg';
import dog from '../images/dog.jpg';

export const Menu = () => {
    return(
        <div className="principalMenu">

        <div style={{backgroundImage: `url(${adopt})`}}>Enlaces para adoptar</div>

        <div style={{backgroundImage: `url(${dog})`}}>Posts publicados por los usuarios</div>

        <div style={{backgroundImage: `url(${cat})`}}>Sección de curiosidades</div>

        <div style={{backgroundImage: `url(${fish})`}}>Normativa sobre animales de compañía</div>

        <div style={{backgroundImage: `url(${braveCat})`}}>Productos para mascotas</div>

        <div style={{backgroundImage: `url(${dogPlant})`}}>Tips para animales y plantas en la misma casa</div>

        </div>
    )
}
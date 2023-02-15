import adopt from '../images/adopt.jpg';
import dogPlant from '../images/dogPlant.jpg';
import fish from '../images/fish.jpg';
import cat from '../images/cat.jpg';
import braveCat from '../images/braveCat.jpg';
import dog from '../images/dog.jpg';

import { PostPage } from '../pages/PostPage';

export const Menu = () => {
    return(
        <section className="principalMenu">

        <div style={{backgroundImage: `url(${adopt})`}}>Enlaces para adoptar</div>

        <div style={{backgroundImage: `url(${dog})`}}><PostPage></PostPage></div>

        <div style={{backgroundImage: `url(${cat})`}}>Curiosidades</div>

        <div style={{backgroundImage: `url(${fish})`}}>Normativa sobre animales de compañía</div>

        <div style={{backgroundImage: `url(${braveCat})`}}>Productos para mascotas</div>

        <div style={{backgroundImage: `url(${dogPlant})`}}>Tips para animales y plantas en la misma casa</div>

        </section>
    )
}
import adopt from "../images/adopt.jpg";
import dogPlant from "../images/dogPlant.jpg";
import fish from "../images/fish.jpg";
import cat from "../images/cat.jpg";
import braveCat from "../images/braveCat.jpg";
import dog from "../images/dog.jpg";

import { HomePostsPage } from "../pages/HomePostsPage";
import { AdoptPage } from "../pages/AdoptPage";
import { CuriositiesPage } from "../pages/CuriositiesPage";
import { NormativePage } from "../pages/NormativePage";
import { AnimalsPlantsPage } from "../pages/AnimalsPlantsPage";
import { PetProductsPage } from "../pages/PetProductsPage";

export const Menu = () => {
  return (
    <section className="principalMenu">
      <div style={{ backgroundImage: `url(${adopt})` }}>
        Adopciones<AdoptPage></AdoptPage></div>

      <div style={{ backgroundImage: `url(${dog})` }}><HomePostsPage className='posts-page'/></div>

      <div style={{ backgroundImage: `url(${cat})` }}><CuriositiesPage></CuriositiesPage></div>

      <div style={{ backgroundImage: `url(${fish})` }}><NormativePage></NormativePage></div>

      <div style={{ backgroundImage: `url(${braveCat})` }}><PetProductsPage></PetProductsPage></div>

      <div style={{ backgroundImage: `url(${dogPlant})` }}><AnimalsPlantsPage></AnimalsPlantsPage></div>
    </section>
  );
};

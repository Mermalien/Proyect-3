import adopt from "../images/adopt.jpg";
import dogPlant from "../images/dogPlant.jpg";
import fish from "../images/fish.jpg";
import cat from "../images/cat.jpg";
import braveCat from "../images/braveCat.jpg";
import dog from "../images/dog.jpg";

import { PostPage } from "../pages/PostPage";
import { AdoptPage } from "../pages/AdoptPage";
import { CuriositiesPage } from "../pages/CuriositiesPage";
import { NormativePage } from "../pages/NormativePage";
import { AnimalsPlantsPage } from "../pages/AnimalsPlantsPage";
import { PetProductsPage } from "../pages/PetProductsPage";

export const Menu = () => {
  return (
    <section className="principalMenu">
      <div style={{ backgroundImage: `url(${adopt})` }}>
        Adopciones<AdoptPage></AdoptPage>
      </div>

      <div style={{ backgroundImage: `url(${dog})` }}>
        Sección de publicaciones<PostPage></PostPage>
      </div>

      <div style={{ backgroundImage: `url(${cat})` }}>
        Curiosidades<CuriositiesPage></CuriositiesPage>
      </div>

      <div style={{ backgroundImage: `url(${fish})` }}>
        Normativa sobre animales de compañía<NormativePage></NormativePage>
      </div>

      <div style={{ backgroundImage: `url(${braveCat})` }}>
        Productos para mascotas<PetProductsPage></PetProductsPage>
      </div>

      <div style={{ backgroundImage: `url(${dogPlant})` }}>
        Tips para animales y plantas en la misma casa
        <AnimalsPlantsPage></AnimalsPlantsPage>
      </div>
    </section>
  );
};

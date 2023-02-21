import { Link } from "react-router-dom";

export const AdoptPage = () => {
  return (
    <div>
    <section>
      <Link to="/adopta">
        <h1>¿Estás pensando en adoptar?</h1>
      </Link>
    </section>

<ul>
<li>
    <a href= "https://www.addaong.org/es/informacion/listado-de-protectoras-de-animales/" className='protectoras' target="_blank" rel="noreferrer">Protectoras de animales</a>
    <a href="https://www.protectoras.es/" className='otrasprotectoras' target="_blank" rel="noreferrer">Otras protectoras</a>
</li>
</ul>
</div>

  );
};

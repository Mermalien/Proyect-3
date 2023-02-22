import { Link } from "react-router-dom";


export const AnimalsPlantsPage = () => {
  return (
    <main>

      <Link to="/plants">
        <h1>Tips para animales y plantas en la misma casa</h1>
      </Link>


      <Link to={'/'}><p>Volver al inicio</p></Link>
    </main>
    
  );
};

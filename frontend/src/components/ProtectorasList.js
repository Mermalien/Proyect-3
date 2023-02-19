import { Protectoras } from "./Protectoras";

export const ProtectorasList = ({ protectoras }) => {
  if (!Array.isArray(protectoras)) {
    return <p>No se encontraron protectoras</p>;
  }

  return (
    <div>
      <h2>Protectoras de animales</h2>
      <ul>
        {protectoras.map((protectora) => (
          <li key={protectora.raza}>
            <Protectoras protectora={protectora} />
          </li>
        ))}
      </ul>
    </div>
  );
};

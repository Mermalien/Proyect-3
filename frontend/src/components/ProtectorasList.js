import { Protectoras } from "./Protectoras";

export const ProtectorasList = ({ protectoras }) => {
  return (
    <div>
      <h2>Protectoras de animales</h2>
      <ul>
        {protectoras.map((protectora) => (
          <li key={protectora.id}>
            <Protectoras protectora={protectora} />
          </li>
        ))}
      </ul>
    </div>
  );
};

import { useState, useEffect } from "react";
// import { getProtectAnimalsService } from "../services";

const useProtectorasDeAnimales = (id) => {
  const [protectoras, setProtectoras] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProtectoras = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://www.zaragoza.es/sede/servicio/mascotas.json"
        );

        const data = await response.json();

        setProtectoras(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProtectoras();
  }, []);

  return { protectoras, loading, error };
};

export default useProtectorasDeAnimales;

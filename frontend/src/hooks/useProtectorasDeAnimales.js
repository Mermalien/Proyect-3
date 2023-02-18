import { useState, useEffect } from "react";
import { getProtectAnimalsService } from "../services";

const useProtectorasDeAnimales = (id) => {
  const [protectoras, setProtectoras] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProtectoras = async () => {
      try {
        setLoading(true);

        const data = await getProtectAnimalsService();

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

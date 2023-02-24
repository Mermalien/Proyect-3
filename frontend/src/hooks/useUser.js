import { useEffect, useState } from "react";
import { getUserDataService } from "../services";

export const useUser = (id) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const data = await getUserDataService(id);
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [id]);

  return { user, loading, error };
};

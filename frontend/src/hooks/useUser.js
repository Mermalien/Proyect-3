import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getUserDataService } from "../services";

export const useUser = (id) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const data = await getUserDataService(id, token);
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [id, token]);

  return { user, loading, error };
};

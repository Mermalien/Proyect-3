import "../styles/login.css";

import { useContext, useState } from "react";
import { loginUserService } from "../services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUserService({ email, password });

      login(data.token);
      alert(`Has iniciado sesión`);
      navigate("/");
      console.log("Sesión iniciada correctamente");
    } catch (error) {
      setError(error.message);
      console.log("No se ha podido iniciar sesión");
      alert(`No se ha podido iniciar sesión`);
    }
  };

  return (
    <section className="login">
      <h1>Login</h1>

      <form onSubmit={handleForm} className="loginForm">
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="pass">Contraseña</label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
          type="submit"
        >
          Login
        </button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};

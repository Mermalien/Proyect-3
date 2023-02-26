import "../styles/register.css";

import { useState } from "react";
import { registerUserService } from "../services";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    if (pass1 !== pass2) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await registerUserService({ name, email, password: pass1 });
      navigate("/login");
      console.log("Usuario registrado correctamente");
    } catch (error) {
      setError(error.message);
      console.log("No se ha podido registrar el usuario");
    }
  };
  return (
    <section className="register">
      <h1>Registro</h1>
      <form onSubmit={handleForm} className="registerForm">
        <fieldset>
          <label htmlFor="name">Nombre: </label>
          <input
            type="name"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </fieldset>

        <fieldset>
          <label htmlFor="pass1">Contraseña: </label>
          <input
            type="password"
            id="pass1"
            name="pass1"
            value={pass1}
            required
            onChange={(e) => setPass1(e.target.value)}
          ></input>
        </fieldset>

        <fieldset>
          <label htmlFor="pass2">Repite la contraseña:</label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            value={pass2}
            required
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>

        <button
          style={{
            backgroundColor: "#C39BD3",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Register
        </button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};

import { Link } from "react-router-dom";
import { Auth } from "./Auth";
import logo_Blanco from "../images/logo_Blanco.png";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo_Blanco} alt="logo" />
      </Link>

      <nav>
        <Auth />
      </nav>
    </header>
  );
};

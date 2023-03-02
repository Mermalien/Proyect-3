import { Link } from "react-router-dom";
import { Auth } from "./Auth";
import Logo from "./Logo";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <Logo width="48px" height="48px" />
      </Link>

      <nav>
        <Auth />
      </nav>
    </header>
  );
};

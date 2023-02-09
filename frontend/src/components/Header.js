import { Auth } from "./Auth";

export const Header = () => {
    return(
    <header>
        <h1>Pettie's App</h1>

        <nav>
            <Auth/>
        </nav>
    </header>
    );
};
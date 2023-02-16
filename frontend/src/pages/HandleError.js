import { useRouteError } from "react-router-dom";


export function HandleError(){
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error-page">
        <h1> Hubo un error, refresca la página o vuelve a la página principal</h1>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    );
           
}
import { useState } from "react"
import { updateProfileService } from "../services";

export const ChangeProfile = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const updatedUser = await updateProfileService(name, password);

            console.log("Actualizado:", updatedUser
            );
        } catch (error) {
            throw new Error(error.message)
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    };


    return(
        <form onSubmit={handleSubmit}>
            <fieldset>

                <label htmlFor="name">Nombre de usuario:</label>

                <input type="text" name="name" id="name" value={name} required onChange={handleNameChange}></input>
            </fieldset>


            <fieldset>

            <label htmlFor="pass">Contraseña:</label>

                <input type="password" name="pass" id="pass" value={password} required onChange={handlePasswordChange}></input>

            </fieldset>

            <button type="submit">Actualiza tus datos</button>
        </form>
    )
}
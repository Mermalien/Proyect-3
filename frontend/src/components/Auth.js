import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const Auth= () => {
    const {user, logout} = useContext(AuthContext);

    return user ? (
        <p>Has iniciado sesión como {user.email}<button onClick={() => logout()}>Cerrar Sesión</button></p>
    ) :
    (
    <ul>
        <li><Link to='/register'>Registro</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </ul>
    )
   
}
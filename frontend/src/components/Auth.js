import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const Auth= () => {
    const {user, logout} = useContext(AuthContext);

    return user ? (
        <section><p>Has iniciado sesión como<Link to={`/user/${user.id}`}>{user.email}</Link></p> {''}<button onClick={() => logout()}>Cerrar Sesión</button></section>
    ) :
    (
    <ul>
        <li><Link to={'/register'}>Registro</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/user'}>Mi perfil</Link></li>
    </ul>
    )
   
};
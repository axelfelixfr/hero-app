import React, { useContext } from 'react'
import { types } from '../../types/types';
import { AuthContext } from './../../auth/AuthContext';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);
    
    
    const handleLogin = () => {
        // Una history instancia tiene dos métodos para navegar: push y replace
        /* Si piensa en el history como un conjunto de ubicaciones visitadas, push agregará una 
        nueva ubicación al conjunto y replace reemplazará la ubicación actual en el conjunto 
        con la nueva. Por lo general, querrá usar el push método cuando esté navegando. */
        
        // history.push('/'); // Con push si regresamos a la página anterior, nos llevara al login

        // El searchPath nos ayudara a pasarle a la ruta los parámetros de búsqueda (si es que entro a la ruta '/search')
        const searchPath = localStorage.getItem('lastSearch');
        
        // El último path es para recordar donde estuvo el usuario por última vez para redireccionarlo a ella cuando haga login
        const lastPath = localStorage.getItem('lastPath') || '/';
        // El código "|| '/'" nos ayudará a enviarlo a la ruta por defecto si es que el lastPath esta vacío en el localStorage
        
        // Se crea el usuario para mostrarlo en la navbar
        const user = {
            name: 'Axel'
        }
        
        // La action nos ayudara a saber si hace login o logout, en este caso es login
        const action = {
            type: types.login,
            payload: user
        } // En el payload, le pasamos el usuario
        
        // Disparamos la action en el useContext
        dispatch(action);

        // Si es que la última ruta fue search entonces que concatene el searchPath para saber la búsqueda de heroes y pasarlo a la ruta
        if(lastPath === '/search'){
            history.replace(lastPath+searchPath); // Concatenamos las dos variables
        } else{
            // Si no entro a la condición, significa que estuvo en otra ruta
            history.replace(lastPath); // Con replace si regresamos a la página anterior, NO nos llevara al login
        }
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
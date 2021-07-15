import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

export const HeroesApp = () => {

    // Declaramos el valor init() a través del localStorage, retornamos el getItem si es que existe, si no mandamos el logged en false
    const init = () => {
        return JSON.parse(localStorage.getItem('user')) || { logged: false };
    }

    // Declaramos un useReducer con el authReducer que se creo, de igual forma mandamos un objeto vacío y el valor inicial
    const [user, dispatch] = useReducer(authReducer, {}, init);
    
    useEffect(() => {
        // JSON.stringify() toma un objeto de JavaScript y lo transforma en una cadena JSON (que pueda leer el localStorage)
        localStorage.setItem('user', JSON.stringify(user));
        // setItem() para agregar un nuevo itemTODO
        // Como primer argumento, le pasamos la clave, que en este caso es 'todos'
        // Como segundo argumento, le pasamos los todos
    },[user]); // El useEffect se ejecutara cada vez que cambie el state del useReducer


    return (
        <AuthContext.Provider value={{ user, dispatch }} >
            <AppRouter />
        </AuthContext.Provider>
    )
}

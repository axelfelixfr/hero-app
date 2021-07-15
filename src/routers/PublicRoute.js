import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => {

    // Pasamos las props de Route con el operador spread (...rest)
    // Ahora hacemos la negación de isAuthenticated con "!isAuthenticated"
    // Para que saber si puede ver las rutas públicas o no
    // Por lo tanto si "!isAuthenticated" esta en true, muestra el componente que quiere ver
    // Pero si "!isAuthenticated" esta en false, con el <Redirect /> de react-router lo redirigimos a la ruta principal ('/')
    // Como la ruta del login ('/login') es publica, un usuario ya autenticado no debe ver la ruta por lo tanto por eso lo redirigimos a la ruta principal ('/')
    return (
        <Route { ...rest }
                component={(props) => ((!isAuthenticated) 
                                      ? (<Component { ...props }/>)
                                      : (<Redirect to='/' />)
                )}    
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
// Component lo declaramos como function en las propTypes ya que se trata de functional components
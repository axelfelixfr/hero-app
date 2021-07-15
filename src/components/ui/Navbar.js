import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Navbar = () => {

    // Se necesita tanto el usuario para el dispatch para hacer el logout
    const { user:{name}, dispatch } = useContext(AuthContext);

    // El componente <Navbar /> es independiente del Route como los demás, por lo tanto no puede hacer uso de la prop history
    // Pero react-router-dom trae implicitamente un Provider como un useContext
    // Por lo tanto provee información del router, podemos hacer uso del useHistory() del react-router-dom
    const history = useHistory(); // Extraemos el history del useHistory()

    const handleLogout = () => {
        // El type de la action, lo obtenemos de los types que se hicieron
        const action = {
            type: types.logout
        }
        
        // Disparamos la acción del logout
        dispatch(action);

        // Hacemos uso del history del useHistory del react-router-dom
        history.replace('/login');
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            {/* Definimos las rutas en la navbar */}
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    {/* Usamos el componente <NavLink /> en vez de <Link /> ya que hacemos uso de activeClassName para crear estilos al seleccionar ese item */}
                    {/* Definimos la ruta de cada item con to="" */}
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="order-3 navbar-collapse collapse w-100 dual-collapse2">
                <ul className="ml-auto navbar-nav">

                    {/* El name lo obtenemos del useContext AuthContext */}
                    <span className="nav-item nav-link text-info">
                        { name }
                    </span>

                    {/* Le pasamos al boton con un evento click la función handleLogout */}
                    <button className="nav-item nav-link btn" onClick={ handleLogout }>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
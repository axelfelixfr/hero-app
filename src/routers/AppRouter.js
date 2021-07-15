import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from './../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

// AppRouter es el router principal de la aplicación
export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
                <div>
                    <Switch>
                        <PublicRoute exact path="/login" component={ LoginScreen } isAuthenticated={ user.logged }/>
                        <PrivateRoute 
                            path="/" 
                            component={ DashboardRoutes } 
                            isAuthenticated={ user.logged }    
                            />
                        {/* Si el usuario pasa el login, podra disponer de las rutas del DashboardRoutes */}
                    </Switch>
                </div>
        </Router>
    )
}
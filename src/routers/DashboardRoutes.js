import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from './../components/ui/Navbar';
import { MarvelScreen } from './../components/marvel/MarvelScreen';
import { HeroeScreen } from './../components/heroes/HeroeScreen';
import { DcScreen } from './../components/dc/DcScreen';
import { SearchScreen } from './../components/search/SearchScreen';

export const DashboardRoutes = () => {
    // A diferencia del AppRouter, este componente no dispone del componente <Route />
    return (
        <>
            <Navbar/> 
            {/* La navbar es el componente hecho para la navegación con los items y los estilos de Bootstrap */}
            
            <div className="container mt-2">
                <Switch>
                    {/* Definimos tanto el path como el componente que va a renderizar en el <Route /> */}
                    <Route exact path="/marvel" component={ MarvelScreen } />

                    <Route exact path="/heroe/:heroeId" component={ HeroeScreen } />
                    {/* Para pasarle argumentos a las rutas se puede poner ":atributo" */}

                    <Route exact path="/dc" component={ DcScreen } />

                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/marvel"/>
                    {/* Si el navegador no encuentra ninguna de las rutas entonces lo va redirigir a "/marvel", también sirve para que el usuario no vaya inexistente */}
                </Switch>
            </div>  
        </>
    )
}
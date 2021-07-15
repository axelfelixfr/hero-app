import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { heroeImages } from '../../helpers/heroeImages';
import { getHeroeById } from './../../selectors/getHeroeById';
// import spiderman from '../../assets/heroes/marvel-spider.jpg'; // Estático

export const HeroeScreen = ({history}) => {
    
    // Hacemos uso de useParams de react-router para extraer los parametros de la ruta
    const { heroeId } = useParams();

    // El useMemo ayudara a solo renderizar el componente cuando haya un cambio en el heroeId
    const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);
    // Con el useMemo el componente se va a renderizar solo cuando el heroeId cambie, optimizando el componente

    // const heroe = getHeroeById(heroeId);

    // Si el heroe no existe entonces que redireccione a la ruta "/"
    if(!heroe){
        // Hacemos uso del componente <Redirect /> de react-router
        return <Redirect to="/" />;
    }

    // Para regresar a la página de HeroeList
    const handleReturn = () => {
        // Si la history (el recorrido entre rutas) es menor que 2, significa que recien entro al HeroeScreen, entonces debe regresar al "/"
        if(history.length <= 2){
            // Esto sirve para que no me salga de la página, si hace click en el boton Return, va a regresar a la página princial con el path ('/')
            history.push('/');
        } else {
            // Si no es así, significa que ha recorrido más la página así que puede volver con goBack
            history.goBack(); 
        }
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = heroe;

    return (
        <div className="mt-5 row">
            <div className="col-4">
                {/* Las clases animate__animated son de la librería de animaciones: Animate.css */}
                <img className="img-thumbnail animate__animated animate__fadeInLeft" 
                    //  src={ `../assets/heroes/${heroeId}.jpg` } 
                    //  src={ spiderman }
                     src= { heroeImages(`./${heroeId}.jpg`).default }
                     alt={superhero} 
                />
                
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> { alter_ego }</li>
                    <li className="list-group-item"><b>Publisher:</b> { publisher }</li>
                    <li className="list-group-item"><b>First appearance:</b> { first_appearance }</li>
                </ul>

                <h5>Characters</h5>
                <p>{ characters }</p>

                {/* Le pasamos la función handleReturn a través de un evento click  */}
                <button className="btn btn-outline-info" onClick={ handleReturn }>
                    Return
                </button>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom';
import { heroeImages } from '../../helpers/heroeImages';

// Con desestructuración obtenemos toda la data del heroe seccionada para un mejor uso
export const HeroeCard = ({id, superhero, alter_ego, first_appearance, characters}) => {
    return (
        // Usamos el style de JavaScript, no haciendo uso de "-" ya que son propiedades al ser un objeto
        // Por lo tanto colocamos "maxWidth" en vez de "max-width"
        <div className="card ms-3" style={ { maxWidth: 540  } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    {/* Al src lo comparamos con su id ya que es el mismo nombre que tiene las imagenes, al final se pone la extensión .jpg */}
                    <img 
                        // src={ `./assets/heroes/${id}.jpg` } 
                        src={ heroeImages(`./${id}.jpg`).default }
                        className="card-img" 
                        alt={ superhero } />
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">{ alter_ego }</p>

                        {/* Algunos heroes tienen el mismo alter_ego como character */}
                        {/* Por lo tanto se compara que si es diferente entonces que muestre el parrafo con sus characters */}
                        {
                            (alter_ego !== characters) && <p className="card-text">{ characters }</p>
                        }

                        <p className="card-text">
                            <small className="text-muted">{ first_appearance }</small>
                        </p>

                        {/* Extraemos el id para redireccionar a su propia página a través del componente <HeroeScreen /> */}
                        <Link to={`./heroe/${id}`}>
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

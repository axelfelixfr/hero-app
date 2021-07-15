import React, { useMemo } from 'react';
import { getHeroesByPublisher } from './../../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

// Obtenemos el publisher (ya sea DC o Marvel) a través de desestructuración
export const HeroeList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]); // Con el useMemo el componente se va a renderizar solo cuando el publisher cambie
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {/* Con la función map (heroes es un arreglo) podemos recorrer cada heroe de dicho publisher */}
            {
                heroes.map(heroe => (
                    <HeroeCard key={heroe.id} { ...heroe }/>
                ))
            }
            {/* Con el operador spread (...heroe) podemos obtener todo el objeto heroe así como sus propiedades */}
        </div>
    )
}

import React from 'react'
import { HeroeList } from '../heroes/HeroeList'

export const MarvelScreen = () => {

    // Le pasamos el publisher al componente para que muestre la data de Marvel
    const publisher = 'Marvel Comics';

    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr />

            <HeroeList publisher={ publisher }/> 
        </div>
    )
}

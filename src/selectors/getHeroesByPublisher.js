import { heroes } from './../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    // Hacemos un arreglo con los dos publisher que hay en la data de heroes
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    // Si el publisher que se mando no coincide con el arreglo de validPublisher entonces manda un error
    if(!validPublisher.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    // Se retornan los heroes que coincidan con el publisher que se mando con el método filter
    return heroes.filter(heroe => heroe.publisher === publisher);
}
import { heroes } from './../data/heroes';

export const getHeroeById = (id) => {

    // Hacemos la busqueda del heroe con su id a través de la función find() ya que se piensa solo regresar un heroe con el componente <HeroeScreen />
    return heroes.find(heroe => heroe.id === id);
}
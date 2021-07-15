import { heroes } from '../data/heroes'

// Definimos el name vacío (name = '') por si no llega nada en las rutas
export const getHeroesByName = (name = '') => {

    // Si el name esta vacío entonces regresamos un arreglo vacío, como si no se hubiera encontrado nada
    if(name === ''){
        return [];
    }

    // Pasamos el nombre que se llego por la ruta a lowercase (minusculas) para una mejor búsqueda
    name = name.toLocaleLowerCase();

    // Usamos el método filter() ya que puede que la búsqueda coincida con más de un heroe
    // Usamos el atributo superhero del heroe y lo pasamos a lowercase (minúsculas) de igual forma para una mejor búsqueda y haga match con el name que se llego por la función
    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(name));
}
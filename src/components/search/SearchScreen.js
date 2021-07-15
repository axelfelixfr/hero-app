import React, { useMemo } from 'react';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { HeroeCard } from '../heroes/HeroeCard';
import { useForm } from './../../hooks/useForm';
import { getHeroesByName } from './../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    // useLocation() es un hook que tiene el react-router-dom para dar datos de la ruta en que se encuentra el usuario
    const location = useLocation();
    // location es un objeto, y entre sus propiedades esta el "search" que nos servira para saber los datos que se buscaron en el formulario
    // "search" nos devuelve un valor como: "?q=Spiderman"

    // El problema es que si queremos usar el valor de "search" no podemos usarla como tal, es necesario parsearlo
    // La librería de queryString nos ayuda a parsear la propiedad "search", con el metodo parse()
    // queryString nos ayudara de pasar de "?q=Spiderman" a solamente "Spiderman"
    const { q = '' } = queryString.parse(location.search);
    // Definimos el q = '' ya que si esta vacío devolvera undefined, por lo tanto lo definimos como un string vacío

    // Usamos el hook useForm para el formulario
    const [ formValues, handleInputChange ] = useForm({
        search: q
    }); // A la propiedad search (el input) le definimos el valor por defecto, del valor que tiene la ruta que obtuvimos con queryString

    const { search } = formValues; // Del formValues extraemos el search

    // Pasamos la data de heroes a una constante
    // const heroesFiltered = getHeroesByName(search);

    // Realizamos el useMemo para que solo cambie cuando el queryString(q) cambie, ejecutamos la búsqueda del heroe igual con el queryString
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault(); // Quitamos el refresh de la página al enviar el formulario

        // Usamos el history del router para mandar a la url la búsqueda del formulario
        history.push(`?q=${search}`);
    }

    return (
        <div>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input type="text" name="search" autoComplete="off" value={ search } onChange={ handleInputChange } placeholder="Find your hero" className="form-control"/>

                        <button type="submit" className="mt-1 btn btn-block btn-outline-primary">Search...</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {/* Si el queryString (q) esta vacío entonces mandamos esta alerta */}
                    {
                        (q === '') &&
                        <div className="alert alert-info">
                            Search a heroe
                        </div>
                    }
                    
                    {/* Si el queryString (q) no esta vacío pero no hay ningún heroe (heroesFiltered) entonces mandamos esta alerta */}
                    {
                        (q !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-warning">
                            There is no a heroe with { q }
                        </div>
                    }

                    {/* Filtramos la busqueda con la función map, usamos map ya que una búsqueda puede coincidir con más de un heroe */}
                    {
                        heroesFiltered.map(hero => (
                            <HeroeCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react';

function Pokemon({avatar, name}){//destructurar lo que se recibe
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default function AjaxHooks(){

    const [pokemons, setPokemons] = useState([]);

   /*  // COMPONENTDIDMOUNT
    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                // console.log(json);
                json.results.forEach((el) => {
                    fetch(el.url)
                        .then((res) => res.json())
                        .then(json => {
                            // console.log(json);
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default,
                            };
                            //paso la variable que actualiza
                            // destructura lo que trae pokemons mas el pokemon agregado arriba
                            setPokemons((pokemons) => [...pokemons, pokemon]);
                        });
                });
            });
    }, []);//como solo quiero hacer la peticion una sola vez dejo el arreglo vacio */
    
    // REACT POR SU NATURALEZA ES ASINCRONO Y REACTIVO
    //ES UNA MALA PRACTICA CONVERTIR EL USEEFFECT EN ASYNCRONO
    //LO SUGERIDO ES CREAR UNA FUNCION
    useEffect(() => {

        const getPokemons = async (url) => {
            let res = await fetch(url),
                json = await res.json();

            // console.log(json);

            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                json = await res.json();

                // console.log(json);
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                };
                // funcion que actualiza el estado
                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        };
        
        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, []);//como solo quiero hacer la peticion una sola vez dejo el arreglo vacio

    return(
        <>
            <h2>Peticiones Asincronas en Hooks</h2>
                {/* SI LA LONGITUD ES 0 MOSTRARA EL CARGANDO SI NO EL COMPONENTE */}
                {pokemons.length === 0 ? (
                    <h3>Cargando...</h3>
                    ) : (
                        pokemons.map((el) => (
                        <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>
                        ))
                    )
                }
        </>
    )
}
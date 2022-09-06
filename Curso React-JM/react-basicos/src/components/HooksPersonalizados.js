import React, { useState, useEffect } from 'react';
// como no lo exporte por defecto le puedo poner el nombre que quiera
//asi lo puedo usar en cuaqluier otro lugar
import { useFetch } from '../hooks/useFetch';

export default function HooksPersonalizados(){
    // console.log(useFetch);
    let url = "https://pokeapi.co/api/v2/pokemon/";
    url = "https://jsonplaceholder.typicode.com/users";
    
    // destructuracion en formato de arreglo
    //extraigo esas 3 variables del useFetch
    // useFetch recibe la url a consumir
    let {data, isPending, error} = useFetch(url);
    return(
        <>
            <h2>Hooks Personalizados</h2>
            {/* pondre las tres variables que me devuelve el hook*/}
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
                <mark>
                    {JSON.stringify(error)}
                </mark>
            </h3>
            <h3>
                <pre style={{whiteSpace:"pre-wrap"}}>
                    <code>
                        {JSON.stringify(data)}
                    </code>
                </pre>
            </h3>
        </>
    )
}
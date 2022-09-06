// los custom hooks deben iniciar llamandose use

//no importa react porque lo que se creara sera una funcion
//que luego se usara en un componente
import { useState, useEffect } from 'react';

// se le pasa la url ya que de ahi se consumira el api
export const useFetch = (url) => {
    // para controlar los datos que vendran
    const [data, setData] = useState(null);
    // manejo de respuesta
    const [isPending, setIsPending] = useState(true);
    // error
    const [error, setError] = useState(null);
    
    // se ejecutara cuando cambie la url en el archivo donde se llama nuestro
    //hook personalizado
    useEffect(() => {
        const getData = async (url) => {

            try {
                let res = await fetch(url);

                //cuando la respuesta responda el await validamos
                // si es falsa
                if(!res.ok){
                    // el statustext aveces viene vacio por eso el operador ternario
                    throw{
                        err: true, 
                        status: res.status, 
                        statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
                    };
                }

                // si es verdadera, convierte a json los datos traidos
                let data = await res.json();

                // ya no esta pendiente el resultado
                setIsPending(false);
                //actualizamos los datos con la data traida
                setData(data);
                // no hubo ningun error
                setError({err: false});

            } catch (err) {
                // actualizamos los estados del hook
                setIsPending(true);
                setError({err});
            }
        };

        // la logica de como obetener los datos, atributos 
        //es aparte se haria en donde se usaria el hook fetch
        
        getData(url);
    }, [url]);

    // lo que retornara nuestra funcion sera nuestro hook
    // se puede poner a manera de arreglo, objeto, string, etc
    return {data, isPending, error}
}

// un hook personalizado simplemente extrae abstrae la logica de programacion 
//extrae la funcionalidad en un archivo retorna los datos y luego lo usas las veces necesarias
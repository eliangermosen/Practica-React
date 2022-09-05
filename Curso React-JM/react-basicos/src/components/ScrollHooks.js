import React, { useState, useEffect } from 'react';

export default function ScrollHooks(){

    const [scrollY, setScrollY] = useState(0);

    // cada vez que se necesite renderizar este componente
    //se ejecutara lo que este en la funciondos 2lineas debajo
    useEffect(() => {
        console.log("Moviendo el SCROLL");

        //creo una funcion que evaluara en todo momento el comportamiento del scroll y actualizar el UI
        const detectarScroll = () => {
            // pageYOffset me dice cuantos pixeles me he desplazado de la barra del navegador
            setScrollY(window.pageYOffset);
        }

        // se ejecutara cada vez que detecte scroll
        window.addEventListener("scroll", detectarScroll);
        
        //cuando ScrollHook ya no exista retorna una 
        //funcion para desuscribir de este evento
        return() => {
            window.removeEventListener("scroll", detectarScroll);
        }

        // si no especificamos el segundo parametro del useEffect
        //se renderizara cada vez que se vuelva a pintar el componente
    },[scrollY]);//tambien fase de Actualizacion pero solo lo hara cuando cambie la variable

    // podemos tener tantos useEffect como necesite
    useEffect(() => {
        console.log("Fase de Montaje");
        // para solo ejecutarlo en la fase de montaje solo debemos 
        //pasarle el segundo parametro que representa lo que se estara revisando
        //solamente se ejecutara cuando la variable cambie
        //para el consumo de API dejamos el arreglo vacio
        // componentDidMount
    },[]);
    
    useEffect(() => {
        console.log("Fase de Actualizacion");
        //si el useEffect no tiene definido la lista de dependencias
        //sera como un ComponentDidUpdate cada vez que se vuelva a 
        //renderizar el componente ejecutara todo lo que este en el efecto
    });//no es bueno dejar el useEffect sin el segundo parametro

    useEffect(() => {
        // la funcion useEffect nos permite retornar una funcion
        //cuando se le agrega return REACT entiende que 
        //quieres ejecutar la fase de desmontaje
        //desuscribirte de servicios, desconectarte de api, limpiar intervalos de tiempo, limpiar manejadores de eventos
        // componentWillUnmount
        return() => {
            console.log("Fase de Desmontaje");
        }
    });

    return(
        <>
            <h2>Hooks - useEffect y el Ciclo de Vida</h2>
            <p>ScrollY del Navegador {scrollY}</p>
        </>
    )
}
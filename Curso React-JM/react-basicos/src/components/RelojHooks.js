import React, {useState, useEffect} from "react";

function Reloj({hour}){
    return(
        <h3>{hour}</h3>
    )
}

export default function RelojHooks (){
    
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    // const tictac = (valor) => setVisible(valor);

    useEffect(() => {
        let temporizador;
        if(visible){
            temporizador = setInterval(() => {
                setHour(new Date().toLocaleTimeString());
            }, 1000);
        }
        else{
            // limpia el intervalo
            clearInterval(temporizador);
        }

        // componentWillUnmount: Desmontaje
        return () => {
            console.log("Fase de Desmontaje");
            clearInterval(temporizador);
        }
    }, [visible]);//solo cuando la variable visible haga un cambio se ejecutara

    // es mejor tener dieferentes useEffect para cada variable
    // de estado que intervenga en la logica de programacion
    // no hay limitantes para tener useEffect
    return(
        <>
            <h2>Reloj con Hooks</h2>
            {visible && <Reloj hour={hour}/>}
            {/* como sera una funcion que recibe un valor 
            adiccional al del evento se hace de esta forma*/}
            {/* <button onClick={() => {tictac(true)}}>Iniciar</button>
            <button onClick={() => {tictac(false)}}>Detener</button> */}
            <button onClick={() => setVisible(true)}>Iniciar</button>
            <button onClick={() => setVisible(false)}>Detener</button>
        </>
    )
}
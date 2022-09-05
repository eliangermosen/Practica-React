import React, { useState } from "react";

export default function ContadorHooks(props){

    // console.log(useState());

    // valorVariable - funcionActualiza - valor inicial
    // el valor inivial puede recibir cualquier tipo de dato: string - boolean - arreglo
    // por cada variable es lo ideal es tener un useState
    const [contador, setContador] = useState(0);

    // llamo la funcion y actualizo el estado con lo que traiga la variable contador +1
    const sumar = () => setContador(contador + 1);
    //ejecuta la funcion del useState y ejecuta el contador -1
    const restar = () => setContador(contador - 1);

    // en los componentes de funcion el return se convierte
    //en nuestro render
    return(
        <>
            <h2>Hooks - useState</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <p>Contador de {props.titulo}</p>
            {/* muestra la variable de estado ya no se debe poner this.state.contador */}
            <h3>{contador}</h3>
            {/* SE SIMPLIFICA TODO EL CODIGO CON LOS HOOKS */}
        </>
    )
}

ContadorHooks.defaultProps = {
    titulo: "Clicks",
}
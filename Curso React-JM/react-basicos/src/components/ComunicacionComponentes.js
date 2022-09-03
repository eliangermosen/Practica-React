import React, {Component} from "react";

export default class Padre extends Component{

    state = {
        contador: 0,
    };

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1,
        });
    };

    render(){
        return(
            <>
                <h2>Comunicacion entre Componentes</h2>            
                <p>Contador <b>{this.state.contador}</b></p>
                {/*cuando quiera pasar informacion de un componente
                padre a un hijo debe ser a traves de las props */}
                <Hijo 
                    incrementarContador={this.incrementarContador}
                    mensaje="Mensaje para el hijo #1"
                />
                {/* EN ESTE EJEMPLO VEMOS COMO AMBOS HIJOS
                CAMBIAN EL ESTADO DEL PADRE */}
                <Hijo
                    incrementarContador={this.incrementarContador}
                    mensaje="Mensaje para el hijo #2"
                />
                {/* PARA EVITAR EL PASO DE PROPS/ESTADOS ENTRE TANTOS COMPONENTES
                EXISTE LO QUE SON ALGUNOS PATRONES, API CONTEXT Y REDUX
                https://jonmircha.com/react#eventos
                https://es.reactjs.org/docs/portals.html
                https://github.com/millermedeiros/js-signals/wiki/Comparison-between-different-Observer-Pattern-implementations
                */}
            </>
        )
    }
}

function Hijo(props){
    return(
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </>
    )
}
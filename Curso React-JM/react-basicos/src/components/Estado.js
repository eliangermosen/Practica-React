import React, {Component} from "react";

function EstadoAHijo(props){
    return(
        <div>
            <h3>
                {props.contadorHijo}
            </h3>
        </div>
    )
}

export default class Estado extends Component {
    // estado puede ser definido en el constuctor
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        }

        setInterval(() => {
            // para actualizar el estado esta el setState
            this.setState({
                contador: this.state.contador + 1
            });
        }, 1000);
    }
    render(){
        return(
            <div>
                <h2>El State:</h2>
                {/* el cambio del estado hace que se renderiza
                el elemento en el dom aqui entra el virtual dom
                para no actualizar el dom completo solo lo necesario */}
                <p>{this.state.contador}</p>
                {/* paso de estados entre componentes */}
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </div>
        );
    }
}
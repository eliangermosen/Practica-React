import React, {Component} from "react";

class Reloj extends Component{
    constructor(props){
        super(props);
    }

    // Desmontaje:
    // SE EJECUTA CUANDO EL ELEMENTO HA SIDO REMOCIDO DEL DOM
    componentWillUnmount(){
        console.log(3, "El componente ha sido eliminado del DOM")
    }

    render(){
        return <h3>{this.props.hora}</h3>
    }
}

export default class CicloVida extends Component{

    constructor(props) {
        super(props);

        // MONTAJE
        console.log(0, "El componente se inicializa, aun no esta en el DOM");
        
        this.state = {
            // hora local
            hora: new Date().toLocaleTimeString(),
            visible: false
        };

        this.temporizador = null;
    }

    // MONTAJE:
    // REACT nos recomienda utilizar componentDidMount cuando 
    //hagamos una suscripcion a DB, solicitud a API, algun servicio
    // no es correcto hacerlo en el constructor
    componentDidMount(){
        console.log(1, "El componente se encuentra en el DOM");
    }

    // Actualización:
    // se ejecutara cuando se actualize el estado
    // recibe dos valores la antigua propiedad y previo estado
    componentDidUpdate(prevProps, prevState){
        console.log(2, "El estado o las props del componente han cambiado");
        console.log(prevProps);
        console.log(prevState);
    }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    iniciar = () => {
        this.tictac();
        this.setState({
            visible: true
        });
    }

    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible: false
        });
    }

    render(){
        console.log(4, "El componente se redibuja por algun cambio en el DOM");
        return(
            <>
                <h2>Ciclo de Vida de los Componentes de Clase</h2>
                {/* <h3>{this.state.hora}</h3> */}
                {/* OPERADOR DE CORTO CIRCUITO */}
                {this.state.visible && <Reloj hora={this.state.hora}/>}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}
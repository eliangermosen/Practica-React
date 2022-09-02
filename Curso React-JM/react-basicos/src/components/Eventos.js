import React, {Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
        // se le debe hacer un bind al this en las class 
        // component en el constructor
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
        // esta manera cayo en desuso desde la llegada de los
        // hooks con las functional component 
    }

    sumar(e){
        // this.state.contador+= 1
        console.log("SUMANDO");
        console.log(this);
        this.setState({
            contador: this.state.contador+1,
        })
    }
    
    restar(e){
        console.log("RESTANDO");
        console.log(this);
        this.setState({
            contador: this.state.contador-1,
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clases ES6:</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

// https://reactjs.org/blog/2015/01/27/react-v0.13.0-beta-1.html#es7-property-initializers

// Properties Initializer
export class EventosES7 extends Component{

    state = {
        contador: 0,
    };

    // Arrow function
    sumar = (e) => {
        console.log(this);
        this.setState({
            contador: this.state.contador+1,
        })
    }

    // las arrow function heredan el this del contexto en 
    // el que se encuentran
    
    restar = (e) => {
        console.log(this);
        this.setState({
            contador: this.state.contador-1,
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clases ES7:</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}
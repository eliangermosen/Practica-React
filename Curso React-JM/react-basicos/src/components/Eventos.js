import React, {Component} from "react";

export default class Eventos extends Component{
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
                <h2>Eventos en Componentes de Clases:</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}
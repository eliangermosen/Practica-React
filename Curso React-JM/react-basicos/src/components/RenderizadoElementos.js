import React, {Component} from "react";
import data from "../helpers/data.json"

function ElementoLista(props){
    return(
        <li>
            <a href={props.el.web} target="_blank" rel="noreferrer">{props.el.name}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primavera", "Verano", "Otoño", "Invierno"]
        }
    }
    render(){
        console.log(data);
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del Año</h3>
                <ul>
                    {/* por cada elemento renderiza una li */}
                    {this.state.seasons.map((el, index) => (
                    <li key={index}>
                        {el}
                    </li>
                    ))}
                </ul>
                <h3>Frameworks Frontend JavaScript:</h3>
                <ul>
                    {data.frameworks.map((el) => (
                        <ElementoLista key={el.id} el={el}/>
                    ))}
                </ul>
            </div>
        )
    }
}
import React, {Component} from "react";

//1- componente basado en clase

// class Componente extends Component {
    // un componente de clase debe tener su metodo render por default
    // render(){
    //     return(
    //         <h2>{this.props.msg}</h2>
    //     )
    // }
    // con la llegada de los hooks se utiliza menos la estructura de
    // componentes basados en clases
// }

//2- Componente Funcional Declarado

// function Componente(props) {
//     return(
//         <>
//         {/* no usa el this */}
//             <h2>{props.msg}</h2>
//         </>
//     )
// }

// 3- Componente Funcional Expresado

// return implicito en el arrow function
const Componente = props => <h2>{props.msg}</h2>

export default Componente;
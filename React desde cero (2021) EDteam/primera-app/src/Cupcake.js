//este es el componente mas sencillo llamado componente presentacional

//destructuracion de objetos en js
// function Cupcake({ sabor, color, foto }){

//     // console.log(props);

//     return (
//         <div className="cupcake">
//             {/* <img src={props.foto} alt={props.sabor}/>
//             <h2>{props.color}</h2>
//             <p>{`SABOR: ${props.sabor}`}</p> */}
//             <img src={foto} alt={sabor}/>
//             <h2>{color}</h2>
//             <p>{`SABOR: ${sabor}`}</p>
//         </div>
//     );
// };

import {Component} from "react";

//este es el componente class component con POO
class Cupcake extends Component {

    constructor(props){
        super(props)
        this.state = {
            vendido: false
        }
        // CADA VEZ QUE CREE UN METODO DEBO HACERLE UN BIND
        this.vender = this.vender.bind(this)
    }

    vender(){
        this.setState({
            vendido: true
        })
    }

    componentWillMount(){
        console.log("El componente se montara")
        let test = document.getElementById("test");
        console.log(test)
    }

    componentDidMount(){
        console.log("El componente se monto")
        let test = document.getElementById("test");
        console.log(test)
    }

    componentWillUpdate(){
        console.log("El componente se actualizara")
        let botonVender = document.getElementById("botonVender");
        console.log(botonVender)
    }

    componentDidUp(){
        console.log("El componente se actualizo")
        let botonVender = document.getElementById("botonVender");
        console.log(botonVender)
    }

    render(){
        console.log("MONTAJE!!!")
        return(
            <div className="cupcake" id="test">
                {/* para acceder a props lo hacemos de la
                ssiguiente manera this.props */}
                <img src={this.props.foto} alt={this.props.sabor}/>
                <h2>{this.props.color}</h2>
                <p>{`SABOR: ${this.props.sabor}`}</p>
                <p>
                {/* con el operador ternario si existe la 
                propiedad vendido dira vendido si no a la venta */}
                    <b>Estado: </b> 
                    {
                    this.state.vendido ? "Vendido": "A la venta"
                    }
                </p>
                {/* RENDERIZADO CONDICIONAL */}
                {/* SI NO ESTA VENDIDO PON EL BOTON VENDER */}
                {/* CADA VEZ QUE PRESIONE EL BOTON EJECUTARA EL 
                METODO Y CAMBIARA EL ESTADO */}
                {
                    !this.state.vendido && <button onClick={this.vender} id="botonVender">Vender</button>
                }
        </div>
        )
    }
}

export default Cupcake;

/*
* CICLO DE VIDA

* - NACER, CRECER, REPODUCIRSE Y MORIR

* LIFECYCLE DE LOS COMPONENTES

* EL COMPONENTE:

* SE VA MONTAR: componentWillMount()
* MONTAJE: render()
* SE HA MONTADO: componentDidMount()

* SE VA ACTUALIZAR: componentWillUpdate()
* MONTAJE: render()
* SE HA ACTUALIZADO: componentDidUp()

* SE DESMONTADARA: componentWillUnmount()
* MONTAJE: render()
* SE HA ACTUALIZADO: componentDidUnmount()
*/
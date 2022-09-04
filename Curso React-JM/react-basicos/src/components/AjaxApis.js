import React, { Component } from 'react';

function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}

export default class AjaxApis extends Component{
    state = {
        pokemons: [],
    }

    // LAS PETICIONES EN UN COMPONENTE DE CLASE SE HARAN EN
    // COMPONENTDIDMOUNT
    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                json.results.forEach((el) => {
                    fetch(el.url)
                        .then((res) => res.json())
                        .then(json => {
                            console.log(json);
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default,
                            };
                            //spread operator: de lo que ya hay en el estado de pokemon
                            //obten una copia del estado actual y luego lo combinaras 
                            //con el nuevo objeto pokemon
                            let pokemons = [...this.state.pokemons, pokemon];

                            // actualizamos el estado con shothand debido a que las variables se llaman iguales
                            this.setState({pokemons});
                        });
                });
            });
    }

    render(){
        return(
            <>
                <h2>Peticiones Asincronas en Componentes de Clase</h2>
                {/* SI LA LONGITUD ES 0 MOSTRARA EL CARGANDO SI NO EL COMPONENTE */}
                {this.state.pokemons.length === 0 ? (
                    <h3>Cargando</h3>
                    ) : (
                        this.state.pokemons.map((el) => (
                        <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>
                        ))
                    )
                }
            </>
        )
    }
}
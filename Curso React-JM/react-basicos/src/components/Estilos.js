import React from "react";
import "./Estilos.css"
import moduleStyles from "./Estilos.module.css"
import "./Estilos.scss"

export default function Estilos(){
    let myStyles = {
        borderRadious:".5rem", 
        margin:"2rem auto",
        maxWidth: "50%"
    };

    return(
        <section className="estilos">
            <h2>Estilos CSS en React</h2>
            <h3 className="bg-react">Estilos en hojas CSS externa</h3>
            <h3 
                className="bg-react" 
                style={{borderRadious:".25rem", margin:"1rem"}}>
                Estilos en linea (atributo style)
            </h3>
            <h3 className="bg-react" style={myStyles}>Estilos en linea</h3>
            <h3 className="bg-react">
                Agregando Normalize con
                <br/>
                <code>@import-normalize</code>
            </h3>
            <h3 className={moduleStyles.error}>Estilos con modulos</h3>
            <h3 className={moduleStyles.success}>Estilos con modulos</h3>
            <h3 className="bg-sass">Estilos con SASS</h3>
        </section>
    )
}
// npm install node-sass
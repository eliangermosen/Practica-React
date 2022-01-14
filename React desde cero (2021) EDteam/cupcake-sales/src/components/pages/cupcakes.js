// import { useEffect, useState } from "react";
// import { get } from "axios";
import useFetch from "../../hooks/useFetch"
import Cupcake from "../cards/Cupcake"
 
const Cupcakes = ({ peticion, title }) => {

    //cupcakes sera lo que venga desde data
    //const [cupcakes, setCupkapes] = useState();

    /* FETCH
    useEffect(()=>{
        //variable de entorno siempre iniciar con process.en.nombrevariable
        fetch(`${process.env.REACT_APP_URL_API}${peticion}`)
        .then(response => response.json())
        .then(data => setCupkapes(data))
        .catch(e => console.error(e))
    },[peticion]);//esto para que si cambia peticion se vuelva a renderizar */
    
    /* // AXIOS
    useEffect(()=>{
        get(`${process.env.REACT_APP_URL_API}${peticion}`)
        .then(({data}) => setCupkapes(data))
    },[peticion]); */

    const [cupcakes] = useFetch(peticion)
    
    return(
    <div className="ed-grid">
        {/* si title existe imprime el titulo*/}
        { title && <h1>Pagina de Cupcakes</h1>}
        {
            //si cupcakes existe renderizame el section
            cupcakes ? (
                <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                    {
                    //no se puede trabajar con foreach porque 
                    //trabaja en el array original mientras
                    //map permite trabajar en un nuevo array
                    //cada uno de los cupcakes es una c
                    /* cupcakes.map(c => (
                        <Cupcake
                            imagen={c.imagen}
                            descripcion={c.descripcion}
                            sabor={c.sabor}
                            color={c.color}
                            precio={c.precio}
                        />
                    )) */
                    cupcakes.map(({
                        id,
                        imagen, 
                        descripcion, 
                        sabor, 
                        color, 
                        precio
                    }) => (
                        <Cupcake
                            //cuando se usa .map al componente 
                            //a pesar que no tenga esta propiedad 
                            //se le debe asignar esa propiedad key 
                            //para identificador uncio
                            key={id}
                            imagen={imagen}
                            descripcion={descripcion}
                            sabor={sabor}
                            color={color}
                            precio={precio}
                        />
                    ))
                    //cada uno de los cupcakes va a renderizar un <Cupcake/>
                    }
                </section>
            ) : (<span>Cargando...</span>)
        }
    </div>
    )
}

export default Cupcakes
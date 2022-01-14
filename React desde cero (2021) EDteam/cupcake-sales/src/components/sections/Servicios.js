// import { useEffect, useState } from "react";
// import { get } from "axios";

import useFetch from "../../hooks/useFetch"

const Servicios = ({ peticion }) => {
    
    /* const [servicios, setServicios] = useState();
    
     AXIOS
    useEffect(()=>{
        get(`${process.env.REACT_APP_URL_API}${peticion}`)
        .then(({data}) => setServicios(data))
    },[peticion]); */

    const [servicios, error] = useFetch(peticion)

    if(error){
        return <span>Hubo un error!!!</span>
    }
    if(!servicios || servicios.length === 0){
        return <span>No hay servicios</span>
    }
    return (
        <div className="ed-grid">
            {
                servicios.map(s => (
                    <div key={s.id}>
                        <h2>{s.nombre}</h2>
                        <p>{s.descripcion}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Servicios
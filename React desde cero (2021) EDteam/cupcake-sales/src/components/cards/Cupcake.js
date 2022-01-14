import {number, string} from "prop-types"

const Cupcake = ({
    imagen, 
    descripcion, 
    sabor, 
    color, 
    precio}) => {
    return(
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <h2>{sabor}</h2>
            <img src={ imagen } alt={ sabor }/>
            <p>{descripcion}</p>
            <span>Color: {color} </span>
            <span>Precio: {precio}</span>
        </div>
    )
}

//con la libreria PropTypes para especificar el tipo de 
//valor que espera mi variable
//tipos de valores en esta libreria bool, func, array, objeto
Cupcake.propTypes = {
    precio: number,
    color: string.isRequired,
    sabor: string.isRequired,
    descripcion: string.isRequired,
    imagen: string
}

//SI NO TIENE VALOR LA VARIABLE IMAGEN SE LO PONE ESTA POR DEFECTO
//SIRVE PARA LOS PERFILES DE USUARIOS QUE NO TENGAN IMAGENES SE LE PUEDE PONER UNA POR DEFECTO
Cupcake.defaultProps = {
    imagen: "https://thumbs.dreamstime.com/b/ilustraci%C3%B3n-vectorial-en-blanco-y-negro-de-cupcake-158247637.jpg",
    precio: 5
}

export default Cupcake
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

export default Cupcake
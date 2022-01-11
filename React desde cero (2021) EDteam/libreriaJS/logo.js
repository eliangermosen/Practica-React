//por dentro funciona asi

// const Logo = createElement("img", {
//     class: "logo",
//     alt:"Logo", 
//     src:"./images/logo.png"
// })

//ellos pensaron en hacerlo asi pero...

// const Logo = <img src="./images/logo.png" alt="Logo" class="logo"/>

//se ingeniaron combinar js con html y xml para dar paso a JSX
// const Logo = <img src="./images/logo.png" alt="Logo" className="logo"/>
// const Logo = () => <img src="./images/logo.png" alt="Logo" className="logo"/>
const Logo = () => {
    return (
        <div id="main-logo">
            <img src="./images/logo.png" alt="Logo" className="logo"/>
        </div>
    )
}
// en JSX class sera className. se debe cerrar la etiqueta obligatoriamente

//REGLAS JSX
//REGLA 1: SOLO SE PUEDE ALMACEBNAR O RENDERIZAR UN SOLO ELEMENTO PADRE
/* //FORMA INCORRECTA
const saludo = (
    <h1>Hola!</h1>
    <img src="./images/logo.png"></img>
) */
//FORMA CORRECTA
const saludo = (
    <div>
        <h1>Hola!</h1>
        <img src="./images/logo.png"></img>
    </div>
)

//REGLA 2: USAR FRAGMENTOS
//SI POR ALGUN MOTIVO NO QUIERO PONER DIV PONGO LA SINTAXIS DE
//FRAGMENTOS <> </>
const saludo = (
    <>
        <h1>Hola!</h1>
        <img src="./images/logo.png"></img>
    </>
)

//REGLA 3: TODA ETIQUETA DEBE CERRARSE
//FORMA INCORRECTA
//const MiLogo = <img src="./images/logo.svg" alt="Logo Principal">
//FORMA CORRECTA
const MiLogo = <img src="./images/logo.svg" alt="Logo Principal"/>
const MiLogo = <img src="./images/logo.svg" alt="Logo Principal"></img>

const miClase = "container"
const divVacio = <div className={miClase} id="main"/>

//REGLA 4: TODO ATRIBUTO COMPUESTO SE CONVIERTE EN camelCase
const miBoton = <button id="boton1" onclick={Logo}>Click me!</button>
//se puede pasar la funcion en el onclick

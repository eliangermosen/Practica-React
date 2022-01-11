//se importa para poder tener acceso
import { createElement, render } from "./libreria.js"

const Logo = createElement("img", {
    class: "logo",
    alt:"Logo", 
    src:"./images/logo.png"
})

const Nav = createElement("nav", {class:"main-nav"})

const Header = createElement("header", {
    id:"mainHeader2", 
    className:"main-header-2"
},[Logo,Nav])

render(Header, document.getElementById("root"))

// todo esto es lo que react hace por nosotros los usuarios

/* 
DE ESTA MANERA FUNCIONA CON JS: 

let header = document.createElement("header")
header.id = "mainHeader"
header.classList.add("main-header")

let root = document.getElementById("root")
root.appendChild(header) */

//LA MEJOR MANERA ES CREAR FUNCIONES PARA QUE ESTO SEA REUTILIZABLE
//recibira que elemento quiero crear y sus atributos
/* export function createElement(elem, atrib = {}){
    let element = document.createElement(elem)
    element.id = atrib.id
    element.classList.add(atrib.className)

    return element
}

export function render(elem, DOMelem){
    DOMelem.appendChild(elem)
} */

//se exporta para ser reutilizable y tener un intermediario que es el script

export function createElement(type, atribList = {}, children = []){
    let elem = document.createElement(type)

    let keys = Object.keys(atribList)
    keys.map(k => elem.setAttribute(k, atribList[k]))

    children.map(child => renderChild(elem,child))

    return elem
}

function renderChild(elem,child){
    if(typeof child === "string"){
        elem.innerHTML += child
        return
    }
    elem.appendChild(child)
}

export function render(elemento, DOMelement){
    DOMelement.appendChild(elemento)
}
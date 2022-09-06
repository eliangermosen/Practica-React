import React, {createRef, useRef} from 'react';

export default function Referencias(){

    // iniciar con ref para que sepa que es una referencia
    // let refMenu = createRef(),//asi seria en un class component
    let refMenu = useRef(),
        refMenuBtn = useRef();
    // las referencias son como un selector del dom pero dentro de REACT

    // un objeto con la propiedad current que tiene el valor del dom referenciado
    // console.log(refMenu, refMenuBtn);

    // VANILLA JS
    /* const handleToggleMenu = (e) => {
        const $menu = document.getElementById("menu");

        if(e.target.textContent === "Menu"){
            e.target.textContent = "Cerrar";
            $menu.style.display = "block";
        }else{
            e.target.textContent = "Menu";
            $menu.style.display = "none";
        }
    }; */
    // las referencias son para cuando tengamos que manipular
    //la visibilidad de elementos cargados en el dom
    const handleToggleMenu = (e) => {
        if(refMenuBtn.current.textContent === "Menu"){
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        }else{
            refMenuBtn.current.textContent = "Menu";
            refMenu.current.style.display = "none";
        }
    };

    return(
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
            <nav id="menu" ref={refMenu} style={{display:"none"}}>
                <a href="#">Seccion 1</a>
                <br/>
                <a href="#">Seccion 2</a>
                <br/>
                <a href="#">Seccion 3</a>
                <br/>
                <a href="#">Seccion 4</a>
                <br/>
                <a href="#">Seccion 5</a>
                <br/>
            </nav>
        </>
    );
};
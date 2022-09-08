import React, { useState } from 'react';

// export default function Formularios(){
    
//     const [nombre, setNombre] = useState("");
//     const [sabor, setSabor] = useState("");
//     const [lenguaje, setLenguaje] = useState("");
//     const [terminos, setTerminos] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("El formulario se ha enviado");
//     };

//     return(
//         <>
//             <h2>Formularios</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* INPUT TEXT */}
//                 <label htmlFor="nombre">Nombre:</label>
//                 <input 
//                 type="text" 
//                 id="nombre" 
//                 name="nombre" 
//                 value={nombre} 
//                 // e= objeto que origina el evento
//                 // e.target.value= valor escrito
//                 onChange={(e) => setNombre(e.target.value)}/>
                
//                 {/* INPUT RADIO */}
//                 <p>Elige tu sabor JS favorito</p>
                
//                 <input 
//                 type="radio" 
//                 name="sabor" 
//                 id="vanilla" 
//                 value="Vanilla"
//                 onChange={(e) => setSabor(e.target.value)}/>
//                 <label htmlFor="vanilla">Vanilla</label>
                
//                 <input 
//                 type="radio" 
//                 name="sabor" 
//                 id="react" 
//                 value="React"
//                 onChange={(e) => setSabor(e.target.value)}
//                 defaultChecked/>
//                 <label htmlFor="react">React</label>
                
//                 <input 
//                 type="radio" 
//                 name="sabor" 
//                 id="angular" 
//                 value="Angular"
//                 onChange={(e) => setSabor(e.target.value)}/>
//                 <label htmlFor="angular">Angular</label>
                
//                 <input 
//                 type="radio" 
//                 name="sabor" 
//                 id="vue" 
//                 value="Vue"
//                 onChange={(e) => setSabor(e.target.value)}/>
//                 <label htmlFor="vue">Vue</label>
                
//                 <input 
//                 type="radio" 
//                 name="sabor" 
//                 id="svelte" 
//                 value="Svelte"
//                 onChange={(e) => setSabor(e.target.value)}/>
//                 <label htmlFor="svelte">Svelte</label>

//                 {/* SELECT */}

//                 <p>Elige tu lenguaje de programacion favorito</p>
//                 <select name="lenguaje"
//                 onChange={(e) => setLenguaje(e.target.value)}
//                 // el mismo value del option que desee por default
//                 defaultValue="">
//                     <option value="">-----</option>
//                     <option value="js">JavaScript</option>
//                     <option value="php">PHP</option>
//                     <option value="py">Python</option>
//                     <option value="go">GO</option>
//                     <option value="rb">Ruby</option>
//                     <br/>
//                 </select>

//                 {/* CHECKBOX */}
//                 <label htmlFor="terminos">Acepto Terminos y Condiciones</label>
//                 <input 
//                 type="checkbox" 
//                 id="terminos" 
//                 name="terminos" 
//                 onChange={(e) => setTerminos(e.target.checked)}/>

//                 <br/>
//                 <input type="submit"/>
//             </form>
//         </>
//     )
// }

export default function Formularios(){
    // formulario optimizado con solo un estado
    const [form, setForm] = useState([]);

    // sera el onchange de todos los elementos del form
    const handleChange=(e)=>{
        setForm({
            // spread operator para mezclar lo que ya tenga el objeto
            //el form, + name del input cambio
            ...form,
            [e.target.name]:e.target.value,
        });
    }
    
    const handleChecked=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("El formulario se ha enviado");
    };

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                {/* INPUT TEXT */}
                <label htmlFor="nombre">Nombre:</label>
                <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={form.nombre} 
                // e= objeto que origina el evento
                // e.target.value= valor escrito
                onChange={handleChange}/>
                
                {/* INPUT RADIO */}
                <p>Elige tu sabor JS favorito</p>
                
                <input 
                type="radio" 
                name="sabor" 
                id="vanilla" 
                value="Vanilla"
                onChange={handleChange}/>
                <label htmlFor="vanilla">Vanilla</label>
                
                <input 
                type="radio" 
                name="sabor" 
                id="react" 
                value="React"
                onChange={handleChange}
                defaultChecked/>
                <label htmlFor="react">React</label>
                
                <input 
                type="radio" 
                name="sabor" 
                id="angular" 
                value="Angular"
                onChange={handleChange}/>
                <label htmlFor="angular">Angular</label>
                
                <input 
                type="radio" 
                name="sabor" 
                id="vue" 
                value="Vue"
                onChange={handleChange}/>
                <label htmlFor="vue">Vue</label>
                
                <input 
                type="radio" 
                name="sabor" 
                id="svelte" 
                value="Svelte"
                onChange={handleChange}/>
                <label htmlFor="svelte">Svelte</label>

                {/* SELECT */}

                <p>Elige tu lenguaje de programacion favorito</p>
                <select name="lenguaje"
                onChange={handleChange}
                // el mismo value del option que desee por default
                defaultValue="">
                    <option value="">-----</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                    <br/>
                </select>

                {/* CHECKBOX */}
                <label htmlFor="terminos">Acepto Terminos y Condiciones</label>
                <input 
                type="checkbox" 
                id="terminos" 
                name="terminos" 
                onChange={handleChecked}/>

                <br/>
                <input type="submit"/>
            </form>
        </>
    )
}
// No es obligatorio pero si considerado una buena practica
import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import './App.css';

function App() {
  // JSX es la azucar sintactica que nos brinda react para escribir elementos HTML dentro de nuestro codigo JS
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        {/* <Componente></Componente> */}
        {/* <Componente msg="Hola soy un Componente desde una prop"/> */}
        {/* <Componente msg="Hola soy un Componente Funcional desde una prop"/> */}
        <Componente msg="Hola soy un Componente Funcional Expresado desde una prop"/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </section>
    </div>
  );
}

export default App;

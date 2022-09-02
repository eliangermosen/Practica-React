import logo from './logo.svg';
import './App.css';

function App() {
  // JSX es la azucar sintactica que nos brinda react para escribir elementos HTML dentro de nuestro codigo JS
  let nombre = "Elian";
  let auth = false;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre"/>
        <h1>{nombre}</h1>
        <p>
          {/* OPERADOR TERNARIO */}
          {auth ? "El usuario esta logueado" : "El usuario No esta logueado"}
        </p>
        {/* INTERPOLAR */}
        <p>{2+1}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {/* INTERPOLAR ESTRUCTURAS DE CONTROL*/}
          {estaciones.map((el,index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

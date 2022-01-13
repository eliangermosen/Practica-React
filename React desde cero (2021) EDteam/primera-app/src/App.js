//siempre importar el componente que quiero usar
//. significa desde esta misma carpeta src
//cuando se trabaja con react no es necesario poner .js
import Cupcake from "./Cupcake";
import './App.css'

// cuando es una funcion tipo flecha no se necesita el return
const App = () => (
  <div className="container">
    <Cupcake color="rosa" sabor="vainilla" foto="https://i.pinimg.com/564x/c5/49/1b/c5491b2a7e751cad64b6c30dbff19b9a.jpg"/>
    <Cupcake color="azul" sabor="chocolate" foto="https://i.pinimg.com/564x/e7/95/0b/e7950b32f1d0001190f14be1a64576e6.jpg"/>
  </div>
);

export default App;

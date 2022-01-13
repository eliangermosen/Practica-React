//primero componentes
import Header from "./sections/Header";
import Home from "./pages/home";
import Cupcakes from "./pages/cupcakes";
import AboutUs from "./pages/aboutUs";
//luego los estilos o al reves
import "../styles/style.scss";
//rutas
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => (
  // BrowserRouter debe envolver nuestra app
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cupcakes" element={<Cupcakes/>}></Route>
      <Route path="/nosotros" element={<AboutUs/>}></Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
)

export default App;

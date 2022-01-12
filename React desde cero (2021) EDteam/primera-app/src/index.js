import {StrictMode} from 'react';
import {render} from 'react-dom';
import App from './App';

// aqui en el index.js es donde la aplicacion se renderiza
render(
  //es un componenteque viene con la lib de react y nos avisa 
  //sobre errores, malos usos, llamados, estados incorrectos, etc..
  <StrictMode>
    {/* REENDERIZANDO App */}
    <App />
  </StrictMode>,
  document.getElementById('root')
);

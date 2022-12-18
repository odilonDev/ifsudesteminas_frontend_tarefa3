import { useState } from 'react';
import './App.css';
import UsuarioEntrada from './UsuarioEntrada';
import UsuarioSaida from './UsuarioSaida';

function App() {
  const [resultadoLogin, setResultadoLogin] = useState('')

  const atualizaResultadoLogin = valorlogin => {
    setResultadoLogin(valorlogin)
  }

  return (
    <div>
       <UsuarioEntrada handleResultado= {atualizaResultadoLogin}/>
       <UsuarioSaida  usuario= 'passado_via_props'/>
        <UsuarioSaida  usuario= {resultadoLogin}/>
   </div>
  );
}

export default App;

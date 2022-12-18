import { useState } from "react";

const UsuarioEntrada = (props) =>{

    const [login, setLogin] = useState('')

    return(
        <div>
           <input type="text" id="login" name="login" value={login} onChange={evento => {
            setLogin(evento.target.value)
            props.handleResultado(login)
            }}></input>
        </div>
    )
}

export default UsuarioEntrada;

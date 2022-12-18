import React, {Component} from 'react';

class UsuarioSaida extends Component{
    render(props){
        return(
            <div>
                <div style={{backgroundColor: 'gray', width: '300px', height: '100px'}}>
                    <p>Login: {this.props.usuario}</p> 
                    <p>Segundo parágrafo com texto qualquer.</p>
                </div>
            </div>
        );
    }
}

export default UsuarioSaida;
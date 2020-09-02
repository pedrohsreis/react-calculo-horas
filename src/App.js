import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';


export default class App extends React.Component {


  state = {
    inicial: "",
    final: "",
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div className="teal lighten-2">
            <a href="https://www.proveu.com.br/">Calculadora de Horas</a>
          </div >
        </nav >
        <div className="container">
          <div className="input-field">
            <input placeholder="Formato HH:MM" id="hora_inicial" type="text" value={this.state.inicial} onChange={(e) => {
              this.setState({ inicial: e.target.value })
            }} />
            <label for="hora_inicial" class="active">Horário de Entrada</label>
          </div>
          <div class="input-field">
            <input placeholder="Formato HH:MM" id="hora_final" type="text" value={this.state.final} onChange={(e) => {
              this.setState({ final: e.target.value })
            }} />
            <label for="hora_final" class="active">Horário de Saída</label>
          </div>
          <button class="btn waves-effect waves-light" type="submit" name="action">Enviar</button>
        </div>
      </div >
    )
  }

}

import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';


export default class App extends React.Component {


  state = {
    inicial: "",
    final: "",
    diurnoResult: null,
    noturnoResult: null
  }

  getHoras(){
    axios.get("http://127.0.0.1:4000/calcular/" + this.state.inicial + "/" + this.state.final)
    .then((response) => {
      this.setState({
        diurnoResult: response.horasDiurnas,
        noturnoResult: response.horasNoturnas
      })
    })
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
            <label htmlFor="hora_inicial" className="active">Horário de Entrada</label>
          </div>
          <div className="input-field">
            <input placeholder="Formato HH:MM" id="hora_final" type="text" value={this.state.final} onChange={(e) => {
              this.setState({ final: e.target.value })
            }} />
            <label htmlFor="hora_final" className="active">Horário de Saída</label>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => this.getHoras()}>Enviar</button>
          {this.state.diurnoResult && this.state.noturnoResult ? 
          <div>
            <p>Horas diurnas: {this.state.diurnoResult}</p>
            <p>Horas noturnas: {this.state.noturnoResult}</p>
          </div>
          :
          null
        }
        </div>
      </div >
    )
  }

}

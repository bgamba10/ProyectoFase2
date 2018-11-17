import React, { Component } from 'react';

export default class SecurityStock extends Component {


  constructor(props) {
      super(props);
      this.state = {
        tabla: ["hola", "si"]
      }
  }

  renderTabla(){
    return this.state.tabla.map((fila) => (
      <tr> 
        <td>{fila} </td> 
        <td>{fila} </td> 
      </tr>
    ));

  }

  render() {
    return (
      <div>
      <h2> Resultados Silver Meal</h2>
      <table className="table">

        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
          </tr>
        </thead>

        <tbody>
        {this.renderTabla()}
        </tbody>
      </table>
      </div>
    );
  }

  //Hay que tener en cuenta aca que si no hay claridad sobre el inventarioAnterior se utiliza el ss del periodo anterior.
  calcularRequerimientosNetos(demanda, ss, recepciones, inventarioAnterior){
    return (demanda + ss - recepciones - inventarioAnterior);
  }

  calcularCostoMantenerInventario(i, costoUnitario){
    return i*costoUnitario;
  }

  costoTotal(costoAdquirir, costoMantener, costoOrdenar){
    return costoAdquirir + costoMantener + costoOrdenar;
  }
}

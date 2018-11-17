import React, { Component } from 'react';

export default class SecurityStock extends Component {


  constructor(props) {
      super(props);
      this.state = {
        tabla: [["1,1", "1,2"], ["2,1", "2,2"]]
      }
  }

  renderTabla(){
    return this.state.tabla.map((fila) => (
      <tr>
      {this.renderValor(fila)}
      </tr>
    ));

  }

  renderValor(fila){
    return fila.map((valor)=> (
      <td> {valor} </td>
    ));
  }

  render() {
    return (
      <div>
      <h2> Resultados Silver Meal</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">t</th>
            <th scope="col">Periodo</th>
            <th scope="col">Q</th>
            <th scope="col">Costo Ordenar</th>
            <th scope="col">Costo Adquirir</th>
            <th scope="col">Costo Mantener</th>
            <th scope="col">T</th>
            <th scope="col">Costo Total</th>
            <th scope="col">Costo total/T </th>
          </tr>
        </thead>
        <tbody>
        {this.renderTabla()}
        </tbody>
      </table>
      </div>
    );
  }

  simular(){
    //Aca creamos toda la tabla que se va renderizar después

    //El recorrido se hace para cada periodo
    for (var i = 0; i < 6 ; i++)
    {

    }
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

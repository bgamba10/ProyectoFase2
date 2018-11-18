import React, { Component } from 'react';

export default class SecurityStock extends Component {


  constructor(props) {
      super(props);
      this.state = {
        tablas: []
      }
  }

  renderTabla(pTabla){
    return pTabla.map((fila) => (
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

  renderTablas(){
    return this.state.tablas.map((tabla) => (
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
        {this.renderTabla(tabla)}
        </tbody>
      </table>
    ));
  }

  render() {
    return (
      <div>
      <h2> Resultados Silver Meal</h2>
      <div> {this.renderTablas()}</div>
      <button onClick = {this.simular.bind(this)} > Simular </button>
      </div>
    );
  }

  simular(){
    //Un recorrido por los ingredientes que tenemos
    var nuevasTablas = []
    for (var i = 0; i < 19; i++)
    {
        console.log(i)
        //Aca creamos toda la tabla que se va renderizar después
        var nueva = [[]];
        nueva[0][0] = 1
        //El recorrido se hace para cada periodo
        for (var j = 0; j < 6 ; j++)
        {
          //Itero hasta que el costo suba
          var sigo = true;
          var costoTotalAnterior = null
          while(sigo){
            var costoTotalActual = 0;
            if (costoTotalAnterior == null){
              costoTotalAnterior = costoTotalActual
            }
            else {
                if (costoTotalAnterior <= costoTotalActual){
                  costoTotalAnterior = costoTotalActual
                  sigo = false
                }
            }
            sigo = false
          }
          //fin del while
        }
        nuevasTablas.push(nueva);
    }
    console.log(nuevasTablas)
    this.setState({
      tablas: nuevasTablas
    })
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

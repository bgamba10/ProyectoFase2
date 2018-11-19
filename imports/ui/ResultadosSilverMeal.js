import React, { Component } from 'react';

export default class ResultadosSilverMeal extends Component {


  constructor(props) {
      super(props);
      this.state = {
        tablas: [],
        cUnitario:[],
        leadtimes: [],
        sss: [],
        numPlatos: [],
        ingredientesEstetica: [],
        ingredientesCardiacas: [],
        ingredientesRespiratorias: [],
        ingredientesOrtopedicas: [],
        ingredientesNeurologicas: [],
        ingredientesPediatricas: [],
        reqNetos: [],
        platos : [3,7,7,2,3,9]
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


    var rns = []

    var rn = []

    rn[0] = this.calcularRequerimientosNetos(this.props.passState.Esteticas[0], this.props.passState.Esteticas[0]*this.props.passState.ssEnero/100, 0 , 0)
    rn[1] = this.calcularRequerimientosNetos(this.props.passState.Esteticas[1], this.props.passState.Esteticas[1]*this.props.passState.ssFebrero/100,  this.props.passState.Esteticas[0]*this.props.passState.ssEnero/100, 0)
    rn[2] = this.calcularRequerimientosNetos(this.props.passState.Esteticas[2], this.props.passState.Esteticas[2]*this.props.passState.ssMarzo/100,  this.props.passState.Esteticas[1]*this.props.passState.ssFebrero/100,0)
    rn[3] = this.calcularRequerimientosNetos(this.props.passState.Esteticas[3], this.props.passState.Esteticas[3]*this.props.passState.ssAbril/100,  this.props.passState.Esteticas[2]*this.props.passState.ssMarzo/100,0)
    rn[4] = this.calcularRequerimientosNetos(this.props.passState.Esteticas[4], this.props.passState.Esteticas[4]*this.props.passState.ssMayo/100,  this.props.passState.Esteticas[3]*this.props.passState.ssAbril/100,0)
    rn[5] = this.calcularRequerimientosNetos(this.props.passState.Esteticas[5], this.props.passState.Esteticas[5]*this.props.passState.ssJunio/100,  this.props.passState.Esteticas[4]*this.props.passState.ssMayo/100,0)

    console.log(rn)
    rns.push(rn)
    var rn = []

    rn[0] = this.calcularRequerimientosNetos(this.props.passState.Cardiacas[0], this.props.passState.Cardiacas[0]*this.props.passState.ssEnero/100, 0 , 0)
    rn[1] = this.calcularRequerimientosNetos(this.props.passState.Cardiacas[1], this.props.passState.Cardiacas[1]*this.props.passState.ssFebrero/100,  this.props.passState.Cardiacas[0]*this.props.passState.ssEnero/100, 0)
    rn[2] = this.calcularRequerimientosNetos(this.props.passState.Cardiacas[2], this.props.passState.Cardiacas[2]*this.props.passState.ssMarzo/100,  this.props.passState.Cardiacas[1]*this.props.passState.ssFebrero/100,0)
    rn[3] = this.calcularRequerimientosNetos(this.props.passState.Cardiacas[3], this.props.passState.Cardiacas[3]*this.props.passState.ssAbril/100,  this.props.passState.Cardiacas[2]*this.props.passState.ssMarzo/100,0)
    rn[4] = this.calcularRequerimientosNetos(this.props.passState.Cardiacas[4], this.props.passState.Cardiacas[4]*this.props.passState.ssMayo/100,  this.props.passState.Cardiacas[3]*this.props.passState.ssAbril/100,0)
    rn[5] = this.calcularRequerimientosNetos(this.props.passState.Cardiacas[5], this.props.passState.Cardiacas[5]*this.props.passState.ssJunio/100,  this.props.passState.Cardiacas[4]*this.props.passState.ssMayo/100,0)

    rns.push(rn)
    var rn = []

    rn[0] = this.calcularRequerimientosNetos(this.props.passState.Respiratorias[0], this.props.passState.Respiratorias[0]*this.props.passState.ssEnero/100, 0 , 0)
    rn[1] = this.calcularRequerimientosNetos(this.props.passState.Respiratorias[1], this.props.passState.Respiratorias[1]*this.props.passState.ssFebrero/100,  this.props.passState.Respiratorias[0]*this.props.passState.ssEnero/100, 0)
    rn[2] = this.calcularRequerimientosNetos(this.props.passState.Respiratorias[2], this.props.passState.Respiratorias[2]*this.props.passState.ssMarzo/100,  this.props.passState.Respiratorias[1]*this.props.passState.ssFebrero/100,0)
    rn[3] = this.calcularRequerimientosNetos(this.props.passState.Respiratorias[3], this.props.passState.Respiratorias[3]*this.props.passState.ssAbril/100,  this.props.passState.Respiratorias[2]*this.props.passState.ssMarzo/100,0)
    rn[4] = this.calcularRequerimientosNetos(this.props.passState.Respiratorias[4], this.props.passState.Respiratorias[4]*this.props.passState.ssMayo/100,  this.props.passState.Respiratorias[3]*this.props.passState.ssAbril/100,0)
    rn[5] = this.calcularRequerimientosNetos(this.props.passState.Respiratorias[5], this.props.passState.Respiratorias[5]*this.props.passState.ssJunio/100,  this.props.passState.Respiratorias[4]*this.props.passState.ssMayo/100,0)

    rns.push(rn)
    var rn = []

    rn[0] = this.calcularRequerimientosNetos(this.props.passState.Ortopedicas[0], this.props.passState.Ortopedicas[0]*this.props.passState.ssEnero/100, 0 , 0)
    rn[1] = this.calcularRequerimientosNetos(this.props.passState.Ortopedicas[1], this.props.passState.Ortopedicas[1]*this.props.passState.ssFebrero/100,  this.props.passState.Ortopedicas[0]*this.props.passState.ssEnero/100, 0)
    rn[2] = this.calcularRequerimientosNetos(this.props.passState.Ortopedicas[2], this.props.passState.Ortopedicas[2]*this.props.passState.ssMarzo/100,  this.props.passState.Ortopedicas[1]*this.props.passState.ssFebrero/100,0)
    rn[3] = this.calcularRequerimientosNetos(this.props.passState.Ortopedicas[3], this.props.passState.Ortopedicas[3]*this.props.passState.ssAbril/100,  this.props.passState.Ortopedicas[2]*this.props.passState.ssMarzo/100,0)
    rn[4] = this.calcularRequerimientosNetos(this.props.passState.Ortopedicas[4], this.props.passState.Ortopedicas[4]*this.props.passState.ssMayo/100,  this.props.passState.Ortopedicas[3]*this.props.passState.ssAbril/100,0)
    rn[5] = this.calcularRequerimientosNetos(this.props.passState.Ortopedicas[5], this.props.passState.Ortopedicas[5]*this.props.passState.ssJunio/100,  this.props.passState.Ortopedicas[4]*this.props.passState.ssMayo/100,0)

    rns.push(rn)
    var rn = []

    rn[0] = this.calcularRequerimientosNetos(this.props.passState.Neurologicas[0], this.props.passState.Neurologicas[0]*this.props.passState.ssEnero/100, 0 , 0)
    rn[1] = this.calcularRequerimientosNetos(this.props.passState.Neurologicas[1], this.props.passState.Neurologicas[1]*this.props.passState.ssFebrero/100,  this.props.passState.Neurologicas[0]*this.props.passState.ssEnero/100, 0)
    rn[2] = this.calcularRequerimientosNetos(this.props.passState.Neurologicas[2], this.props.passState.Neurologicas[2]*this.props.passState.ssMarzo/100,  this.props.passState.Neurologicas[1]*this.props.passState.ssFebrero/100,0)
    rn[3] = this.calcularRequerimientosNetos(this.props.passState.Neurologicas[3], this.props.passState.Neurologicas[3]*this.props.passState.ssAbril/100,  this.props.passState.Neurologicas[2]*this.props.passState.ssMarzo/100,0)
    rn[4] = this.calcularRequerimientosNetos(this.props.passState.Neurologicas[4], this.props.passState.Neurologicas[4]*this.props.passState.ssMayo/100,  this.props.passState.Neurologicas[3]*this.props.passState.ssAbril/100,0)
    rn[5] = this.calcularRequerimientosNetos(this.props.passState.Neurologicas[5], this.props.passState.Neurologicas[5]*this.props.passState.ssJunio/100,  this.props.passState.Neurologicas[4]*this.props.passState.ssMayo/100,0)

    rns.push(rn)
    var rn = []

    rn[0] = this.calcularRequerimientosNetos(this.props.passState.Pediatricas[0], this.props.passState.Pediatricas[0]*this.props.passState.ssEnero/100, 0 , 0)
    rn[1] = this.calcularRequerimientosNetos(this.props.passState.Pediatricas[1], this.props.passState.Pediatricas[1]*this.props.passState.ssFebrero/100,  this.props.passState.Pediatricas[0]*this.props.passState.ssEnero/100, 0)
    rn[2] = this.calcularRequerimientosNetos(this.props.passState.Pediatricas[2], this.props.passState.Pediatricas[2]*this.props.passState.ssMarzo/100,  this.props.passState.Pediatricas[1]*this.props.passState.ssFebrero/100,0)
    rn[3] = this.calcularRequerimientosNetos(this.props.passState.Pediatricas[3], this.props.passState.Pediatricas[3]*this.props.passState.ssAbril/100,  this.props.passState.Pediatricas[2]*this.props.passState.ssMarzo/100,0)
    rn[4] = this.calcularRequerimientosNetos(this.props.passState.Pediatricas[4], this.props.passState.Pediatricas[4]*this.props.passState.ssMayo/100,  this.props.passState.Pediatricas[3]*this.props.passState.ssAbril/100,0)
    rn[5] = this.calcularRequerimientosNetos(this.props.passState.Pediatricas[5], this.props.passState.Pediatricas[5]*this.props.passState.ssJunio/100,  this.props.passState.Pediatricas[4]*this.props.passState.ssMayo/100,0)

    rns.push(rn)

    this.setState(
      {
        reqNetos:rn
      }
    )

    var ingredientesCirujia = []

    var ing = []
    ing = [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0]
    //console.log("INGGGGG" + ing.length);
    ingredientesCirujia.push(ing)
    ing = [0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0]
    //console.log("INGGGGG" + ing.length);
    ingredientesCirujia.push(ing)
    ing = [0,0,0,1,0,0,1,1,0,0,1,2,0,0,0,0,0,0,0]
    //console.log("INGGGGG" + ing.length);
    ingredientesCirujia.push(ing)
    ing = [0,0,1,0,0,0,0,0,0,0,0,2,0,0,1,1,1,0,0]
    //console.log("INGGGGG" + ing.length);
    ingredientesCirujia.push(ing)
    ing = [0,0,0,0,0,0,0,0,0,0,0,2,0.5,1,1,0,0,1,0]
    //console.log("INGGGGG" + ing.length);
    ingredientesCirujia.push(ing)
    ing = [0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1]
    //console.log("INGGGGG" + ing.length);
    ingredientesCirujia.push(ing)

    console.log(ingredientesCirujia)
    console.log(rns)
    //Un recorrido por los ingredientes que tenemos
    var nuevasTablas = []
    for (var i = 0; i < 19; i++)
    {
        var reqN = [0,0,0,0,0,0]
        // Itero sobre los meses
        for (var x = 0; x < 6; x++){
          // itero sobre cirujias
          for (var y = 0; y < 6; y++){
            reqN[x] = reqN[x] + rns[x][y]*this.state.platos[y]*ingredientesCirujia[y][i]
            console.log(rns[x][y]*this.state.platos[y]*ingredientesCirujia[y][i])
          }
        }

        console.log(reqN)

        var costo = this.costoTotal(0,0,0)
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
            //Tengo que quitar esto, por ahora es para que no se putee jeje
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
  calcularRequerimientosNetos(demanda, ss,inventarioAnterior, recepciones){
    console.log(demanda)
    console.log(ss)
    console.log(inventarioAnterior)
    console.log(recepciones)
    console.log(typeof(demanda))
    console.log(typeof(ss))
    console.log(typeof(inventarioAnterior))
    console.log(typeof(recepciones))
    console.log(demanda + Math.ceil(ss) - recepciones - Math.ceil(inventarioAnterior))
    var res = 0
    res = demanda + Math.ceil(ss) - recepciones - inventarioAnterior
    return res;
  }

  calcularCostoMantenerInventario(i, costoUnitario){
    return i*costoUnitario;
  }

  costoTotal(costoAdquirir, costoMantener, costoOrdenar){
    return costoAdquirir + costoMantener + costoOrdenar;
  }
}

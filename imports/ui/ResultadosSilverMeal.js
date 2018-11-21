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


    var rns = [];
    var demandas = [];

    var rn = [];
    var d = [];

    d[0] = this.props.passState.Esteticas[0]
    d[1] = this.props.passState.Esteticas[1]
    d[2] = this.props.passState.Esteticas[2]
    d[3] = this.props.passState.Esteticas[3]
    d[4] = this.props.passState.Esteticas[4]
    d[5] = this.props.passState.Esteticas[5]

    rn[0] = this.calcularRequerimientosNetos(this.props.passState.Esteticas[0], this.props.passState.Esteticas[0]*this.props.passState.ssEnero/100, 0 , 0)
    rn[1] = this.calcularRequerimientosNetos(this.props.passState.Esteticas[1], this.props.passState.Esteticas[1]*this.props.passState.ssFebrero/100,  this.props.passState.Esteticas[0]*this.props.passState.ssEnero/100, 0)
    rn[2] = this.calcularRequerimientosNetos(this.props.passState.Esteticas[2], this.props.passState.Esteticas[2]*this.props.passState.ssMarzo/100,  this.props.passState.Esteticas[1]*this.props.passState.ssFebrero/100,0)
    rn[3] = this.calcularRequerimientosNetos(this.props.passState.Esteticas[3], this.props.passState.Esteticas[3]*this.props.passState.ssAbril/100,  this.props.passState.Esteticas[2]*this.props.passState.ssMarzo/100,0)
    rn[4] = this.calcularRequerimientosNetos(this.props.passState.Esteticas[4], this.props.passState.Esteticas[4]*this.props.passState.ssMayo/100,  this.props.passState.Esteticas[3]*this.props.passState.ssAbril/100,0)
    rn[5] = this.calcularRequerimientosNetos(this.props.passState.Esteticas[5], this.props.passState.Esteticas[5]*this.props.passState.ssJunio/100,  this.props.passState.Esteticas[4]*this.props.passState.ssMayo/100,0)

    //console.log(rn)
    rns.push(rn)
    demandas.push(d)

    var rn = []
    var d = [];

    d[0] = this.props.passState.Cardiacas[0]
    d[1] = this.props.passState.Cardiacas[1]
    d[2] = this.props.passState.Cardiacas[2]
    d[3] = this.props.passState.Cardiacas[3]
    d[4] = this.props.passState.Cardiacas[4]
    d[5] = this.props.passState.Cardiacas[5]

    rn[0] = this.calcularRequerimientosNetos(this.props.passState.Cardiacas[0], this.props.passState.Cardiacas[0]*this.props.passState.ssEnero/100, 0 , 0)
    rn[1] = this.calcularRequerimientosNetos(this.props.passState.Cardiacas[1], this.props.passState.Cardiacas[1]*this.props.passState.ssFebrero/100,  this.props.passState.Cardiacas[0]*this.props.passState.ssEnero/100, 0)
    rn[2] = this.calcularRequerimientosNetos(this.props.passState.Cardiacas[2], this.props.passState.Cardiacas[2]*this.props.passState.ssMarzo/100,  this.props.passState.Cardiacas[1]*this.props.passState.ssFebrero/100,0)
    rn[3] = this.calcularRequerimientosNetos(this.props.passState.Cardiacas[3], this.props.passState.Cardiacas[3]*this.props.passState.ssAbril/100,  this.props.passState.Cardiacas[2]*this.props.passState.ssMarzo/100,0)
    rn[4] = this.calcularRequerimientosNetos(this.props.passState.Cardiacas[4], this.props.passState.Cardiacas[4]*this.props.passState.ssMayo/100,  this.props.passState.Cardiacas[3]*this.props.passState.ssAbril/100,0)
    rn[5] = this.calcularRequerimientosNetos(this.props.passState.Cardiacas[5], this.props.passState.Cardiacas[5]*this.props.passState.ssJunio/100,  this.props.passState.Cardiacas[4]*this.props.passState.ssMayo/100,0)

    rns.push(rn)
    demandas.push(d)

    var rn = []
    var d = [];

    d[0] = this.props.passState.Respiratorias[0]
    d[1] = this.props.passState.Respiratorias[1]
    d[2] = this.props.passState.Respiratorias[2]
    d[3] = this.props.passState.Respiratorias[3]
    d[4] = this.props.passState.Respiratorias[4]
    d[5] = this.props.passState.Respiratorias[5]

    rn[0] = this.calcularRequerimientosNetos(this.props.passState.Respiratorias[0], this.props.passState.Respiratorias[0]*this.props.passState.ssEnero/100, 0 , 0)
    rn[1] = this.calcularRequerimientosNetos(this.props.passState.Respiratorias[1], this.props.passState.Respiratorias[1]*this.props.passState.ssFebrero/100,  this.props.passState.Respiratorias[0]*this.props.passState.ssEnero/100, 0)
    rn[2] = this.calcularRequerimientosNetos(this.props.passState.Respiratorias[2], this.props.passState.Respiratorias[2]*this.props.passState.ssMarzo/100,  this.props.passState.Respiratorias[1]*this.props.passState.ssFebrero/100,0)
    rn[3] = this.calcularRequerimientosNetos(this.props.passState.Respiratorias[3], this.props.passState.Respiratorias[3]*this.props.passState.ssAbril/100,  this.props.passState.Respiratorias[2]*this.props.passState.ssMarzo/100,0)
    rn[4] = this.calcularRequerimientosNetos(this.props.passState.Respiratorias[4], this.props.passState.Respiratorias[4]*this.props.passState.ssMayo/100,  this.props.passState.Respiratorias[3]*this.props.passState.ssAbril/100,0)
    rn[5] = this.calcularRequerimientosNetos(this.props.passState.Respiratorias[5], this.props.passState.Respiratorias[5]*this.props.passState.ssJunio/100,  this.props.passState.Respiratorias[4]*this.props.passState.ssMayo/100,0)

    rns.push(rn)
    demandas.push(d)

    var rn = []
    var d = [];

    d[0] = this.props.passState.Ortopedicas[0]
    d[1] = this.props.passState.Ortopedicas[1]
    d[2] = this.props.passState.Ortopedicas[2]
    d[3] = this.props.passState.Ortopedicas[3]
    d[4] = this.props.passState.Ortopedicas[4]
    d[5] = this.props.passState.Ortopedicas[5]

    rn[0] = this.calcularRequerimientosNetos(this.props.passState.Ortopedicas[0], this.props.passState.Ortopedicas[0]*this.props.passState.ssEnero/100, 0 , 0)
    rn[1] = this.calcularRequerimientosNetos(this.props.passState.Ortopedicas[1], this.props.passState.Ortopedicas[1]*this.props.passState.ssFebrero/100,  this.props.passState.Ortopedicas[0]*this.props.passState.ssEnero/100, 0)
    rn[2] = this.calcularRequerimientosNetos(this.props.passState.Ortopedicas[2], this.props.passState.Ortopedicas[2]*this.props.passState.ssMarzo/100,  this.props.passState.Ortopedicas[1]*this.props.passState.ssFebrero/100,0)
    rn[3] = this.calcularRequerimientosNetos(this.props.passState.Ortopedicas[3], this.props.passState.Ortopedicas[3]*this.props.passState.ssAbril/100,  this.props.passState.Ortopedicas[2]*this.props.passState.ssMarzo/100,0)
    rn[4] = this.calcularRequerimientosNetos(this.props.passState.Ortopedicas[4], this.props.passState.Ortopedicas[4]*this.props.passState.ssMayo/100,  this.props.passState.Ortopedicas[3]*this.props.passState.ssAbril/100,0)
    rn[5] = this.calcularRequerimientosNetos(this.props.passState.Ortopedicas[5], this.props.passState.Ortopedicas[5]*this.props.passState.ssJunio/100,  this.props.passState.Ortopedicas[4]*this.props.passState.ssMayo/100,0)

    rns.push(rn)
    demandas.push(d)

    var rn = []
    var d = [];

    d[0] = this.props.passState.Neurologicas[0]
    d[1] = this.props.passState.Neurologicas[1]
    d[2] = this.props.passState.Neurologicas[2]
    d[3] = this.props.passState.Neurologicas[3]
    d[4] = this.props.passState.Neurologicas[4]
    d[5] = this.props.passState.Neurologicas[5]

    rn[0] = this.calcularRequerimientosNetos(this.props.passState.Neurologicas[0], this.props.passState.Neurologicas[0]*this.props.passState.ssEnero/100, 0 , 0)
    rn[1] = this.calcularRequerimientosNetos(this.props.passState.Neurologicas[1], this.props.passState.Neurologicas[1]*this.props.passState.ssFebrero/100,  this.props.passState.Neurologicas[0]*this.props.passState.ssEnero/100, 0)
    rn[2] = this.calcularRequerimientosNetos(this.props.passState.Neurologicas[2], this.props.passState.Neurologicas[2]*this.props.passState.ssMarzo/100,  this.props.passState.Neurologicas[1]*this.props.passState.ssFebrero/100,0)
    rn[3] = this.calcularRequerimientosNetos(this.props.passState.Neurologicas[3], this.props.passState.Neurologicas[3]*this.props.passState.ssAbril/100,  this.props.passState.Neurologicas[2]*this.props.passState.ssMarzo/100,0)
    rn[4] = this.calcularRequerimientosNetos(this.props.passState.Neurologicas[4], this.props.passState.Neurologicas[4]*this.props.passState.ssMayo/100,  this.props.passState.Neurologicas[3]*this.props.passState.ssAbril/100,0)
    rn[5] = this.calcularRequerimientosNetos(this.props.passState.Neurologicas[5], this.props.passState.Neurologicas[5]*this.props.passState.ssJunio/100,  this.props.passState.Neurologicas[4]*this.props.passState.ssMayo/100,0)

    rns.push(rn)
    demandas.push(d)
    var rn = []
    var d = [];

    d[0] = this.props.passState.Pediatricas[0]
    d[1] = this.props.passState.Pediatricas[1]
    d[2] = this.props.passState.Pediatricas[2]
    d[3] = this.props.passState.Pediatricas[3]
    d[4] = this.props.passState.Pediatricas[4]
    d[5] = this.props.passState.Pediatricas[5]

    rn[0] = this.calcularRequerimientosNetos(this.props.passState.Pediatricas[0], this.props.passState.Pediatricas[0]*this.props.passState.ssEnero/100, 0 , 0)
    rn[1] = this.calcularRequerimientosNetos(this.props.passState.Pediatricas[1], this.props.passState.Pediatricas[1]*this.props.passState.ssFebrero/100,  this.props.passState.Pediatricas[0]*this.props.passState.ssEnero/100, 0)
    rn[2] = this.calcularRequerimientosNetos(this.props.passState.Pediatricas[2], this.props.passState.Pediatricas[2]*this.props.passState.ssMarzo/100,  this.props.passState.Pediatricas[1]*this.props.passState.ssFebrero/100,0)
    rn[3] = this.calcularRequerimientosNetos(this.props.passState.Pediatricas[3], this.props.passState.Pediatricas[3]*this.props.passState.ssAbril/100,  this.props.passState.Pediatricas[2]*this.props.passState.ssMarzo/100,0)
    rn[4] = this.calcularRequerimientosNetos(this.props.passState.Pediatricas[4], this.props.passState.Pediatricas[4]*this.props.passState.ssMayo/100,  this.props.passState.Pediatricas[3]*this.props.passState.ssAbril/100,0)
    rn[5] = this.calcularRequerimientosNetos(this.props.passState.Pediatricas[5], this.props.passState.Pediatricas[5]*this.props.passState.ssJunio/100,  this.props.passState.Pediatricas[4]*this.props.passState.ssMayo/100,0)

    rns.push(rn)
    demandas.push(d)

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

    var cus = [this.props.passState.cuSopa,this.props.passState.cuArroz,this.props.passState.cuCarne,this.props.passState.cuAgua,this.props.passState.cuYogurt,this.props.passState.cuGelatina,this.props.passState.cuTomate,this.props.passState.cuSalmon,this.props.passState.cuVerduras,this.props.passState.cuManzana,this.props.passState.cuBrocoli,this.props.passState.cuHuevo,this.props.passState.cuAguacate,this.props.passState.cuFrutosSecos,this.props.passState.cuPasta,this.props.passState.cuCereal,this.props.passState.cuLeche,this.props.passState.cuPollo,this.props.passState.cuCompota]



    var lts = [this.props.passState.ltSopa,this.props.passState.ltArroz,this.props.passState.ltCarne,this.props.passState.ltAgua,this.props.passState.ltYogurt,this.props.passState.ltGelatina,this.props.passState.ltTomate,this.props.passState.ltSalmon,this.props.passState.ltVerduras,this.props.passState.ltManzana,this.props.passState.ltBrocoli,this.props.passState.ltHuevo,this.props.passState.ltAguacate,this.props.passState.ltFrutosSecos,this.props.passState.ltPasta,this.props.passState.ltCereal,this.props.passState.ltLeche,this.props.passState.ltPollo,this.props.passState.ltCompota]

    var tasasSS = [this.props.passState.ssEnero/100,this.props.passState.ssFebrero/100,this.props.passState.ssMarzo/100,this.props.passState.ssAbril/100,this.props.passState.ssMayo/100,this.props.passState.ssJunio/100]

    //Un recorrido por los ingredientes que tenemos
    var nuevasTablas = []
    for (var i = 0; i < 19; i++)
    {
        var reqN = [0,0,0,0,0,0]
        var dem = [0,0,0,0,0,0]
        // Itero sobre los meses
        var sss = [0,0,0,0,0,0];
        for (var x = 0; x < 6; x++){
          // itero sobre cirujias
          for (var y = 0; y < 6; y++){
            reqN[x] = reqN[x] + rns[y][x]*this.state.platos[y]*ingredientesCirujia[y][i]
            console.log(rns[x][y]*this.state.platos[y]*ingredientesCirujia[y][i])
            dem[x] = dem[x] + demandas[y][x]*this.state.platos[y]*ingredientesCirujia[y][i]
          }
          sss[x] = Math.ceil(dem[x]*tasasSS[x])
        }

        console.log("ESTOS SON LOS SSS "+ sss)
        console.log("ESTOS SON Las Demnadassss "+ dem)

        // console.log(reqN)
        //Aca creamos toda la tabla que se va renderizar después
        var nueva = [];

        //El recorrido se hace para cada periodo
        var periodoVoy = 1
        for (var j = 0; j < 6 ; j++)
        {
          var fila = [0,0,0,0,0,0,0,0]
          fila[5] = 1
          fila[0] = periodoVoy
          var cPedir = this.props.passState.costoFijoPedido
          var cAdquirir = cus[i]*(reqN[j])
          var cMantner = this.calcularCostoMantenerInventario(this.props.passState.tasaMantener/100*cus[i], sss[j])
          var costo = this.costoTotal(cAdquirir,cMantner,cPedir)

          fila[2] = cPedir
          fila[3] = cAdquirir
          fila[4] = cMantner
          fila[1] = reqN[j]
          fila[6] = costo
          fila[7] = costo

          //Itero hasta que el costo suba
          var sigo = true;
          var costoTotalAnterior = costo
          var cuantosT = 1
          var cantPedir = reqN[j]+reqN[j+1]
          nueva.push(fila)
          if (i == 0){
            console.log("ODIO CONTROL " + reqN)
          }

          while(sigo && periodoVoy < 5 ){
            cuantosT = cuantosT + 1
            periodoVoy = periodoVoy + 1
            var cPedirActual = this.props.passState.costoFijoPedido
            var cAdquirirActual = cus[i]*(cantPedir)
            var cMantnerActual = this.calcularCostoMantenerInventario(this.props.passState.tasaMantener/100*cus[i], sss[j])
            for (var k = 1; k < cuantosT; k++){
              cMantnerActual = cMantnerActual +this.calcularCostoMantenerInventario(this.props.passState.tasaMantener/100*cus[i], sss[j+k] + reqN[j+k])
            }
            var costoActual = this.costoTotal(cAdquirirActual,cMantnerActual,cPedirActual)
            if (costoTotalAnterior >= (costoActual/cuantosT)){
              var fi = ["..."+ (periodoVoy),cantPedir,cPedirActual,cAdquirirActual,cMantnerActual,cuantosT,costoActual,costoActual/cuantosT]
              costoTotalAnterior = costoActual/cuantosT
              cantPedir = cantPedir + reqN[j+cuantosT]
              nueva.push(fi)
              j = j + 1
            }
            else {
              console.log("ODIO CONTROLLLLLLLLLL")
              var fi = ["..."+ (periodoVoy),cantPedir,cPedirActual,cAdquirirActual,cMantnerActual,cuantosT,costoActual,costoActual/cuantosT]
              costoTotalAnterior = costoActual
              cantPedir = cantPedir + reqN[j+cuantosT]
              nueva.push(fi)
              sigo = false
            }

          }
          //fin del while
          periodoVoy = j + 2


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

    console.log(demanda + ss - recepciones - inventarioAnterior)
    console.log(demanda)
    console.log(Math.ceil(ss))
    console.log(Math.ceil(inventarioAnterior))
    var res = 0
    res = demanda + Math.ceil(ss) - recepciones - Math.ceil(inventarioAnterior)
    return res;
  }

  calcularCostoMantenerInventario(i, costoUnitario){
    return i*costoUnitario;
  }

  costoTotal(costoAdquirir, costoMantener, costoOrdenar){
    return costoAdquirir + costoMantener + costoOrdenar;
  }
}

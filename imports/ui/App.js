import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';

import './style.css'

import LeadTime from './LeadTime'
import Costos from './Costos'
import SecurityStock from './SecurityStock'
import Demanda from './Demanda'
import Recetas from './Recetas'
import SilverMeal from './ResultadosSilverMeal'

// App component - represents the whole app
export default class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        ltSopa: 0,
        cuSopa: 158,
        ltArroz: 0,
        cuArroz: 77,
        ltCarne: 0,
        cuCarne: 169,
        ltAgua: 0,
        cuAgua: 37,
        ltYogurt: 0,
        cuYogurt: 144,
        ltGelatina: 0,
        cuGelatina: 110,
        ltTomate: 0,
        cuTomate: 93,
        ltSalmon: 0,
        cuSalmon: 197,
        ltVerduras: 0,
        cuVerduras: 88,
        ltManzana: 0,
        cuManzana: 174,
        ltBrocoli: 0,
        cuBrocoli: 86,
        ltHuevo: 0,
        cuHuevo: 109,
        ltAguacate: 0,
        cuAguacate: 55,
        ltFrutosSecos: 0,
        cuFrutosSecos: 200,
        ltPasta: 0,
        cuPasta: 62,
        ltCereal: 0,
        cuCereal: 55,
        ltLeche: 0,
        cuLeche: 91,
        ltPollo: 0,
        cuPollo: 104,
        ltCompota: 0,
        cuCompota: 145,
        costoFijoPedido: 23000,
        tasaMantener: 15,
        ssEnero: 10,
        ssFebrero: 10,
        ssMarzo: 10,
        ssAbril: 10,
        ssMayo: 10,
        ssJunio: 10,
        Esteticas: [719,726,795,706,694,684],
        Cardiacas: [278,281,273,273,269,265],
        Respiratorias: [394,398,387,387,381,375],
        Ortopedicas: [487,492,478,478,470,464],
        Neurologicas: [223,234,228,228,224,221],
        Pediatricas: [209,211,205,205,202,199]
      }
    }


  onUpdate = (name, val) => {
    this.setState({
      [name]: val
    });
  }

  render() {
    return (
      <div className="container">

        <header>
          <h1>Cafetería del Centro Hospitalario</h1>
          <i className="fas fa-check"></i>
        </header>

        <Tabs onSelect={(index, label) => console.log(label + ' selected')}>

            <Tab label="Inicio">
              <div className="tab-padding">
                <div className = "row">
                  <div className = "col-sm-8">
                    <LeadTime onUpdate={this.onUpdate}></LeadTime>
                  </div>
                  <div className = "col-sm-4">
                    <Costos onUpdate={this.onUpdate}></Costos>
                    <hr/>
                    <SecurityStock onUpdate={this.onUpdate}></SecurityStock>

                  </div>

                </div>
                <Demanda onUpdate={this.onUpdate}></Demanda>
                <Recetas onUpdate={this.onUpdate}></Recetas>
              </div>
            </Tab>

            <Tab label="Balance Parte Periodo">
              <div className="tab-padding">

                 Tab 2 content

              </div>
            </Tab>

            <Tab label="Silver Meal">
              <div className="tab-padding">
                <SilverMeal passState={this.state}></SilverMeal>
              </div>
            </Tab>

            <Tab label="Mínimo Costo Unitario">
              <div className="tab-padding">

                 Tab 4 content

              </div>
            </Tab>
        </Tabs>


        <footer>
        <p>© Made with love by Grupo 35</p>
        </footer>


      </div>

    );
  }
}

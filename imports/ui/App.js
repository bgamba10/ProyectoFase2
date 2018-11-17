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
        cuSopa: 0,
        ltArroz: 0,
        cuArroz: 0,
        ltCarne: 0,
        cuCarne: 0,
        ltAgua: 0,
        cuAgua: 0,
        ltYogurt: 0,
        cuYogurt: 0,
        ltGelatina: 0,
        cuGelatina: 0,
        ltTomate: 0,
        cuTomate: 0,
        ltSalmon: 0,
        cuSalmon: 0,
        ltVerduras: 0,
        cuVerduras: 0,
        ltManzana: 0,
        cuManzana: 0,
        ltBrocoli: 0,
        cuBrocoli: 0,
        ltHuevo: 0,
        cuHuevo: 0,
        ltAguacate: 0,
        cuAguacate: 0,
        ltFrutosSecos: 0,
        cuFrutosSecos: 0,
        ltPasta: 0,
        cuPasta: 0,
        ltCereal: 0,
        cuCereal: 0,
        ltLeche: 0,
        cuLeche: 0,
        ltPollo: 0,
        cuPollo: 0,
        ltCompota: 0,
        cuCompota: 0,
        costoFijoPedido: 0,
        tasaMantener: 0,
        ssEnero: 0,
        ssFebrero: 0,
        ssMarzo: 0,
        ssAbril: 0,
        ssMayo: 0,
        ssJunio: 0
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
                <Demanda></Demanda>
                <Recetas></Recetas>
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

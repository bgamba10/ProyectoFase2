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
                    <LeadTime></LeadTime>

                  </div>
                  <div className = "col-sm-4">
                    <Costos></Costos>
                    <hr/>
                    <SecurityStock></SecurityStock>

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
                <SilverMeal></SilverMeal>
              </div>
            </Tab>

            <Tab label="Mínimo Costo Unitario">
              <div className="tab-padding">
                 
                 Tab 4 content

              </div>
            </Tab>
        </Tabs>





      </div>

    );
  }
}

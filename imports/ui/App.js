import React, { Component } from 'react';

import {Tabs, Tab} from 'react-bootstrap-tabs';
import LeadTime from './LeadTime'
import Costos from './Costos'
import SecurityStock from './SecurityStock'
import Demanda from './Demanda'
import Recetas from './Recetas'

// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
      <div className="container">
        
        <header>
          <h1>Cafetería del Centro Hospitalario</h1>
        </header>

        <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
            <Tab label="Inicio">

              <div className = "row">
                <div className = "col-sm-8">
                  <LeadTime></LeadTime>

                </div>
                <div className = "col-sm-4">
                  <Costos></Costos>
                  <SecurityStock></SecurityStock>

                </div>

              </div>
              <Demanda></Demanda>
              <Recetas></Recetas>
              
            
            </Tab>
            <Tab label="Balance Parte Periodo">Tab 2 content

            </Tab>

            <Tab label="Silver Meal">Tab 3 content

            </Tab>
            <Tab label="Mínimo Costo Unitario">Tab 4 content

            </Tab>
        </Tabs>

        
        
        
        
      </div>

    );
  }
}

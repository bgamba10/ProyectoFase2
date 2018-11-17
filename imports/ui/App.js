import React, { Component } from 'react';

import Task from './Task.js';
import {Tabs, Tab} from 'react-bootstrap-tabs';

// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task}/>
    ));
  }

  render() {
    return (
      <div className="container">
        
        <header>
          <h1>Cafetería del Centro Hospitalario</h1>
        </header>

        <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
            <Tab label="Inicio">

            Tab 1 content
            <ul>
          {this.renderTasks()}
        </ul>
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

import React, {Component} from "react";
import {Meteor} from "meteor/meteor";
import {
     Accordion,
     AccordionItem,
     AccordionItemTitle,
     AccordionItemBody,
 } from 'react-accessible-accordion';

 import 'react-accessible-accordion/dist/fancy-example.css';


class SecurityStock extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const parts = name.split(",")
        const material = parts[0]
        const period = parts[1]

        try {
            const v = parseInt(value)
            if (v >= 0 && v <= 100) {
                Meteor.call("materials.updateSS", material, period, value)
            }
        }
        catch (e) {

        }
    }

    renderSSEnero(){
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${material.nombre},primero`} min="0"
                               max="100" required="" type="range" list="tickmarks" step="5" defaultValue={material.ss.primero}/></td>
                    <td>{material.ss.primero}%</td>
                </tr>
            )
        });
    }

    renderSSFebrero(){
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${material.nombre},segundo`} min="0"
                               max="100" required="" type="range" list="tickmarks" step="5"  defaultValue={material.ss.segundo}/></td>
                    <td>{material.ss.segundo}%</td>
                </tr>
            )
        });
    }

    renderSSMarzo(){
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${material.nombre},tercero`} min="0"
                               max="100" required="" type="range" list="tickmarks" step="5"  defaultValue={material.ss.tercero}/></td>
                    <td>{material.ss.tercero}%</td>
                </tr>
            )
        });
    }

    renderSSAbril(){
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${material.nombre},cuarto`} min="0"
                               max="100" required="" type="range" list="tickmarks" step="5" defaultValue={material.ss.cuarto}/></td>
                    <td>{material.ss.cuarto}%</td>
                </tr>
            )
        });
    }

    renderSSMayo(){
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${material.nombre},quinto`} min="0"
                               max="100" required="" type="range" list="tickmarks" step="5" defaultValue={material.ss.quinto}/></td>
                    <td>{material.ss.quinto}%</td>
                </tr>
            )
        });
    }

    renderSSJunio(){
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${material.nombre},sexto`} min="0"
                               max="100" required="" type="range" list="tickmarks" step="5" defaultValue={material.ss.sexto}/></td>
                    <td>{material.ss.sexto}%</td>
                </tr>
            )
        });
    }




    

    render() {
        return (
            
                <section className="wrapper style1">
                    <div className="container">
                        <div className="row 200%">
                            <div className="6u 12u$(medium)">
                                <header class="major">
                                    <h2>Security Stock</h2>
                                    <p>Para cada mes puede ingresar el nivel de stock de seguridad que desea tener, haga click en el mes e ingrese los datos</p>
                                    <br/>
                                    <img src="https://images.pexels.com/photos/680302/pexels-photo-680302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%"/>
                                </header>
                            </div>
                            <div className="6u$ 12u$(medium)">
                                <Accordion>
                                  <AccordionItem>
                                    <AccordionItemTitle>
                                      <h4>Enero 2019</h4>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                      <div className="table-wrapper">
                                          <table>
                                            <thead>
                                              <tr>
                                                <th>Ingrediente</th>
                                                <th>Security Stock</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {this.renderSSEnero()}
                                            </tbody>
                                          </table>
                                      </div>
                                    </AccordionItemBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionItemTitle>
                                      <h4>Febrero 2019</h4>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                      <div className="table-wrapper">
                                          <table>
                                            <thead>
                                              <tr>
                                                <th>Ingrediente</th>
                                                <th>Security Stock</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {this.renderSSFebrero()}
                                            </tbody>
                                          </table>
                                      </div>
                                    </AccordionItemBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionItemTitle>
                                      <h4>Marzo 2019</h4>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                      <div className="table-wrapper">
                                          <table>
                                            <thead>
                                              <tr>
                                                <th>Ingrediente</th>
                                                <th>Security Stock</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {this.renderSSMarzo()}
                                            </tbody>
                                          </table>
                                      </div>
                                    </AccordionItemBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionItemTitle>
                                      <h4>Abril 2019</h4>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                      <div className="table-wrapper">
                                          <table>
                                            <thead>
                                              <tr>
                                                <th>Ingrediente</th>
                                                <th>Security Stock</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {this.renderSSAbril()}
                                            </tbody>
                                          </table>
                                      </div>
                                    </AccordionItemBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionItemTitle>
                                      <h4>Mayo 2019</h4>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                      <div className="table-wrapper">
                                          <table>
                                            <thead>
                                              <tr>
                                                <th>Ingrediente</th>
                                                <th>Security Stock</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {this.renderSSMayo()}
                                            </tbody>
                                          </table>
                                      </div>
                                    </AccordionItemBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionItemTitle>
                                      <h4>Junio 2019</h4>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                      <div className="table-wrapper">
                                          <table>
                                            <thead>
                                              <tr>
                                                <th>Ingrediente</th>
                                                <th>Security Stock</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {this.renderSSJunio()}
                                            </tbody>
                                          </table>
                                      </div>
                                    </AccordionItemBody>
                                  </AccordionItem>
                                </Accordion>
                               <br/>
                            </div>
                        </div>
                    </div>
                    <datalist id="tickmarks">
                       <option value="0" label="0%"/>
                       <option value="10"/>
                       <option value="20"/>
                       <option value="30"/>
                       <option value="40"/>
                       <option value="50" label="50%"/>
                       <option value="60"/>
                       <option value="70"/>
                       <option value="80"/>
                       <option value="90"/>
                       <option value="100" label="100%"/>
                     </datalist>
                </section>

                
            
        );
    }
}

export default SecurityStock;
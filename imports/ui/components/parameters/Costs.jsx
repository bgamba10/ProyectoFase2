import React, {Component} from "react";
import {
     Accordion,
     AccordionItem,
     AccordionItemTitle,
     AccordionItemBody,
 } from 'react-accessible-accordion';

 import 'react-accessible-accordion/dist/fancy-example.css';

class Costs extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const parts = name.split(",")
        const type = parts[0]
        const material = parts[1]
        const period = parts[2]

        try {
            const v = parseFloat(value)
            if (v>=0){
                Meteor.call("materials.updateCost", type, material, period, value)
            }
        }
        catch (e) {

        }
    }

    renderOctubre(){
      return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},menos2`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.menos2} placeholder="Costo Ordenar"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},menos2`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.menos2} placeholder="Costo Adquirir"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},menos2`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.menos2} placeholder="Costo Mantener"/></td>
                </tr>
            )
        });
    }

    renderNoviembre(){
      return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},menos1`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.menos1} placeholder="Costo Ordenar"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},menos1`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.menos1} placeholder="Costo Adquirir"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},menos1`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.menos1} placeholder="Costo Mantener"/></td>
                </tr>
            )
        });
    }

    renderDiciembre(){
      return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},cero`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.cero} placeholder="Costo Ordenar"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},cero`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.cero} placeholder="Costo Adquirir"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},cero`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.cero} placeholder="Costo Mantener"/></td>
                </tr>
            )
        });
    }

    renderEnero(){
      return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},primero`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.primero} placeholder="Costo Ordenar"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},primero`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.primero} placeholder="Costo Adquirir"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},primero`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.primero} placeholder="Costo Mantener"/></td>
                </tr>
            )
        });
    }

    renderFebrero(){
      return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},segundo`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.segundo} placeholder="Costo Ordenar"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},segundo`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.segundo} placeholder="Costo Adquirir"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},segundo`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.segundo} placeholder="Costo Mantener"/></td>
                </tr>
            )
        });
    }

    renderMarzo(){
      return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},tercero`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.tercero} placeholder="Costo Ordenar"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},tercero`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.tercero} placeholder="Costo Adquirir"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},tercero`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.tercero} placeholder="Costo Mantener"/></td>
                </tr>
            )
        });
    }

    renderAbril(){
      return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},cuarto`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.cuarto} placeholder="Costo Ordenar"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},cuarto`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.cuarto} placeholder="Costo Adquirir"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},cuarto`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.cuarto} placeholder="Costo Mantener"/></td>
                </tr>
            )
        });
    }

    renderMayo(){
      return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},quinto`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.quinto} placeholder="Costo Ordenar"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},quinto`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.quinto} placeholder="Costo Adquirir"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},quinto`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.quinto} placeholder="Costo Mantener"/></td>
                </tr>
            )
        });
    }

    renderJunio(){
      return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},sexto`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.sexto} placeholder="Costo Ordenar"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},sexto`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.sexto} placeholder="Costo Adquirir"/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},sexto`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.sexto} placeholder="Costo Mantener"/></td>
                </tr>
            )
        });
    }


    render() {
        return (
            <section id="three" class="wrapper style1">
                <div class="container">
                  <header class="major special">        
                    <h2>Costos por ingrediente cada mes</h2>
                    <p>Haga click en cada mes para ingresar sus respectivos costos de ordenar, adquirir y mantener en inventario</p>
                    </header>
                    
                        <Accordion>
                          <AccordionItem expanded="true">
                            <AccordionItemTitle>
                              <h4>Octubre 2018</h4>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                              <div className="table-wrapper">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>Ingrediente</th>
                                        <th>Costo Ordenar</th>
                                        <th>Costo Adquirir</th>
                                        <th>Costo Mantener</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {this.renderOctubre()}
                                    </tbody>
                                  </table>
                              </div>
                            </AccordionItemBody>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionItemTitle>
                              <h4>Noviembre 2018</h4>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                              <div className="table-wrapper">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>Ingrediente</th>
                                        <th>Costo Ordenar</th>
                                        <th>Costo Adquirir</th>
                                        <th>Costo Mantener</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {this.renderNoviembre()}
                                    </tbody>
                                  </table>
                              </div>
                            </AccordionItemBody>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionItemTitle>
                              <h4>Diciembre 2018</h4>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                              <div className="table-wrapper">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>Ingrediente</th>
                                        <th>Costo Ordenar</th>
                                        <th>Costo Adquirir</th>
                                        <th>Costo Mantener</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {this.renderDiciembre()}
                                    </tbody>
                                  </table>
                              </div>
                            </AccordionItemBody>
                          </AccordionItem>
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
                                        <th>Costo Ordenar</th>
                                        <th>Costo Adquirir</th>
                                        <th>Costo Mantener</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {this.renderEnero()}
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
                                        <th>Costo Ordenar</th>
                                        <th>Costo Adquirir</th>
                                        <th>Costo Mantener</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {this.renderFebrero()}
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
                                        <th>Costo Ordenar</th>
                                        <th>Costo Adquirir</th>
                                        <th>Costo Mantener</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {this.renderMarzo()}
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
                                        <th>Costo Ordenar</th>
                                        <th>Costo Adquirir</th>
                                        <th>Costo Mantener</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {this.renderAbril()}
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
                                        <th>Costo Ordenar</th>
                                        <th>Costo Adquirir</th>
                                        <th>Costo Mantener</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {this.renderMayo()}
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
                                        <th>Costo Ordenar</th>
                                        <th>Costo Adquirir</th>
                                        <th>Costo Mantener</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {this.renderJunio()}
                                    </tbody>
                                  </table>
                              </div>
                            </AccordionItemBody>
                          </AccordionItem>
                        </Accordion>
                        <br/>
                        <br/>
                    </div>
                
            </section>
        );
    }
}

export default Costs;
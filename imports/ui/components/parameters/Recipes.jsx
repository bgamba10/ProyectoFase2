import React, {Component} from "react";
import {
     Accordion,
     AccordionItem,
     AccordionItemTitle,
     AccordionItemBody,
 } from 'react-accessible-accordion';

 import 'react-accessible-accordion/dist/fancy-example.css';

class Recipes extends Component {

    names = ['Sopa', 'Arroz', 'Carne', 'Agua', 'Yogurt griego', 'Gelatina', 'Tomate', 'Salmón', 'Verduras', 'Manzana', 'Brócoli', 'Huevo', 'Aguacate', 'Frutos secos', 'Pasta', 'Cereal', 'Leche', 'Pollo', 'Compota de frutas']

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChangeQuantity = this.handleInputChangeQuantity.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const parts = name.split(",")
        const ingredient = parts[0]
        const recipe = parts[1]

        try {
            const v = parseFloat(value)
            if (v>=0){
                Meteor.call("recipes.updateIngredients", recipe, ingredient, value)
            }
        }
        catch (e) {

        }
    }

    handleInputChangeQuantity(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        try {
            const v = parseInt(value)
            if (v>=0){
                Meteor.call("recipes.updateQuantity", name, value)
            }
        }
        catch (e) {

        }
    }

    renderRecipeQuantities() {
        return this.props.recipes.map((recipe)=>{
            return (
                <tr key={recipe._id}>
                    <td>{recipe.nombre}</td>
                    <td><input className="text-center"
                               onChange={this.handleInputChangeQuantity} name={`${recipe.nombre}`}
                               min="0" required="" type="number" defaultValue={recipe.cantidad}/>
                    </td>
                </tr>
            )
        })
    }

    renderSana(){
        return this.names.map((ingredient) => {
            return (
                <tr key={ingredient}>
                    <td className="first-row">{ingredient}</td>
                    <td><input className="form-control text-center"
                               onChange={this.handleInputChange} name={`${ingredient},${this.props.recipes[0].nombre}`}
                               min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[0][ingredient]}/>
                    </td>
                </tr>
            )
        });
    }

    renderCalorias(){
        return this.names.map((ingredient) => {
            return (
                <tr key={ingredient}>
                    <td className="first-row">{ingredient}</td>
                    <td><input className="form-control text-center"
                               onChange={this.handleInputChange} name={`${ingredient},${this.props.recipes[1].nombre}`}
                               min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[1][ingredient]}/>
                    </td>
                </tr>
            )
        });
    }

    renderVitaminas(){
        return this.names.map((ingredient) => {
            return (
                <tr key={ingredient}>
                    <td className="first-row">{ingredient}</td>
                    <td><input className="form-control text-center"
                               onChange={this.handleInputChange} name={`${ingredient},${this.props.recipes[2].nombre}`}
                               min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[2][ingredient]}/>
                    </td>
                </tr>
            )
        });
    }

    renderBalanceada(){
        return this.names.map((ingredient) => {
            return (
                <tr key={ingredient}>
                    <td className="first-row">{ingredient}</td>
                    <td><input className="text-center"
                               onChange={this.handleInputChange} name={`${ingredient},${this.props.recipes[3].nombre}`}
                               min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[3][ingredient]}/>
                    </td>
                </tr>
            )
        });
    }

    renderVariada(){
        return this.names.map((ingredient) => {
            return (
                <tr key={ingredient}>
                    <td className="first-row">{ingredient}</td>
                    <td><input className="form-control text-center"
                               onChange={this.handleInputChange} name={`${ingredient},${this.props.recipes[4].nombre}`}
                               min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[4][ingredient]}/>
                    </td>
                </tr>
            )
        });
    }

    renderBasica(){
        return this.names.map((ingredient) => {
            return (
                <tr key={ingredient}>
                    <td className="first-row">{ingredient}</td>
                    <td><input onChange={this.handleInputChange} className="text-center"
                               name={`${ingredient},${this.props.recipes[5].nombre}`} min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[5][ingredient]}/>
                    </td>
                </tr>
            )
        });
    }


    render() {
        return (
            <div className="container-fluid">
                <section class="wrapper style1">
                    <div class="container 75%">
                        <div class="row 200%">
                            <div class="6u 12u$(medium)">
                                <header class="major">
                                    <h2>Platos requeridos por dieta</h2>
                                    <p>Ingrese el número de platos necesarios por dieta</p>
                                    <br/>
                                    <img src="https://images.pexels.com/photos/95218/pexels-photo-95218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="80%"/>
                                </header>
                            </div>
                            <div class="6u$ 12u$(medium)">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Receta</th>
                                        <th>Platos</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderRecipeQuantities()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="wrapper style1">
                    <div className="container">
                        <header className="major special">
                            <h2>Ingredientes por receta</h2>
                            <p>Introduzca la cantidad que necesita de cada ingrediente para cada una de las recetas, haga click en la receta e introduzca la cantidad</p>
                        </header>
                        <div className="feature-grid">
                            <Accordion>
                                  <AccordionItem>
                                    <AccordionItemTitle>
                                      <h4>{this.props.recipes[0] ? this.props.recipes[0].nombre : ""}</h4>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                      <div className="table-wrapper">
                                          <table>
                                            <thead>
                                              <tr>
                                                <th>Ingrediente</th>
                                                <th>Cantidad</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.recipes[0] ? this.renderSana() : <tr></tr>}
                                            </tbody>
                                          </table>
                                      </div>
                                    </AccordionItemBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionItemTitle>
                                      <h4>{this.props.recipes[1] ? this.props.recipes[1].nombre : ""}</h4>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                      <div className="table-wrapper">
                                          <table>
                                            <thead>
                                              <tr>
                                                <th>Ingrediente</th>
                                                <th>Cantidad</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.recipes[0] ? this.renderCalorias() : <tr></tr>}
                                            </tbody>
                                          </table>
                                      </div>
                                    </AccordionItemBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionItemTitle>
                                      <h4>{this.props.recipes[2] ? this.props.recipes[2].nombre : ""}</h4>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                      <div className="table-wrapper">
                                          <table>
                                            <thead>
                                              <tr>
                                                <th>Ingrediente</th>
                                                <th>Cantidad</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {this.props.recipes[0] ? this.renderVitaminas() : <tr></tr>}
                                            </tbody>
                                          </table>
                                      </div>
                                    </AccordionItemBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionItemTitle>
                                      <h4>{this.props.recipes[3] ? this.props.recipes[3].nombre : ""}</h4>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                      <div className="table-wrapper">
                                          <table>
                                            <thead>
                                              <tr>
                                                <th>Ingrediente</th>
                                                <th>Cantidad</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.recipes[0] ? this.renderBalanceada() : <tr></tr>}
                                            </tbody>
                                          </table>
                                      </div>
                                    </AccordionItemBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionItemTitle>
                                      <h4>{this.props.recipes[4] ? this.props.recipes[4].nombre : ""}</h4>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                      <div className="table-wrapper">
                                          <table>
                                            <thead>
                                              <tr>
                                                <th>Ingrediente</th>
                                                <th>Cantidad</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {this.props.recipes[0] ? this.renderVariada() : <tr></tr>}
                                            </tbody>
                                          </table>
                                      </div>
                                    </AccordionItemBody>
                                  </AccordionItem>
                                  <AccordionItem>
                                    <AccordionItemTitle>
                                      <h4>{this.props.recipes[5] ? this.props.recipes[5].nombre : ""}</h4>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                      <div className="table-wrapper">
                                          <table>
                                            <thead>
                                              <tr>
                                                <th>Ingrediente</th>
                                                <th>Cantidad</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {this.props.recipes[0] ? this.renderBasica() : <tr></tr>}
                                            </tbody>
                                          </table>
                                      </div>
                                    </AccordionItemBody>
                                  </AccordionItem>
                                </Accordion>
                               <br/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Recipes;
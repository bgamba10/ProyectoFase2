import React, {Component} from "react";

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
                    <td><input className="form-control text-center"
                               onChange={this.handleInputChangeQuantity} name={`${recipe.nombre}`}
                               min="0" required="" type="number" defaultValue={recipe.cantidad}/>
                    </td>
                </tr>
            )
        })
    }

    renderRecipes() {
        return this.names.map((ingredient) => {
            return (
                <tr key={ingredient}>
                    <td className="first-row">{ingredient}</td>
                    <td><input className="form-control text-center"
                               onChange={this.handleInputChange} name={`${ingredient},${this.props.recipes[0].nombre}`}
                               min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[0][ingredient]}/>
                    </td>
                    <td><input className="form-control text-center"
                               onChange={this.handleInputChange} name={`${ingredient},${this.props.recipes[1].nombre}`}
                               min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[1][ingredient]}/>
                    </td>
                    <td><input className="form-control text-center"
                               onChange={this.handleInputChange} name={`${ingredient},${this.props.recipes[2].nombre}`}
                               min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[2][ingredient]}/>
                    </td>
                    <td><input className="form-control text-center"
                               onChange={this.handleInputChange} name={`${ingredient},${this.props.recipes[3].nombre}`}
                               min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[3][ingredient]}/>
                    </td>
                    <td><input className="form-control text-center"
                               onChange={this.handleInputChange} name={`${ingredient},${this.props.recipes[4].nombre}`}
                               min="0"
                               required="" type="number" step="0.1" defaultValue={this.props.recipes[4][ingredient]}/>
                    </td>
                    <td><input onChange={this.handleInputChange} className="form-control text-center"
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


                
                <div className="card">
                    <div className="content">
                        <div className="card-header ">
                            <h4 className="card-title">Insumos requeridos por receta</h4>
                        </div>
                        <div className="card-body ">
                            <table className="table table-bordered">
                                <tbody>
                                <tr>
                                    <th></th>
                                    <th colSpan="6" scope="colgroup">Receta</th>
                                </tr>
                                <tr>
                                    <th>Insumo</th>
                                    <th>{this.props.recipes[0] ? this.props.recipes[0].nombre : ""}</th>
                                    <th>{this.props.recipes[1] ? this.props.recipes[1].nombre : ""}</th>
                                    <th>{this.props.recipes[2] ? this.props.recipes[2].nombre : ""}</th>
                                    <th>{this.props.recipes[3] ? this.props.recipes[3].nombre : ""}</th>
                                    <th>{this.props.recipes[4] ? this.props.recipes[4].nombre : ""}</th>
                                    <th>{this.props.recipes[5] ? this.props.recipes[5].nombre : ""}</th>
                                </tr>
                                {this.props.recipes[0] ? this.renderRecipes() : <tr></tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipes;
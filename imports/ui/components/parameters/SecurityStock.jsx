import React, {Component} from "react";
import {Meteor} from "meteor/meteor";

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

    renderSecurityStocks() {
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${material.nombre},primero`} min="0"
                               max="100" required="" type="number" defaultValue={material.ss.primero}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${material.nombre},segundo`} min="0"
                               max="100" required="" type="number" defaultValue={material.ss.segundo}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${material.nombre},tercero`} min="0"
                               max="100" required="" type="number" defaultValue={material.ss.tercero}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${material.nombre},cuarto`} min="0"
                               max="100" required="" type="number" defaultValue={material.ss.cuarto}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${material.nombre},quinto`} min="0"
                               max="100" required="" type="number" defaultValue={material.ss.quinto}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${material.nombre},sexto`} min="0"
                               max="100" required="" type="number" defaultValue={material.ss.sexto}/></td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="content">
                        <div className="card-header ">
                            <h4 className="card-title">Stock de Seguridad </h4>
                        </div>
                        <div className="card-body ">
                            <p>Ingrese los porcentajes de la demanda de cada producto para cada mes que se tendrán como
                                stock de seguridad. Ingrese un valor entre 0 y 100, en caso de ingresar un valor diferente
                                se guardará el último valor válido (ej. si se ingresa 200 se guardará 20).</p>
                            <table className="table table-bordered">
                                <tbody className="">
                                <tr>
                                    <th></th>
                                    <th colSpan="6" scope="colgroup">Mes</th>
                                </tr>
                                <tr>
                                    <th>Nombre</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>6</th>
                                </tr>
                                {this.renderSecurityStocks()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SecurityStock;
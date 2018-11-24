import React, {Component} from "react";

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

    renderCostsLeadTime() {
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td className="first-row">{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},menos2`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.menos2}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},menos2`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.menos2}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},menos2`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.menos2}/></td>

                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},menos1`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.menos1}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},menos1`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.menos1}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},menos1`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.menos1}/></td>

                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},cero`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.cero}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},cero`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.cero}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},cero`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.cero}/></td>
                </tr>
            )
        });
    }

    renderCostsFirst() {
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td className="first-row">{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},primero`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.primero}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},primero`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.primero}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},primero`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.primero}/></td>

                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},segundo`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.segundo}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},segundo`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.segundo}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},segundo`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.segundo}/></td>

                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},tercero`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.tercero}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},tercero`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.tercero}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},tercero`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.tercero}/></td>
                </tr>
            )
        });
    }

    renderCostsSecond() {
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td className="first-row">{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},cuarto`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.cuarto}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},cuarto`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.cuarto}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},cuarto`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.cuarto}/></td>

                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},quinto`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.quinto}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},quinto`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.quinto}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},quinto`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.quinto}/></td>

                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`ordenar,${material.nombre},sexto`} min="0" required="" type="number"
                               defaultValue={material.costos.ordenar.sexto}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`adquirir,${material.nombre},sexto`} min="0" required="" type="number"
                               defaultValue={material.costos.adquirir.sexto}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`mantener,${material.nombre},sexto`} min="0" required="" type="number"
                               defaultValue={material.costos.mantener.sexto}/></td>
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
                            <h4 className="card-title">Estructura de costos</h4>
                        </div>
                        <div className="card-body ">
                            <table className="table table-bordered">
                                <tbody className="">
                                <tr>
                                    <th></th>
                                    <th colSpan="9" scope="colgroup">Mes</th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th colSpan="3" scope="colgroup">-2</th>
                                    <th colSpan="3" scope="colgroup">-1</th>
                                    <th colSpan="3" scope="colgroup">0</th>
                                </tr>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Ordenar</th>
                                    <th>Adquirir</th>
                                    <th>Mantener</th>
                                    <th>Ordenar</th>
                                    <th>Adquirir</th>
                                    <th>Mantener</th>
                                    <th>Ordenar</th>
                                    <th>Adquirir</th>
                                    <th>Mantener</th>
                                </tr>
                                {this.renderCostsLeadTime()}
                                </tbody>
                            </table>
                            <table className="table table-bordered">
                                <tbody className="">
                                <tr>
                                    <th></th>
                                    <th colSpan="9" scope="colgroup">Mes</th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th colSpan="3" scope="colgroup">1</th>
                                    <th colSpan="3" scope="colgroup">2</th>
                                    <th colSpan="3" scope="colgroup">3</th>
                                </tr>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Ordenar</th>
                                    <th>Adquirir</th>
                                    <th>Mantener</th>
                                    <th>Ordenar</th>
                                    <th>Adquirir</th>
                                    <th>Mantener</th>
                                    <th>Ordenar</th>
                                    <th>Adquirir</th>
                                    <th>Mantener</th>
                                </tr>
                                {this.renderCostsFirst()}
                                </tbody>
                            </table>
                            <table className="table table-bordered">
                                <tbody className="">
                                <tr>
                                    <th></th>
                                    <th colSpan="9" scope="colgroup">Mes</th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th colSpan="3" scope="colgroup">4</th>
                                    <th colSpan="3" scope="colgroup">5</th>
                                    <th colSpan="3" scope="colgroup">6</th>
                                </tr>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Ordenar</th>
                                    <th>Adquirir</th>
                                    <th>Mantener</th>
                                    <th>Ordenar</th>
                                    <th>Adquirir</th>
                                    <th>Mantener</th>
                                    <th>Ordenar</th>
                                    <th>Adquirir</th>
                                    <th>Mantener</th>
                                </tr>
                                {this.renderCostsSecond()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Costs;
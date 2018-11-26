import React, {Component} from "react";

class Demand extends Component {

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
        const period = parts[1]
        
        try {
            const v = parseInt(value)
            if (v>=0){
                Meteor.call("demand.update",type,period,value)
            }
        }
        catch (e) {

        }
        
    }

    renderDemand() {
        return this.props.demand.map((d) => {
            return (
                <tr key={d._id}>
                    <td>{d.tipo}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${d.tipo},primero`} min="0" required="" type="number"
                               defaultValue={d.demanda.primero}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${d.tipo},segundo`} min="0" required="" type="number"
                               defaultValue={d.demanda.segundo}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${d.tipo},tercero`} min="0" required="" type="number"
                               defaultValue={d.demanda.tercero}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${d.tipo},cuarto`} min="0" required="" type="number"
                               defaultValue={d.demanda.cuarto}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${d.tipo},quinto`} min="0" required="" type="number"
                               defaultValue={d.demanda.quinto}/></td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={`${d.tipo},sexto`} min="0" required="" type="number"
                               defaultValue={d.demanda.sexto}/></td>
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
                            <h4 className="card-title">Demanda por tipo de cirugía para los próximos 6 meses</h4>
                        </div>
                        <div className="card-body ">
                            <table className="table table-bordered">
                                <tbody>
                                <tr>
                                    <th></th>
                                    <th colSpan="6" scope="colgroup">Mes</th>
                                </tr>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Enero</th>
                                    <th>Febrero</th>
                                    <th>Marzo</th>
                                    <th>Abril</th>
                                    <th>Mayo</th>
                                    <th>Junio</th>
                                </tr>
                                {this.props.demand[0]?this.renderDemand():<tr></tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Demand;
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
            <div>

                <section className="wrapper style1">
                    <div className="container">
                        <header className="major special">
                            <h2>Demanda Cirugías</h2>
                            <p>Ingrese la demanda para cada mes para cada tipo de cirugía</p>
                        </header>
                        <table>
                                <thead>
                                
                                <tr>
                                    <th></th>
                                    <th>Enero</th>
                                    <th>Febrero</th>
                                    <th>Marzo</th>
                                    <th>Abril</th>
                                    <th>Mayo</th>
                                    <th>Junio</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.demand[0]?this.renderDemand():<tr></tr>}
                                </tbody>
                            </table>
                           
                    </div>
                </section>

            </div>
        );
    }
}

export default Demand;
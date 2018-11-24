import React, {Component} from "react";

class LeadTimes extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const material = target.name;
        try {
            const v = parseInt(value)
            if (v>=0){
                Meteor.call("materials.updateLT", material, value)
            }
        }
        catch (e) {

        }
    }

    renderLeadTimes() {
        return this.props.materials.map((material) => {
            return (
                <tr key={material._id}>
                    <td>{material.nombre}</td>
                    <td><input className="form-control text-center" onChange={this.handleInputChange}
                               name={material.nombre} min="0" required=""
                               type="range" list="tickmarks" step="1" min="0" max="2" defaultValue={material.leadtime}/></td>
                    <td>{material.leadtime} meses</td>
                </tr>
            )
        });
    }

    render() {
        {
            this.renderLeadTimes()
        }
        return (
            <section id="one" class="wrapper style1">
                <div className="container">
                    <div className="row 200%">
                        <div className="6u 12u$(medium)">
                                <header className="major">
                                    <h2>Lead Times</h2>
                                    <p>Ingrese el Lead Time de cada uno de los ingredientes</p>
                                    <br/>
                                    <img src="https://images.pexels.com/photos/1020323/pexels-photo-1020323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%"/>
                                </header>
                        </div>
                        <div className="6u$ 12u$(medium)">
                            <table>
                                <thead>
                                <tr>
                                    <th>Ingrediente</th>
                                    <th>Lead Time</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.renderLeadTimes()}
                                </tbody>
                            </table>
                            <datalist id="tickmarks">
                               <option value="0" label="0"/>
                               <option value="1" label="1"/>
                               <option value="2" label="2"/>
                            </datalist>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LeadTimes;
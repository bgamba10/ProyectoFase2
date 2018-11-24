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
                               type="number" defaultValue={material.leadtime}/></td>
                </tr>
            )
        });
    }

    render() {
        {
            this.renderLeadTimes()
        }
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="content">
                        <div className="card-header ">
                            <h4 className="card-title">Lead Times</h4>
                        </div>
                        <div className="card-body ">
                            <table className="table table-bordered">
                                <tbody className="">
                                <tr>
                                    <th>Nombre del insumo</th>
                                    <th>Lead Time (meses)</th>
                                </tr>
                                {this.renderLeadTimes()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeadTimes;
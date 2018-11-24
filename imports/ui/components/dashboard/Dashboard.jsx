import React, {Component} from "react";
import Description from "./Description";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container-fluid">
                <Description demand={this.props.demand} materials={this.props.materials} recipes={this.props.recipes} colorear={[]}/>
            </div>
        );
    }
}

export default Dashboard;
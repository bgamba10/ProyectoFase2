import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';


import Navbar from "./components/layout/Navbar";

import {Demand} from "../api/demand.js";
import {Materials} from "../api/materials.js";
import {Recipes} from "../api/recipes.js";

class App extends Component {

    render() {
        return (
            <Navbar demand={this.props.demand} materials={this.props.materials} recipes={this.props.recipes} dataReady={this.props.dataReady}/>
        );
    }
}

export default withTracker(() => {
    let ready = [
        Meteor.subscribe("Demand").ready(),
        Meteor.subscribe("Materials").ready(),
        Meteor.subscribe("Recipes").ready()
    ]

    return {
        demand: Demand.find({}).fetch(),
        materials: Materials.find({}).fetch(),
        recipes: Recipes.find({}).fetch(),
        dataReady: ready
    };
})(App);

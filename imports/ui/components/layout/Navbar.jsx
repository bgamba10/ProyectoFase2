import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

import Dashboard from "../dashboard/Dashboard";
import Footer from "./Footer";
import Demand from "../parameters/Demand";
import SecurityStock from "../parameters/SecurityStock";
import LeadTimes from "../parameters/LeadTimes";
import Costs from "../parameters/Costs";
import Recipes from "../parameters/Recipes";


class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        if (this.props.dataReady[0]&&this.props.dataReady[1]&&this.props.dataReady[2]){
            if (!this.props.materials[0]){
                Meteor.call("demand.initialInsert")
                Meteor.call("recipes.initialInsert")
                Meteor.call("materials.initialInsert")
            }
        }
    }


    render() {
        return (
            <Router>
                <div className="wrapper">
                    <header id="header">
                        <h1>Cafetería</h1>
                        <nav id="nav">
                            
                            <ul>
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/">
                                        
                                        Planeación
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/demanda">
                                        
                                        Cirugías
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/recetas">
                                        
                                        Recetas
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/ss">
                                        
                                        Security Stock
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/leadtimes">
                                        Lead Times
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/costos">
                                        
                                        Costos
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className="main-panel" >
                        
                        <div className="container">
                            <Switch>
                                <Route exact path="/"
                                       render={(props) => <Dashboard {...props} demand={this.props.demand} materials={this.props.materials} recipes={this.props.recipes}/>}/>
                                <Route exact path="/demanda"
                                       render={(props) => <Demand {...props} demand={this.props.demand}/>}/>
                                <Route exact path="/recetas"
                                       render={(props) => <Recipes {...props} recipes={this.props.recipes}/>}/>
                                <Route exact path="/ss"
                                       render={(props) => <SecurityStock {...props} materials={this.props.materials}/>}/>
                                <Route exact path="/leadtimes"
                                       render={(props) => <LeadTimes {...props} materials={this.props.materials}/>}/>
                                <Route exact path="/costos"
                                       render={(props) => <Costs {...props} materials={this.props.materials}/>}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </div>

                </div>
            </Router>
        );
    }
}

export default Navbar;
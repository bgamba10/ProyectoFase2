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
                    <div className="sidebar">
                        <div className="sidebar-wrapper">
                            <div className="text-center">
                                <img className="logo" src="images/logo.png" alt="Logo"/>

                            </div>
                            <ul className="nav">
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/">
                                        <i className="far fa-calendar-alt"></i>
                                        <p>Programación</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/demanda">
                                        <i className="fas fa-chart-line"></i>
                                        <p>Demanda Cirugías</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/recetas">
                                        <i className="fas fa-utensils"></i>
                                        <p>Recetas</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/ss">
                                        <i className="fas fa-warehouse"></i>
                                        <p>Stock de Seguridad</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/leadtimes">
                                        <i className="far fa-clock"></i>
                                        <p>Lead Times</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/costos">
                                        <i className="fas fa-dollar-sign"></i>
                                        <p>Costos</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-panel">
                        <nav className="navbar navbar-expand-lg " color-on-scroll="500">
                            <div className=" container-fluid">
                                <h4 className="card-category dark-blue"><strong>Heurísticas</strong></h4>
                                <button className="navbar-toggler navbar-toggler-right" type="button"
                                        data-toggle="collapse" data-target="#navbarNav" aria-controls="navigation-index"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-bar burger-lines"></span>
                                    <span className="navbar-toggler-bar burger-lines"></span>
                                    <span className="navbar-toggler-bar burger-lines"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <NavLink activeClassName="active-link" exact className="nav-link"
                                                     to="/">
                                                <p>Programación</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink activeClassName="active-link" exact className="nav-link"
                                                     to="/demanda">
                                                <p>Demanda Cirugías</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink activeClassName="active-link" exact className="nav-link"
                                                     to="/recetas">
                                                <p>Recetas</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink activeClassName="active-link" exact className="nav-link"
                                                     to="/ss">
                                                <p>Stock de Seguridad</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink activeClassName="active-link" exact className="nav-link"
                                                     to="/leadtimes">
                                                <p>Lead Times</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink activeClassName="active-link" exact className="nav-link"
                                                     to="/costos">
                                                <p>Costos</p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="content">
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
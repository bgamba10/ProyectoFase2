import React, { Component } from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export default class Demanda extends Component {
  

  constructor(props) {
      super(props);
      this.state = {
        Esteticas: [0,0,0,0,0,0],
        Cardiacas: [0,0,0,0,0,0],
        Respiratorias: [0,0,0,0,0,0],
        Ortopedicas: [0,0,0,0,0,0],
        Neurologicas: [0,0,0,0,0,0],
        Pediatricas: [0,0,0,0,0,0]
            
      }
      this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    
    const value = event.target.value;
    const name = event.target.name;

    

    this.setState({

      [name]: value
    });

    let res = name.split("-");
    let n = res[0];
    let v = res[1];

    let posicion = 0;

    switch (n) {
        case "enero":
          posicion = 0;
                
            break;
        case "febrero":
          posicion = 1;
            
            break;
        case "marzo":
          posicion = 2;
            
            break;
        case "abril":
          posicion = 3;
            
            break;
        case "mayo":
          posicion = 4;
            
            break;
        case "junio":
          posicion = 5;

        default: 
                
    }

    switch (v) {
      case "Esteticas":
        let temp0 = this.state.Esteticas;
        temp0[posicion] = value;
        this.setState({
          Esteticas: temp0
        });
        this.props.onUpdate("Esteticas",temp0);
        break;
      case "Cardiacas":

        let temp1 = this.state.Cardiacas;
        temp1[posicion] = value;
        
        this.setState({
          Cardiacas: temp1
        });
        this.props.onUpdate("Cardiacas",temp1);
        break;
      case "Respiratorias":
        let temp2 = this.state.Respiratorias;
        temp2[posicion] = value;
        this.setState({
          Respiratorias: temp2
        });
        this.props.onUpdate("Respiratorias",temp2);
          break;
      case "Ortopedicas":
        let temp3 = this.state.Ortopedicas;
        temp3[posicion] = value;
        this.setState({
          Ortopedicas: temp3
        });
        this.props.onUpdate("Ortopedicas",temp3);       
        break;
      case "Neurologicas":
        let temp4 = this.state.Neurologicas;
        temp4[posicion] = value;
        this.setState({
          Neurologicas: temp4
        });
        this.props.onUpdate("Neurologicas",temp4);         
        break;
      case "Pediatricas":
        let temp5 = this.state.Pediatricas;
        temp5[posicion] = value;
        this.setState({
          Pediatricas: temp5
        });
        this.props.onUpdate("Pediatricas",temp5);
      default:
        
    }

  }

  getCirugias() {
     return [
     
       {_id: "Esteticas", text: "Estéticas", q:0},
       {_id: "Cardiacas", text: "Cardiacas", q:0},
       {_id: "Respiratorias", text: "Respiratorias", q:0},
       {_id: "Ortopedicas", text: "Ortopédicas", q:0},
       {_id: "Neurologicas", text: "Neurológicas", q:0},
       {_id: "Pediatricas", text: "Pediátricas", q:0}

     ];
   }


  renderCirugiasEnero(){

    return this.getCirugias().map((cir) => (

      <div key={cir._id} className="col-sm-2">
        <h6>{cir.text}</h6>
          <div>
            <input name={"enero-"+cir._id} defaultValue={cir.q} onChange={this.handleInputChange} type="number" className="form-control" placeholder="Cirugías" min="0"/>
          </div>
      </div>
    ));
  }

  renderCirugiasFebrero(){

    return this.getCirugias().map((cir) => (

      <div key={cir._id} className="col-sm-2">
        <h6>{cir.text}</h6>
          <div>
            <input name={"febrero-"+cir._id} defaultValue={cir.q} onChange={this.handleInputChange} type="number" className="form-control" placeholder="Cirugías" min="0"/>
          </div>
      </div>
    ));
  }

  renderCirugiasMarzo(){

    return this.getCirugias().map((cir) => (

      <div key={cir._id} className="col-sm-2">
        <h6>{cir.text}</h6>
          <div>
            <input name={"marzo-"+cir._id} defaultValue={cir.q} onChange={this.handleInputChange} type="number" className="form-control" placeholder="Cirugías" min="0"/>
          </div>
      </div>
    ));
  }

  renderCirugiasAbril(){

    return this.getCirugias().map((cir) => (

      <div key={cir._id} className="col-sm-2">
        <h6>{cir.text}</h6>
          <div>
            <input name={"abril-"+cir._id} defaultValue={cir.q} onChange={this.handleInputChange} type="number" className="form-control" placeholder="Cirugías" min="0"/>
          </div>
      </div>
    ));
  }

  renderCirugiasMayo(){

    return this.getCirugias().map((cir) => (

      <div key={cir._id} className="col-sm-2">
        <h6>{cir.text}</h6>
          <div>
            <input name={"mayo-"+cir._id} defaultValue={cir.q} onChange={this.handleInputChange} type="number" className="form-control" placeholder="Cirugías" min="0"/>
          </div>
      </div>
    ));
  }

  renderCirugiasJunio(){

    return this.getCirugias().map((cir) => (

      <div key={cir._id} className="col-sm-2">
        <h6>{cir.text}</h6>
          <div>
            <input name={"junio-"+cir._id} defaultValue={cir.q} onChange={this.handleInputChange} type="number" className="form-control" placeholder="Cirugías" min="0"/>
          </div>
      </div>
    ));
  }

  render() {
    return (
<div>
      <h2>Demanda mensual por cirugía</h2>
      <Accordion>
        <AccordionItem>
            <AccordionItemTitle>
                <h4>Enero</h4>
            </AccordionItemTitle>
            <AccordionItemBody>
                <div>
                <div className="row">
                  
                  {this.renderCirugiasEnero()}

                </div>

                </div>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h4>Febrero</h4>
            </AccordionItemTitle>
            <AccordionItemBody>
                <div>
                <div className="row">
                  
                  {this.renderCirugiasFebrero()}

                </div>

                </div>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h4>Marzo</h4>
            </AccordionItemTitle>
            <AccordionItemBody>
                <div>
                <div className="row">
                  
                  {this.renderCirugiasMarzo()}

                </div>

                </div>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h4>Abril</h4>
            </AccordionItemTitle>
            <AccordionItemBody>
                <div>
                <div className="row">
                  
                  {this.renderCirugiasAbril()}

                </div>

                </div>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h4>Mayo</h4>
            </AccordionItemTitle>
            <AccordionItemBody>
                <div>
                <div className="row">
                  
                  {this.renderCirugiasMayo()}

                </div>

                </div>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h4>Junio</h4>
            </AccordionItemTitle>
            <AccordionItemBody>
                <div>
                <div className="row">
                  
                  {this.renderCirugiasJunio()}

                </div>

                </div>
            </AccordionItemBody>
        </AccordionItem>
    </Accordion>

    </div>
    );
  }
}

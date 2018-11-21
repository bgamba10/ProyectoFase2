import React, { Component } from 'react';

export default class Costos extends Component {


  constructor(props) {
      super(props);
      this.state = {
          costoFijoPedido: 23000,
          tasaMantener: 15
      }

      this.updateInputValueCosto = this.updateInputValueCosto.bind(this);
      this.updateInputValueTasa = this.updateInputValueTasa.bind(this);
  }

  componentDidMount(){
    console.log("COMPONENT DID MOUNT")
    this.setState({
        costoFijoPedido: 23000,
        tasaMantener: 15
    })
  }

    updateInputValueCosto(evt) {
      console.log("UPDATE")
    this.props.onUpdate("costoFijoPedido",evt.target.value);
    this.setState({
      costoFijoPedido: evt.target.value
    });
  }

  updateInputValueTasa(evt) {
    console.log("UPDATE")
    this.props.onUpdate("tasaMantener",evt.target.value);
    this.setState({
      tasaMantener: evt.target.value
    });
  }

  render() {
    return (
      <div>

        <h3>Estrucutra de Costos</h3>

        <span>Costo fijo de pedido ($/pedido)
        <input id="costoFijoPedido" value={this.state.costoFijoPedido} onChange={evt => this.updateInputValueCosto(evt)} type="number" className="form-control"  />
        </span>

        <br/>

        <span>Tasa de mantener una unidad en inventario (%/und-mes)
        <input id="tasaMantener" value={this.state.tasaMantener} onChange={evt => this.updateInputValueTasa(evt)} type="number" max="100" className="form-control"  />
        </span>

      </div>
    );
  }
}

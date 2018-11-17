import React, { Component } from 'react';

export default class Costos extends Component {
  

  constructor(props) {
      super(props);
      this.state = {
          costoFijoPedido: 0,
          tasaMantener: 0
      }
        
  }

    updateInputValueCosto(evt) {
    this.setState({
      costoFijoPedido: evt.target.value
    });
  }

  updateInputValueTasa(evt) {
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

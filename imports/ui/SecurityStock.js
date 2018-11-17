import React, { Component } from 'react';

export default class SecurityStock extends Component {
  

  constructor(props) {
      super(props);
      this.state = {
        ssEnero: 0,
        ssFebrero: 0,
        ssMarzo: 0,
        ssAbril: 0,
        ssMayo: 0,
        ssJunio: 0
            
      }
        
  }

  updateInputValueEnero(evt) {

    this.props.onUpdate("ssEnero",evt.target.value);
    this.setState({
      ssEnero: evt.target.value
    });
  }

  updateInputValueFebrero(evt) {
    this.props.onUpdate("ssFebrero",evt.target.value);
    this.setState({
      ssFebrero: evt.target.value
    });
  }

  updateInputValueMarzo(evt) {
    this.props.onUpdate("ssMarzo",evt.target.value);
    this.setState({
      ssMarzo: evt.target.value
    });
  }

  updateInputValueAbril(evt) {
    this.props.onUpdate("ssAbril",evt.target.value);
    this.setState({
      ssAbril: evt.target.value
    });
  }

  updateInputValueMayo(evt) {
    this.props.onUpdate("ssMayo",evt.target.value);
    this.setState({
      ssMayo: evt.target.value
    });
  }

  updateInputValueJunio(evt) {
    this.props.onUpdate("ssJunio",evt.target.value);
    this.setState({
      ssJunio: evt.target.value
    });
  }

  render() {
    return (

      <div>

        <h3>Security Stock</h3>

<div className="card">
  <div className="card-body">
        <h5 className="card-title">Enero</h5>
        <input id="ssEnero" value={this.state.ssEnero} onChange={evt => this.updateInputValueEnero(evt)} type="range" list="tickmarks" step="5" min="0" max="100" className="form-control"/>
        <p>{this.state.ssEnero} %</p>
        
</div>
</div>
<br/>
<div className="card">
  <div className="card-body">
        <h5 className="card-title">Febrero</h5>
        <input id="ssFebrero" value={this.state.ssFebrero} onChange={evt => this.updateInputValueFebrero(evt)} type="range" list="tickmarks" step="5" min="0" max="100" className="form-control"/>
        <p>{this.state.ssFebrero} %</p>
        
</div>
</div>
<br/>
<div className="card">
  <div className="card-body">
        <h5 className="card-title">Marzo</h5>
        <input id="ssMarzo" value={this.state.ssMarzo} onChange={evt => this.updateInputValueMarzo(evt)} type="range" list="tickmarks" step="5" min="0" max="100" className="form-control"/>
        <p>{this.state.ssMarzo} %</p>
        
</div>
</div>
<br/>
<div className="card">
  <div className="card-body">
        <h5 className="card-title">Abril</h5>
        <input className="custom-range" id="ssAbril" value={this.state.ssAbril} onChange={evt => this.updateInputValueAbril(evt)} type="range" list="tickmarks" step="5" min="0" max="100" className="form-control"/>
        <p>{this.state.ssAbril} %</p>
        
</div>
</div>
<br/>
<div className="card">
  <div className="card-body">
        <h5 className="card-title">Mayo</h5>
        <input id="ssMayo" value={this.state.ssMayo} onChange={evt => this.updateInputValueMayo(evt)} type="range" list="tickmarks" step="5" min="0" max="100" className="form-control"/>
        <p>{this.state.ssMayo} %</p>
        
</div>
</div>
<br/>
<div className="card">
  <div className="card-body">
        <h5 className="card-title">Junio</h5>
        <input id="ssJunio" value={this.state.ssJunio} onChange={evt => this.updateInputValueJunio(evt)} type="range" list="tickmarks" step="5" min="0" max="100" className="form-control"/>
        <p>{this.state.ssJunio} %</p>
        
</div>
</div>
        <datalist id="tickmarks">
          <option value="0" label="0%"/>
          <option value="10"/>
          <option value="20"/>
          <option value="30"/>
          <option value="40"/>
          <option value="50" label="50%"/>
          <option value="60"/>
          <option value="70"/>
          <option value="80"/>
          <option value="90"/>
          <option value="100" label="100%"/>
        </datalist>
        
      </div>
      
    );
  }
}

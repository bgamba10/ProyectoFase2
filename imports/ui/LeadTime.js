import React, { Component } from 'react';

export default class LeadTime extends Component {
  

  constructor(props) {
      super(props);
      this.state = {
        ltSopa: 0,
        cuSopa: 0,
        ltArroz: 0,
        cuArroz: 0,
        ltCarne: 0,
        cuCarne: 0,
        ltAgua: 0,
        cuAgua: 0,
        ltYogurt: 0,
        cuYogurt: 0,
        ltGelatina: 0,
        cuGelatina: 0,
        ltTomate: 0,
        cuTomate: 0,
        ltSalmon: 0,
        cuSalmon: 0,
        ltVerduras: 0,
        cuVerduras: 0,
        ltManzana: 0,
        cuManzana: 0,
        ltBrocoli: 0,
        cuBrocoli: 0,
        ltHuevo: 0,
        cuHuevo: 0,
        ltAguacate: 0,
        cuAguacate: 0,
        ltFrutosSecos: 0,
        cuFrutosSecos: 0,
        ltPasta: 0,
        cuPasta: 0,
        ltCereal: 0,
        cuCereal: 0,
        ltLeche: 0,
        cuLeche: 0,
        ltPollo: 0,
        cuPollo: 0,
        ltCompota: 0,
        cuCompota: 0
            
      }
        
      this.handleInputChange = this.handleInputChange.bind(this);
      
  }


  handleInputChange(event) {
    
    const value = event.target.value;
    const name = event.target.name;

    this.props.onUpdate(name,value);

    this.setState({
      [name]: value
    });

  }

  getIngredients() {
     return [
     
       {_id: "Sopa", text: "Sopa", und: "porción", q:0},
       {_id: "Arroz", text: "Arroz", und: "porción", q:0},
       {_id: "Carne", text: "Carne", und: "porción", q:0},
       {_id: "Agua", text: "Agua", und: "vaso", q:0},
       {_id: "Yogurt", text: "Yogurt Griego", und: "vaso", q:0},
       {_id: "Gelatina", text: "Gelatina", und: "porción", q:0},
       {_id: "Tomate", text: "Tomate", und: "unidad", q:0},
       {_id: "Salmon", text: "Salmón", und: "porción", q:0},
       {_id: "Verduras", text: "Verduras", und: "porción", q:0},
       {_id: "Manzana", text: "Manzana", und: "unidad", q:0},
       {_id: "Brocoli", text: "Brócoli", und: "porción", q:0},
       {_id: "Huevo", text: "Huevo", und: "unidad", q:0},
       {_id: "Aguacate", text: "Aguacate", und: "unidad", q:0},
       {_id: "FrutosSecos", text: "Frutos Secos", und: "porción", q:0},
       {_id: "Pasta", text: "Pasta", und: "porción", q:0},
       {_id: "Cereal", text: "Cereal", und: "porción", q:0},
       {_id: "Leche", text: "Leche", und: "vaso", q:0},
       {_id: "Pollo", text: "Pollo", und: "porción", q:0},
       {_id: "Compota", text: "Compota de frutas", und: "porción", q:0}

     ];
   }

  renderIngredients(){

    return this.getIngredients().map((ing) => (


<div key={ing._id} className="col-sm-6">
<div className="card">
  <div className="card-body" >
        <h5 className="card-title">{ing.text}</h5>
        <div className="row">
          <div className="col-sm-6">

            <input name={"lt"+ing._id} value={this.state["lt"+ing._id]} onChange={this.handleInputChange} type="number" className="form-control" placeholder="Lead Time" min="0" /><span> meses</span>
          </div>
          <div className="col-sm-6">
            <input name={"cu"+ing._id} defaultValue={ing.q} onChange={this.handleInputChange} type="number" className="form-control" placeholder="Costo Unitario" min="0"/><span> $/{ing.und}</span>
          </div>
          </div>
        
      </div>
      </div>
    <br/>
</div>


    ));


    

  }

  render() {
    return (
      <div>

        <h3>Lead Times y Costos Unitarios</h3>

       <div className="row">
        {this.renderIngredients()}
      </div>

      </div>
    );
  }
}

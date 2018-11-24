import React, { Component } from "react";

class Description extends Component {

    constructor(props) {
        super(props);

        this.state = {
            politica: "MCU",
            insumo: "Sopa",
            colorear: []
        }

        this.handleMCU = this.handleMCU.bind(this);
        this.handlePPB = this.handlePPB.bind(this);
        this.handleSM = this.handleSM.bind(this);
        this.onChangeDropdown = this.onChangeDropdown.bind(this);
        this.calcularDemandas = this.calcularDemandas.bind(this);
        this.calcularSS = this.calcularSS.bind(this);
        this.obtenerCostosAdquirir = this.obtenerCostosAdquirir.bind(this);
        this.obtenerCostosPedir = this.obtenerCostosPedir.bind(this);
        this.obtenerLeadTime = this.obtenerLeadTime.bind(this);
    }

    handleMCU() {
        this.setState({ politica: "MCU" });
    }

    handlePPB() {
        this.setState({ politica: "PPB" });
    }

    handleSM() {
        this.setState({ politica: "SM" });
    }

    onChangeDropdown(e) {
        this.setState({ insumo: e.target.value });
    }

    renderResults() {

        let resultado = this.calcularResultados();



        return resultado.map((resp, i) => {
            return (
                <tr className={this.props.colorear.includes(parseInt(resp.split("$")[0])) ? "resaltado" : ""} key={i}>
                    <td>{resp.split("$")[1]}</td>
                    <td>{resp.split("$")[2]}</td>
                    <td>{resp.split("$")[3]}</td>
                    <td>{resp.split("$")[4]}</td>
                    <td>{Math.ceil(resp.split("$")[5])}</td>
                    <td>{Math.ceil(resp.split("$")[6])}</td>
                    <td>{Math.ceil(resp.split("$")[7])}</td>
                    <td>{Math.ceil(resp.split("$")[8])}</td>
                </tr>
            )
        });
    }

    calcularResultados() {
        let demandas = this.calcularDemandas(),
            ss = this.calcularSS(),
            costosAdquirir = this.obtenerCostosAdquirir(),
            costosMantener = this.obtenerCostosMantener(),
            costosPedir = this.obtenerCostosPedir(),
            leadTime = this.obtenerLeadTime(),
            resultado = [],
            periodosActuales = [],
            cantidadMaximaDeLeadTime = 3,
            numPeriodos = 6,
            indice = 0;

        this.props.colorear.length = 0;
        let requerimientosNetos = this.calcularRequerimientosNetos(demandas, ss);

        let i = 0;
        while (i < numPeriodos) {

            periodosActuales.push(i);

            let cantidadAPedir = this.calcularCantidadAPedir(requerimientosNetos, periodosActuales);
            //Costos
            let costoAdquirir = this.calcularCostoAdquirir(cantidadAPedir, costosAdquirir[Math.abs(i - leadTime)]);
            let costoMantener = this.calcularCostoMantener(demandas, requerimientosNetos, ss, costosMantener, leadTime, periodosActuales);
            let costoPedir = costosPedir[cantidadMaximaDeLeadTime + i - leadTime];
            let costoTotal = costoAdquirir + costoMantener + costoPedir;

            let resultadoAAnadir = indice + "$" + (periodosActuales[0] + 1) + "$" + this.imprimirPeriodosActuales(periodosActuales) +
                "$" + cantidadAPedir + "$" + (periodosActuales[0] + 1 - leadTime) + "$" + costoPedir + "$" + costoAdquirir
                + "$" + costoMantener + "$" + costoTotal;

            resultado.push(resultadoAAnadir);

            if (periodosActuales.length > 1) {

                let resultadoAnterior = resultado[ resultado.length - 2];

                if (this.state.politica === "MCU") {
                    let cantidadAPedirPeriodoAnterior = resultadoAnterior.split("$")[2];
                    let costoTotalPeriodoAnterior = resultadoAnterior.split("$")[8];
                    if (costoTotal / cantidadAPedir > costoTotalPeriodoAnterior / cantidadAPedirPeriodoAnterior) {
                        this.props.colorear.push(indice - 1);
                        periodosActuales = [];
                        i--;
                    }
                }
                else if (this.state.politica === "PPB") {
                    let costoPedirPeriodoAnterior = resultadoAnterior.split("$")[5];
                    let costoMantenerPeriodoAnterior = resultadoAnterior.split("$")[7];
                    if (Math.abs(costoPedir - costoMantener) > Math.abs(costoPedirPeriodoAnterior - costoMantenerPeriodoAnterior)) {
                        periodosActuales = [];
                        this.props.colorear.push(indice - 1);
                        i--;
                    }
                }
                else if (this.state.politica === "SM") {
                    let costoTotalPeriodoAnterior = resultadoAnterior.split("$")[8];
                    if (costoTotal / (periodosActuales.length) > costoTotalPeriodoAnterior / (periodosActuales.length - 1)) {
                        this.props.colorear.push(indice - 1);
                        periodosActuales = [];
                        i--;
                    }
                }
            }
            indice++;
            i++;
        }
        this.props.colorear.push(indice - 1);

        return resultado;

    }

    //Demandas y ss son arreglos con los datos de los meses que me importan.
    calcularRequerimientosNetos(demandas, ss) {
        let requerimientosNetos = [];
        for (let i = 0; i < demandas.length; i++) {
            if (i === 0) {
                let rn = demandas[i] + Math.ceil(ss[i] * demandas[i]);
                if (rn > 0) {
                    requerimientosNetos.push(rn);
                }
                else {
                    requerimientosNetos.push(0);
                }

            }
            else {
                let rn = demandas[i] + Math.ceil(ss[i] * demandas[i]) - Math.ceil(ss[i - 1] * demandas[i - 1]);
                if (rn > 0) {
                    requerimientosNetos.push(rn);
                }
                else {
                    requerimientosNetos.push(0);
                }
            }
        }
        return requerimientosNetos;
    }

    //Requerimientos tiene que ser un Array y costoAdquirir tiene que ser un número.
    calcularCostoAdquirir(cantidadAPedir, costoAdquirir) {
        return cantidadAPedir * costoAdquirir;
    }

    calcularCantidadAPedir(requerimientosNetos, periodosActuales) {
        let cantidad = 0;

        periodosActuales.map((periodo) => {
            cantidad = cantidad + requerimientosNetos[periodo]
        })

        return cantidad;
    }

    //Requerimientos,ss,y costoMantener tienen que ser un Array y leadTime tiene que ser un número.
    //Solamente se pasa en requerimientos netos los periodos que quiero hacer
    calcularCostoMantener(demandas, requerimientosNetos, ss, costoMantener, leadTime, periodosActuales) {

        let costo = 0;

        for (let i = periodosActuales[0]; i < periodosActuales[periodosActuales.length - 1] + 1; i++) {
            let sumaRequerimientos = 0;
            for (let j = i + 1; j < periodosActuales.length; j++) {
                sumaRequerimientos = sumaRequerimientos + requerimientosNetos[j + leadTime];
            }
            costo = costo + (sumaRequerimientos + Math.ceil(ss[i + leadTime] * demandas[i + leadTime])) * costoMantener[i];
        }

        return costo;

    }

    calcularDemandas() {
        let demandas = this.props.demand;
        let recipes = this.props.recipes;
        let insumo = this.state.insumo;

        let demanda = [0, 0, 0, 0, 0, 0];

        demandas.map((demand) => {
            let tipoCirugia = demand.tipo;

            recipes.map((recipe) => {

                let tipoDieta = recipe.nombre;
                let platosRequeridos = recipe[insumo];
                let cantidadPorPlato = parseFloat(recipe.cantidad);

                if (tipoCirugia === "Estéticas" && tipoDieta === "Sana") {
                    demanda[0] = demanda[0] + parseFloat(demand.demanda.primero) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[1] = demanda[1] + parseFloat(demand.demanda.segundo) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[2] = demanda[2] + parseFloat(demand.demanda.tercero) * parseFloat(platosRequeridos) * cantidadPorPlato - 270;
                    demanda[3] = demanda[3] + parseFloat(demand.demanda.cuarto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[4] = demanda[4] + parseFloat(demand.demanda.quinto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[5] = demanda[5] + parseFloat(demand.demanda.sexto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                }
                else if (tipoCirugia === "Cardiacas" && tipoDieta === "Calorías y proteínas") {
                    demanda[0] = demanda[0] + parseFloat(demand.demanda.primero) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[1] = demanda[1] + parseFloat(demand.demanda.segundo) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[2] = demanda[2] + parseFloat(demand.demanda.tercero) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[3] = demanda[3] + parseFloat(demand.demanda.cuarto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[4] = demanda[4] + parseFloat(demand.demanda.quinto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[5] = demanda[5] + parseFloat(demand.demanda.sexto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                }
                else if (tipoCirugia === "Respiratorias" && tipoDieta === "Vitaminas y proteínas") {
                    demanda[0] = demanda[0] + parseFloat(demand.demanda.primero) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[1] = demanda[1] + parseFloat(demand.demanda.segundo) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[2] = demanda[2] + parseFloat(demand.demanda.tercero) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[3] = demanda[3] + parseFloat(demand.demanda.cuarto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[4] = demanda[4] + parseFloat(demand.demanda.quinto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[5] = demanda[5] + parseFloat(demand.demanda.sexto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                }
                else if (tipoCirugia === "Ortopédicas" && tipoDieta === "Balanceada") {
                    demanda[0] = demanda[0] + parseFloat(demand.demanda.primero) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[1] = demanda[1] + parseFloat(demand.demanda.segundo) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[2] = demanda[2] + parseFloat(demand.demanda.tercero) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[3] = demanda[3] + parseFloat(demand.demanda.cuarto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[4] = demanda[4] + parseFloat(demand.demanda.quinto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[5] = demanda[5] + parseFloat(demand.demanda.sexto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                }
                else if (tipoCirugia === "Neurológica" && tipoDieta === "Variada") {
                    demanda[0] = demanda[0] + parseFloat(demand.demanda.primero) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[1] = demanda[1] + parseFloat(demand.demanda.segundo) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[2] = demanda[2] + parseFloat(demand.demanda.tercero) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[3] = demanda[3] + parseFloat(demand.demanda.cuarto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[4] = demanda[4] + parseFloat(demand.demanda.quinto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[5] = demanda[5] + parseFloat(demand.demanda.sexto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                }
                else if (tipoCirugia === "Pediátricas" && tipoDieta === "Básica") {
                    demanda[0] = demanda[0] + parseFloat(demand.demanda.primero) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[1] = demanda[1] + parseFloat(demand.demanda.segundo) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[2] = demanda[2] + parseFloat(demand.demanda.tercero) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[3] = demanda[3] + parseFloat(demand.demanda.cuarto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[4] = demanda[4] + parseFloat(demand.demanda.quinto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                    demanda[5] = demanda[5] + parseFloat(demand.demanda.sexto) * parseFloat(platosRequeridos) * cantidadPorPlato;
                }
            });
        });
        return demanda;
    }

    calcularSS() {
        let materials = this.props.materials;
        let insumo = this.state.insumo;

        let ss = [0, 0, 0, 0, 0, 0];

        materials.map((material) => {
            if (material.nombre == insumo) {
                ss[0] = parseFloat(material.ss.primero) / 100;
                ss[1] = parseFloat(material.ss.segundo) / 100;
                ss[2] = parseFloat(material.ss.tercero) / 100;
                ss[2] = parseFloat(material.ss.tercero) / 100;
                ss[3] = parseFloat(material.ss.cuarto) / 100;
                ss[4] = parseFloat(material.ss.quinto) / 100;
                ss[5] = parseFloat(material.ss.sexto) / 100;
            }
        });

        return (ss);
    }

    obtenerCostosAdquirir() {
        let materials = this.props.materials;
        let insumo = this.state.insumo;

        let costos = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        materials.map((material) => {
            if (material.nombre == insumo) {
                costos[0] = parseFloat(material.costos.adquirir.menos2);
                costos[1] = parseFloat(material.costos.adquirir.menos1);
                costos[2] = parseFloat(material.costos.adquirir.cero);
                costos[3] = parseFloat(material.costos.adquirir.primero);
                costos[4] = parseFloat(material.costos.adquirir.segundo);
                costos[5] = parseFloat(material.costos.adquirir.tercero);
                costos[6] = parseFloat(material.costos.adquirir.cuarto);
                costos[7] = parseFloat(material.costos.adquirir.quinto);
                costos[8] = parseFloat(material.costos.adquirir.sexto);
            }
        });

        return costos;
    }

    obtenerCostosMantener() {
        let materials = this.props.materials;
        let insumo = this.state.insumo;

        let costos = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        materials.map((material) => {
            if (material.nombre == insumo) {
                costos[0] = parseFloat(material.costos.mantener.menos2);
                costos[1] = parseFloat(material.costos.mantener.menos1);
                costos[2] = parseFloat(material.costos.mantener.cero);
                costos[3] = parseFloat(material.costos.mantener.primero);
                costos[4] = parseFloat(material.costos.mantener.segundo);
                costos[5] = parseFloat(material.costos.mantener.tercero);
                costos[6] = parseFloat(material.costos.mantener.cuarto);
                costos[7] = parseFloat(material.costos.mantener.quinto);
                costos[8] = parseFloat(material.costos.mantener.sexto);
            }
        });

        return costos;
    }

    obtenerCostosPedir() {

        let materials = this.props.materials;
        let insumo = this.state.insumo;

        let costos = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        materials.map((material) => {
            if (material.nombre == insumo) {
                costos[0] = parseFloat(material.costos.ordenar.menos2);
                costos[1] = parseFloat(material.costos.ordenar.menos1);
                costos[2] = parseFloat(material.costos.ordenar.cero);
                costos[3] = parseFloat(material.costos.ordenar.primero);
                costos[4] = parseFloat(material.costos.ordenar.segundo);
                costos[5] = parseFloat(material.costos.ordenar.tercero);
                costos[6] = parseFloat(material.costos.ordenar.cuarto);
                costos[7] = parseFloat(material.costos.ordenar.quinto);
                costos[8] = parseFloat(material.costos.ordenar.sexto);
            }
        });

        return costos;
    }

    obtenerLeadTime() {
        let materials = this.props.materials;
        let insumo = this.state.insumo;

        let leadTime = 0;
        materials.map((material) => {
            if (material.nombre == insumo) {
                leadTime = parseFloat(material.leadtime);
            }
        });
        return leadTime;
    }
    renderDropdownItems() {
        return this.props.materials.map((d) => {
            return (
                <option key={d.nombre} className="dropdown-item">{d.nombre}</option>
            )
        });
    }

    imprimirPeriodosActuales(periodosActuales) {
        let resp = "";

        periodosActuales.map((d, i) => {
            if (i === 0) {
                resp = resp.concat(d + 1);
            }
            else {
                resp = resp.concat(",", d + 1);
            }
        })

        return resp;
    }

    render() {
        return (
            <div className="card">
                <div className="content">
                    <div className="card-header ">
                        <h4 className="card-title">Programación de los pedidos</h4>
                    </div>
                    <div className="card-body ">
                        <p className="card-category">Esta herramienta permite realizar la programación de los pedidos
                            mensuales del hospital. Para utilizarse, se deben ingresar los diferentes parámetros en las
                            pestañas a mano izquierda. Una vez ingresados se debe escoger la heurística que se quiere seguir.
                            Finalmente, se escoge el insumo para el cual se quiere conocer la forma en que se deben realizar los pedidos.</p>
                    </div>
                    <hr />
                    <div className="card-header ">
                        <h4 className="card-title">Escoge la heurística:</h4>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-2 mx-auto">
                            <input className="btn btn-primary" type="submit" value="PPB" onClick={this.handlePPB} />
                        </div>
                        <div className="col-md-2 mx-auto">
                            <input className="btn btn-primary" type="submit" value="Silver Meal" onClick={this.handleSM} />
                        </div>
                        <div className="col-md-2 mx-auto">
                            <input className="btn btn-primary" type="submit" value="MCU" onClick={this.handleMCU} />
                        </div>
                    </div>
                    <div className="card-header ">
                        <h4 className="card-title">Escoge el insumo:</h4>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-md-2 mx-auto">
                                <form>
                                    <label>
                                        <select className="form-control" onChange={this.onChangeDropdown}>
                                            {
                                                this.renderDropdownItems()
                                            }
                                        </select>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card-header ">
                        <h4 className="card-title">Resultados:</h4>
                    </div>
                    <div className="card-body ">
                        <form>
                            <table className="table table-bordered">
                                <tbody className="">
                                    <tr>
                                        <th>Política</th>
                                        <th colSpan="7" scope="colgroup">{this.state.politica}</th>
                                    </tr>
                                    <tr>
                                        <th>Insumo</th>
                                        <th colSpan="7" scope="colgroup">{this.state.insumo}</th>
                                    </tr>
                                    <tr>
                                        <th>Se pide en</th>
                                        <th>Periodo para los que se pide</th>
                                        <th>Cantidad a pedir</th>
                                        <th>Periodo en el que la orden llega</th>
                                        <th>C. ordenar</th>
                                        <th>C. adquirir</th>
                                        <th>C. mantener</th>
                                        <th>C. Total</th>
                                    </tr>
                                    {
                                        this.renderResults()
                                    }
                                </tbody>
                            </table>
                        </form>
                    </div>
                    <br />
                    <div className="card-body ">
                        <p className="card-category">Las filas resaltadas en amarillo corresponden a la solución.</p>
                    </div>
                </div>
            </div >
        );
    }
}

export default Description;

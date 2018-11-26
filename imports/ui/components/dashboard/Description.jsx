import React, { Component } from "react";

class Description extends Component {

    constructor(props) {
        super(props);

        this.state = {
            politica: "MCU",
            insumo: "Sopa",
            colorear: []
        }

        
        this.onChangeDropdown = this.onChangeDropdown.bind(this);
        this.calcularDemandas = this.calcularDemandas.bind(this);
        this.calcularSS = this.calcularSS.bind(this);
        this.obtenerCostosAdquirir = this.obtenerCostosAdquirir.bind(this);
        this.obtenerCostosPedir = this.obtenerCostosPedir.bind(this);
        this.obtenerLeadTime = this.obtenerLeadTime.bind(this);
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

                if (this.props.policy === "MCU") {
                    let cantidadAPedirPeriodoAnterior = resultadoAnterior.split("$")[2];
                    let costoTotalPeriodoAnterior = resultadoAnterior.split("$")[8];
                    if (costoTotal / cantidadAPedir > costoTotalPeriodoAnterior / cantidadAPedirPeriodoAnterior) {
                        this.props.colorear.push(indice - 1);
                        periodosActuales = [];
                        i--;
                        indice++;
                    }
                }
                else if (this.props.policy === "PPB") {
                    let costoPedirPeriodoAnterior = resultadoAnterior.split("$")[5];
                    let costoMantenerPeriodoAnterior = resultadoAnterior.split("$")[7];
                    if (Math.abs(costoPedir - costoMantener) > Math.abs(costoPedirPeriodoAnterior - costoMantenerPeriodoAnterior)) {
                        periodosActuales = [];
                        this.props.colorear.push(indice - 1);
                        i--;
                        indice ++;
                    }
                }
                else if (this.props.policy === "SM") {
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
                <option key={d.nombre}>{d.nombre}</option>
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
            <div>

                <section className="wrapper style1 special">
                    <div className="container">
                        <header className="major">
                            <h2>Programación de los ingredientes de las recetas</h2>
                            <p>La herramienta de la cafeteria permite a los empleados el hospital tener un manejo de los
                        pedidos mensuales del hospital. Actualmente se tienen los datos del pedido pasado (video). Si desea cambiar algún valor
                      utilice las pestañas de la parte superior de la herramienta para navegar entre los diferentes parámetros para llegar al resultado deseado.
                    En esta pestaña podrá observar la planeación de los diferentes ingredientes a través de 3 herísticas: Silver Meal, MCU y PPB.</p>
                        </header>
                        <div className="12u$">
                                    <div className="select-wrapper">
                                        <select onChange={this.onChangeDropdown}>
                                            {
                                                this.renderDropdownItems()
                                            }
                                        </select>
                                    </div>
                                </div>
                                <br/>
                    </div>
                </section>

                <section id="three" class="wrapper style1">
                    <div class="container">
                        <header class="major special">
                            <h2>Resultados</h2>
                            <p>Los siguientes son los resultados del ingrediente seleccionado, las filas resaltadas muestran la solución</p>
                        </header>
                        <table>
                                <thead>
                                    <tr>
                                        <th>Política</th>
                                        <th colSpan="7" scope="colgroup">{this.props.policy}</th>
                                    </tr>
                                    <tr>
                                        <th>Insumo</th>
                                        <th colSpan="7" scope="colgroup">{this.state.insumo}</th>
                                    </tr>
                                    <tr>
                                        <th>Periodo en que se pide</th>
                                        <th>Periodos para los que se pide</th>
                                        <th>Cantidad a pedir</th>
                                        <th>Periodo en el que llega la orden</th>
                                        <th>Costo de ordenar</th>
                                        <th>Costo de adquirir</th>
                                        <th>Costo de mantener</th>
                                        <th>Costo total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.renderResults()
                                    }
                                </tbody>
                            </table>
                           
                    </div>
                </section>

                
            </div>
        );
    }
}

export default Description;

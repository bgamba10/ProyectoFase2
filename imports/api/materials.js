import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";


export const Materials = new Mongo.Collection("Materials");


if (Meteor.isServer) {
    Meteor.publish("Materials", () => {
        return Materials.find({});
    });
}

Meteor.methods({
    "materials.updateCost"(type, material, period, value) {
        const res = Materials.findOne({nombre: material});
        let costs = res.costos;
        costs[type][period] = value;
        Materials.update(res._id, {
            $set: {costos: costs},
        });
    },
    "materials.updateLT"(material, value) {
        const res = Materials.findOne({nombre: material});
        Materials.update(res._id, {
            $set: {leadtime: value},
        });
    },
    "materials.updateSS"(material, period, value) {
        const res = Materials.findOne({nombre: material});
        let ss = res.ss;
        ss[period] = value;
        Materials.update(res._id, {
            $set: {ss: ss},
        });
    },
    "materials.initialInsert"() {
        data.forEach((item) => {
            Materials.insert(
                item
            );
        })
    }
});

const data = [{ 
    "_id" : "nu33DETcMZptdR8BC", 
    "nombre" : "Sopa", 
    "costos" : {
        "adquirir" : {
            "menos2" : "158", 
            "menos1" : "158", 
            "cero" : "158", 
            "primero" : "158", 
            "segundo" : "158", 
            "tercero" : "158", 
            "cuarto" : "158", 
            "quinto" : "158", 
            "sexto" : "158"
        }, 
        "mantener" : {
            "menos2" : "23.7", 
            "menos1" : "23.7", 
            "cero" : "23.7", 
            "primero" : "23.7", 
            "segundo" : "23.7", 
            "tercero" : "23.7", 
            "cuarto" : "23.7", 
            "quinto" : "23.7", 
            "sexto" : "23.7"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "gWu3yb5erwnnurmzB", 
    "nombre" : "Arroz", 
    "costos" : {
        "adquirir" : {
            "menos2" : "77", 
            "menos1" : "77", 
            "cero" : "77", 
            "primero" : "77", 
            "segundo" : "77", 
            "tercero" : "77", 
            "cuarto" : "77", 
            "quinto" : "77", 
            "sexto" : "77"
        }, 
        "mantener" : {
            "menos2" : "11.55", 
            "menos1" : "11.55", 
            "cero" : "11.55", 
            "primero" : "11.55", 
            "segundo" : "11.55", 
            "tercero" : "11.55", 
            "cuarto" : "11.55", 
            "quinto" : "11.55", 
            "sexto" : "11.55"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "jotvTvvjAyYcigxHu", 
    "nombre" : "Carne", 
    "costos" : {
        "adquirir" : {
            "menos2" : "169", 
            "menos1" : "169", 
            "cero" : "169", 
            "primero" : "169", 
            "segundo" : "169", 
            "tercero" : "169", 
            "cuarto" : "169", 
            "quinto" : "169", 
            "sexto" : "169"
        }, 
        "mantener" : {
            "menos2" : "25.35", 
            "menos1" : "25.35", 
            "cero" : "25.35", 
            "primero" : "25.35", 
            "segundo" : "25.35", 
            "tercero" : "25.35", 
            "cuarto" : "25.35", 
            "quinto" : "25.35", 
            "sexto" : "25.35"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "oKscvdK8ujwxBvuq9", 
    "nombre" : "Agua", 
    "costos" : {
        "adquirir" : {
            "menos2" : "37", 
            "menos1" : "37", 
            "cero" : "37", 
            "primero" : "37", 
            "segundo" : "37", 
            "tercero" : "37", 
            "cuarto" : "37", 
            "quinto" : "37", 
            "sexto" : "37"
        }, 
        "mantener" : {
            "menos2" : "5.85", 
            "menos1" : "5.85", 
            "cero" : "5.85", 
            "primero" : "5.85", 
            "segundo" : "5.85", 
            "tercero" : "5.85", 
            "cuarto" : "5.85", 
            "quinto" : "5.85", 
            "sexto" : "5.85"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "CHqz8sivAaHA4hQYy", 
    "nombre" : "Yogurt griego", 
    "costos" : {
        "adquirir" : {
            "menos2" : "144", 
            "menos1" : "144", 
            "cero" : "144", 
            "primero" : "144", 
            "segundo" : "144", 
            "tercero" : "144", 
            "cuarto" : "144", 
            "quinto" : "144", 
            "sexto" : "144"
        }, 
        "mantener" : {
            "menos2" : "21.6", 
            "menos1" : "21.6", 
            "cero" : "21.6", 
            "primero" : "21.6", 
            "segundo" : "21.6", 
            "tercero" : "21.6", 
            "cuarto" : "21.6", 
            "quinto" : "21.6", 
            "sexto" : "21.6"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "RhWCiRTteXoSDaBHZ", 
    "nombre" : "Gelatina", 
    "costos" : {
        "adquirir" : {
            "menos2" : "110", 
            "menos1" : "110", 
            "cero" : "110", 
            "primero" : "110", 
            "segundo" : "110", 
            "tercero" : "110", 
            "cuarto" : "110", 
            "quinto" : "110", 
            "sexto" : "110"
        }, 
        "mantener" : {
            "menos2" : "16.5", 
            "menos1" : "16.5", 
            "cero" : "16.5", 
            "primero" : "16.5", 
            "segundo" : "16.5", 
            "tercero" : "16.5", 
            "cuarto" : "16.5", 
            "quinto" : "16.5", 
            "sexto" : "16.5"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "ctPCSWRoPfq2zaCQN", 
    "nombre" : "Tomate", 
    "costos" : {
        "adquirir" : {
            "menos2" : "93", 
            "menos1" : "93", 
            "cero" : "93", 
            "primero" : "93", 
            "segundo" : "93", 
            "tercero" : "93", 
            "cuarto" : "93", 
            "quinto" : "93", 
            "sexto" : "93"
        }, 
        "mantener" : {
            "menos2" : "13.95", 
            "menos1" : "13.95", 
            "cero" : "13.95", 
            "primero" : "13.95", 
            "segundo" : "13.95", 
            "tercero" : "13.95", 
            "cuarto" : "13.95", 
            "quinto" : "13.95", 
            "sexto" : "13.95"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "xLbFzwgtd632ehMdK", 
    "nombre" : "Salmón", 
    "costos" : {
        "adquirir" : {
            "menos2" : "197", 
            "menos1" : "197", 
            "cero" : "197", 
            "primero" : "197", 
            "segundo" : "197", 
            "tercero" : "197", 
            "cuarto" : "197", 
            "quinto" : "197", 
            "sexto" : "197"
        }, 
        "mantener" : {
            "menos2" : "29.55", 
            "menos1" : "29.55", 
            "cero" : "29.55", 
            "primero" : "29.55", 
            "segundo" : "29.55", 
            "tercero" : "29.55", 
            "cuarto" : "29.55", 
            "quinto" : "29.55", 
            "sexto" : "29.55"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "fxje3fEDqvzvp5pat", 
    "nombre" : "Verduras", 
    "costos" : {
        "adquirir" : {
            "menos2" : "88", 
            "menos1" : "88", 
            "cero" : "88", 
            "primero" : "88", 
            "segundo" : "88", 
            "tercero" : "88", 
            "cuarto" : "88", 
            "quinto" : "88", 
            "sexto" : "88"
        }, 
        "mantener" : {
            "menos2" : "13.2", 
            "menos1" : "13.2", 
            "cero" : "13.2", 
            "primero" : "13.2", 
            "segundo" : "13.2", 
            "tercero" : "13.2", 
            "cuarto" : "13.2", 
            "quinto" : "13.2", 
            "sexto" : "13.2"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "3AFwxwgnLeEmGxDcv", 
    "nombre" : "Manzana", 
    "costos" : {
        "adquirir" : {
            "menos2" : "174", 
            "menos1" : "174", 
            "cero" : "174", 
            "primero" : "174", 
            "segundo" : "174", 
            "tercero" : "174", 
            "cuarto" : "174", 
            "quinto" : "174", 
            "sexto" : "174"
        }, 
        "mantener" : {
            "menos2" : "26.1", 
            "menos1" : "26.1", 
            "cero" : "26.1", 
            "primero" : "26.1", 
            "segundo" : "26.1", 
            "tercero" : "26.1", 
            "cuarto" : "26.1", 
            "quinto" : "26.1", 
            "sexto" : "26.1"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "atMEqkw5d3ZgSHgQz", 
    "nombre" : "Brócoli", 
    "costos" : {
        "adquirir" : {
            "menos2" : "86", 
            "menos1" : "86", 
            "cero" : "86", 
            "primero" : "86", 
            "segundo" : "86", 
            "tercero" : "86", 
            "cuarto" : "86", 
            "quinto" : "86", 
            "sexto" : "86"
        }, 
        "mantener" : {
            "menos2" : "12.9", 
            "menos1" : "12.9", 
            "cero" : "12.9", 
            "primero" : "12.9", 
            "segundo" : "12.9", 
            "tercero" : "12.9", 
            "cuarto" : "12.9", 
            "quinto" : "12.9", 
            "sexto" : "12.9"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "GW56DiDWZGoQFvBSK", 
    "nombre" : "Huevo", 
    "costos" : {
        "adquirir" : {
            "menos2" : "109", 
            "menos1" : "109", 
            "cero" : "109", 
            "primero" : "109", 
            "segundo" : "109", 
            "tercero" : "109", 
            "cuarto" : "109", 
            "quinto" : "109", 
            "sexto" : "109"
        }, 
        "mantener" : {
            "menos2" : "16.35", 
            "menos1" : "16.35", 
            "cero" : "16.35", 
            "primero" : "16.35", 
            "segundo" : "16.35", 
            "tercero" : "16.35", 
            "cuarto" : "16.35", 
            "quinto" : "16.35", 
            "sexto" : "16.35"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "L4kLhxQnSyxcCSSSn", 
    "nombre" : "Aguacate", 
    "costos" : {
        "adquirir" : {
            "menos2" : "55", 
            "menos1" : "55", 
            "cero" : "55", 
            "primero" : "55", 
            "segundo" : "55", 
            "tercero" : "55", 
            "cuarto" : "55", 
            "quinto" : "55", 
            "sexto" : "55"
        }, 
        "mantener" : {
            "menos2" : "8.25", 
            "menos1" : "8.25", 
            "cero" : "8.25", 
            "primero" : "8.25", 
            "segundo" : "8.25", 
            "tercero" : "8.25", 
            "cuarto" : "8.25", 
            "quinto" : "8.25", 
            "sexto" : "8.25"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "ozZHv2SFvpknA8QZX", 
    "nombre" : "Frutos secos", 
    "costos" : {
        "adquirir" : {
            "menos2" : "200", 
            "menos1" : "200", 
            "cero" : "200", 
            "primero" : "200", 
            "segundo" : "200", 
            "tercero" : "200", 
            "cuarto" : "200", 
            "quinto" : "200", 
            "sexto" : "200"
        }, 
        "mantener" : {
            "menos2" : "30", 
            "menos1" : "30", 
            "cero" : "30", 
            "primero" : "30", 
            "segundo" : "30", 
            "tercero" : "30", 
            "cuarto" : "30", 
            "quinto" : "30", 
            "sexto" : "30"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "GJ4Y8sEHCCrsHx7NR", 
    "nombre" : "Pasta", 
    "costos" : {
        "adquirir" : {
            "menos2" : "62", 
            "menos1" : "62", 
            "cero" : "62", 
            "primero" : "62", 
            "segundo" : "62", 
            "tercero" : "62", 
            "cuarto" : "62", 
            "quinto" : "62", 
            "sexto" : "62"
        }, 
        "mantener" : {
            "menos2" : "9.3", 
            "menos1" : "9.3", 
            "cero" : "9.3", 
            "primero" : "9.3", 
            "segundo" : "9.3", 
            "tercero" : "9.3", 
            "cuarto" : "9.3", 
            "quinto" : "9.3", 
            "sexto" : "9.3"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "RWzWHNx53hFJrbxvM", 
    "nombre" : "Cereal", 
    "costos" : {
        "adquirir" : {
            "menos2" : "55", 
            "menos1" : "55", 
            "cero" : "55", 
            "primero" : "55", 
            "segundo" : "55", 
            "tercero" : "55", 
            "cuarto" : "55", 
            "quinto" : "55", 
            "sexto" : "55"
        }, 
        "mantener" : {
            "menos2" : "8.25", 
            "menos1" : "8.25", 
            "cero" : "8.25", 
            "primero" : "8.25", 
            "segundo" : "8.25", 
            "tercero" : "8.25", 
            "cuarto" : "8.25", 
            "quinto" : "8.25", 
            "sexto" : "8.25"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "GorGgJpTpLYfjWC9S", 
    "nombre" : "Leche", 
    "costos" : {
        "adquirir" : {
            "menos2" : "91", 
            "menos1" : "91", 
            "cero" : "91", 
            "primero" : "91", 
            "segundo" : "91", 
            "tercero" : "91", 
            "cuarto" : "91", 
            "quinto" : "91", 
            "sexto" : "91"
        }, 
        "mantener" : {
            "menos2" : "13.65", 
            "menos1" : "13.65", 
            "cero" : "13.65", 
            "primero" : "13.65", 
            "segundo" : "13.65", 
            "tercero" : "13.65", 
            "cuarto" : "13.65", 
            "quinto" : "13.65", 
            "sexto" : "13.65"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "TQ8zdRkMRtMvamxmZ", 
    "nombre" : "Pollo", 
    "costos" : {
        "adquirir" : {
            "menos2" : "104", 
            "menos1" : "104", 
            "cero" : "104", 
            "primero" : "104", 
            "segundo" : "104", 
            "tercero" : "104", 
            "cuarto" : "104", 
            "quinto" : "104", 
            "sexto" : "104"
        }, 
        "mantener" : {
            "menos2" : "15.6", 
            "menos1" : "15.6", 
            "cero" : "15.6", 
            "primero" : "15.6", 
            "segundo" : "15.6", 
            "tercero" : "15.6", 
            "cuarto" : "15.6", 
            "quinto" : "15.6", 
            "sexto" : "15.6"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
},
{ 
    "_id" : "syoY9geYxebiwrZof", 
    "nombre" : "Compota de frutas", 
    "costos" : {
        "adquirir" : {
            "menos2" : "145", 
            "menos1" : "145", 
            "cero" : "145", 
            "primero" : "145", 
            "segundo" : "145", 
            "tercero" : "145", 
            "cuarto" : "145", 
            "quinto" : "145", 
            "sexto" : "145"
        }, 
        "mantener" : {
            "menos2" : "21.75", 
            "menos1" : "21.75", 
            "cero" : "21.75", 
            "primero" : "21.75", 
            "segundo" : "21.75", 
            "tercero" : "21.75", 
            "cuarto" : "21.75", 
            "quinto" : "21.75", 
            "sexto" : "21.75"
        }, 
        "ordenar" : {
            "menos2" : "23000", 
            "menos1" : "23000", 
            "cero" : "23000", 
            "primero" : "23000", 
            "segundo" : "23000", 
            "tercero" : "23000", 
            "cuarto" : "23000", 
            "quinto" : "23000", 
            "sexto" : "23000"
        }
    }, 
    "ss" : {
        "primero" : "10", 
        "segundo" : "10", 
        "tercero" : "10", 
        "cuarto" : "10", 
        "quinto" : "10", 
        "sexto" : "10"
    }, 
    "leadtime" : "0"
}
]

import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";


export const Demand = new Mongo.Collection("Demand");


if (Meteor.isServer) {
    Meteor.publish("Demand", () => {
        return Demand.find({});
    });
}

Meteor.methods({
    "demand.update"(type, period, amount) {
        const res = Demand.findOne({ tipo: type });
        let demand = res.demanda;
        demand[period] = amount;
        Demand.update(res._id, {
            $set: { demanda: demand },
        });
    },
    "demand.initialInsert"() {
        data.forEach((demand) => {
            Demand.insert(demand)
        })
    }
});

const data = [{
    "_id": "cmXzE5RZeEk2BrF9F",
    "tipo": "Estéticas",
    "demanda": {
        "primero": "719",
        "segundo": "726",
        "tercero": "795",
        "cuarto": "706",
        "quinto": "694",
        "sexto": "684"
    }
},
{
    "_id": "i6cLSWyx6Ha3rkPyN",
    "tipo": "Cardiacas",
    "demanda": {
        "primero": "278",
        "segundo": "281",
        "tercero": "273",
        "cuarto": "273",
        "quinto": "269",
        "sexto": "265"
    }
},
{
    "_id": "Noiiob4atW5AmowRR",
    "tipo": "Respiratorias",
    "demanda": {
        "primero": "394",
        "segundo": "398",
        "tercero": "387",
        "cuarto": "387",
        "quinto": "381",
        "sexto": "375"
    }
},
{
    "_id": "2gpAWt8Kwcr4hyMha",
    "tipo": "Ortopédicas",
    "demanda": {
        "primero": "487",
        "segundo": "492",
        "tercero": "478",
        "cuarto": "478",
        "quinto": "470",
        "sexto": "464"
    }
},
{
    "_id": "f3XZnHCwp48cFyBRe",
    "tipo": "Neurológicas",
    "demanda": {
        "primero": "232",
        "segundo": "234",
        "tercero": "228",
        "cuarto": "228",
        "quinto": "224",
        "sexto": "221"
    }
},
{
    "_id": "wkHW8fWZLvzuG2W46",
    "tipo": "Pediátricas",
    "demanda": {
        "primero": "209",
        "segundo": "211",
        "tercero": "205",
        "cuarto": "205",
        "quinto": "202",
        "sexto": "199"
    }
}

]
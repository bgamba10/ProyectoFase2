import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";


export const Recipes = new Mongo.Collection("Recipes");


if (Meteor.isServer) {
    Meteor.publish("Recipes", () => {
        return Recipes.find({});
    });
}

Meteor.methods({
    "recipes.updateIngredients"(name, ingredient, value) {
        const res = Recipes.findOne({ nombre: name });
        res[ingredient] = value;
        Recipes.update({ nombre: name }, res)
    },
    "recipes.updateQuantity"(name, value) {
        const res = Recipes.findOne({ nombre: name });
        Recipes.update(res._id, {
            $set: { cantidad: value },
        });
    },
    "recipes.initialInsert"() {
        data.forEach((recipe) => {
            Recipes.insert(
                recipe
            )
        })
    }
});

const data = [{
    "_id": "uCX3DWEDivBnaHEXK",
    "nombre": "Sana",
    "cantidad": "3",
    "Sopa": "1",
    "Arroz": "1",
    "Carne": "1",
    "Agua": "1",
    "Yogurt griego": "1",
    "Gelatina": "1",
    "Tomate": "0",
    "Salmón": "0",
    "Verduras": "0",
    "Manzana": "0",
    "Brócoli": "0",
    "Huevo": "0",
    "Aguacate": "0",
    "Frutos secos": "0",
    "Pasta": "0",
    "Cereal": "0",
    "Leche": "0",
    "Pollo": "0",
    "Compota de frutas": "0"
},
{
    "_id": "8Ky6aFXrJdiJTukZD",
    "nombre": "Calorías y proteínas",
    "cantidad": "7",
    "Sopa": "0",
    "Arroz": "0",
    "Carne": "0",
    "Agua": "0",
    "Yogurt griego": "1",
    "Gelatina": "0",
    "Tomate": "0",
    "Salmón": "1",
    "Verduras": "1",
    "Manzana": "1",
    "Brócoli": "0",
    "Huevo": "0",
    "Aguacate": "0",
    "Frutos secos": "0",
    "Pasta": "0",
    "Cereal": "0",
    "Leche": "0",
    "Pollo": "0",
    "Compota de frutas": "0"
},
{
    "_id": "4kK27cjp78FQP5k3c",
    "nombre": "Vitaminas y proteínas",
    "cantidad": "7",
    "Sopa": "0",
    "Arroz": "0",
    "Carne": "0",
    "Agua": "1",
    "Yogurt griego": "0",
    "Gelatina": "0",
    "Tomate": "1",
    "Salmón": "1",
    "Verduras": "0",
    "Manzana": "0",
    "Brócoli": "1",
    "Huevo": "2",
    "Aguacate": "0",
    "Frutos secos": "0",
    "Pasta": "0",
    "Cereal": "0",
    "Leche": "0",
    "Pollo": "0",
    "Compota de frutas": "0"
},
{
    "_id": "hr5PnNhhcsTyhXdtg",
    "nombre": "Balanceada",
    "cantidad": "2",
    "Sopa": "0",
    "Arroz": "0",
    "Carne": "1",
    "Agua": "0",
    "Yogurt griego": "0",
    "Gelatina": "0",
    "Tomate": "0",
    "Salmón": "0",
    "Verduras": "0",
    "Manzana": "0",
    "Brócoli": "0",
    "Huevo": "2",
    "Aguacate": "0",
    "Frutos secos": "0",
    "Pasta": "1",
    "Cereal": "1",
    "Leche": "1",
    "Pollo": "0",
    "Compota de frutas": "0"
},
{
    "_id": "rn4BhDQ3dhNaPmC5r",
    "nombre": "Variada",
    "cantidad": "3",
    "Sopa": "0",
    "Arroz": "0",
    "Carne": "0",
    "Agua": "0",
    "Yogurt griego": "0",
    "Gelatina": "0",
    "Tomate": "0",
    "Salmón": "0",
    "Verduras": "0",
    "Manzana": "0",
    "Brócoli": "0",
    "Huevo": "2",
    "Aguacate": "0.5",
    "Frutos secos": "1",
    "Pasta": "1",
    "Cereal": "0",
    "Leche": "0",
    "Pollo": "1",
    "Compota de frutas": "0"
},
{
    "_id": "jCQGLcyAs4iB4s8MY",
    "nombre": "Básica",
    "cantidad": "9",
    "Sopa": "0",
    "Arroz": "0",
    "Carne": "0",
    "Agua": "1",
    "Yogurt griego": "0",
    "Gelatina": "1",
    "Tomate": "0",
    "Salmón": "0",
    "Verduras": "0",
    "Manzana": "0",
    "Brócoli": "0",
    "Huevo": "0",
    "Aguacate": "0",
    "Frutos secos": "0",
    "Pasta": "0",
    "Cereal": "0",
    "Leche": "0",
    "Pollo": "0",
    "Compota de frutas": "1"
}
]
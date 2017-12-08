/**
 * Module BDD
 * @fileOverview Module de création de la BDD
 * @author Ismael Hadj-Arab
 * @author Florian Martines
 * @author Cyril Vella
 *
 * @requires NPM:mongoose
 *
 *
 * @module bdd
 * @see app/core/bdd
 */

const mongoose = require("mongoose");

let OrderModel;
let OrderlineModel;
let ProductModel;

/**
 * Fonction gérant la connection à la BDD
 * @param {any} callback Callbakc de la fontion de connectoin à la BDD
 */
function ConnectDB(callback) {
  mongoose.connect("mongodb://127.0.0.1/dbcommerce", { useMongoClient: true }, (err) => {
    if (err) {
      throw err;
    }

    const OrderSchema = new mongoose.Schema({
      code: String,
      date: Date,
      total: Number,
      Status: String,
    });

    const OrderlineSchema = new mongoose.Schema({
      product: Number,
      order: Number,
      quantity: Number,
    });


    const ProductSchema = new mongoose.Schema({
      name: String,
      Price: Number,
    });

    OrderModel = mongoose.model("Order", OrderSchema);
    OrderlineModel = mongoose.model("Orderline", OrderlineSchema);
    ProductModel = mongoose.model("Product", ProductSchema);

    callback();
  });
}

/** Export de la fonction de connection à la BDD et des Models OrderModel, OrderlineModel, ProductModel */
export { ConnectDB, OrderModel, OrderlineModel, ProductModel };

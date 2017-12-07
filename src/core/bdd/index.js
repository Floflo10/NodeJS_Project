const mongoose = require('mongoose');
let OrderModel;
let OrderlineModel;
let ProductModel;

/*
* Ici, nous avons la connexion à la base de données MongoDB avec la création des schémas (tables).
* @summary Connexion à la base de données MongoDB.
*
* @author HADJ ISMAEL <ismael.hadjarab@ynov.com - VELLA CYRIL <cyril.vella@ynov.com - MARTINES FLORIAN <florian.martines@ynov.com>
* @copyright VELLA CYRIL - HADJ ISMAEL - MARTINES FLORIAN - 2017
*/

/*
* @function connexion
*/
function ConnectDB(callback)
{
  mongoose.connect('mongodb://127.0.0.1/dbcommerce', {useMongoClient: true}, (err) =>{

    if(err)
    {
      throw err;
    }

    const OrderSchema = new mongoose.Schema({
      code: String,
      date: Date,
      total: Number,
      Status: String
    });

    const OrderlineSchema = new mongoose.Schema({
      product: Number,
      order: Number,
      quantity: Number
    });


    const ProductSchema = new mongoose.Schema({
      name: String,
      Price: Number
    });

     OrderModel = mongoose.model('Order', OrderSchema);
     OrderlineModel = mongoose.model('Orderline', OrderlineSchema);
     ProductModel = mongoose.model('Product', ProductSchema);

     callback();
   });
}

/**
 * Export fonction de routage URL
 * @module ConnectDB, OrderModel, ProductModel
 */

export {ConnectDB, OrderModel, OrderlineModel, ProductModel};
